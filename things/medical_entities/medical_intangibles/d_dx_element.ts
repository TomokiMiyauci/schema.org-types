import { MedicalSignOrSymptomType } from "../medical_conditions/medical_sign_or_symptoms/medical_sign_or_symptom.ts";
import { MedicalConditionType } from "../medical_conditions/medical_condition.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface DDxElementProps extends MedicalEntityProps, ThingProps {
  /** One or more alternative conditions considered in the differential diagnosis process as output of a diagnosis process.
   * @see https://schema.org/diagnosis
   */
  diagnosis: MedicalConditionType;

  /** One of a set of signs and symptoms that can be used to distinguish this diagnosis from others in the differential diagnosis.
   * @see https://schema.org/distinguishingSign
   */
  distinguishingSign: MedicalSignOrSymptomType;
}

/** An alternative, closely-related condition typically considered later in the differential diagnosis process along with the signs that are used to distinguish it.
 * @see https://schema.org/DDxElement
 */
export interface DDxElement extends DDxElementProps {
  "@type": "DDxElement";
}
