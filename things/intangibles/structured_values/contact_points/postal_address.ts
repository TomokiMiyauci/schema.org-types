import { Country } from "../../../places/administrative_areas/country.ts";
import { ThingProps } from "../../../thing.ts";
import { ContactPointProps } from "./contact_point.ts";
import { Text } from "../../../../data_types.ts";

export interface PostalAddressProps extends ContactPointProps, ThingProps {
  /** The country. For example, USA. You can also provide the two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}.
   * @see https://schema.org/addressCountry
   */
  addressCountry: Country | Text;

  /** The locality in which the street address is, and which is in the region. For example, Mountain View.
   * @see https://schema.org/addressLocality
   */
  addressLocality: Text;

  /** The region in which the locality is, and which is in the country. For example, California or another appropriate first-level {@link https://en.wikipedia.org/wiki/List_of_administrative_divisions_by_country Administrative division}
   * @see https://schema.org/addressRegion
   */
  addressRegion: Text;

  /** The post office box number for PO box addresses.
   * @see https://schema.org/postOfficeBoxNumber
   */
  postOfficeBoxNumber: Text;

  /** The postal code. For example, 94043.
   * @see https://schema.org/postalCode
   */
  postalCode: Text;

  /** The street address. For example, 1600 Amphitheatre Pkwy.
   * @see https://schema.org/streetAddress
   */
  streetAddress: Text;
}

/** The mailing address.
 * @see https://schema.org/PostalAddress
 */
export interface PostalAddress extends PostalAddressProps {
  "@type": "PostalAddress";
}
