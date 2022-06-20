import { ThingProps, ThingType } from "./thing.ts";

export interface EventProps extends ThingProps {
  about: ThingType;
}

/** An event happening at a certain time and location, such as a concert, lecture, or festival. Ticketing information may be added via the {@link Offers} property. Repeated events may be structured as separate Event objects.
 * @see https://schema.org/Event
 */
export interface Event extends EventProps {
  "@type": "Event";
}

export type EventType = Event;
