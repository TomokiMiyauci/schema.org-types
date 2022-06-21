import { MedicalDevice } from "../medical_device.ts";
import { MedicalConditionType } from "./../medical_conditions/medical_condition.ts";
import { MedicalSignType } from "../medical_conditions/medical_sign_or_symptoms/medical_signs/medical_sign.ts";
import { Text } from "../../../data_types.ts";
import { MedicalEnumeration } from "../../intangibles/enumerations/medical_enumerations/medical_enumeration.ts";
import { Drug } from "../substances/drug.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface MedicalTestProps extends MedicalEntityProps, ThingProps {
  /** Drugs that affect the test's results.
   * @see https://schema.org/affectedBy
   */
  affectedBy: Drug;

  /** Range of acceptable values for a typical patient, when applicable.
   * @see https://schema.org/normalRange
   */
  normalRange: MedicalEnumeration | Text;

  /** A sign detected by the test.
   * @see https://schema.org/signDetected
   */
  signDetected: MedicalSignType;

  /** A condition the test is used to diagnose.
   * @see https://schema.org/usedToDiagnose
   */
  usedToDiagnose: MedicalConditionType;

  /** Device used to perform the test.
   * @see https://schema.org/usesDevice
   */
  usesDevice: MedicalDevice;
}

/** Any medical test, typically performed for diagnostic purposes.
 * @see https://schema.org/MedicalTest
 */
export interface MedicalTest extends MedicalTestProps {
  "@type": "MedicalTest";
}

export type MedicalTestType = MedicalTest;
