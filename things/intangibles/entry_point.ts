import { Text, URL } from "../../data_types.ts";
import { DigitalPlatformEnumeration } from "./enumerations/digital_platform_enumeration.ts";
import { SoftwareApplicationType } from "../creative_works/software_applications/software_application.ts";
import { ThingProps } from "../thing.ts";

export interface EntryPointProps extends ThingProps {
  /** An application that can complete the request.
   * @see https://schema.org/actionApplication
   */
  actionApplication: SoftwareApplicationType;

  /** The high level platform(s) where the Action can be performed for the given URL. To specify a specific application or operating system instance, use actionApplication.
   * @see https://schema.org/actionPlatform
   */
  actionPlatform: DigitalPlatformEnumeration | Text | URL;

  /** The supported content type(s) for an EntryPoint response.
   * @see https://schema.org/contentType
   */
  contentType: Text;

  /** The supported encoding type(s) for an EntryPoint request.
   * @see https://schema.org/encodingType
   */
  encodingType: Text;

  /** An HTTP method that specifies the appropriate HTTP method for a request to an HTTP EntryPoint. Values are capitalized strings as used in HTTP.
   * @see https://schema.org/httpMethod
   */
  httpMethod: Text;

  /** An url template (RFC6570) that will be used to construct the target of the execution of the action.
   * @see https://schema.org/urlTemplate
   */
  urlTemplate: Text;
}

/** An entry point, within some Web-based protocol.
 * @see https://schema.org/EntryPoint
 */
export interface EntryPoint extends EntryPointProps {
  "@type": "EntryPoint";
}
