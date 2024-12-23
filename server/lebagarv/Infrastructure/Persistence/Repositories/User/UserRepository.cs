namespace lebagarv.Infrastructure.Repositories.User; 
using lebagarv.Core.Domain.Entities; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

public class UserRepository : Repository<User>, IUserRepository
{   
    private readonly AppDbContext _context;

    public UserRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }
    public async Task<bool> ExistsByEmailAsync(string email)
    {
      return await _context.Users.AnyAsync(u => u.Email == email);
    }

    public async Task<User> FindByEmailAsync(string email) 
    {
       return await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
    }
}