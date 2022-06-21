import { MedicalTherapyType } from "../../medical_procedures/therapeutic_procedures/medical_therapies/medical_therapy.ts";
import { MedicalEntityProps } from "../../medical_entity.ts";
import { MedicalConditionProps } from "../medical_condition.ts";
import { ThingProps } from "../../../thing.ts";

export interface MedicalSignOrSymptomProps
  extends MedicalConditionProps, MedicalEntityProps, ThingProps {
  /** A possible treatment to address this condition, sign or symptom.
   * @see https://schema.org/possibleTreatment
   */
  possibleTreatment: MedicalTherapyType;
}

/** Any feature associated or not with a medical condition. In medicine a symptom is generally subjective while a sign is objective.
 * @see https://schema.org/MedicalSignOrSymptom
 */
export interface MedicalSignOrSymptom extends MedicalSignOrSymptomProps {
  "@type": "MedicalSignOrSymptom";
}

export type MedicalSignOrSymptomType = MedicalSignOrSymptom;
