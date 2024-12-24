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

    
}