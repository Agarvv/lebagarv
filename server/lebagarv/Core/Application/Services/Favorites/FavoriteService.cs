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

        public async Task<string> AddFavoriteAsync(int userId, int carId)
        {
            if(!await _carRepository.ExistsCarById(carId))
            {
                throw new LebagarvException("Car not found", 404);
            }

            if(await _favoritesRepository.ExistsByCarIdAsync(carId))
            {
                await _favoritesRepository.DeleteFavoriteAsync(userId, carId);
                return "Favorite removed";  // message
            }

            var favorite = new Favorites
            {
                UserId = userId,
                CarId = carId
            };

            await _favoritesRepository.AddAsync(favorite);

            return "Favorite added"; 
        }
    }
}