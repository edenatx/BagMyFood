using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BagMyFoodAPI.DTO;
using Newtonsoft.Json;

namespace BagMyFoodAPI.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        // GET api/user
        [HttpGet]
        public List<User> Get()
        {
            User newUser = new User(1, "Blue", "Berry");
            // string result = JsonConvert.SerializeObject(newUser);
            var results = new List<User>();
            results.Add(newUser);
            return results;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            User newUser = new User(id, "Blue", "Berry");
            string result = JsonConvert.SerializeObject(newUser);
            return result;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
