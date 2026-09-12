using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrderSpecification : BaseSpecification<Order>
    {
        public OrderSpecification(string email) : base(o => o.BuyerEmail == email){}
        public OrderSpecification(string email, int id) : base(o => o.BuyerEmail == email && o.Id == id){}
    }
}
