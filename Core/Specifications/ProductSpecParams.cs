namespace Core.Specifications
{
    public class ProductSpecParams
    {
        private int MaxPagesize = 50;

        public int PageIndex { get; set; } = 1;

        private int _pageSize = 6;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (_pageSize > MaxPagesize) ? MaxPagesize : value;
        }


        public List<string> _brands = [];
        public List<string> Brands
        {
            get => _brands;
            set => _brands = value.SelectMany(b => b.Split(",", StringSplitOptions.RemoveEmptyEntries)).ToList();
        }

        public List<string> _types = [];
        public List<string> Types
        {
            get => _types;
            set => _types = value.SelectMany(b => b.Split(",", StringSplitOptions.RemoveEmptyEntries)).ToList();
        }

        public string? Sort { get; set;  }

        private string? _search;
        public string Search
        {
            get => _search ?? "";
            set => _search = value.ToLower();
        }
    }
}
