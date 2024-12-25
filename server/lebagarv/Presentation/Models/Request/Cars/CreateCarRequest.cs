using System.ComponentModel.DataAnnotations;

namespace lebagarv.Presentation.Models.Requests.Cars
{
    public class CreateCarRequest
    {
        [Required]
        public string Title { get; set; }

        [Required]
        public List<string> Images { get; set; } // URLs stored

        [Required]
        public int CarBrand { get; set; } // Brand id

        [Required]
        public string CarModel { get; set; } // Car model name

        [Required]
        public int CarYear { get; set; } // Manufacturing year

        [Required]
        public string FuelType { get; set; } // Fuel type (e.g., Diesel, GPL)

        [Required]
        public string Gearbox { get; set; } // Auto or Manual

        [Required]
        public string Bodywork { get; set; } // Body style (e.g., Sedan)

        [Required]
        public int Color { get; set; } // Car color id 

        [Required]
        public string Description { get; set; } // Description of the car

        [Required]
        public int Doors { get; set; } // Number of doors

        [Required]
        public int Seats { get; set; } // Number of seats

        [Required]
        public int Horsepower { get; set; } // Horsepower of the car

        [Required]
        public int Kilometers { get; set; } // Mileage in kilometers
        
        [Required]
        public string City { get; set; } // car city
    }
}
