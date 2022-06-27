import { Text } from "../../data_types.ts";
import { ProductProps } from "./product.ts";
import { ThingProps } from "../thing.ts";

export interface IndividualProductProps extends ProductProps, ThingProps {
  /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
   * @see https://schema.org/serialNumber
   */
  serialNumber: Text;
}

/** A single, identifiable product instance (e.g. a laptop with a particular serial number).
 * @see https://schema.org/IndividualProduct
 */
export interface IndividualProduct extends IndividualProductProps {
  "@type": "IndividualProduct";
}
