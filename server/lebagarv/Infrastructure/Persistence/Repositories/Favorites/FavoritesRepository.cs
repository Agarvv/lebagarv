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
            return await _context.Favorites.Where(f => f.UserId == userId).ToListAsync();
        }

        public async Task<bool> ExistsByProductIdAsync(int productId)
        {
            return await _context.Favorites.AnyAsync(f => f.ProductId == productId);
        }
    }
}