import { DataFeedType } from "../datasets/data_feeds/data_feed.ts";
import { CreativeWorkType } from "../creative_work.ts";
import { ImageObjectType } from "../media_objects/image_objects/image_object.ts";
import { Text, URL } from "../../../data_types.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface SoftwareApplicationProps
  extends CreativeWorkProps, ThingProps {
  /** Type of software application, e.g. 'Game, Multimedia'.
   * @see https://schema.org/applicationCategory
   */
  applicationCategory: Text | URL;

  /** Subcategory of the application, e.g. 'Arcade Game'.
   * @see https://schema.org/applicationSubCategory
   */
  applicationSubCategory: Text | URL;

  /** The name of the application suite to which the application belongs (e.g. Excel belongs to Office).
   * @see https://schema.org/applicationSuite
   */
  applicationSuite: Text;

  /** Device required to run the application. Used in cases where a specific make/model is required to run the application.
   * @see https://schema.org/availableOnDevice
   */
  availableOnDevice: Text;

  /** Countries for which the application is not supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
   * @see https://schema.org/countriesNotSupported
   */
  countriesNotSupported: Text;

  /** Countries for which the application is supported. You can also provide the two-letter ISO 3166-1 alpha-2 country code.
   * @see https://schema.org/countriesSupported
   */
  countriesSupported: Text;

  /** If the file can be downloaded, URL to download the binary.
   * @see https://schema.org/downloadUrl
   */
  downloadUrl: URL;

  /** Features or modules provided by this application (and possibly required by other applications).
   * @see https://schema.org/featureList
   */
  featureList: Text | URL;

  /** Size of the application / package (e.g. 18MB). In the absence of a unit (MB, KB etc.), KB will be assumed.
   * @see https://schema.org/fileSize
   */
  fileSize: Text;

  /** URL at which the app may be installed, if different from the URL of the item.
   * @see https://schema.org/installUrl
   */
  installUrl: URL;

  /** Minimum memory requirements.
   * @see https://schema.org/memoryRequirements
   */
  memoryRequirements: Text | URL;

  /** Operating systems supported (Windows 7, OSX 10.6, Android 1.6).
   * @see https://schema.org/operatingSystem
   */
  operatingSystem: Text;

  /** Permission(s) required to run the app (for example, a mobile app may require full internet access or may run only on wifi).
   * @see https://schema.org/permissions
   */
  permissions: Text;

  /** Processor architecture required to run the application (e.g. IA64).
   * @see https://schema.org/processorRequirements
   */
  processorRequirements: Text;

  /** Description of what changed in this version.
   * @see https://schema.org/releaseNotes
   */
  releaseNotes: Text | URL;

  /** A link to a screenshot image of the app.
   * @see https://schema.org/screenshot
   */
  screenshot: ImageObjectType | URL;

  /** Additional content for a software application.
   * @see https://schema.org/softwareAddOn
   */
  softwareAddOn: SoftwareApplicationType;

  /** Software application help.
   * @see https://schema.org/softwareHelp
   */
  softwareHelp: CreativeWorkType;

  /** Component dependency requirements for application. This includes runtime environments and shared libraries that are not included in the application distribution package, but required to run the application (Examples: DirectX, Java or .NET runtime).
   * @see https://schema.org/softwareRequirements
   */
  softwareRequirements: Text | URL;

  /** Version of the software instance.
   * @see https://schema.org/softwareVersion
   */
  softwareVersion: Text;

  /** Storage requirements (free space required).
   * @see https://schema.org/storageRequirements
   */
  storageRequirements: Text | URL;

  /** Supporting data for a SoftwareApplication.
   * @see https://schema.org/supportingData
   */
  supportingData: DataFeedType;
}

/** A software application.
 * @see https://schema.org/SoftwareApplication
 */
export interface SoftwareApplication extends SoftwareApplicationProps {
  "@type": "SoftwareApplication";
}

export type SoftwareApplicationType = SoftwareApplication;
