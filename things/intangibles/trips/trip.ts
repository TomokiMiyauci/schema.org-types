import { PersonType } from "../../persons/person.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { OfferType } from "../offers/offer.ts";
import { Demand } from "../demand.ts";
import { PlaceType } from "../../places/place.ts";
import { ItemListType } from "../../creative_works/item_lists/item_list.ts";
import { DateTime, Time } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";

export interface TripProps extends ThingProps {
  /** The expected arrival time.
   * @see https://schema.org/arrivalTime
   */
  arrivalTime: DateTime | Time;

  /** The expected departure time.
   * @see https://schema.org/departureTime
   */
  departureTime: DateTime | Time;

  /** Destination(s) ({@link Place}) that make up a trip. For a trip where destination order is important use {@link ItemList} to specify that order (see examples).
   * @see https://schema.org/itinerary
   * @deprecated
   */
  itinerary: ItemListType | PlaceType;

  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   */
  offers: Demand | OfferType;

  /** Identifies that this {@link Trip} is a subTrip of another Trip. For example Day 1, Day 2, etc. of a multi-day trip.
   * @see https://schema.org/partOfTrip
   * @deprecated
   */
  partOfTrip: TripType;

  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   * @see https://schema.org/provider
   * @deprecated
   */
  provider: OrganizationType | PersonType;

  /** Identifies a {@link Trip} that is a subTrip of this Trip. For example Day 1, Day 2, etc. of a multi-day trip.
   * @see https://schema.org/subTrip
   * @deprecated
   */
  subTrip: TripType;
}

/** A trip or journey. An itinerary of visits to one or more places.
 * @see　https://schema.org/Trip
 */
export interface Trip extends TripProps {
  "@type": "Trip";
}

export type TripType = Trip;
