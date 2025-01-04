namespace lebagarv.Application.Services.Cars; 
using lebagarv.Presentation.Models.Requests.Cars;
using lebagarv.Core.Domain.Dto.Cars;
using lebagarv.Core.Domain.Entities.Cars;

public interface ICarsService 
{
    public Task<IEnumerable<Car>> GetCarsAsync();
    public Task<bool> CreateCarAsync(CreateCarRequest request, int userId); 
    public Task<Car> GetCarByIdAsync(int id); 
}