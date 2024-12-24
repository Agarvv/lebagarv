
namespace lebagarv.Application.Services.Cars;
using lebagarv.Presentation.Models.Requests.Cars;
using lebagarv.Core.Domain.Entities.Cars; 
using lebagarv.Infrastructure.Persistence.Repositories; 

public class CarsService : ICarsService
{
    private readonly ICarRepository _carRepository; 
    
    public CarsService(ICarRepository carRepository)
    {
      _carRepository = carRepository; 
    }
    public async Task<bool> CreateCarAsync(CreateCarRequest request)
    {
        Car car = new Car()
        {
            Title = request.Title,
            CarBrandId = request.CarBrand,
            CarModel = request.CarModel,
            CarYear = request.CarYear,
            FuelType = request.FuelType,
            Gearbox = request.Gearbox,
            Bodywork = request.Bodywork,
            Color = request.Color, 
            Description = request.Description,
            Doors = request.Doors,
            Seats = request.Seats,
            Horsepower = request.Horsepower,
            Kilometers = request.Kilometers,
            Images = request.Images.ToList() 
        };

        _carRepository.AddAsync(car); 
        
        return true; 
    }
}