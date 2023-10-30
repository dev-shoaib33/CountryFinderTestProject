using TestProject.Controllers;

namespace TestProject.Models
{
    public class CountryResponse
    {
        public bool Error { get; set; }
        public string Msg { get; set; }
        public List<CountryData> Data { get; set; }
    }
}
