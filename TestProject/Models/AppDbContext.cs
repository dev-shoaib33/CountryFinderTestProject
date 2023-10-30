using Microsoft.EntityFrameworkCore;

namespace TestProject.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Project> Projects { get; set; }
        public DbSet<Address> Addresses { get; set; }
    }
}
