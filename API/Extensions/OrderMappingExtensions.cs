using API.DTOs;
using Core.Entities.OrderAggregate;

namespace API.Extensions
{
    public static class OrderMappingExtensions
    {
        public static OrderDto MapToOrderDto(this Order order)
        {
            return new OrderDto
            {
                Id = order.Id,
                OrderDate = order.OrderDate,
                BuyerEmail = order.BuyerEmail,
                ShippingAddress = order.ShippingAddress,
                DeliveryMethod = order.DeliveryMethod.ShortName,
                PaymentSummary = order.PaymentSummary,
                OrderItems = order.OrderItems.Select(item => item.MapToOrderItemDto()).ToList(),
                Subtotal = order.Subtotal,
                Total = order.GetTotal(),
                ShippingPrice = order.DeliveryMethod.Price,
                Status = order.Status.ToString(),
                PaymentIntentId = order.PaymentIntentId
            };
        }

        public static OrderItemDto MapToOrderItemDto(this OrderItem orderItem)
        {
            return new OrderItemDto
            {
                ProductId = orderItem.ItemOrdered.ProductId,
                ProductName = orderItem.ItemOrdered.ProductName,
                PictureUrl = orderItem.ItemOrdered.PictureUrl,
                Price = orderItem.Price,
                Quantity = orderItem.Quantity
            };
        }
    }
}
