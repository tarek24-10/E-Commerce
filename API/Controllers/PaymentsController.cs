using API.Extensions;
using API.SignalR;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Stripe;

namespace API.Controllers
{
    public class PaymentsController(IPaymentService paymentService,
        IUnitOfWork unit, ILogger<PaymentsController> logger, IConfiguration config,
        IHubContext<NotificationHub> hubContext) : BaseApiController
    {
        private readonly string _whSecret = config["StripeSettings:WhSecret"]!;

        [Authorize]
        [HttpPost("{cartId}")]

        public async Task<ActionResult<ShoppingCart>> CreateOrUpdatePaymentIntent(string cartId)
        {
            var cart = await paymentService.CreateOrUpdatePaymentIntent(cartId);
            if (cart == null) return BadRequest("Problem with your cart");

            return Ok(cart);
        }

        [HttpGet("delivery-methods")]
        public async Task<ActionResult<IReadOnlyList<DeliveryMethod>>> GetDeliveryMethods()
        {
            return Ok(await unit.Repository<DeliveryMethod>().ListAllAsync());
        }

        [HttpPost("webhook")]
        public async Task<IActionResult> StripeWebhook()
        {
            var json = await new StreamReader(Request.Body).ReadToEndAsync();
            try
            {
                var stripeEvent = ConstructStripeEvent(json);
                if(stripeEvent.Data.Object is not PaymentIntent intent)
                {
                    return BadRequest("Invalid event data");
                }

                await HandlePaymentIntenetSucceeded(intent);
                return Ok();
            }
            catch (StripeException ex)
            {
                logger.LogError("Stripe Webhook Error");
                return StatusCode(StatusCodes.Status500InternalServerError, "Stripe Webhook Error");
            }

            catch (Exception ex)
            {
                logger.LogError(ex,"Error processing stripe payment intent succeeded");
                return StatusCode(StatusCodes.Status500InternalServerError, "Error processing stripe payment intent succeeded");
            }
        }

        private async Task HandlePaymentIntenetSucceeded(PaymentIntent intent)
        {
            if (intent.Status == "succeeded")
            {
                var spec = new OrderSpecification(intent.Id, true);
                var order = await unit.Repository<Order>().GetEntityWithSpecAsync(spec)
                    ?? throw new Exception($"Order not found");
                if(order.GetTotal() != intent.Amount / 100m)
                {
                    order.Status = OrderStatus.PaymentMismatch;
                }
                else
                {
                    order.Status = OrderStatus.PaymentReceived;
                }

                await unit.CompleteAsync();

                var connectionId = NotificationHub.GetConnectionIdByEmail(order.BuyerEmail);

                if (!string.IsNullOrEmpty(connectionId))
                {
                    await hubContext.Clients.Client(connectionId).SendAsync("OrderCompleteNotification", order.MapToOrderDto());
                }

            }
        }

        private Event ConstructStripeEvent(string json)
        {
            try
            {
                return Stripe.EventUtility.ConstructEvent(json, Request.Headers["Stripe-Signature"], _whSecret);

            }
            catch (Exception ex)
            {
                logger.LogError(ex, "Failed to construct a Stripe event");
                throw new StripeException("Invalid signature");
            }
        }
    }
}
