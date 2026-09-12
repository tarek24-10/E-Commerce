using Core.Entities;
using Core.Interfaces;
using System.Collections.Concurrent;

namespace Infrastructure.Data
{
    public class UnitOfWork(StoreContext context) : IUnitOfWork
    {
        private readonly ConcurrentDictionary<string, object> _repositories = new();

        public async Task<bool> CompleteAsync()
        {
           return await context.SaveChangesAsync() > 0;
        }

        public void Dispose()
        {
            context.Dispose();
        }

        public IGenenricRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            var type = typeof(TEntity).Name;

            return (IGenenricRepository<TEntity>)_repositories.GetOrAdd(type, t => new GenericRepository<TEntity>(context));
        }
    }
}
