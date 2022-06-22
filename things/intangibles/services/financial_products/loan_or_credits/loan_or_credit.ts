import { ThingType } from "../../../../thing.ts";
import { QuantitativeValue } from "../../../structured_values/quantitative_value.ts";
import { RepaymentSpecification } from "../../../structured_values/repayment_specification.ts";
import { Duration } from "../../../quantities/duration.ts";
import { Boolean, Number, Text, URL } from "../../../../../data_types.ts";
import { MonetaryAmount } from "../../../structured_values/monetary_amount.ts";
import { ServiceProps } from "../../service.ts";
import { FinancialProductProps } from "../financial_product.ts";
import { ThingProps } from "../../../../thing.ts";

export interface LoanOrCreditProps
  extends FinancialProductProps, ServiceProps, ThingProps {
  /** The amount of money.
   * @see https://schema.org/LoanOrCredit
   */
  amount: MonetaryAmount | Number;

  /** The currency in which the monetary amount is expressed.
   *
   * Use standard formats: {@link https://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
   * @see https://schema.org/currency
   */
  currency: Text;

  /** The period of time after any due date that the borrower has to fulfil its obligations before a default (failure to pay) is deemed to have occurred.
   * @see https://schema.org/gracePeriod
   * @deprecated
   */
  gracePeriod: Duration;

  /** A form of paying back money previously borrowed from a lender. Repayment usually takes the form of periodic payments that normally include part principal plus interest in each payment.
   * @see https://schema.org/loanRepaymentForm
   * @deprecated
   */
  loanRepaymentForm: RepaymentSpecification;

  /** The duration of the loan or credit agreement.
   * @see https://schema.org/loanTerm
   */
  loanTerm: QuantitativeValue;

  /** The type of a loan or credit.
   * @see https://schema.org/loanType
   * @deprecated
   */
  loanType: Text | URL;

  /** The only way you get the money back in the event of default is the security. Recourse is where you still have the opportunity to go back to the borrower for the rest of the money.
   * @see https://schema.org/recourseLoan
   * @deprecated
   */
  recourseLoan: Boolean;

  /** Whether the terms for payment of interest can be renegotiated during the life of the loan.
   * @see https://schema.org/renegotiableLoan
   * @deprecated
   */
  renegotiableLoan: Boolean;

  /** Assets required to secure loan or credit repayments. It may take form of third party pledge, goods, financial instruments (cash, securities, etc.)
   * @see https://schema.org/requiredCollateral
   */
  requiredCollateral: Text | ThingType;
}

/** A financial product for the loaning of an amount of money, or line of credit, under agreed terms and charges.
 * @see https://schema.org/LoanOrCredit
 */
export interface LoanOrCredit extends LoanOrCreditProps {
  "@type": "LoanOrCredit";
}

export type LoanOrCreditType = LoanOrCredit;
