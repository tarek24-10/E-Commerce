using Core.Interfaces;
using StackExchange.Redis;
using System.Text.Json;

namespace Infrastructure.Services
{
    public class ResponceCacheService(IConnectionMultiplexer redis) : IResponceCacheService
    {
        private readonly IDatabase _database = redis.GetDatabase(1);
        public async Task CacheResponceAsync(string cacheKey, object response, TimeSpan timeToLive)
        {
            var options = new JsonSerializerOptions{PropertyNamingPolicy = JsonNamingPolicy.CamelCase};
            var serializedResponse = JsonSerializer.Serialize(response, options);
            await _database.StringSetAsync(cacheKey, serializedResponse, timeToLive);
        }

        public async Task<string?> GetCachedResponceAsync(string cacheKey)
        {
            var cachedResponse = await _database.StringGetAsync(cacheKey);
            if (cachedResponse.IsNullOrEmpty) return null;

            return cachedResponse;
        }

        public async Task RemoveCachedByPatternAsync(string pattern)
        {
        }
    }
}

