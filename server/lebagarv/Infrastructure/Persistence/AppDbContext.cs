using lebagarv.Core.Domain.Entities; 
using Microsoft.EntityFrameworkCore;

namespace lebagarv.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
}
