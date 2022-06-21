import { MedicalEntityProps } from "../../medical_entity.ts";
import { DoseScheduleProps } from "./dose_schedule.ts";
import { ThingProps } from "../../../thing.ts";

export interface MaximumDoseScheduleProps
  extends DoseScheduleProps, MedicalEntityProps, ThingProps {}

/** The maximum dosing schedule considered safe for a drug or supplement as recommended by an authority or by the drug/supplement's manufacturer. Capture the recommending authority in the recognizingAuthority property of MedicalEntity.
 * @see https://schema.org/MaximumDoseSchedule
 */
export interface MaximumDoseSchedule extends MaximumDoseScheduleProps {
  "@type": "MaximumDoseSchedule";
}
