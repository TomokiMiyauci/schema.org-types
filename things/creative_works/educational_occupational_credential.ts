import { AdministrativeAreaType } from "../places/administrative_areas/administrative_area.ts";
import { Duration } from "../intangibles/quantities/duration.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { Text, URL } from "../../data_types.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface EducationalOccupationalCredentialProps
  extends CreativeWorkProps, ThingProps {
  /** Knowledge, skill, ability or personal attribute that must be demonstrated by a person or other entity in order to do something such as earn an Educational Occupational Credential or understand a LearningResource.
   * @see https://schema.org/competencyRequired
   * @deprecated
   */
  competencyRequired: DefinedTermType | Text | URL;

  /** The category or type of credential being described, for example "degree”, “certificate”, “badge”, or more specific term.
   * @see https://schema.org/credentialCategory
   * @deprecated
   */
  credentialCategory: DefinedTermType | Text | URL;

  /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
   * @see https://schema.org/educationalLevel
   * @deprecated
   */
  educationalLevel: DefinedTermType | Text | URL;

  /** An organization that acknowledges the validity, value or utility of a credential. Note: recognition may include a process of quality assurance or accreditation.
   * @see https://schema.org/recognizedBy
   * @deprecated
   */
  recognizedBy: OrganizationType;

  /** The duration of validity of a permit or similar thing.
   * @see https://schema.org/validFor
   */
  validFor: Duration;

  /** The geographic area where a permit or similar thing is valid.
   * @see https://schema.org/validIn
   */
  validIn: AdministrativeAreaType;
}

/** An educational or occupational credential. A diploma, academic degree, certification, qualification, badge, etc., that may be awarded to a person or other entity that meets the requirements defined by the credentialer.
 * @see https://schema.org/EducationalOccupationalCredential
 * @deprecated
 */
export interface EducationalOccupationalCredential
  extends EducationalOccupationalCredentialProps {
  "@type": "EducationalOccupationalCredential";
}
