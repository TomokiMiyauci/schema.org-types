/** A range of of services that will be provided to a customer free of charge in case of a defect or malfunction of a product.
 * @see https://schema.org/WarrantyScope
 */
export type WarrantyScope =
  | "http://purl.org/goodrelations/v1#Labor-BringIn"
  | "http://purl.org/goodrelations/v1#PartsAndLabor-BringIn"
  | "http://purl.org/goodrelations/v1#PartsAndLabor-PickUp";
