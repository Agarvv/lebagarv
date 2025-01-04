namespace lebagarv.Application.Services.Cars
{
    using lebagarv.Presentation.Models.Requests.Cars;
    using lebagarv.Core.Domain.Entities.Cars;
    using lebagarv.Infrastructure.Persistence.Repositories;
    using lebagarv.Core.Domain.Exceptions;
    using lebagarv.Core.Domain.Dto.Cars;
    using lebagarv.Infrastructure.Persistence.Repositories.Cars;

    public class CarsService : ICarsService
    {
        private readonly ICarRepository _carRepository;

        public CarsService(ICarRepository carRepository)
        {
            _carRepository = carRepository;
        }

        public async Task<IEnumerable<Car>> GetCarsAsync()
        {
            return await _carRepository.GetAllCarsAsync();
        }
    
        
        public async Task<Car> GetCarByIdAsync(int id)
        {
            var car = await _carRepository.GetByIdAsync(id); 
            
            if(car == null)
            {
                throw new LebagarvException("Car Not Found", 404); 
            }
            
            return car; 
        }
    

        public async Task<bool> CreateCarAsync(CreateCarRequest request, int userId)
        {
            if (!await _carRepository.ExistsCarColorById(request.Color))
            {
                throw new LebagarvException("Car color does not exist.", 404);
            }

            if (!await _carRepository.ExistsCarBrandById(request.CarBrand))
            {
                throw new LebagarvException("Car brand does not exist.", 404);
            }

            var car = new Car
            {
                UserId=userId, 
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
                Images = request.Images,
                City=request.City,
                Date=DateTime.Now,
                Price=request.Price
            };

            await _carRepository.AddAsync(car);

            return true; 
        }
    }
}
