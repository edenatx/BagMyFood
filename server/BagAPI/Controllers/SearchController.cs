using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using BagMyFoodAPI.DTO;
using Newtonsoft.Json;
using System.Net;
using BagMyFoodAPI.Models;

namespace BagMyFoodAPI.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller{
         [HttpGet("{searchTerm}")]
        public SearchResultsModel Get(string searchTerm)
        {
           var results = GetSearchResults(searchTerm);
             return results;
        }

        [HttpGet("aisle/{upc}")]
        public AisleLocationResultsModel GetAisle(string upc)
        {
            var locations = GetAisleLocations(upc);
            return locations;
        }

        private WebRequest CraftWebRequest(string url)
        {
            try
            {
                var webRequest = System.Net.WebRequest.Create(url);
                if (webRequest != null)
                {
                    webRequest.Method = "GET";
                    webRequest.ContentType = "application/json";
                    webRequest.Headers["X-ApplicationAuthorizationToken"] = "2E51C200-618E-426C-BD9C-EEB8AB228B37";
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls
                         | SecurityProtocolType.Tls11
                         | SecurityProtocolType.Tls12;
                }
                return webRequest;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        private SearchResultsModel GetSearchResults(string searchTerm, int offset = 0, int limit=50)
        {
            string url = string.Format("https://api.kroger.com/shoppinglist/2/krogerlist/item-catalog/search/predictive?q={0}&offset={1}&limit={2}&div=034&store=00312&displayonweb=kroger", searchTerm, offset, limit);
            try
            {
                var webRequest = CraftWebRequest(url);

                using (System.IO.Stream s = webRequest.GetResponse().GetResponseStream())
                {
                    using (System.IO.StreamReader sr = new System.IO.StreamReader(s))
                    {
                        var jsonResponse = sr.ReadToEnd();

                        var deserializedResponse = JsonConvert.DeserializeObject<SearchResultsModel>(jsonResponse);
                        return deserializedResponse;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        private AisleLocationResultsModel GetAisleLocations(string upc)
        {
            string url = string.Format("https://api.kroger.com/shoppinglist/2/krogerlist/kroger/items/list?upc={0}&div=034&store=00312", upc);
            try
            {
                var webRequest = CraftWebRequest(url);

                using (System.IO.Stream s = webRequest.GetResponse().GetResponseStream())
                {
                    using (System.IO.StreamReader sr = new System.IO.StreamReader(s))
                    {
                        var jsonResponse = sr.ReadToEnd();

                        var deserializedResponse = JsonConvert.DeserializeObject<AisleLocationResultsModel>(jsonResponse);
                        return deserializedResponse;
                    }
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }
    }

}