using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using TestProject.Models;

namespace TestProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectsController : ControllerBase

    {
        private readonly AppDbContext _context;

        public ProjectsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetProjects()
        {
            var projects = _context.Projects.Include(p => p.Address).ToList();
            return Ok(projects);
        }
        
        [HttpPost("Add")]
        public async Task<ActionResult<Project>> AddProject(Project project)
        {
            if (await IsValidCountryAsync(project.Address.CountryName))
            {
                _context.Projects.Add(project);
                await _context.SaveChangesAsync();
                return CreatedAtAction("GetProject", new { id = project.Id }, project);
            }
            else
            {
                return BadRequest("Invalid Country.");
            }
        }

        private async Task<bool> IsValidCountryAsync(string country)
        {
            using (var client = new HttpClient())
            {
                var response = await client.GetStringAsync("https://countriesnow.space/api/v0.1/countries/states");
                var countries = JsonConvert.DeserializeObject<CountryResponse>(response);
                return countries.Data.Any(c => c.Name.Equals(country, StringComparison.OrdinalIgnoreCase));
            }
        }
    }


}
