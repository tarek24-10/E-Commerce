using Core.Entities;

namespace Core.Specifications
{
    public class ProductSpecification : BaseSpecification<Product>
    {
        public ProductSpecification(ProductSpecParams specParams) : base( p => 
                        (specParams.Brands.Count == 0 || specParams.Brands.Contains(p.Brand)) &&
                        (specParams.Types.Count == 0 || specParams.Types.Contains(p.Type))
            )
        {
                switch (specParams.Sort)
                {
                    case "priceAsc":
                        AddOrderBy(p => p.Price);
                        break;
                    case "priceDesc":
                        AddOrderByDescending(p => p.Price);
                        break;
                    default:
                        AddOrderBy(p => p.Name);
                        break;
            }
        }
    }
}
