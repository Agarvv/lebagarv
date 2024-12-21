namespace lebagarv.Core.Presentation.Controllers.Health;

using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;

[ApiController]
[Route("/health")]
public class HealthController : ControllerBase 
{
   
   [HttpGet]
    public IActionResult Health() 
    {
       return Ok("FINE");
    }
}
