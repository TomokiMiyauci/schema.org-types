import { Boolean, Text } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface HealthPlanFormularyProps extends ThingProps {
  /** Whether The costs to the patient for services under this network or formulary.
   * @see https://schema.org/healthPlanCostSharing
   * @deprecated
   */
  healthPlanCostSharing: Boolean;

  /** The tier(s) of drugs offered by this formulary or insurance plan.
   * @see https://schema.org/healthPlanDrugTier
   * @deprecated
   */
  healthPlanDrugTier: Text;

  /** Whether prescriptions can be delivered by mail.
   * @see https://schema.org/offersPrescriptionByMail
   * @deprecated
   */
  offersPrescriptionByMail: Boolean;
}

/** For a given health insurance plan, the specification for costs and coverage of prescription drugs.
 * @see https://schema.org/HealthPlanFormulary
 * @deprecated
 */
export interface HealthPlanFormulary extends HealthPlanFormularyProps {
  "@type": "HealthPlanFormulary";
}
