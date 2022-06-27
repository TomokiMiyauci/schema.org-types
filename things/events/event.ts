import { ReviewType } from "../creative_works/reviews/review.ts";
import { CreativeWorkType } from "../creative_works/creative_work.ts";
import { OfferType } from "../intangibles/offers/offer.ts";
import { Demand } from "../intangibles/demand.ts";
import { VirtualLocation } from "../intangibles/virtual_location.ts";
import { PostalAddress } from "../intangibles/structured_values/contact_points/postal_address.ts";
import { PlaceType } from "../places/place.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { Language } from "../intangibles/language.ts";
import { GrantType } from "../intangibles/grants/grant.ts";
import { EventStatusType } from "../intangibles/enumerations/status_enumerations/event_status_type.ts";
import { Schedule } from "../intangibles/schedule.ts";
import { EventAttendanceModeEnumeration } from "../intangibles/enumerations/event_attendance_mode_enumeration.ts";
import { Duration } from "../intangibles/quantities/duration.ts";
import {
  Boolean,
  Date,
  DateTime,
  Integer,
  Text,
  Time,
  URL,
} from "../../data_types.ts";
import { AudienceType } from "../intangibles/audiences/audience.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { AggregateRatingType } from "../intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { PersonType } from "../persons/person.ts";
import { ThingProps, ThingType } from "../thing.ts";

export interface EventProps extends ThingProps {
  /** The subject matter of the content.
   * @see https://schema.org/about
   */
  about: ThingType;

  /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor: PersonType;

  /** The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating: AggregateRatingType;

  /** A person or organization attending the event.
   * @see https://schema.org/attendee
   */
  attendee: OrganizationType | PersonType;

  /** An intended audience, i.e. a group for whom something was created.
   * @see https://schema.org/audience
   */
  audience: AudienceType;

  /** The person or organization who wrote a composition, or who is the composer of a work performed at some event.
   * @see https://schema.org/composer
   */
  composer: OrganizationType | PersonType;

  /** A secondary contributor to the CreativeWork or Event.
   * @see https://schema.org/contributor
   */
  contributor: OrganizationType | PersonType;

  /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director: PersonType;

  /** The time admission will commence.
   * @see https://schema.org/doorTime
   */
  doorTime: DateTime | Time;

  /** The duration of the item (movie, audio recording, event, etc.) in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}.
   * @see https://schema.org/duration
   */
  duration: Duration;

  /** The end date and time of the item (in {@link ISO 8601 date format}).
   * @see https://schema.org/endDate
   */
  endDate: Date | DateTime;

  /** The eventAttendanceMode of an event indicates whether it occurs online, offline, or a mix.
   * @see https://schema.org/eventAttendanceMode
   * @deprecated
   */
  eventAttendanceMode: EventAttendanceModeEnumeration;

  /** Associates an {@link Event} with a {@link Schedule}. There are circumstances where it is preferable to share a schedule for a series of repeating events rather than data on the individual events themselves. For example, a website or application might prefer to publish a schedule for a weekly gym class rather than provide data on every event. A schedule could be processed by applications to add forthcoming events to a calendar. An {@link Event} that is associated with a {@link Schedule} using this property should not have {@link startDate} or {@link endDate} properties. These are instead defined within the associated {@link Schedule}, this avoids any ambiguity for clients using the data. The property might have repeated values to specify different schedules, e.g. for different months or seasons.
   * @see https://schema.org/eventSchedule
   * @deprecated
   */
  eventSchedule: Schedule;

  /** An eventStatus of an event represents its status; particularly useful when an event is cancelled or rescheduled.
   * @see https://schema.org/eventStatus
   */
  eventStatus: EventStatusType;

  /** A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder: OrganizationType | PersonType;

  /** A {@link Grant} that directly or indirectly provide funding or sponsorship for this item. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/funding
   */
  funding: GrantType;

  /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link https://www.rfc-editor.org/info/bcp47 IETF BCP 47 standard}. See also {@link availableLanguage}.
   * @see https://schema.org/inLanguage
   */
  inLanguage: Language | Text;

  /** A flag to signal that the item, event, or place is accessible for free.
   * @see https://schema.org/isAccessibleForFree
   */
  isAccessibleForFree: Boolean;

  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   * @see https://schema.org/keywords
   */
  keywords: DefinedTermType | Text | URL;

  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   * @see https://schema.org/location
   */
  location: PlaceType | PostalAddress | Text | VirtualLocation;

  /** The total number of individuals that may attend an event or venue.
   * @see https://schema.org/maximumAttendeeCapacity
   */
  maximumAttendeeCapacity: Integer;

  /** The maximum physical attendee capacity of an {@link Event} whose {@link eventAttendanceMode} is {@link OfflineEventAttendanceMode} (or the offline aspects, in the case of a {@link MixedEventAttendanceMode}).
   * @see https://schema.org/maximumPhysicalAttendeeCapacity
   * @deprecated
   */
  maximumPhysicalAttendeeCapacity: Integer;

  /** The maximum physical attendee capacity of an {@link Event} whose {@link eventAttendanceMode} is {@link OnlineEventAttendanceMode} (or the online aspects, in the case of a {@link MixedEventAttendanceMode}).
   * @see https://schema.org/maximumVirtualAttendeeCapacity
   * @deprecated
   */
  maximumVirtualAttendeeCapacity: Integer;

  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   */
  offers: Demand | OfferType;

  /** An organizer of an Event.
   * @see https://schema.org/organizer
   */
  organizer: OrganizationType | PersonType;

  /** A performer at the event—for example, a presenter, musician, musical group or actor.
   * @see https://schema.org/performer
   */
  performer: OrganizationType | PersonType;

  /** Used in conjunction with eventStatus for rescheduled or cancelled events. This property contains the previously scheduled start date. For rescheduled events, the startDate property should be used for the newly scheduled start date. In the (rare) case of an event that has been postponed and rescheduled multiple times, this field may be repeated.
   * @see https://schema.org/previousStartDate
   */
  previousStartDate: Date;

  /** The CreativeWork that captured all or part of this Event.
   * @see https://schema.org/recordedIn
   */
  recordedIn: CreativeWorkType;

  /** The number of attendee places for an event that remain unallocated.
   * @see https://schema.org/remainingAttendeeCapacity
   */
  remainingAttendeeCapacity: Integer;

  /** A review of the item.
   * @see https://schema.org/review
   */
  review: ReviewType;

  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor: OrganizationType | PersonType;

  /** The start date and time of the item (in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}).
   * @see https://schema.org/startDate
   */
  startDate: Date | DateTime;

  /** An Event that is part of this event. For example, a conference event includes many presentations, each of which is a subEvent of the conference.
   * @see https://schema.org/subEvent
   */
  subEvent: EventType;

  /** An event that this event is a part of. For example, a collection of individual music performances might each have a music festival as their superEvent.
   * @see https://schema.org/superEvent
   */
  superEvent: EventType;

  /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
   * @see https://schema.org/translator
   */
  translator: OrganizationType | PersonType;

  /** The typical expected age range, e.g. '7-9', '11-'.
   * @see https://schema.org/typicalAgeRange
   */
  typicalAgeRange: Text;

  /** A work featured in some event, e.g. exhibited in an ExhibitionEvent. Specific subproperties are available for workPerformed (e.g. a play), or a workPresented (a Movie at a ScreeningEvent).
   * @see https://schema.org/workFeatured
   */
  workFeatured: CreativeWorkType;

  /** A work performed in some event, for example a play performed in a TheaterEvent.
   * @see https://schema.org/workPerformed
   */
  workPerformed: CreativeWorkType;
}

/** An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the {@link Offers} property. Repeated events may be structured as separate Event objects.
 * @see https://schema.org/Event
 */
export interface Event extends EventProps {
  "@type": "Event";
}

export type EventType = Event;
