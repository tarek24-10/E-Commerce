using Core.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using System.Security.Authentication;
using System.Security.Claims;

namespace API.Extensions
{
    public static class ClaimsPrincipleExtensions
    {
        public static string GetEmail(this ClaimsPrincipal user)
        {
            var email = user.FindFirstValue(ClaimTypes.Email) ?? 
                throw new AuthenticationException("Email claim not found");

            return email;
        }

        public static async Task<AppUser> GetUserByEmail(this UserManager<AppUser> userManager, ClaimsPrincipal user)
        {
            var appUser = await userManager.Users.FirstOrDefaultAsync(u => u.Email == user.GetEmail());

            if (appUser == null) throw new AuthenticationException("User not found");

            return appUser;
        }

        public static async Task<AppUser> GetUserByEmailWithAddress(this UserManager<AppUser> userManager, ClaimsPrincipal user)
        {
            var appUser = await userManager.Users.Include(u => u.Address)
                .FirstOrDefaultAsync(u => u.Email == user.GetEmail());

            if (appUser == null) throw new AuthenticationException("User not found");

            return appUser;
        }
    }
}
