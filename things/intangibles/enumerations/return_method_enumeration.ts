/** Specifies that product returns must be made at a kiosk.
 * @see https://schema.org/ReturnAtKiosk
 * @deprecated
 */
export type ReturnAtKiosk = "https://schema.org/ReturnAtKiosk";

/** Specifies that product returns must to be done by mail.
 * @see https://schema.org/ReturnByMail
 * @deprecated
 */
export type ReturnByMail = "https://schema.org/ReturnByMail";

/** Specifies that product returns must be made in a store.
 * @see https://schema.org/ReturnInStore
 * @deprecated
 */
export type ReturnInStore = "https://schema.org/ReturnInStore";

/** Enumerates several types of product return methods.
 * @see https://schema.org/ReturnMethodEnumeration
 * @deprecated
 */
export type ReturnMethodEnumeration =
  | ReturnAtKiosk
  | ReturnByMail
  | ReturnInStore;
