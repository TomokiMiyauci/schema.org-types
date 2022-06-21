import { MedicalEntityProps } from "../medical_entity.ts";
import { MedicalEntityType } from "../medical_entity.ts";
import { AdministrativeAreaType } from "../../places/administrative_areas/administrative_area.ts";
import { Text } from "../../../data_types.ts";
import { MedicalStudyStatus } from "../../intangibles/enumerations/medical_enumerations/medical_study_status.ts";
import { EventStatusType } from "../../intangibles/enumerations/status_enumerations/event_status_type.ts";
import { PersonType } from "../../persons/person.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { MedicalConditionType } from "../medical_conditions/medical_condition.ts";
import { ThingProps } from "../../thing.ts";

export interface MedicalStudyProps extends MedicalEntityProps, ThingProps {
  /** Specifying the health condition(s) of a patient, medical study, or other target audience.
   * @see https://schema.org/healthCondition
   */
  healthCondition: MedicalConditionType;

  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor: OrganizationType | PersonType;

  /** The status of the study (enumerated).
   * @see https://schema.org/status
   */
  status: EventStatusType | MedicalStudyStatus | Text;

  /** The location in which the study is taking/took place.
   * @see https://schema.org/studyLocation
   */
  studyLocation: AdministrativeAreaType;

  /** A subject of the study, i.e. one of the medical conditions, therapies, devices, drugs, etc. investigated by the study.
   * @see https://schema.org/studySubject
   */
  studySubject: MedicalEntityType;
}

/** A medical study is an umbrella type covering all kinds of research studies relating to human medicine or health, including observational studies and interventional trials and registries, randomized, controlled or not. When the specific type of study is known, use one of the extensions of this type, such as MedicalTrial or MedicalObservationalStudy. Also, note that this type should be used to mark up data that describes the study itself; to tag an article that publishes the results of a study, use MedicalScholarlyArticle. Note: use the code property of MedicalEntity to store study IDs, e.g. clinicaltrials.gov ID.
 * @see https://schema.org/MedicalStudy
 */
export interface MedicalStudy extends MedicalStudyProps {
  "@type": "MedicalStudy";
}

export type MedicalStudyType = MedicalStudy;
