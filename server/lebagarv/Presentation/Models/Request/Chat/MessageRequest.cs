namespace lebagarv.Presentation.Models.Requests.Chat
{
    public class MessageRequest
    {
        public string Type { get; set; } 
        public string Value { get; set; }
        public int ChatId { get; set; }
        public int ReceiverId { get; set; }
    }
}