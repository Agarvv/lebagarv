namespace lebagarv.Presentation.Middleware;

using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using System.Linq;
using lebagarv.Infrastructure.Security;

public class AuthMiddleware
{
    private readonly RequestDelegate _next;
    private readonly JwtService _jwtService;

    public AuthMiddleware(RequestDelegate next, JwtService jwtService)
    {
        this._next = next;
        this._jwtService = jwtService;
    }

    public async Task InvokeAsync(HttpContext context)
    {
        var jwt = context.Request.Cookies["jwt"];
        if (string.IsNullOrEmpty(jwt))
        {
            Console.WriteLine("JWT cookie not found");
        }
        else
        {
            try
            {
                var claimsPrincipal = _jwtService.ValidateToken(jwt);

                if (claimsPrincipal != null)
                {
                    context.User = claimsPrincipal;
                    Console.WriteLine("JWT validated and user set.");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine($"JWT validation failed: {ex.Message}");
            }
        }

        await _next(context);
    }
}