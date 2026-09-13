namespace Core.Specifications
{
    public class PagingParams
    {
        private int MaxPagesize = 50;

        public int PageNumber { get; set; } = 1;

        private int _pageSize = 6;
        public int PageSize
        {
            get => _pageSize;
            set => _pageSize = (_pageSize > MaxPagesize) ? MaxPagesize : value;
        }
    }
}
