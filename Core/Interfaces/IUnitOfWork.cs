using Core.Entities;

namespace Core.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IGenenricRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;
        Task<bool> CompleteAsync();
    }
}
