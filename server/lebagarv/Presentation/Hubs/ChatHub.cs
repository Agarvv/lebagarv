namespace lebagarv.Presentation.Hubs
{
    using Microsoft.AspNetCore.SignalR;
    using System.Threading.Tasks;
    using lebagarv.Presentation.Models.Requests.Chat; 
    using System.Security.Claims;


    public class ChatHub : Hub
    {
        private static Dictionary<string, string> UserConnections = new();

        public override Task OnConnectedAsync()
        {
            var userId = Context.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (!string.IsNullOrEmpty(userId))
            {
                UserConnections[userId] = Context.ConnectionId;
                System.Console.WriteLine($"User connected : {userId}, ConnectionId: {Context.ConnectionId}");
            }
            
            return base.OnConnectedAsync();
        }

        public override Task OnDisconnectedAsync(System.Exception? exception)
        {
            var userId = UserConnections.FirstOrDefault(x => x.Value == Context.ConnectionId).Key;

            if (!string.IsNullOrEmpty(userId))
            {
                UserConnections.Remove(userId);
                System.Console.WriteLine($"user disconnected: {userId}");
            }

            return base.OnDisconnectedAsync(exception);
        }

        public async Task SendMessage(MessageRequest message)
        {
            var senderId = Context.User?.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (string.IsNullOrEmpty(senderId))
            {
                throw new HubException("User not authenticated to send message!!!.");
            }

            if (UserConnections.TryGetValue(message.ReceiverId.ToString(), out var receiverConnectionId))
            {
                await Clients.Client(receiverConnectionId).SendAsync("ReceiveMessage", message);
                
                System.Console.WriteLine($"Message send from {senderId} to {message.ReceiverId}");
            }
            else
            {
                System.Console.WriteLine($"Receiver not connected!!");
            }
        }
    }
}