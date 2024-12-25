using lebagarv.Core.Domain.Entities;
using lebagarv.Core.Domain.Entities.Cars;
using Microsoft.EntityFrameworkCore;

namespace lebagarv.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Car> Cars { get; set; }

    public DbSet<CarColor> CarColors { get; set; }

    public DbSet<CarBrand> CarBrands { get; set; }

    public DbSet<ResetPasswordToken> ResetPasswordTokens { get; set; }
}
