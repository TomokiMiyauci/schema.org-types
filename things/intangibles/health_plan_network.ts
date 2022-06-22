import { Text } from "../../data_types.ts";
import { Boolean } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface HealthPlanNetworkProps extends ThingProps {
  /** Whether The costs to the patient for services under this network or formulary.
   * @see https://schema.org/healthPlanCostSharing
   * @deprecated
   */
  healthPlanCostSharing: Boolean;

  /** Name or unique ID of network. (Networks are often reused across different insurance plans).
   * @see https://schema.org/healthPlanNetworkId
   * @deprecated
   */
  healthPlanNetworkId: Text;

  /** The tier(s) for this network.
   * @see https://schema.org/healthPlanNetworkTier
   * @deprecated
   */
  healthPlanNetworkTier: Text;
}

/** A US-style health insurance plan network.
 * @see https://schema.org/HealthPlanNetwork
 * @deprecated
 */
export interface HealthPlanNetwork extends HealthPlanNetworkProps {
  "@type": "HealthPlanNetwork";
}
