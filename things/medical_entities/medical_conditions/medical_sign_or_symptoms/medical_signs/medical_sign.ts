import { MedicalTestType } from "../../../medical_tests/medical_test.ts";
import { PhysicalExam } from "../../../medical_procedures/physical_exam.ts";
import { MedicalEntityProps } from "../../../medical_entity.ts";
import { MedicalConditionProps } from "../../medical_condition.ts";
import { MedicalSignOrSymptomProps } from "../medical_sign_or_symptom.ts";
import { ThingProps } from "../../../../thing.ts";

export interface MedicalSignProps
  extends
    MedicalSignOrSymptomProps,
    MedicalConditionProps,
    MedicalEntityProps,
    ThingProps {
  /** A physical examination that can identify this sign.
   * @see https://schema.org/identifyingExam
   */
  identifyingExam: PhysicalExam;

  /** A diagnostic test that can identify this sign.
   * @see https://schema.org/identifyingTest
   */
  identifyingTest: MedicalTestType;
}

/** Any physical manifestation of a person's medical condition discoverable by objective diagnostic tests or physical examination.
 * @see https://schema.org/MedicalSign
 */
export interface MedicalSign extends MedicalSignProps {
  "@type": "MedicalSign";
}

export type MedicalSignType = MedicalSign;
