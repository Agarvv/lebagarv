namespace lebagarv.Core.Domain.Entities.Chat
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using lebagarv.Core.Domain.Entities.Users; 
    using lebagarv.Core.Domain.Dto.Chat; 

    public class Message
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public string Type { get; set; } 
        
        [Required]
        public string Value { get; set; } 

        [Required]
        [ForeignKey("User")]
        public int SenderId { get; set; }
        public virtual AppUser User { get; set; } 

        [Required]
        public int ReceiverId { get; set; }

        [Required]
        public int ChatId { get; set; }
        [ForeignKey("ChatId")]
        public Chat Chat { get; set; }
        
        public MessageDTO toMessageDto()
        {
            return new MessageDTO()
            {
                Id=this.Id,
                ReceiverId=this.ReceiverId,
                Sender=this.User.toUserMessageDto(),
                Type=this.Type,
                Value=this.Value 
            }; 
        }
    }
}