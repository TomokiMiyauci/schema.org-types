import { BroadcastServiceType } from "../../intangibles/services/broadcast_services/broadcast_service.ts";
import { PersonType } from "../../persons/person.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { EventProps } from "../event.ts";
import { ThingProps } from "../../thing.ts";

export interface PublicationEventProps extends EventProps, ThingProps {
  /** An agent associated with the publication event.
   * @see https://schema.org/publishedBy
   */
  publishedBy: OrganizationType | PersonType;

  /** A broadcast service associated with the publication event.
   * @see https://schema.org/publishedOn
   */
  publishedOn: BroadcastServiceType;
}

/** A PublicationEvent corresponds indifferently to the event of publication for a CreativeWork of any type e.g. a broadcast event, an on-demand event, a book/journal publication via a variety of delivery media.
 * @see https://schema.org/PublicationEvent
 */
export interface PublicationEvent extends PublicationEventProps {
  "@type": "PublicationEvent";
}

export type PublicationEventType = PublicationEvent;
