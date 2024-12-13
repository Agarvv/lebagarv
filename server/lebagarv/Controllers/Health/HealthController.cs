using Microsoft.AspNetCore.Mvc;

namespace lebagarv.Controllers.Health; 

// test server health controller, something very simple
public class HealthController : ControllerBase 
{
  [HttpGet("health")]
  public IActionResult Health() 
  {
    return Ok("APP OK, Java >> C# :P");
  }
}