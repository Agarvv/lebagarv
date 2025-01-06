namespace lebagarv.Infrastructure.Persistence.Repositories.Cars; 

using lebagarv.Core.Domain.Entities.Cars; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public interface ICarRepository : IRepository<Car> 
{
   Task<IEnumerable<Car>> GetAllCarsAsync(); 
   Task<IEnumerable<Car>> GetCarsByUserIdAsync(int userId); 
   Task<IEnumerable<Car>> SearchCarsAsync(string query); 
   Task<Car> GetCarByIdAsync(int id);
   Task<bool> ExistsCarById(int id);
   Task<bool> ExistsCarColorById(int id); 
   Task<bool> ExistsCarBrandById(int id); 
   Task<bool> IsFavoriteAsync(int userId, int carId);
}