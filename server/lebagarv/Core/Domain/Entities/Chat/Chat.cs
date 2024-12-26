namespace lebagarv.Core.Domain.Entities.Chat
{
    using Microsoft.EntityFrameworkCore;
    using Microsoft.EntityFrameworkCore.Metadata;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;

    public class Chat
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int SenderId { get; set; }

        [Required]
        public int ReceiverId { get; set; }

        public ICollection<Message> Messages { get; set; } = new List<Message>();
    }
}