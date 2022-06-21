import { QualitativeValueType } from "../../../intangibles/enumerations/qualitative_values/qualitative_value.ts";
import { Number, Text } from "../../../../data_types.ts";
import { MedicalEntityProps } from "../../medical_entity.ts";
import { ThingProps } from "../../../thing.ts";

export interface DoseScheduleProps extends MedicalEntityProps, ThingProps {
  /** The unit of the dose, e.g. 'mg'.
   * @see https://schema.org/doseUnit
   */
  doseUnit: Text;

  /** The value of the dose, e.g. 500.
   * @see https://schema.org/doseValue
   */
  doseValue: Number | QualitativeValueType;

  /** How often the dose is taken, e.g. 'daily'.
   * @see https://schema.org/frequency
   */
  frequency: Text;

  /** Characteristics of the population for which this is intended, or which typically uses it, e.g. 'adults'.
   * @see https://schema.org/targetPopulation
   */
  targetPopulation: Text;
}

/** A specific dosing schedule for a drug or supplement.
 * @see https://schema.org/DoseSchedule
 */
export interface DoseSchedule extends DoseScheduleProps {
  "@type": "DoseSchedule";
}

export type DoseScheduleType = DoseSchedule;
