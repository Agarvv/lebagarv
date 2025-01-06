namespace lebagarv.Infrastructure.Persistence.Repositories.Favorites
{
    using lebagarv.Core.Domain.Entities.Favorites; 
    using lebagarv.Infrastructure.Persistence.Repositories; 
    using lebagarv.Infrastructure.Persistence;
    using Microsoft.EntityFrameworkCore;

    public class FavoritesRepository : Repository<Favorites>, IFavoritesRepository
    {
        private readonly AppDbContext _context;

        public FavoritesRepository(AppDbContext context) : base(context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Favorites>> GetUserFavoritesAsync(int userId)
        {
            return await _context.Favorites.Where(f => f.UserId == userId)
            .Include(f => f.Car)
            .ToListAsync();
        }

        public async Task<bool> ExistsByCarIdAsync(int carId)
        {
            return await _context.Favorites.AnyAsync(f => f.CarId == carId);
        }

        public async Task DeleteFavoriteAsync(int userId, int carId)
        {
           var favorite = await _context.Favorites.FirstOrDefaultAsync(f => f.UserId == userId && f.CarId == carId);

          if (favorite != null)
          {
             _context.Favorites.Remove(favorite);
             await _context.SaveChangesAsync();
          }
        }
    }
}