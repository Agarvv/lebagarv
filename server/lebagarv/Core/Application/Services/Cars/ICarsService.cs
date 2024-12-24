namespace lebagarv.Application.Services.Cars; 
using lebagarv.Presentation.Models.Requests.Cars;
using lebagarv.Core.Domain.Dto.Cars; 

public interface ICarsService 
{
    public Task<bool> CreateCarAsync(CreateCarRequest request); 
    public Task<CarDTO> GetCarByIdAsync(int id); 
}