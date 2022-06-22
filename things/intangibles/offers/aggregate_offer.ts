import { Integer, Number, Text } from "../../../data_types.ts";
import { OfferProps } from "./offer.ts";
import { ThingProps } from "../../thing.ts";
import { Offer } from "../offers/offer.ts";
import { Demand } from "../demand.ts";

export interface AggregateOfferProps extends OfferProps, ThingProps {
  /** The highest price of all offers available.
   *
   * Usage guidelines:
   * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
   * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   * @see https://schema.org/highPrice
   */
  highPrice: Number | Text;

  /** The lowest price of all offers available.
   *
   * Usage guidelines:
   * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
   * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   * @see https://schema.org/lowPrice
   */
  lowPrice: Number | Text;

  /** The number of offers for the product.
   * @see https://schema.org/offerCount
   */
  offerCount: Integer;

  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   * @deprecated
   */
  offers: Demand | Offer;
}

/** When a single product is associated with multiple offers (for example, the same pair of shoes is offered by different merchants), then AggregateOffer can be used.
 *
 * @remark AggregateOffers are normally expected to associate multiple offers that all share the same defined {@link businessFunction} value, or default to http://purl.org/goodrelations/v1#Sell if businessFunction is not explicitly defined.
 * @see https://schema.org/AggregateOffer
 */
export interface AggregateOffer extends AggregateOfferProps {
  "@type": "AggregateOffer";
}
