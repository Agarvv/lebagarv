namespace lebagarv.Infrastructure.Persistence.Repositories.Favorites
{
    using lebagarv.Core.Domain.Entities.Favorites; 
    using lebagarv.Infrastructure.Persistence.Repositories; 

    public interface IFavoritesRepository : IRepository<Favorites>
    {
        Task<IEnumerable<Favorites>> GetUserFavoritesAsync(int userId); 
        
        Task DeleteFavoriteAsync(int userId, int carId); 
        
        Task<bool> ExistsByCarIdAndUserId(int carId, int userId); 

    }
}