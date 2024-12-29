namespace lebagarv.Infrastructure.Repositories.User; 
using lebagarv.Core.Domain.Entities.Users; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

public class UserRepository : Repository<AppUser>, IUserRepository
{   
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }
    
    public async Task<AppUser> FindByIdAsync(int id)
    {
        var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);
        return user; 
    }
    
    public async Task<bool> ExistsByEmailAsync(string email)
    {
      return await _context.Users.AnyAsync(u => u.Email == email);
    }

    public async Task<AppUser> FindByEmailAsync(string email) 
    {
       return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
       
    }
    
    
}