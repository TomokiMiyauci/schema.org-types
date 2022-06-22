import { StructuredValueType } from "./structured_value.ts";
import { Boolean, Date, DateTime, Number, Text } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";

export interface MonetaryAmountProps extends ThingProps {
  /** The currency in which the monetary amount is expressed.
   *
   * Use standard formats: {@link https://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
   * @see https://schema.org/currency
   */
  currency: Text;

  /** The upper value of some characteristic or property.
   * @see https://schema.org/maxValue
   */
  maxValue: Number;

  /** The lower value of some characteristic or property.
   * @see https://schema.org/minValue
   */
  minValue: Number;

  /** The date when the item becomes valid.
   * @see https://schema.org/validFrom
   */
  validFrom: Date | DateTime;

  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   * @see https://schema.org/validThrough
   */
  validThrough: Date | DateTime;

  /** The value of the quantitative value or property value node.
   * - For {@link QuantitativeValue} and {@link MonetaryAmount}, the recommended type for values is 'Number'.
   * - For {@link PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
   * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
   * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   * @see https://schema.org/value
   */
  value: Boolean | Number | Text | StructuredValueType;
}

/** A monetary value or range. This type can be used to describe an amount of money such as $50 USD, or a range as in describing a bank account being suitable for a balance between £1,000 and £1,000,000 GBP, or the value of a salary, etc. It is recommended to use {@link PriceSpecification} Types to describe the price of an Offer, Invoice, etc.
 * @see https://schema.org/MonetaryAmount
 */
export interface MonetaryAmount extends MonetaryAmountProps {
  "@type": "MonetaryAmount";
}
