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
            return await CreatePagedResult<Order>(unit.Repository<Order>(), spec, 
                specParams.PageNumber, specParams.PageSize);
        }
    }
}
