using API.DTOs;
using API.Extensions;
using API.RequestHelpers;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using Infrastructure.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController(IUnitOfWork unit, IPaymentService paymentService) : BaseApiController
    {
        [HttpGet("orders")]
        public async Task<ActionResult> GetOrders([FromQuery] OrderSpecParams specParams)
        {
            var spec = new OrderSpecification(specParams);
            return await CreatePagedResult<Order, OrderDto>(unit.Repository<Order>(), spec, 
                specParams.PageNumber, specParams.PageSize, o => o.MapToOrderDto());
        }

        [HttpGet("orders/{id:int}")]
        public async Task<ActionResult<OrderDto>> GetOrder(int id)
        {
            var spec = new OrderSpecification(id);
            var order = await unit.Repository<Order>().GetEntityWithSpecAsync(spec);
            if (order == null) return BadRequest("No order with that id");

            return Ok(order.MapToOrderDto());
        }

        [HttpPost("orders/refund/{{id:int}}")]
        public async Task<ActionResult<OrderDto>> RefundOrder(int id)
        {
            var spec = new OrderSpecification(id);
            var order = await unit.Repository<Order>().GetEntityWithSpecAsync(spec);
            if (order == null) return BadRequest("No order with that id");

            if(order.Status == OrderStatus.Pending)
            {
                return BadRequest("Payment not received for this order");
            }

            var refundStatus = await paymentService.RefundPayment(order.PaymentIntentId);
            if(refundStatus == "succeeded")
            {
                order.Status = OrderStatus.Refunded;
                await unit.CompleteAsync();
                return Ok(order.MapToOrderDto());
            }

            return BadRequest("problem refunding order");
        }
    }
}
