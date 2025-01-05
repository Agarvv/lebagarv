namespace lebagarv.Presentation.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using lebagarv.Application.Services.Cars;
    using lebagarv.Presentation.Models.Requests.Cars;
    using lebagarv.Core.Domain.Dto.Cars; 
    using System.Security.Claims;

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
            var userId = int.Parse(User.FindFirst(ClaimTypes.NameIdentifier)?.Value); 
            await _carsService.CreateCarAsync(request, userId);
            return Ok(new { Message = "Car Created Successfully!" });
        }

        [HttpGet("search/{query}")]
        public async Task<IActionResult> SearchCars(string query)
        {
            var cars = await _carsService.SearchCarsAsync(query);
            var carsDto = cars.Select(car => car.toShowcaseDto());
            return Ok(carsDto);
        }
    }
}