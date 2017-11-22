using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BagMyFoodAPI.Models
{
    public class ItemModel
    {
        public string Upc { get; set; }
        public string Description { get; set; }
        public string ItemSize { get; set; }
        public string FamilyTreeDepartmentCode { get; set; }
        public string FamilyTreeCommodityCode { get; set; }
        public string FamilyTreeSubCommodityCode { get; set; }
        public string MainImage { get; set; }
        public string CustomerFacingSize { get; set; }
        public string Unsellable { get; set; }
        public string SellOnClickList { get; set; }
        public List<TaxonomiesModel> Taxonomies { get; set; }

        public string SmallImageSrc { get
            {
                return string.Format("http://www.kroger.com/product/images/095000003/small/front/{0}", Upc);
            }
        }
        public string LargeImageSrc
        {
            get
            {
                return string.Format("http://www.kroger.com/product/images/095000003/large/front/{0}", Upc);
            }
        }
    }
}