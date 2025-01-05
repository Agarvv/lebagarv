using lebagarv.Core.Domain.Entities.Users;
using lebagarv.Core.Domain.Entities.Cars;
using Microsoft.EntityFrameworkCore;
using lebagarv.Core.Domain.Entities;
using lebagarv.Core.Domain.Entities.Chat;
using lebagarv.Core.Domain.Entities.Favorites; 

namespace lebagarv.Infrastructure.Persistence;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public DbSet<AppUser> Users { get; set; }
    public DbSet<Car> Cars { get; set; }

    public DbSet<CarColor> CarColors { get; set; }

    public DbSet<CarBrand> CarBrands { get; set; }

    public DbSet<ResetPasswordToken> ResetPasswordTokens { get; set; }
    public DbSet<Chat> Chats { get; set; }

    public DbSet<Favorites> Favorites { get; set; }
}
