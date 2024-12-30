namespace lebagarv.Core.Domain.Entities.Chat
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using lebagarv.Core.Domain.Dto.Chat; 

    public class Chat
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int SenderId { get; set; }

        [Required]
        public int ReceiverId { get; set; }

        public ICollection<Message> Messages { get; set; } = new List<Message>();
        
        public ChatDTO toChatDto(Chat chat) 
        {
            Id=chat.Id;
            SenderId=chat.SenderId; 
            ReceiverId=chat.ReceiverId;
            Messages=chat.Messages.Select(message => message.toMessageDto(message)); 
        }
    }
}