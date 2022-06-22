import { PostalAddress } from "./structured_values/contact_points/postal_address.ts";
import { ContactPointType } from "./structured_values/contact_points/contact_point.ts";
import { PlaceType } from "../places/place.ts";
import { ServiceType } from "./services/service.ts";
import { Duration } from "./quantities/duration.ts";
import { Text, URL } from "./../../data_types.ts";
import { Language } from "./language.ts";
import { ThingProps } from "../thing.ts";

export interface ServiceChannelProps extends ThingProps {
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link https://www.rfc-editor.org/info/bcp47 IETF BCP 47 standard}. See also {@link inLanguage}
   * @see https://schema.org/availableLanguage
   */
  availableLanguage: Language | Text;

  /** Estimated processing time for the service using this channel.
   * @see https://schema.org/processingTime
   */
  processingTime: Duration;

  /** The service provided by this channel.
   * @see https://schema.org/providesService
   */
  providesService: ServiceType;

  /** The location (e.g. civic structure, local business, etc.) where a person can go to access the service.
   * @see https://schema.org/serviceLocation
   */
  serviceLocation: PlaceType;

  /** The phone number to use to access the service.
   * @see https://schema.org/servicePhone
   */
  servicePhone: ContactPointType;

  /** The address for accessing the service by mail.
   * @see https://schema.org/servicePostalAddress
   */
  servicePostalAddress: PostalAddress;

  /** The number to access the service by text message.
   * @see https://schema.org/serviceSmsNumber
   */
  serviceSmsNumber: ContactPointType;

  /** The website to access the service.
   * @see https://schema.org/serviceUrl
   */
  serviceUrl: URL;
}

/** A means for accessing a service, e.g. a government office location, web site, or phone number.
 * @see https://schema.org/ServiceChannel
 */
export interface ServiceChannel extends ServiceChannelProps {
  "@type": "ServiceChannel";
}
