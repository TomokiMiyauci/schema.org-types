import { Drug } from "../../substances/drug.ts";
import { DoseScheduleType } from "../../medical_intangibles/dose_schedules/dose_schedule.ts";
import { MedicalEntityProps, MedicalEntityType } from "../../medical_entity.ts";
import { MedicalProcedureProps } from "../medical_procedure.ts";
import { ThingProps } from "../../../thing.ts";

export interface TherapeuticProcedureProps
  extends MedicalProcedureProps, MedicalEntityProps, ThingProps {
  /** A possible complication and/or side effect of this therapy. If it is known that an adverse outcome is serious (resulting in death, disability, or permanent damage; requiring hospitalization; or is otherwise life-threatening or requires immediate medical attention), tag it as a seriouseAdverseOutcome instead.
   * @see https://schema.org/adverseOutcome
   */
  adverseOutcome: MedicalEntityType;

  /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
   * @see https://schema.org/doseSchedule
   */
  doseSchedule: DoseScheduleType;

  /** Specifying a drug or medicine used in a medication procedure.
   * @see https://schema.org/drug
   */
  drug: Drug;
}

/** A medical procedure intended primarily for therapeutic purposes, aimed at improving a health condition.
 * @see https://schema.org/TherapeuticProcedure
 */
export interface TherapeuticProcedure extends TherapeuticProcedureProps {
  "@type": "TherapeuticProcedure";
}

export type TherapeuticProcedureType = TherapeuticProcedure;
