/** Indicated that creating a return label is the responsibility of the customer.
 * @see https://schema.org/ReturnLabelCustomerResponsibility
 * @deprecated
 */
export type ReturnLabelCustomerResponsibility =
  "https://schema.org/ReturnLabelCustomerResponsibility";

/** Indicated that a return label must be downloaded and printed by the customer.
 * @see https://schema.org/ReturnLabelDownloadAndPrint
 * @deprecated
 */
export type ReturnLabelDownloadAndPrint =
  "https://schema.org/ReturnLabelDownloadAndPrint";

/** Specifies that a return label will be provided by the seller in the shipping box.
 * @see https://schema.org/ReturnLabelInBox
 * @deprecated
 */
export type ReturnLabelInBox = "https://schema.org/ReturnLabelInBox";

/** Enumerates several types of return labels for product returns.
 * @see https://schema.org/ReturnLabelSourceEnumeration
 * @deprecated
 */
export type ReturnLabelSourceEnumeration =
  | ReturnLabelCustomerResponsibility
  | ReturnLabelDownloadAndPrint
  | ReturnLabelInBox;
