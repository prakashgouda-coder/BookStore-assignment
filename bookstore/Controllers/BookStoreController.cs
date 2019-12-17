using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using bookstore.model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace bookstore.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookStoreController : ControllerBase
    {
        // GET: api/BookStore
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("{loginUser}")]
        public string Get(string loginUser)
        {
            string loginResult = string.Empty;
            User loginuser = JsonConvert.DeserializeObject<User>(loginUser);

            if (loginuser != null && !String.IsNullOrEmpty(loginuser.Email))
            {
                if (loginuser.Email == "123@test.com" && loginuser.Password == "123456")
                {
                    loginResult=loginuser.Email;
                }
                else
                {
                    loginResult="Incorrect email id or password!.";
                }
            }
            else
            {
                loginResult = "Login service unavailable!.";
            }
            return loginResult;


            //System.Console.WriteLine(searchCriteria);
            //return "value";
        }

        // POST: api/BookStore
        [HttpPost]
        public void Post([FromBody] string value)
        {

        }

        // PUT: api/BookStore/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
