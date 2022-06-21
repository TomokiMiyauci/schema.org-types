import { EnergyEfficiencyEnumeration } from "./enumerations/energy_efficiency_enumerations/energy_efficiency_enumeration.ts";
import { EUEnergyEfficiencyEnumeration } from "./enumerations/energy_efficiency_enumerations/eu_energy_efficiency_enumeration.ts";
import { ThingProps } from "../thing.ts";

export interface EnergyConsumptionDetailsProps extends ThingProps {
  /** Specifies the most energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
   * @see https://schema.org/energyEfficiencyScaleMax
   */
  energyEfficiencyScaleMax: EUEnergyEfficiencyEnumeration;

  /** Specifies the least energy efficient class on the regulated EU energy consumption scale for the product category a product belongs to. For example, energy consumption for televisions placed on the market after January 1, 2020 is scaled from D to A+++.
   * @see https://schema.org/energyEfficiencyScaleMin
   */
  energyEfficiencyScaleMin: EUEnergyEfficiencyEnumeration;

  /** Defines the energy efficiency Category (which could be either a rating out of range of values or a yes/no certification) for a product according to an international energy efficiency standard.
   * @see https://schema.org/hasEnergyEfficiencyCategory
   */
  hasEnergyEfficiencyCategory: EnergyEfficiencyEnumeration;
}

/** EnergyConsumptionDetails represents information related to the energy efficiency of a product that consumes energy. The information that can be provided is based on international regulations such as for example {@link https://eur-lex.europa.eu/eli/reg/2017/1369/oj EU directive 2017/1369} for energy labeling and the {@link https://www.ftc.gov/legal-library/browse/rules/energy-water-use-labeling-consumer-products-under-energy-policy-conservation-act-energy-labeling Energy labeling} rule under the Energy Policy and Conservation Act (EPCA) in the US.
 * @see https://schema.org/EnergyConsumptionDetails
 * @deprecated
 */
export interface EnergyConsumptionDetails
  extends EnergyConsumptionDetailsProps {
  "@type": "EnergyConsumptionDetails";
}
