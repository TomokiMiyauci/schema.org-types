import { MaximumDoseSchedule } from "../medical_intangibles/dose_schedules/maximum_dose_schedule.ts";
import { Text } from "../../../data_types.ts";
import { Drug } from "./drug.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface SubstanceProps extends MedicalEntityProps, ThingProps {
  /** An active ingredient, typically chemical compounds and/or biologic substances.
   * @see https://schema.org/activeIngredient
   */
  activeIngredient: Text;

  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   * @see https://schema.org/maximumIntake
   */
  maximumIntake: MaximumDoseSchedule;
}

/** Any matter of defined composition that has discrete existence, whose origin may be biological, mineral or chemical.
 * @see https://schema.org/Substance
 */
export interface Substance extends SubstanceProps {
  "@type": "Substance";
}

export type SubstanceType = Substance | Drug;
