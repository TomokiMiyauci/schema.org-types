import { HealthPlanNetwork } from "./health_plan_network.ts";
import { HealthPlanFormulary } from "./health_plan_formulary.ts";
import { ContactPointType } from "./structured_values/contact_points/contact_point.ts";
import { Text, URL } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface HealthInsurancePlanProps extends ThingProps {
  /** The URL that goes directly to the summary of benefits and coverage for the specific standard plan or plan variation.
   * @see https://schema.org/benefitsSummaryUrl
   * @deprecated
   */
  benefitsSummaryUrl: URL;

  /** A contact point for a person or organization.
   * @see https://schema.org/contactPoint
   */
  contactPoint: ContactPointType;

  /** TODO.
   * @see https://schema.org/healthPlanDrugOption
   * @deprecated
   */
  healthPlanDrugOption: Text;

  /** The tier(s) of drugs offered by this formulary or insurance plan.
   * @see https://schema.org/healthPlanDrugTier
   * @deprecated
   */
  healthPlanDrugTier: Text;

  /** The 14-character, HIOS-generated Plan ID number. (Plan IDs must be unique, even across different markets.)
   * @see https://schema.org/healthPlanId
   * @deprecated
   */
  healthPlanId: Text;

  /** The URL that goes directly to the plan brochure for the specific standard plan or plan variation.
   * @see https://schema.org/healthPlanMarketingUrl
   * @deprecated
   */
  healthPlanMarketingUrl: URL;

  /** Formularies covered by this plan.
   * @see https://schema.org/includesHealthPlanFormulary
   * @deprecated
   */
  includesHealthPlanFormulary: HealthPlanFormulary;

  /** Networks covered by this plan.
   * @see https://schema.org/includesHealthPlanNetwork
   * @deprecated
   */
  includesHealthPlanNetwork: HealthPlanNetwork;

  /** The standard for interpreting thePlan ID. The preferred is "HIOS". See the Centers for Medicare & Medicaid Services for more details.
   * @see https://schema.org/usesHealthPlanIdStandard
   * @deprecated
   */
  usesHealthPlanIdStandard: Text | URL;
}

/** A US-style health insurance plan, including PPOs, EPOs, and HMOs.
 * @see https://schema.org/HealthInsurancePlan
 * @deprecated
 */
export interface HealthInsurancePlan extends HealthInsurancePlanProps {
  "@type": "HealthInsurancePlan";
}
