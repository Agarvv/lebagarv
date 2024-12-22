namespace lebagarv.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

using System.ComponentModel.DataAnnotations;

public class User 
{
    public int Id { get; set; }

    [Required]
    public string Username { get; set; }

    public string? ProfilePicture { get; set; } 

    [Required]
    public string Email { get; set; }

    [Required]
    public string Password { get; set; }
}
