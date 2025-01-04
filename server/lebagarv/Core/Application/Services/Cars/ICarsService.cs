namespace lebagarv.Application.Services.Cars; 
using lebagarv.Presentation.Models.Requests.Cars;
using lebagarv.Core.Domain.Dto.Cars;
using lebagarv.Core.Domain.Entities.Cars;

public interface ICarsService 
{
    public Task<IEnumerable<Car>> GetCarsAsync();
    public Task<IEnumerable<Car>> GetCarsByUserIdAsync(int userId); 
    public Task<bool> CreateCarAsync(CreateCarRequest request); 
    public Task<Car> GetCarByIdAsync(int id); 

}