using API.DTOs;
using API.Extensions;
using Core.Entities;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize]
    public class OrdersController(ICartService cartService, IUnitOfWork unit) : BaseApiController
    {
        [HttpPost]
        public async Task<ActionResult<Order>> CreateOrder(CreateOrderDto orderDto)
        {
            var email = User.GetEmail();

            var cart = await cartService.GetCartAsync(orderDto.CartId);
            if (cart == null) return BadRequest("Cart not found");
            if(cart.PaymentIntentId == null) return BadRequest("No payment intent for this order");

            var items = new List<OrderItem>();
            foreach (var item in cart.Items)
            {
                var productItem = await unit.Repository<Product>().GetByIdAsync(item.ProductId);
                if (productItem == null) return BadRequest("Problem with the order");
                var itemOrdered = new ProductItemOrdered()
                {
                    ProductId = productItem.Id,
                    ProductName = productItem.Name,
                    PictureUrl = productItem.PictureUrl
                };
                var orderItem = new OrderItem()
                {
                    ItemOrdered = itemOrdered,
                    Price = productItem.Price,
                    Quantity = item.Quantity
                };
                items.Add(orderItem);
            }

            var deliveryMethod = await unit.Repository<DeliveryMethod>().GetByIdAsync(orderDto.DeliveryMethodId);
            if (deliveryMethod == null) return BadRequest("No delivery method Selected");

            var order = new Order()
            {
                BuyerEmail = email,
                ShippingAddress = orderDto.ShippingAddress,
                DeliveryMethod = deliveryMethod,
                PaymentSummary = orderDto.PaymentSummary,
                OrderItems = items,
                Subtotal = items.Sum(i => i.Price * i.Quantity),
                PaymentIntentId = cart.PaymentIntentId
            };

            unit.Repository<Order>().Add(order);

            if (await unit.CompleteAsync())
            {
                return Ok(order);
            }
            return BadRequest("Problem creating order");
        }

        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<OrderDto>>> GetOrdersForUser()
        {
            var email = User.GetEmail();
            var spec = new OrderSpecification(email);
            var orders = await unit.Repository<Order>().ListAllWithSpecAsync(spec);
            var ordersToReturn = orders.Select(o => o.MapToOrderDto()).ToList();
            return Ok(ordersToReturn);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDto>> GetOrderById(int id)
        {
            var email = User.GetEmail();
            var spec = new OrderSpecification(email, id);
            var order = await unit.Repository<Order>().GetEntityWithSpecAsync(spec);
            if (order == null) return NotFound();
            return order.MapToOrderDto();
        }
    }
}
