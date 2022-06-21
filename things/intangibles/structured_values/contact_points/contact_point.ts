import { ProductType } from "../../../products/product.ts";
import { OpeningHoursSpecification } from "../opening_hours_specification.ts";
import { ContactPointOption } from "../../enumerations/contact_point_option.ts";
import { Language } from "../../language.ts";
import { Text } from "../../../../data_types.ts";
import { PlaceType } from "../../../places/place.ts";
import { GeoShapeType } from "../geo_shapes/geo_shape.ts";
import { AdministrativeAreaType } from "../../../places/administrative_areas/administrative_area.ts";
import { ThingProps } from "../../../thing.ts";

export interface ContactPointProps extends ThingProps {
  /** The geographic area where a service or offered item is provided.
   * @see https://schema.org/areaServed
   */
  areaServed: AdministrativeAreaType | GeoShapeType | PlaceType | Text;

  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link http://tools.ietf.org/html/bcp47 IETF BCP 47 standard}. See also {@link inLanguage}
   * @see https://schema.org/availableLanguage
   */
  availableLanguage: Language | Text;

  /** An option available on this contact point (e.g. a toll-free number or support for hearing-impaired callers).
   * @see https://schema.org/contactOption
   */
  contactOption: ContactPointOption;

  /** A person or organization can have different contact points, for different purposes. For example, a sales contact point, a PR contact point and so on. This property is used to specify the kind of contact point.
   * @see https://schema.org/contactType
   */
  contactType: Text;

  /** Email address.
   * @see https://schema.org/email
   */
  email: Text;

  /** The fax number.
   * @see https://schema.org/faxNumber
   */
  faxNumber: Text;

  /** The hours during which this service or contact is available.
   * @see https://schema.org/hoursAvailable
   */
  hoursAvailable: OpeningHoursSpecification;

  /** The product or service this support contact point is related to (such as product support for a particular product line). This can be a specific product or product line (e.g. "iPhone") or a general category of products or services (e.g. "smartphones").
   * @see https://schema.org/productSupported
   */
  productSupported: ProductType | Text;

  /** The telephone number.
   * @see https://schema.org/telephone
   */
  telephone: Text;
}

/** A contact point—for example, a Customer Complaints department.
 * @see https://schema.org/ContactPoint
 */
export interface ContactPoint extends ContactPointProps {
  "@type": "ContactPoint";
}

export type ContactPointType = ContactPoint;
