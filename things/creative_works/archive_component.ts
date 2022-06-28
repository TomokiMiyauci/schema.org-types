import { Text } from "./../../data_types.ts";
import { PostalAddress } from "./../intangibles/structured_values/contact_points/postal_address.ts";
import { PlaceType } from "./../places/place.ts";
import { ArchiveOrganization } from "./../organizations/local_businesses/archive_organization.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface ArchiveComponentProps extends CreativeWorkProps, ThingProps {
  /** {@link ArchiveOrganization} that holds, keeps or maintains the {@link ArchiveComponent}.
   * @see https://schema.org/holdingArchive
   * @deprecated
   */
  holdingArchive: ArchiveOrganization;

  /** Current location of the item.
   * @see https://schema.org/itemLocation
   * @deprecated
   */
  itemLocation: PlaceType | PostalAddress | Text;
}

/** An intangible type to be applied to any archive content, carrying with it a set of properties required to describe archival items and collections.
 * @see https://schema.org/ArchiveComponent
 * @deprecated
 */
export interface ArchiveComponent extends ArchiveComponentProps {
  "@type": "ArchiveComponent";
}
