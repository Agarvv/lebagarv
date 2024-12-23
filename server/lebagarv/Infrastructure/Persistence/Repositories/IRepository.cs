namespace lebagarv.Infrastructure.Persistence.Repositories; 

public interface IRepository<T> where T : class
{
    Task<T> GetByIdAsync(int id);
    Task AddAsync(T entity);
    Task DeleteAsync(int id);
    Task<IEnumerable<T>> GetAllAsync();
}