import { MedicalStudyType } from "./medical_studies/medical_study.ts";
import { MedicalSpecialty } from "../intangibles/enumerations/medical_enumerations/medical_specialty.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { MedicineSystem } from "../intangibles/enumerations/medical_enumerations/medicine_system.ts";
import { MedicalEnumeration } from "../intangibles/enumerations/medical_enumerations/medical_enumeration.ts";
import { DrugLegalStatus } from "./medical_intangibles/drug_legal_status.ts";
import { Text } from "../../data_types.ts";
import { MedicalGuidelineType } from "./medical_guidelines/medical_guideline.ts";
import { GrantType } from "../intangibles/grants/grant.ts";
import { MedicalCode } from "./medical_intangibles/medical_code.ts";
import { ThingProps } from "../thing.ts";

export interface MedicalEntityProps extends ThingProps {
  /** A medical code for the entity, taken from a controlled vocabulary or ontology such as ICD-9, DiseasesDB, MeSH, SNOMED-CT, RxNorm, etc.
   * @see https://schema.org/MedicalEntity
   */
  code: MedicalCode;

  /** A {@link Grant} that directly or indirectly provide funding or sponsorship for this item. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/funding
   */
  funding: GrantType;

  /** A medical guideline related to this entity.
   * @see https://schema.org/guideline
   */
  guideline: MedicalGuidelineType;

  /** The drug or supplement's legal status, including any controlled substance schedules that apply.
   * @see https://schema.org/legalStatus
   */
  legalStatus: DrugLegalStatus | MedicalEnumeration | Text;

  /** The system of medicine that includes this MedicalEntity, for example 'evidence-based', 'homeopathic', 'chiropractic', etc.
   * @see https://schema.org/medicineSystem
   */
  medicineSystem: MedicineSystem;

  /** If applicable, the organization that officially recognizes this entity as part of its endorsed system of medicine.
   * @see https://schema.org/recognizingAuthority
   */
  recognizingAuthority: OrganizationType;

  /** If applicable, a medical specialty in which this entity is relevant.
   * @see https://schema.org/relevantSpecialty
   */
  relevantSpecialty: MedicalSpecialty;

  /** A medical study or trial related to this entity.
   * @see https://schema.org/study
   */
  study: MedicalStudyType;
}

/** The most generic type of entity related to health and the practice of medicine.
 * @see https://schema.org/MedicalEntity
 */
export interface MedicalEntity extends MedicalEntityProps {
  "@type": "MedicalEntity";
}

export type MedicalEntityType = MedicalEntity;
