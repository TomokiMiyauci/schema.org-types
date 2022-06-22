import { WarrantyScope } from "../enumerations/warranty_scope.ts";
import { QuantitativeValue } from "./quantitative_value.ts";
import { ThingProps } from "../../thing.ts";

export interface WarrantyPromiseProps extends ThingProps {
  /** The duration of the warranty promise. Common unitCode values are ANN for year, MON for months, or DAY for days.
   * @see https://schema.org/durationOfWarranty
   */
  durationOfWarranty: QuantitativeValue;

  /** A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
   * @see https://schema.org/WarrantyScope
   */
  warrantyScope: WarrantyScope;
}

/** A structured value representing the duration and scope of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 * @see https://schema.org/WarrantyPromise
 */
export interface WarrantyPromise extends WarrantyPromiseProps {
  "@type": "WarrantyPromise";
}
