import { AdministrativeAreaType } from "../../places/administrative_areas/administrative_area.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface DrugLegalStatusProps extends MedicalEntityProps, ThingProps {
  /** The location in which the status applies.
   * @see https://schema.org/applicableLocation
   */
  applicableLocation: AdministrativeAreaType;
}

/** The legal availability status of a medical drug.
 * @see https://schema.org/DrugLegalStatus
 */
export interface DrugLegalStatus extends DrugLegalStatusProps {
  "@type": "DrugLegalStatus";
}
