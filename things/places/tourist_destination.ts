import { TouristAttraction } from "./tourist_attraction.ts";
import { AudienceType } from "./../intangibles/audiences/audience.ts";
import { Text } from "./../../data_types.ts";
import { PlaceProps } from "./place.ts";
import { ThingProps } from "../thing.ts";

export interface TouristDestinationProps extends PlaceProps, ThingProps {
  /** Attraction located at destination.
   * @see https://schema.org/includesAttraction
   * @deprecated
   */
  includesAttraction: TouristAttraction;

  /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc.
   * @see https://schema.org/touristType
   */
  touristType: AudienceType | Text;
}

/** A tourist destination. In principle any {@link Place} can be a {@link TouristDestination} from a City, Region or {@link Country} to an {@link AmusementPark} or {@link Hotel}. This Type can be used on its own to describe a general {@link TouristDestination}, or be used as an {@link additionalType} to add tourist relevant properties to any other {@link Place}. A {@link TouristDestination} is defined as a Place that contains, or is colocated with, one or more {@link TouristAttractions}, often linked by a similar theme or interest to a particular {@link touristType}. The {@link UNWTO} defines Destination (main destination of a tourism trip) as the place visited that is central to the decision to take the trip.
 * @see https://schema.org/TouristAttraction
 * @deprecated
 */
export interface TouristDestination extends TouristDestinationProps {
  "@type": "TouristDestination";
}
