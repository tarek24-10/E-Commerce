using Core.Entities;

namespace Core.Interfaces
{
    public interface IGenenricRepository<T> where T : BaseEntity
    {
        Task<T?> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> ListAllAsync();
        Task<T?> GetEntityWithSpecAsync(ISpecification<T> spec);
        Task<IReadOnlyList<T>> ListAllWithSpecAsync(ISpecification<T> spec);
        Task<TResult?> GetEntityWithSpecAsync<TResult>(ISpecification<T, TResult> spec);
        Task<IReadOnlyList<TResult>> ListAllWithSpecAsync<TResult>(ISpecification<T, TResult> spec);
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        Task<bool> SaveChangesAsync();
        Task<bool> ExistsAsync(int id);
    }
}
