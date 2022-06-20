import { ThingProps } from "../../thing.ts";
import { PlaceProps } from "../place.ts";

export interface AdministrativeAreaProps extends PlaceProps, ThingProps {}

/** A geographical region, typically under the jurisdiction of a particular government.
 * @see https://schema.org/AdministrativeArea
 */
export interface AdministrativeArea extends AdministrativeAreaProps {
  "@type": "AdministrativeArea";
}

export type AdministrativeAreaType = AdministrativeArea;
