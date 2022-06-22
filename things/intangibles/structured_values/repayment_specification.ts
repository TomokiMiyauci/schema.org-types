import { Number } from "../../../data_types.ts";
import { MonetaryAmount } from "./monetary_amount.ts";
import { ThingProps } from "../../thing.ts";

export interface RepaymentSpecificationProps extends ThingProps {
  /** a type of payment made in cash during the onset of the purchase of an expensive good/service. The payment typically represents only a percentage of the full purchase price.
   * @see https://schema.org/downPayment
   * @deprecated
   */
  downPayment: MonetaryAmount | Number;

  /** The amount to be paid as a penalty in the event of early payment of the loan.
   * @see https://schema.org/earlyPrepaymentPenalty
   * @deprecated
   */
  earlyPrepaymentPenalty: MonetaryAmount;

  /** The amount of money to pay in a single payment.
   * @see https://schema.org/loanPaymentAmount
   * @deprecated
   */
  loanPaymentAmount: MonetaryAmount;

  /** Frequency of payments due, i.e. number of months between payments. This is defined as a frequency, i.e. the reciprocal of a period of time.
   * @see https://schema.org/loanPaymentFrequency
   * @deprecated
   */
  loanPaymentFrequency: Number;

  /** The number of payments contractually required at origination to repay the loan. For monthly paying loans this is the number of months from the contractual first payment date to the maturity date.
   * @see https://schema.org/numberOfLoanPayments
   * @deprecated
   */
  numberOfLoanPayments: Number;
}

/** A structured value representing repayment.
 * @see https://schema.org/RepaymentSpecification
 * @deprecated
 */
export interface RepaymentSpecification extends RepaymentSpecificationProps {
  "@type": "RepaymentSpecification";
}
