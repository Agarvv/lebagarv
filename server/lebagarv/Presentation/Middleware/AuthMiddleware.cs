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
        var jwtCookie = context.Request.Cookies["jwt"]; 
        if(string.isNullOrEmpty(jwtCookie))
        {
            // debug 
            Console.WriteLine("JWT cookie not found"); 
        }
        
        var claimsPrincipal = _jwtService.ValidateToken(jwt); 
        Console.WriteLine("JWT validated", claimsPrincipal); 

        await _next(context); 
    }
}