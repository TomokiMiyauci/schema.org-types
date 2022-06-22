import { MonetaryAmount } from "./monetary_amount.ts";
import { DefinedRegion } from "./defined_region.ts";
import { Boolean, Text, URL } from "../../../data_types.ts";
import { ShippingDeliveryTime } from "./shipping_delivery_time.ts";
import { ThingProps } from "../../thing.ts";

export interface OfferShippingDetailsProps extends ThingProps {
  /** The total delay between the receipt of the order and the goods reaching the final customer.
   * @see https://schema.org/deliveryTime
   * @deprecated
   */
  deliveryTime: ShippingDeliveryTime;

  /** Indicates when shipping to a particular {@link shippingDestination} is not available.
   * @see https://schema.org/doesNotShip
   * @deprecated
   */
  doesNotShip: Boolean;

  /** indicates (possibly multiple) shipping destinations. These can be defined in several ways e.g. postalCode ranges.
   * @see https://schema.org/shippingDestination
   * @deprecated
   */
  shippingDestination: DefinedRegion;

  /** Label to match an {@link OfferShippingDetails} with a {@link ShippingRateSettings} (within the context of a {@link shippingSettingsLink} cross-reference).
   * @see https://schema.org/shippingLabel
   * @deprecated
   */
  shippingLabel: Text;

  /** The shipping rate is the cost of shipping to the specified destination. Typically, the maxValue and currency values (of the {@link MonetaryAmount}) are most appropriate.
   * @see https://schema.org/shippingRate
   * @deprecated
   */
  shippingRate: MonetaryAmount;

  /** Link to a page containing {@link ShippingRateSettings} and {@link DeliveryTimeSettings} details.
   * @see https://schema.org/shippingSettingsLink
   * @deprecated
   */
  shippingSettingsLink: URL;

  /** Label to match an {@link OfferShippingDetails} with a {@link DeliveryTimeSettings} (within the context of a {@link shippingSettingsLink} cross-reference).
   * @see https://schema.org/transitTimeLabel
   * @deprecated
   */
  transitTimeLabel: Text;
}

/** OfferShippingDetails represents information about shipping destinations.
 *
 * Multiple of these entities can be used to represent different shipping rates for different destinations:
 *
 * One entity for Alaska/Hawaii. A different one for continental US.A different one for all France.
 *
 * Multiple of these entities can be used to represent different shipping costs and delivery times.
 *
 * Two entities that are identical but differ in rate and time:
 *
 * e.g. Cheaper and slower: $5 in 5-7days or Fast and expensive: $15 in 1-2 days.
 * @see https://schema.org/OfferShippingDetails
 * @deprecated
 */
export interface OfferShippingDetails extends OfferShippingDetailsProps {
  "@type": "OfferShippingDetails";
}
