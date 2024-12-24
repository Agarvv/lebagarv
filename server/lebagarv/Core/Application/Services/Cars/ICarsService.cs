namespace lebagarv.Application.Services.Cars; 
using lebagarv.Presentation.Models.Requests.Cars;

public interface ICarsService 
{
    public Task<bool> CreateCarAsync(CreateCarRequest request); 
    
}