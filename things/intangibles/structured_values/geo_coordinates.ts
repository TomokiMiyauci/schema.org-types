import { Country } from "../../places/administrative_areas/country.ts";
import { Number, Text } from "../../../data_types.ts";
import { PostalAddress } from "./contact_points/postal_address.ts";
import { ThingProps } from "../../thing.ts";

export interface GeoCoordinatesProps extends ThingProps {
  /** Physical address of the item.
   * @see https://schema.org/address
   */
  address: PostalAddress | Text;

  /** The country. For example, USA. You can also provide the two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}.
   * @see https://schema.org/addressCountry
   */
  addressCountry: Country | Text;

  /** The elevation of a location ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). Values may be of the form 'NUMBER UNITOFMEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
   * @see https://schema.org/elevation
   */
  elevation: Text | Number;

  /** The latitude of a location. For example 37.42242 ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}).
   * @see https://schema.org/latitude
   */
  latitude: Text | Number;

  /** The longitude of a location. For example -122.08585 ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}).
   * @see https://schema.org/longitude
   */
  longitude: Text | Number;

  /** The postal code. For example, 94043.
   * @see https://schema.org/postalCode
   */
  postalCode: Text;
}

/** The geographic coordinates of a place or event.
 * @see https://schema.org/GeoCoordinates
 */
export interface GeoCoordinates extends GeoCoordinatesProps {
  "@type": "GeoCoordinates";
}
