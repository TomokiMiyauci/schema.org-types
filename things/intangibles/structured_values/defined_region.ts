import { PostalCodeRangeSpecification } from "./postal_code_range_specification.ts";
import { Text } from "../../../data_types.ts";
import { Country } from "../../places/administrative_areas/country.ts";
import { ThingProps } from "../../thing.ts";

export interface DefinedRegionProps extends ThingProps {
  /** The country. For example, USA. You can also provide the two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}.
   * @see https://schema.org/addressCountry
   */
  addressCountry: Country | Text;

  /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level {@link https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country Administrative division}
   * @see https://schema.org/addressRegion
   */
  addressRegion: Text;

  /** The postal code. For example, 94043.
   * @see https://schema.org/postalCode
   */
  postalCode: Text;

  /** A defined range of postal codes indicated by a common textual prefix. Used for non-numeric systems such as UK.
   * @see https://schema.org/postalCodePrefix
   * @deprecated
   */
  postalCodePrefix: Text;

  /** A defined range of postal codes.
   * @see https://schema.org/postalCodeRange
   * @deprecated
   */
  postalCodeRange: PostalCodeRangeSpecification;
}

/** A DefinedRegion is a geographic area defined by potentially arbitrary (rather than political, administrative or natural geographical) criteria. Properties are provided for defining a region by reference to sets of postal codes.
 *
 * Examples: a delivery destination when shopping. Region where regional pricing is configured.
 *
 * Requirement 1: Country: US States: "NY", "CA"
 *
 * Requirement 2: Country: US PostalCode Set: { [94000-94585], [97000, 97999], [13000, 13599]} { [12345, 12345], [78945, 78945], } Region = state, canton, prefecture, autonomous community...
 * @see https://schema.org/DefinedRegion
 * @deprecated
 */
export interface DefinedRegion extends DefinedRegionProps {
  "@type": "DefinedRegion";
}
