import { Text } from "../../../data_types.ts";
import { PlaceProps } from "../../places/place.ts";
import { OrganizationProps } from "../organization.ts";
import { ThingProps } from "../../thing.ts";

export interface LocalBusinessProps
  extends OrganizationProps, PlaceProps, ThingProps {
  /** Use standard formats: {@link https://en.wikipedia.org/wiki/ISO_4217 ISO 4217 currency format} e.g. "USD"; {@link https://en.wikipedia.org/wiki/List_of_cryptocurrencies Ticker symbol} for cryptocurrencies e.g. "BTC"; well known names for {@link https://en.wikipedia.org/wiki/Local_exchange_trading_system Local Exchange Tradings Systems} (LETS) and other currency types e.g. "Ithaca HOUR".
   * @see https://schema.org/currenciesAccepted
   */
  currenciesAccepted: Text;

  /** The general opening hours for a business. Opening hours can be specified as a weekly time range, starting with days, then times per day. Multiple days can be listed with commas ',' separating each day. Day or time ranges are specified using a hyphen '-'.
   * - Days are specified using the following two-letter combinations: Mo, Tu, We, Th, Fr, Sa, Su.
   * - Times are specified using 24:00 format. For example, 3pm is specified as 15:00, 10am as 10:00.
   * - Here is an example: <time itemprop="openingHours" datetime="Tu,Th 16:00-20:00">Tuesdays and Thursdays 4-8pm</time>.
   * - If a business is open 7 days a week, then it can be specified as <time itemprop="openingHours" datetime="Mo-Su">Monday through Sunday, all day</time>.
   * @see https://schema.org/openingHours
   */
  openingHours: Text;

  /** Cash, Credit Card, Cryptocurrency, Local Exchange Tradings System, etc.
   * @see https://schema.org/paymentAccepted
   */
  paymentAccepted: Text;

  /** The price range of the business, for example $$$.
   * @see https://schema.org/priceRange
   */
  priceRange: Text;
}

/** A particular physical business or branch of an organization. Examples of LocalBusiness include a restaurant, a particular branch of a restaurant chain, a branch of a bank, a medical practice, a club, a bowling alley, etc.
 * @see https://schema.org/LocalBusiness
 */
export interface LocalBusiness extends LocalBusinessProps {
  "@type": "LocalBusiness";
}

export type LocalBusinessType = LocalBusiness;
