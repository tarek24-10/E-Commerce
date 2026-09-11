namespace Core.Entities.OrderAggregate
{
    public class ProductItemordered
    {
        public int ProductId { get; set; }
        public required string ProductName { get; set; }
        public required string PictureUrl { get; set; }
    }
}
