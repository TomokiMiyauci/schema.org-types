import { Text } from "../../../../data_types.ts";
import { QuantitativeValueDistributionProps } from "./quantitative_value_distribution.ts";
import { ThingProps } from "../../../thing.ts";

export interface MonetaryAmountDistributionProps
  extends QuantitativeValueDistributionProps, ThingProps {
  /** The currency in which the monetary amount is expressed.
   *
   * Use standard formats: {@link https://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
   * @see https://schema.org/currency
   */
  currency: Text;
}

/** A statistical distribution of monetary amounts.
 * @see https://schema.org/MonetaryAmountDistribution
 */
export interface MonetaryAmountDistribution
  extends MonetaryAmountDistributionProps {
  "@type": "MonetaryAmountDistribution";
}
