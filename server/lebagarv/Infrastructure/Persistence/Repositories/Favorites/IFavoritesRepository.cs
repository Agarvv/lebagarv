namespace lebagarv.Infrastructure.Persistence.Repositories.Favorites
{
    using lebagarv.Core.Domain.Entities.Favorites; 
    using lebagarv.Infrastructure.Persistence.Repositories; 

    public interface IFavoritesRepository : IRepository<Favorites>
    {
        Task<IEnumerable<Favorites>> GetUserFavoritesAsync(int userId); 
        Task<bool> ExistsByProductIdAsync(int productId); 
    }
}