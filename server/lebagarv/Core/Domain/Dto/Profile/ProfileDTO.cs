namespace lebagarv.Core.Domain.Dto.Profile; 

using lebagarv.Core.Domain.Dto.Cars; 

public class ProfileDTO 
{
    public string Username { get; set; } 
    public List<CarShowcaseDTO> Cars { get; set; } 
}