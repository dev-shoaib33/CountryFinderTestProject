using System.Net;

namespace TestProject.Models
{
    public class Project
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public Address Address { get; set; }
    }
}
