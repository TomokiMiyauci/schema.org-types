import { EntryPoint } from "../intangibles/entry_point.ts";
import { VirtualLocation } from "../intangibles/virtual_location.ts";
import { PostalAddress } from "../intangibles/structured_values/contact_points/postal_address.ts";
import { PlaceType } from "../places/place.ts";
import { DateTime, Text, Time } from "../../data_types.ts";
import { PersonType } from "../persons/person.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { ActionStatusType } from "../intangibles/enumerations/status_enumerations/action_status_type.ts";
import { ThingProps, ThingType } from "../thing.ts";

export interface ActionProps extends ThingProps {
  /** Indicates the current disposition of the Action.
   * @see https://schema.org/actionStatus
   */
  actionStatus: ActionStatusType;

  /** The direct performer or driver of the action (animate or inanimate). e.g. John wrote a book.
   * @see https://schema.org/agent
   */
  agent: OrganizationType | PersonType;

  /** The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
   *
   * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/endTime
   */
  endTime: DateTime | Time;

  /** For failed actions, more information on the cause of the failure.
   * @see https://schema.org/error
   */
  error: ThingType;

  /** The object that helped the agent perform the action. e.g. John wrote a book with a pen.
   * @see https://schema.org/instrument
   */
  instrument: ThingType;

  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   * @see https://schema.org/location
   */
  location: PlaceType | PostalAddress | Text | VirtualLocation;

  /** The object upon which the action is carried out, whose state is kept intact or changed. Also known as the semantic roles patient, affected or undergoer (which change their state) or theme (which doesn't). e.g. John read a book.
   * @see https://schema.org/object
   */
  object: ThingType;

  /** Other co-agents that participated in the action indirectly. e.g. John wrote a book with Steve.
   * @see https://schema.org/participant
   */
  participant: OrganizationType | PersonType;

  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   * @see https://schema.org/provider
   * @deprecated
   */
  provider: OrganizationType | PersonType;

  /** The result produced in the action. e.g. John wrote a book.
   * @see https://schema.org/result
   */
  result: ThingType;

  /** The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
   *
   * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/startTime
   */
  startTime: DateTime | Time;

  /** Indicates a target EntryPoint for an Action.
   * @see https://schema.org/target
   */
  target: EntryPoint;
}

/** An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.
 * @see {@link http://blog.schema.org/2014/04/announcing-schemaorg-actions.html blog post} and {@link http://blog.schema.org/2014/04/announcing-schemaorg-actions.html Actions overview document}.
 * @see https://schema.org/Action
 */
export interface Action extends ActionProps {
  "@type": "Action";
}

export type ActionType = Action;
