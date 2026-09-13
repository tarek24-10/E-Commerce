using Core.Entities.OrderAggregate;

namespace Core.Specifications
{
    public class OrderSpecification : BaseSpecification<Order>
    {
        public OrderSpecification(string email) : base(o => o.BuyerEmail == email){
            AddInclude(o => o.OrderItems);
            AddInclude(o => o.DeliveryMethod);
            AddOrderByDescending(o => o.OrderDate);
        }
        public OrderSpecification(string email, int id) : base(o => o.BuyerEmail == email && o.Id == id){
            AddInclude("OrderItems");
            AddInclude("DeliveryMethod");
        }

        public OrderSpecification(string paymentIntentId, bool isPaymentIntent) : base(o => o.PaymentIntentId == paymentIntentId)
        {
            AddInclude("OrderItems");
            AddInclude("DeliveryMethod");
        }

        public OrderSpecification(OrderSpecParams specParams) 
            : base(o => string.IsNullOrEmpty(specParams.Status) || o.Status == ParseStatus(specParams.Status))
        {
            AddInclude("OrderItems");
            AddInclude("DeliveryMethod");
            ApplyPagination(specParams.PageSize * (specParams.PageNumber - 1), specParams.PageSize);
            AddOrderByDescending(o => o.OrderDate);
        }

        private static OrderStatus? ParseStatus(string status)
        {
            if (Enum.TryParse<OrderStatus>(status, true, out var result))
                return result;
            return null;
        }

        public OrderSpecification(int id) : base(o => o.Id == id)
        {
            AddInclude("OrderItems");
            AddInclude("DeliveryMethod");
        }
    }
}
