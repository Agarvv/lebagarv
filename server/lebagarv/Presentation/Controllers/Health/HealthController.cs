namespace lebagarv.Core.Presentation.Controllers.Health;

using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

[ApiController]
[Route("/health")]
public class HealthController : ControllerBase 
{
   
   [HttpGet]
public IActionResult Health() 
{
  // var userId = claimsPrincipal.FindFirst(ClaimTypes.NameIdentifier)?.Value;
  var userId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value; 
  return Ok(userId); 
}

}
