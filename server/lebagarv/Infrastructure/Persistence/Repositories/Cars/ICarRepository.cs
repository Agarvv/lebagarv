namespace lebagarv.Infrastructure.Persistence.Repositories.Cars; 

using lebagarv.Core.Domain.Entities.Cars; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public interface ICarRepository : IRepository<Car> 
{
   Task<bool> ExistsCarColorById(int id); 
   Task<bool> ExistsCarBrandById(int id); 
   
}