using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BagMyFoodAPI.Models
{
    public class SearchResultsModel
    {
        public int Found { get; set; }
        public int Returned { get; set; }
        public int Offset { get; set; }
        public int Limit { get; set; }
        public string SearchTerm { get; set; }
        public List<ItemModel> Items { get; set; }
    }
}