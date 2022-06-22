/** Specifies that there is a finite window for product returns.
 * @see https://schema.org/MerchantReturnFiniteReturnWindow
 * @deprecated
 */
export type MerchantReturnFiniteReturnWindow =
  "https://schema.org/MerchantReturnFiniteReturnWindow";

/** Specifies that product returns are not permitted.
 * @see https://schema.org/MerchantReturnNotPermitted
 * @deprecated
 */
export type MerchantReturnNotPermitted =
  "https://schema.org/MerchantReturnNotPermitted";

/** Specifies that there is an unlimited window for product returns.
 * @see https://schema.org/MerchantReturnUnlimitedWindow
 * @deprecated
 */
export type MerchantReturnUnlimitedWindow =
  "https://schema.org/MerchantReturnUnlimitedWindow";

/** Specifies that a product return policy is not provided.
 * @see https://schema.org/MerchantReturnUnspecified
 * @deprecated
 */
export type MerchantReturnUnspecified =
  "https://schema.org/MerchantReturnUnspecified";

/** Enumerates several kinds of product return policies.
 * @see https://schema.org/MerchantReturnEnumeration
 * @deprecated
 */
export type MerchantReturnEnumeration =
  | MerchantReturnFiniteReturnWindow
  | MerchantReturnNotPermitted
  | MerchantReturnUnlimitedWindow
  | MerchantReturnUnspecified;
