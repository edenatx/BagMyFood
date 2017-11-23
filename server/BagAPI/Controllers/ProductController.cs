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
    public class ProductController : Controller{
        private const string SEARCH_URL = "https://api.kroger.com/shoppinglist/2/krogerlist/item-catalog/search/predictive?q=";
        private const string AISLE_SEARCH_URL ="https://api.kroger.com/shoppinglist/2/krogerlist/kroger/items/list?upc=";
        private const string AUTH_TOKEN ="2E51C200-618E-426C-BD9C-EEB8AB228B37";

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
                    webRequest.Headers["X-ApplicationAuthorizationToken"] = AUTH_TOKEN;
                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls
                         | SecurityProtocolType.Tls11
                         | SecurityProtocolType.Tls12;
                }
                return webRequest;
            }
            catch (Exception ex)
            {
               throw ex;
            }
        }

        private string GetWebResponse(WebRequest request){
            try{
                using (System.IO.Stream s = request.GetResponse().GetResponseStream())
                {
                    using (System.IO.StreamReader sr = new System.IO.StreamReader(s))
                    {
                        var jsonResponse = sr.ReadToEnd();

                        return jsonResponse;
                    }
                }
            }
            catch(Exception ex){
              throw ex;
            }
        }
        private SearchResultsModel GetSearchResults(string searchTerm, int offset = 0, int limit=50)
        {
            var url = string.Format("{0}{1}&offset={2}&limit={3}&div=034&store=00312&displayonweb=kroger", SEARCH_URL,searchTerm, offset, limit);
            try
            {
                var webRequest = CraftWebRequest(url);
                var deserializedResponse = JsonConvert.DeserializeObject<SearchResultsModel>(GetWebResponse(webRequest));
                return deserializedResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }

        private AisleLocationResultsModel GetAisleLocations(string upc)
        {
            string url = string.Format("{0}{1}&div=034&store=00312",AISLE_SEARCH_URL, upc);
            try
            {
                var webRequest = CraftWebRequest(url);
                var deserializedResponse = JsonConvert.DeserializeObject<AisleLocationResultsModel>(GetWebResponse(webRequest));
                return deserializedResponse;
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                return null;
            }
        }
    }

}
