import { QuantitativeValue } from "./../intangibles/structured_values/quantitative_value.ts";
import { ProductProps } from "./product.ts";
import { ThingProps } from "../thing.ts";

export interface SomeProductsProps extends ProductProps, ThingProps {
  /** The current approximate inventory level for the item or items.
   * @see https://schema.org/inventoryLevel
   */
  inventoryLevel: QuantitativeValue;
}

/** A placeholder for multiple similar products of the same kind.
 * @see https://schema.org/SomeProducts
 */
export interface SomeProducts extends SomeProductsProps {
  "@type": "SomeProducts";
}
