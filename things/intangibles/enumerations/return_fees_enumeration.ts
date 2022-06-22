/** Specifies that product returns are free of charge for the customer.
 * @see https://schema.org/FreeReturn
 */
export type FreeReturn = "https://schema.org/FreeReturn";

/** Specifies that the customer must pay the original shipping costs when returning a product.
 * @see https://schema.org/OriginalShippingFees
 */
export type OriginalShippingFees = "https://schema.org/OriginalShippingFees";

/** Specifies that the customer must pay a restocking fee when returning a product
 * @see https://schema.org/RestockingFees
 */
export type RestockingFees = "https://schema.org/RestockingFees";

/** Specifies that product returns must be paid for, and are the responsibility of, the customer.
 * @see https://schema.org/ReturnFeesCustomerResponsibility
 */
export type ReturnFeesCustomerResponsibility =
  "https://schema.org/ReturnFeesCustomerResponsibility";

/** Specifies that the customer must pay the return shipping costs when returning a product
 * @see https://schema.org/ReturnShippingFees
 */
export type ReturnShippingFees = "https://schema.org/ReturnShippingFees";

/** Enumerates several kinds of policies for product return fees.
 * @see https://schema.org/ReturnFeesEnumeration
 * @deprecated
 */
export type ReturnFeesEnumeration =
  | FreeReturn
  | OriginalShippingFees
  | RestockingFees
  | ReturnFeesCustomerResponsibility
  | ReturnShippingFees;
