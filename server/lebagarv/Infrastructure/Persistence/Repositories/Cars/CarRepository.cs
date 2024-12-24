namespace lebagarv.Infrastructure.Repositories.User; 
using lebagarv.Core.Domain.Entities.Cars; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

public class CarRepository : Repository<Car>, ICarRepository
{
    private readonly AppDbContext _context;

    public CarRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }

    public Task<bool> ExistsCarColorById(int id)
    {
        return await _context.CarColor.AnyAsync(c => c.Id == id); 
    }
    
    public Task<bool> ExistsCarBrandById(int id)
    {
        return await _context.CarBrand.AnyAsync(b => b.Id == id); 
    }
}