namespace lebagarv.Infrastructure.Persistence.Repositories.Chat; 

using lebagarv.Core.Domain.Entities.Chat; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

public class ChatRepository : Repository<Chat>, IChatRepository 
{
    private readonly AppDbContext _context;

    public ChatRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }
    
    public async Task<IEnumerable<Chat>> GetAllByUserIdAsync(int userId)
    {
        return await _context.Chats
            .Where(c => c.ReceiverId == userId || c.SenderId == userId)
            .Include(c => c.Car)
            .Include(c => c.Messages)
            .ToListAsync(); 
    }
    
    public async Task<Chat> GetChatByIdAsync(int id)
    {
        return await _context.Chats
            .Include(c => c.Car) 
            .Include(c => c.Messages)
            .FirstOrDefaultAsync(c => c.Id == id); 
    }
    
    public async Task<Chat> GetByCarAndUserIdAsync(int carId, int userId)
    {
        return await _context.Chats.FirstOrDefaultAsync(c => c.CarId == carId && c.SenderId == userId); 
    }
 
    
    public async Task<bool> ExistsByCarIdAsync(int carId)
    {
        return await _context.Chats
            .AnyAsync(c => c.CarId == carId); 
    }
}