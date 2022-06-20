import { PlaceProps } from "../place.ts";
import { ThingProps } from "../../thing.ts";

export interface CountryProps extends ThingProps, PlaceProps {}

/** A country.
 * @see https://schema.org/Country
 */
export interface Country extends CountryProps {
  "@type": "Country";
}
