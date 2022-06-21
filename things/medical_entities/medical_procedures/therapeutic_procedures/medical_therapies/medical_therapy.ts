import {
  MedicalEntityProps,
  MedicalEntityType,
} from "../../../medical_entity.ts";
import { Text } from "../../../../../data_types.ts";
import { MedicalContraindication } from "../../../medical_contraindication.ts";
import { TherapeuticProcedureProps } from "../therapeutic_procedure.ts";
import { MedicalProcedureProps } from "../../medical_procedure.ts";
import { ThingProps } from "../../../../thing.ts";

export interface MedicalTherapyProps
  extends
    TherapeuticProcedureProps,
    MedicalProcedureProps,
    MedicalEntityProps,
    ThingProps {
  /** A contraindication for this therapy.
   * @see https://schema.org/contraindication
   */
  contraindication: MedicalContraindication | Text;

  /** A therapy that duplicates or overlaps this one.
   * @see https://schema.org/duplicateTherapy
   */
  duplicateTherapy: MedicalTherapyType;

  /** A possible serious complication and/or serious side effect of this therapy. Serious adverse outcomes include those that are life-threatening; result in death, disability, or permanent damage; require hospitalization or prolong existing hospitalization; cause congenital anomalies or birth defects; or jeopardize the patient and may require medical or surgical intervention to prevent one of the outcomes in this definition.
   * @see https://schema.org/seriousAdverseOutcome
   */
  seriousAdverseOutcome: MedicalEntityType;
}

/** Any medical intervention designed to prevent, treat, and cure human diseases and medical conditions, including both curative and palliative therapies. Medical therapies are typically processes of care relying upon pharmacotherapy, behavioral therapy, supportive therapy (with fluid or nutrition for example), or detoxification (e.g. hemodialysis) aimed at improving or preventing a health condition.
 * @see https://schema.org/MedicalTherapy
 */
export interface MedicalTherapy extends MedicalTherapyProps {
  "@type": "MedicalTherapy";
}

export type MedicalTherapyType = MedicalTherapy;
