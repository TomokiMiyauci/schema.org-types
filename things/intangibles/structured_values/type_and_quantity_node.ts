import { ServiceType } from "../services/service.ts";
import { ProductType } from "../../products/product.ts";
import { BusinessFunction } from "../enumerations/business_function.ts";
import { Number, Text, URL } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";

export interface TypeAndQuantityNodeProps extends ThingProps {
  /** The quantity of the goods included in the offer.
   * @see https://schema.org/amountOfThisGood
   */
  amountOfThisGood: Number;

  /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
   * @see https://schema.org/businessFunction
   */
  businessFunction: BusinessFunction;

  /** The product that this structured value is referring to.
   * @see https://schema.org/typeOfGood
   */
  typeOfGood: ProductType | ServiceType;

  /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
   * @see https://schema.org/unitCode
   */
  unitCode: Text | URL;

  /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode}.
   * @see https://schema.org/unitText
   */
  unitText: Text;
}

/** A structured value indicating the quantity, unit of measurement, and business function of goods included in a bundle offer.
 * @see https://schema.org/TypeAndQuantityNode
 */
export interface TypeAndQuantityNode extends TypeAndQuantityNodeProps {
  "@type": "TypeAndQuantityNode";
}
