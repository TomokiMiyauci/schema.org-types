import {
  Boolean,
  Date,
  DateTime,
  Number,
  Text,
} from "../../../../data_types.ts";
import { QuantitativeValue } from "../quantitative_value.ts";
import { ThingProps } from "../../../thing.ts";

export interface PriceSpecificationProps extends ThingProps {
  /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
   * @see https://schema.org/eligibleQuantity
   */
  eligibleQuantity: QuantitativeValue;

  /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
   * @see https://schema.org/eligibleTransactionVolume
   */
  eligibleTransactionVolume: PriceSpecificationType;

  /** The highest price if the price is a range.
   * @see https://schema.org/maxPrice
   */
  maxPrice: Number;

  /** The lowest price if the price is a range.
   * @see https://schema.org/minPrice
   */
  minPrice: Number;

  /** The offer price of a product, or of a price component when attached to PriceSpecification and its subtypes.
   *
   * Usage guidelines:
   * - Use the {@link priceCurrency} property (with standard formats: {@link https://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR") instead of including {@link https://en.wikipedia.org/wiki/Dollar_sign#Currencies_that_use_the_dollar_or_peso_sign ambiguous symbols} such as '$' in the value.
   * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   * - Note that both {@link https://www.w3.org/TR/xhtml-rdfa-primer/#using-the-content-attribute RDFa} and Microdata syntax allow the use of a "content=" attribute for publishing simple machine-readable values alongside more human-friendly formatting.
   * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
   * @see https://schema.org/price
   */
  price: Number | Text;

  /** The currency of the price, or a price component when attached to {@link PriceSpecification} and its subtypes.
   *
   * Use standard formats: {@link https://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for Local Exchange Tradings Systems (LETS) and other currency types e.g. "Ithaca HOUR".
   * @see https://schema.org/priceCurrency
   */
  priceCurrency: Text;

  /** The date when the item becomes valid.
   * @see https://schema.org/validFrom
   */
  validFrom: Date | DateTime;

  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   * @see https://schema.org/validThrough
   */
  validThrough: Date | DateTime;

  /** Specifies whether the applicable value-added tax (VAT) is included in the price specification or not.
   * @see https://schema.org/valueAddedTaxIncluded
   */
  valueAddedTaxIncluded: Boolean;
}

/** A structured value representing a price or price range. Typically, only the subclasses of this type are used for markup. It is recommended to use {@link MonetaryAmount} to describe independent amounts of money such as a salary, credit card limits, etc.
 * @see https://schema.org/PriceSpecification
 */
export interface PriceSpecification extends PriceSpecificationProps {
  "@type": "PriceSpecification";
}

export type PriceSpecificationType = PriceSpecification;
