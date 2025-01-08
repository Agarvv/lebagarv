namespace lebagarv.Infrastructure.Persistence.Repositories.Chat.Messages; 

using lebagarv.Core.Domain.Entities.Chat; 
using lebagarv.Infrastructure.Persistence.Repositories; 
using lebagarv.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

public class MessageRepository : Repository<Message>, IMessageRepository 
{
    private readonly AppDbContext _context;

    public ChatRepository(AppDbContext context) : base(context)
    {
        _context = context;
    }
}