import { MedicalEntityProps } from "./medical_entity.ts";
import { ThingProps } from "../thing.ts";

export interface MedicalContraindicationProps
  extends MedicalEntityProps, ThingProps {}

/** A condition or factor that serves as a reason to withhold a certain medical therapy. Contraindications can be absolute (there are no reasonable circumstances for undertaking a course of action) or relative (the patient is at higher risk of complications, but that these risks may be outweighed by other considerations or mitigated by other measures).
 * @see https://schema.org/MedicalContraindication
 */
export interface MedicalContraindication extends MedicalContraindicationProps {
  "@type": "MedicalContraindication";
}
