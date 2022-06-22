import { MonetaryAmount } from "../../../structured_values/monetary_amount.ts";
import { Boolean, Number } from "../../../../../data_types.ts";
import { ServiceProps } from "../../service.ts";
import { FinancialProductProps } from "../financial_product.ts";
import { ThingProps } from "../../../../thing.ts";

export interface PaymentCardProps
  extends FinancialProductProps, ServiceProps, ThingProps {
  /** A cardholder benefit that pays the cardholder a small percentage of their net expenditures.
   * @see https://schema.org/cashBack
   * @deprecated
   */
  cashBack: Boolean | Number;

  /** A secure method for consumers to purchase products or services via debit, credit or smartcards by using RFID or NFC technology.
   * @see https://schema.org/contactlessPayment
   * @deprecated
   */
  contactlessPayment: Boolean;

  /** A floor limit is the amount of money above which credit card transactions must be authorized.
   * @see https://schema.org/floorLimit
   * @deprecated
   */
  floorLimit: MonetaryAmount;

  /** The minimum payment is the lowest amount of money that one is required to pay on a credit card statement each month.
   * @see https://schema.org/monthlyMinimumRepaymentAmount
   * @deprecated
   */
  monthlyMinimumRepaymentAmount: MonetaryAmount | Number;
}

/** A payment method using a credit, debit, store or other card to associate the payment with an account.
 * @see https://schema.org/PaymentCard
 * @deprecated
 */
export interface PaymentCard extends PaymentCardProps {
  "@type": "PaymentCard";
}

export type PaymentCardType = PaymentCard;
