namespace lebagarv.Presentation.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using lebagarv.Application.Services.Cars;
    using lebagarv.Presentation.Models.Requests.Cars;
    using lebagarv.Core.Domain.Dto.Cars; 

    [ApiController]
    [Route("api/lebagarv/cars")]
    public class CarController : ControllerBase
    {
        private readonly ICarsService _carsService;

        public CarController(ICarsService carsService)
        {
            _carsService = carsService;
        }

        [HttpGet]
        public async Task<IActionResult> GetCars()
        {
            var cars = await _carsService.GetCarsAsync();
            var carsDto = cars.Select(car => car.toShowcaseDto());
            return Ok(carsDto);
        }
        
        [HttpGet("car/{id}")]
        public async Task<IActionResult> GetCarById(int id)
        {
            var car = await _carsService.GetCarByIdAsync(id); 
            return Ok(car.toDto()); 
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateCar([FromBody] CreateCarRequest request)
        {
            await _carsService.CreateCarAsync(request);
            return Ok(new { Message = "Car Created Successfully!" });
        }
    }
}