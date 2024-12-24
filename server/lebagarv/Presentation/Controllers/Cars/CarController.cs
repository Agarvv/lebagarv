namespace lebagarv.Presentation.Controllers; 

 using Microsoft.AspNetCore.Mvc;
 using lebagarv.Application.Services.Cars;
using lebagarv.Presentation.Models.Requests.Cars;

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

   [HttpPost("/create")]
   public async Task<IActionResult> CreateCar([FromBody] CreateCarRequest request) 
   {
     await _carsService.CreateCarAsync(request); 
     return Ok("Car Created Sucesfully !"); 
   }
}