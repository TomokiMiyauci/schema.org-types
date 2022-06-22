/** Specifies that a refund can be done as an exchange for the same product.
 * @see https://schema.org/ExchangeRefund
 * @deprecated
 */
export type ExchangeRefund = "https://schema.org/ExchangeRefund";

/** Specifies that a refund can be done in the full amount the customer paid for the product.
 * @see https://schema.org/FullRefund
 * @deprecated
 */
export type FullRefund = "https://schema.org/FullRefund";

/** Specifies that the customer receives a store credit as refund when returning a product
 * @see https://schema.org/StoreCreditRefund
 * @deprecated
 */
export type StoreCreditRefund = "https://schema.org/StoreCreditRefund";

/** Enumerates several kinds of product return refund types.
 * @see https://schema.org/RefundTypeEnumeration
 * @deprecated
 */
export type RefundTypeEnumeration =
  | ExchangeRefund
  | FullRefund
  | StoreCreditRefund;
