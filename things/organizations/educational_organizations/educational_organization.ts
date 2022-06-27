import { PersonType } from "../../persons/person.ts";
import { CivicStructureProps } from "../../places/civic_structures/civic_structure.ts";
import { PlaceProps } from "../../places/place.ts";
import { ThingProps } from "../../thing.ts";

export interface EducationalOrganizationProps
  extends CivicStructureProps, PlaceProps, ThingProps {
  /** Alumni of an organization.
   * @see https://schema.org/alumni
   */
  alumni: PersonType;
}

/** An educational organization.
 * @see https://schema.org/EducationalOrganization
 */
export interface EducationalOrganization extends EducationalOrganizationProps {
  "@type": "EducationalOrganization";
}

export type EducationalOrganizationType = EducationalOrganization;
