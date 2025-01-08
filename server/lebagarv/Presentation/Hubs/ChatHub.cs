namespace lebagarv.Presentation.Hubs
{
    using Microsoft.AspNetCore.SignalR;
    using System.Threading.Tasks;
    using lebagarv.Presentation.Models.Requests.Chat; 
    using System.Security.Claims;
    using System.Linq;
    using System.Collections.Generic;
    using lebagarv.Core.Application.Services.Chat; 
    

    public class ChatHub : Hub
    {
        private readonly IChatService _chatService;
        private static Dictionary<string, string> UserConnections = new();
        
        public ChatHub(IChatService chatService)
        {
            _chatService = chatService; 
        }

        public override Task OnConnectedAsync()
        {
            var userId = Context.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (!string.IsNullOrEmpty(userId))
            {
                UserConnections[userId] = Context.ConnectionId;
                System.Console.WriteLine($"User connected: {userId}, ConnectionId: {Context.ConnectionId}");
            }
            
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(System.Exception? exception)
        {
            var userId = UserConnections.FirstOrDefault(x => x.Value == Context.ConnectionId).Key;

            if (!string.IsNullOrEmpty(userId))
            {
                UserConnections.Remove(userId);
                System.Console.WriteLine($"User disconnected: {userId}");
            }

            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(MessageRequest message)
        {
            var senderId = int.Parse(Context.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value); 

            if (string.IsNullOrEmpty(senderId))
            {
                throw new HubException("User not authenticated to send message!!!.");
            }

            var connectionIds = new List<string>
            {
                UserConnections.GetValueOrDefault(message.ReceiverId.ToString()),
                UserConnections.GetValueOrDefault(senderId)
            };
            
            var newMessage = await _chatService.CreateMessageAsync(message, senderId); 

            await Clients.Clients(connectionIds.Where(id => id != null).ToArray()).SendAsync("ReceiveMessage", newMessage);

            System.Console.WriteLine($"Message sent from {senderId} to {message.ReceiverId} (to all connections)");
        }
    }
}