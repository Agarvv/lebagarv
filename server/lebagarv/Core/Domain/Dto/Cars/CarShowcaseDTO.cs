namespace lebagarv.Core.Domain.Dto.Cars; 

public class CarShowcaseDTO 
{
    public int Id { get; set; }
    public string Title { get; set; }
    public int Price { get; set; } 
    public List<string> Images { get; set; } 
    public string City { get; set; } 
    public string Brand { get; set; } 
}

