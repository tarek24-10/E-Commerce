namespace Core.Interfaces
{
    public interface IResponceCacheService
    {
        Task CacheResponceAsync(string cacheKey, object response, TimeSpan timeToLive);
        Task<string?> GetCachedResponceAsync(string cacheKey);
        Task RemoveCachedByPatternAsync(string pattern);
    }
}
