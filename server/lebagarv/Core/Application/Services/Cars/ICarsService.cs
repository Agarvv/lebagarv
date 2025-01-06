namespace lebagarv.Application.Services.Cars; 
using lebagarv.Presentation.Models.Requests.Cars;
using lebagarv.Core.Domain.Dto.Cars;
using lebagarv.Core.Domain.Entities.Cars;

public interface ICarsService 
{
    public Task<IEnumerable<Car>> GetCarsAsync();
    public Task<IEnumerable<Car>> SearchCarsAsync(string query);
    public Task<bool> CreateCarAsync(CreateCarRequest request, int userId); 
    public Task<CarDTO> GetCarByIdAsync(int id, int userId); 
}