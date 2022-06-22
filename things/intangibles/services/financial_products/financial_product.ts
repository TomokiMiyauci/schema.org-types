import { QuantitativeValue } from "../../structured_values/quantitative_value.ts";
import { Number, Text, URL } from "../../../../data_types.ts";
import { ServiceProps } from "../service.ts";
import { ThingProps } from "../../../thing.ts";

export interface FinancialProductProps extends ServiceProps, ThingProps {
  /** The annual rate that is charged for borrowing (or made by investing), expressed as a single percentage number that represents the actual yearly cost of funds over the term of a loan. This includes any fees or additional costs associated with the transaction.
   * @see https://schema.org/annualPercentageRate
   */
  annualPercentageRate: Number | QuantitativeValue;

  /** Description of fees, commissions, and other terms applied either to a class of financial product, or by a financial service organization.
   * @see https://schema.org/feesAndCommissionsSpecification
   */
  feesAndCommissionsSpecification: Text | URL;

  /** The interest rate, charged or paid, applicable to the financial product. Note: This is different from the calculated annualPercentageRate.
   * @see https://schema.org/interestRate
   */
  interestRate: Number | QuantitativeValue;
}

/** A product provided to consumers and businesses by financial institutions such as banks, insurance companies, brokerage firms, consumer finance companies, and investment companies which comprise the financial services industry.
 * @see https://schema.org/FinancialProduct
 */
export interface FinancialProduct extends FinancialProductProps {
  "@type": "FinancialProduct";
}

export type FinancialProductType = FinancialProduct;
