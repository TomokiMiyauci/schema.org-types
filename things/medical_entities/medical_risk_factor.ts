import { MedicalEntityProps, MedicalEntityType } from "./medical_entity.ts";
import { ThingProps } from "../thing.ts";

export interface MedicalRiskFactorProps extends MedicalEntityProps, ThingProps {
  /** The condition, complication, etc. influenced by this factor.
   * @see https://schema.org/increasesRiskOf
   */
  increasesRiskOf: MedicalEntityType;
}

/** A risk factor is anything that increases a person's likelihood of developing or contracting a disease, medical condition, or complication.
 * @see https://schema.org/MedicalRiskFactor
 */
export interface MedicalRiskFactor extends MedicalRiskFactorProps {
  "@type": "MedicalRiskFactor";
}
