import { Text } from "../../data_types.ts";
import { MedicalContraindication } from "./medical_contraindication.ts";
import { MedicalEntityProps, MedicalEntityType } from "./medical_entity.ts";
import { ThingProps } from "../thing.ts";

export interface MedicalDeviceProps extends MedicalEntityProps, ThingProps {
  /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.
   * @see https://schema.org/adverseOutcome
   */
  adverseOutcome: MedicalEntityType;

  /** A contraindication for this therapy.
   * @see https://schema.org/contraindication
   */
  contraindication: MedicalContraindication | Text;

  /** A description of the postoperative procedures, care, and/or followups for this device.
   * @see https://schema.org/postOp
   */
  postOp: Text;

  /** A description of the workup, testing, and other preparations required before implanting this device.
   * @see https://schema.org/preOp
   */
  preOp: Text;

  /** A description of the procedure involved in setting up, using, and/or installing the device.
   * @see https://schema.org/procedure
   */
  procedure: Text;

  /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
   * Values expected to be one of these types MedicalEntity
   * @see https://schema.org/seriousAdverseOutcome
   */
  seriousAdverseOutcome: MedicalEntityType;
}

/** Any object used in a medical capacity, such as to diagnose or treat a patient.
 * @see https://schema.org/MedicalDevice
 */
export interface MedicalDevice extends MedicalDeviceProps {
  "@type": "MedicalDevice";
}
