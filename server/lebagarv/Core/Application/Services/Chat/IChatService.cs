namespace lebagarv.Core.Application.Services.Chat; 

public interface IChatService 
{
    Task GetUserChatsAsync(int userId); 
}