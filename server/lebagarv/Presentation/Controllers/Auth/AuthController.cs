namespace lebagarv.Presentation.Controllers.Auth
{
    using Microsoft.AspNetCore.Mvc;
    using lebagarv.Presentation.Models.Requests.Auth;
    using lebagarv.Core.Application.Services.Auth;
    using lebagarv.Infrastructure.Persistence.Repositories;
    using lebagarv.Infrastructure.Repositories.User;

    [ApiController]
    [Route("api/lebagarv/auth")]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService; 
        private readonly IUserRepository _userRepository; 

        public AuthController(IAuthService authService, IUserRepository userRepository)
        {
            _authService = authService; 
            _userRepository = userRepository; 
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            if (await _userRepository.ExistsByEmailAsync(request.Email)) 
            {
                return BadRequest("Email Is Taken");
            }

            await _authService.RegisterAsync(request);
            return Ok("Registered Successfully!!!");
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _userRepository.FindByEmailAsync(request.Email);
            if (user == null) 
            {
                return BadRequest("Wrong Credentials."); 
            }

            var token = await _authService.LoginAsync(request, user);
            if (token != null)
            {
                var cookieOptions = new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.None,
                    Expires = DateTime.UtcNow.AddHours(1)
                }; 
                Response.Cookies.Append("jwt", token, cookieOptions);
                return Ok(token);
            } 
            else 
            {
                return BadRequest("Wrong Password.");
            }
        }

        [HttpGet("check")]
        public async Task<IActionResult> CheckAuth()
        {
            var jwt = Request.Cookies["jwt"]; 
            await _authService.CheckAuthAsync(jwt); 
            return Ok("AUTHENTICATED");
        }
    }
}