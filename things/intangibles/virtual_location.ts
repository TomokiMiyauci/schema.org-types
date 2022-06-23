import { ThingProps } from "../thing.ts";

// deno-lint-ignore no-empty-interface
export interface VirtualLocationProps extends ThingProps {}

/** An online or virtual location for attending events. For example, one may attend an online seminar or educational event. While a virtual location may be used as the location of an event, virtual locations should not be confused with physical locations in the real world.
 * @see https://schema.org/VirtualLocation
 * @deprecated
 */
export interface VirtualLocation extends VirtualLocationProps {
  "@type": "VirtualLocation";
}
