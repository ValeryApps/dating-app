using Microsoft.EntityFrameworkCore;
using server.Entities;

namespace server.data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<AppUser> Users { get; set; }

    }
}