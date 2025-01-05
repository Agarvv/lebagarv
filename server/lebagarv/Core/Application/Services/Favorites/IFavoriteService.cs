namespace lebagarv.Core.Application.Services.Favorites
{
    using lebagarv.Core.Domain.Entities.Favorites;
    public interface IFavoriteService
    {
        Task<List<Favorites>> GetUserFavoritesAsync(int userId); 
        Task<string> AddFavoriteAsync(int userId, int productId);
    }
}