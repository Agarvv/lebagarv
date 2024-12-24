namespace Lebagarv.Presentation.Middleware;

using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using Lebagarv.Core.Domain.Exceptions; 

public class ExceptionMiddleware 
{
    private readonly RequestDelegate _next; 
    
    public ExceptionMiddleware(RequestDelegate next)
    {
        _next = next; 
    }
    
    public async Task InvokeAsync(HttpContext context) 
    {
        try 
        {
            await _next(context); 
        }
        catch (LebagarvException ex) 
        {
            context.Response.StatusCode = ex.Code; 
            await context.Response.WriteAsync(ex.Message); 
        }
        catch (Exception)
        {
            context.Response.StatusCode = StatusCodes.Status500InternalServerError; 
            await context.Response.WriteAsync("Oops Internal Server Issues, Sorry."); 
        }
    }
}