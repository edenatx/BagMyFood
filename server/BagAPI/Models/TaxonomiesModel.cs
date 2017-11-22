using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BagMyFoodAPI.Models
{
    public class TaxonomiesModel
    {

        [JsonProperty("departmentDesc")]
        public string DepartmentDescription { get; set; }
        [JsonProperty("departmentCode")]
        public string DepartmentCode { get; set; }
        [JsonProperty("commodityDesc")]
        public string CommodityDescription { get; set; }
        [JsonProperty("commodityCode")]
        public string CommodityCode { get; set; }
        [JsonProperty("subCommodityDesc")]
        public string SubCommodityDescription { get; set; }
        [JsonProperty("subCommodityCode")]
        public string SubCommodityCode { get; set; }
        [JsonProperty("generalDeptLocation")]
        public string GeneralDepartmentLocation { get; set; }
        [JsonProperty("category")]
        public string Category { get; set; }
        [JsonProperty("categoryId")]
        public int CategoryId { get; set; }
    }
}