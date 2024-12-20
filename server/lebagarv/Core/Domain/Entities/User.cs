namespace lebagarv.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

public class User 
{
    public int id { get; set; }
    public string username { get; set; }
    public string profilePicture { get; set; } // stored as url 
    public string email { get; set; }
    public string password { get; set; }
}