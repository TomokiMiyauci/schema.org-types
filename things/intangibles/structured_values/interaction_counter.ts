import { VirtualLocation } from "../virtual_location.ts";
import { Integer, Text } from "../../../data_types.ts";
import { PostalAddress } from "./contact_points/postal_address.ts";
import { PlaceType } from "../../places/place.ts";
import { ActionType } from "../../actions/action.ts";
import { WebPageType } from "../../creative_works/web_pages/web_page.ts";
import { SoftwareApplicationType } from "../../creative_works/software_applications/software_application.ts";
import { DateTime, Time } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";

export interface InteractionCounterProps extends ThingProps {
  /** The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
   *
   * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/endTime
   */
  endTime: DateTime | Time;

  /** A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
   * @see https://schema.org/WebSite
   */
  interactionService: SoftwareApplicationType | WebPageType;

  /** The Action representing the type of interaction. For up votes, +1s, etc. use {@link LikeAction}. For down votes use {@link DislikeAction}. Otherwise, use the most specific Action.
   * @see https://schema.org/interactionType
   */
  interactionType: ActionType;

  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   * @see https://schema.org/location
   */
  location: PlaceType | PostalAddress | Text | VirtualLocation;

  /** The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
   *
   * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/startTime
   */
  startTime: DateTime | Time;

  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication.
   * @see https://schema.org/userInteractionCount
   */
  userInteractionCount: Integer;
}

/** A summary of how users have interacted with this CreativeWork. In most cases, authors will use a subtype to specify the specific type of interaction.
 * @see https://schema.org/InteractionCounter
 */
export interface InteractionCounter extends InteractionCounterProps {
  "@type": "InteractionCounter";
}
