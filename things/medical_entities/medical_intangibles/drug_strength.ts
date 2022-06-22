import { MaximumDoseSchedule } from "./dose_schedules/maximum_dose_schedule.ts";
import { AdministrativeAreaType } from "../../places/administrative_areas/administrative_area.ts";
import { Number, Text } from "../../../data_types.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface DrugStrengthProps extends MedicalEntityProps, ThingProps {
  /** An active ingredient, typically chemical compounds and/or biologic substances.
   * @see https://schema.org/activeIngredient
   */
  activeIngredient: Text;

  /** The location in which the strength is available.
   * @see https://schema.org/availableIn
   */
  availableIn: AdministrativeAreaType;

  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   * @see https://schema.org/maximumIntake
   */
  maximumIntake: MaximumDoseSchedule;

  /** The units of an active ingredient's strength, e.g. mg.
   * @see https://schema.org/strengthUnit
   */
  strengthUnit: Text;

  /** The value of an active ingredient's strength, e.g. 325.
   * @see https://schema.org/strengthValue
   */
  strengthValue: Number;
}

/** A specific strength in which a medical drug is available in a specific country.
 * @see https://schema.org/DrugStrength
 */
export interface DrugStrength extends DrugStrengthProps {
  "@type": "DrugStrength";
}
