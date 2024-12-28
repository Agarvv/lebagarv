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
}