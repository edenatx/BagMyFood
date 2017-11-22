using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BagMyFoodAPI.Models
{
    public class LocationsModel
    {
        [JsonProperty("aisleDesc")]
        public string AisleDescription { get; set; }

        [JsonProperty("aisleNo")]
        public string AisleNumber { get; set; }

        [JsonProperty("aisleSide")]
        public string AisleSide { get; set; }

        [JsonProperty("division")]
        public string Division { get; set; }

        [JsonProperty("shelfNo")]
        public string ShelfNumber { get; set; }

        [JsonProperty("storeNo")]
        public string StoreNumber { get; set; }

        [JsonProperty("upc")]
        public string Upc { get; set; }

    }
}