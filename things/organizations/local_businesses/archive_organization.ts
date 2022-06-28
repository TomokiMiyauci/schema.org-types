import { ArchiveComponent } from "../../creative_works/archive_component.ts";
import { PlaceProps } from "../../places/place.ts";
import { OrganizationProps } from "../organization.ts";
import { LocalBusinessProps } from "./local_business.ts";
import { ThingProps } from "../../thing.ts";

export interface ArchiveOrganizationProps
  extends LocalBusinessProps, OrganizationProps, PlaceProps, ThingProps {
  /** Collection, {@link https://en.wikipedia.org/wiki/Fonds fonds}, or item held, kept or maintained by an {@link ArchiveOrganization}.
   * @see https://schema.org/archiveHeld
   * @deprecated
   */
  archiveHeld: ArchiveComponent;
}

/** An organization with archival holdings. An organization which keeps and preserves archival material and typically makes it accessible to the public.
 * @see https://schema.org/ArchiveOrganization
 * @deprecated
 */
export interface ArchiveOrganization extends ArchiveOrganizationProps {
  "@type": "ArchiveOrganization";
}
