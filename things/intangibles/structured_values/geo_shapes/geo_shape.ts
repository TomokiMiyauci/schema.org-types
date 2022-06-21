import { ThingProps } from "../../../thing.ts";
import { Country } from "../../../places/administrative_areas/country.ts";
import { Number, Text } from "../../../../data_types.ts";
import { PostalAddress } from "../contact_points/postal_address.ts";

export interface GeoShapeProps extends ThingProps {
  /** Physical address of the item.
   * @see https://schema.org/address
   */
  address: PostalAddress | Text;

  /** The country. For example, USA. You can also provide the two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}.
   * @see https://schema.org/addressCountry
   */
  addressCountry: Country | Text;

  /** A box is the area enclosed by the rectangle formed by two points. The first point is the lower corner, the second point is the upper corner. A box is expressed as two points separated by a space character.
   * @see https://schema.org/box
   */
  box: Text;

  /** A circle is the circular region of a specified radius centered at a specified latitude and longitude. A circle is expressed as a pair followed by a radius in meters.
   * @see https://schema.org/circle
   */
  circle: Text;

  /** The elevation of a location ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}). Values may be of the form 'NUMBER UNITOFMEASUREMENT' (e.g., '1,000 m', '3,200 ft') while numbers alone should be assumed to be a value in meters.
   * @see https://schema.org/elevation
   */
  elevation: Number | Text;

  /** A line is a point-to-point path consisting of two or more points. A line is expressed as a series of two or more point objects separated by space.
   * @see https://schema.org/line
   */
  line: Text;

  /** A polygon is the area enclosed by a point-to-point path for which the starting and ending points are the same. A polygon is expressed as a series of four or more space delimited points where the first and final points are identical.
   * @see https://schema.org/polygon
   */
  polygon: Text;

  /** The postal code. For example, 94043.
   * @see https://schema.org/postalCode
   */
  postalCode: Text;
}

/** The geographic shape of a place. A GeoShape can be described using several properties whose values are based on latitude/longitude pairs.
 * Either whitespace or commas can be used to separate latitude and longitude; whitespace should be used when writing a list of several such points.
 * @see https://schema.org/GeoShape
 */
export interface GeoShape extends GeoShapeProps {
  "@type": "GeoShape";
}

export type GeoShapeType = GeoShape;
