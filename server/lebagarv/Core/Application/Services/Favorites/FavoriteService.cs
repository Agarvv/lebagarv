namespace lebagarv.Core.Application.Services.Favorites
{
    using lebagarv.Core.Domain.Entities.Favorites;
    using lebagarv.Infrastructure.Persistence.Repositories.Favorites;
    using lebagarv.Infrastructure.Persistence.Repositories.Cars;
    using lebagarv.Core.Domain.Exceptions;
    public class FavoriteService : IFavoriteService
    {
        private readonly IFavoritesRepository _favoritesRepository;
        private readonly ICarRepository _carRepository;

        public FavoriteService(IFavoritesRepository favoritesRepository, ICarRepository carRepository)
        {
            _favoritesRepository = favoritesRepository;
            _carRepository = carRepository;
        }
        public async Task<IEnumerable<Favorites>> GetUserFavoritesAsync(int userId)
        {
            var favorites = await _favoritesRepository.GetUserFavoritesAsync(userId);
            return favorites; 
        }

        public async Task<string> AddFavoriteAsync(int userId, int productId)
        {
            if(!await _carRepository.ExistsCarById(productId))
            {
                throw new LebagarvException("Car not found", 404);
            }

            if(await _favoritesRepository.ExistsByProductIdAsync(productId))
            {
                await _favoritesRepository.DeleteFavoriteAsync(productId);
                return "Favorite removed"; 
            }

            var favorite = new Favorites
            {
                UserId = userId,
                ProductId = productId
            };

            await _favoritesRepository.AddAsync(favorite);

            return "Favorite added"; 
        }
    }
}