namespace lebagarv.Core.Domain.Dto.Profile; 

using lebagarv.Core.Domain.Dto.Cars; 

public class ProfileDTO 
{
    public int Id { get; set; } 
    public string ProfilePicture { get; set; } 
    public string Banner { get; set; } 
    public string Username { get; set; } 
    public List<CarShowcaseDTO> Cars { get; set; } 
}