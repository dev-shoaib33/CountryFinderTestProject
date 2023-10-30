namespace TestProject.Models
{
    public class CountryData
    {
        public string Name { get; set; }
        public string Iso3 { get; set; }
        public string Iso2 { get; set; }
        public List<StateData> States { get; set; }
    }
}
