namespace lebagarv.Presentation.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using lebagarv.Application.Services.Cars;
    using lebagarv.Presentation.Models.Requests.Cars;

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
            return Ok(cars);
        }

        [HttpPost("create")]
        public async Task<IActionResult> CreateCar([FromBody] CreateCarRequest request)
        {
            await _carsService.CreateCarAsync(request);
            return Ok(new { Message = "Car Created Successfully!" });
        }
    }
}