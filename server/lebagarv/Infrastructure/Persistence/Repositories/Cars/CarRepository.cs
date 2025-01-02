namespace lebagarv.Infrastructure.Repositories.Cars; 

using lebagarv.Core.Domain.Entities.Cars; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;
using lebagarv.Infrastructure.Persistence.Repositories.Cars;

public class CarRepository : Repository<Car>, ICarRepository
{
    private readonly AppDbContext _context;

    public CarRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Car>> GetAllCarsAsync()
    {
        return await _context.Cars
        .Include(c => c.CarBrand) 
        .ToListAsync();
    }
    
    public async Task<Car> GetCarByIdAsync(int id)
    {
        return await _context.Cars
            .Include(c => c.CarBrand, c.CarColor) 
            .FirstOrDefaultAsync(c => c.Id == id); 
    }

    public async Task<bool> ExistsCarColorById(int id)
    {
        return await _context.CarColors.AnyAsync(c => c.Id == id); 
    }
    
    public async Task<bool> ExistsCarBrandById(int id)
    {
        return await _context.CarBrands.AnyAsync(b => b.Id == id); 
    }
}