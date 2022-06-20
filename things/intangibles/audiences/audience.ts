import { ThingProps } from "../../thing.ts";
import { Text } from "../../../data_types.ts";
import { AdministrativeAreaType } from "../../places/administrative_areas/administrative_area.ts";

export interface AudienceProps extends ThingProps {
  /** The target group associated with a given audience (e.g. veterans, car owners, musicians, etc.).
   * @see https://schema.org/audienceType
   */
  audienceType: Text;

  /** The geographic area associated with the audience.
   * @see https://schema.org/geographicArea
   */
  geographicArea: AdministrativeAreaType;
}

/** Intended audience for an item, i.e. the group for whom the item was created.
 * @see https://schema.org/Audience
 */
export interface Audience extends AudienceProps {
  "@type": "Audience";
}

export type AudienceType = Audience;
