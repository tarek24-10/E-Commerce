using API.DTOs;
using API.Extensions;
using API.RequestHelpers;
using Core.Entities.OrderAggregate;
using Core.Interfaces;
using Core.Specifications;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Authorize(Roles = "Admin")]
    public class AdminController(IUnitOfWork unit) : BaseApiController
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
    }
}
