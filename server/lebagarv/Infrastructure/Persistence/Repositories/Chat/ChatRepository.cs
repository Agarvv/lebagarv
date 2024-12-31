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
    
    public IEnumerable<Chat> GetAllByUserId(int userId)
    {
        return _context.Chats.Where(c => c.ReceiverId == userId || c.SenderId == userId).ToList();
    }
    
    public async Task<bool> ExistsByCarIdAsync(int carId)
    {
        return await _context.Chats.AnyAsync(c => c.CarId == carId); 
    }
}