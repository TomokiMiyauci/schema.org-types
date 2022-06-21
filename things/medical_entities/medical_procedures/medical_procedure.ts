import { MedicalStudyStatus } from "../../intangibles/enumerations/medical_enumerations/medical_study_status.ts";
import { EventStatusType } from "../../intangibles/enumerations/status_enumerations/event_status_type.ts";
import { MedicalProcedureType as _MedicalProcedureType } from "../../intangibles/enumerations/medical_enumerations/medical_procedure_type.ts";
import { Text } from "../../../data_types.ts";
import { MedicalEntityProps, MedicalEntityType } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface MedicalProcedureProps extends MedicalEntityProps, ThingProps {
  /** Location in the body of the anatomical structure.
   * @see https://schema.org/bodyLocation
   */
  bodyLocation: Text;

  /** Typical or recommended followup care after the procedure is performed.
   * @see https://schema.org/followup
   */
  followup: Text;

  /** How the procedure is performed.
   * @see https://schema.org/howPerformed
   */
  howPerformed: Text;

  /** Typical preparation that a patient must undergo before having the procedure performed.
   * @see https://schema.org/preparation
   */
  preparation: MedicalEntityType | Text;

  /** The type of procedure, for example Surgical, Noninvasive, or Percutaneous.
   * @see https://schema.org/procedureType
   */
  procedureType: _MedicalProcedureType;

  /** The status of the study (enumerated).
   * @see https://schema.org/status
   */
  status: EventStatusType | MedicalStudyStatus | Text;
}

/** A process of care used in either a diagnostic, therapeutic, preventive or palliative capacity that relies on invasive (surgical), non-invasive, or other techniques.
 * @see https://schema.org/MedicalProcedure
 */
export interface MedicalProcedure extends MedicalProcedureProps {
  "@type": "MedicalProcedure";
}

export type MedicalProcedureType = MedicalProcedure;
