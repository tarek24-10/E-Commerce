using Core.Entities;

namespace Core.Interfaces
{
    public interface IGenenricRepository<T> where T : BaseEntity
    {
        Task<T?> GetByIdAsync(int id);
        Task<IReadOnlyList<T>> GetAllAsync();
        void Add(T entity);
        void Delete(T entity);
        void Update(T entity);
        Task<bool> SaveChangesAsync();
        Task<bool> ExistsAsync(int id);
    }
}
