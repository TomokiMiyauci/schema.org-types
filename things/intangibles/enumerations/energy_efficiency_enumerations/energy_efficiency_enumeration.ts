import { EUEnergyEfficiencyEnumeration } from "./eu_energy_efficiency_enumeration.ts";
import { EnergyStarEnergyEfficiencyEnumeration } from "./energy_star_energy_efficiency_enumeration.ts";

/** Enumerates energy efficiency levels (also known as "classes" or "ratings") and certifications that are part of several international energy efficiency standards.
 * @see https://schema.org/EnergyEfficiencyEnumeration
 * @deprecated
 */
export type EnergyEfficiencyEnumeration =
  | EUEnergyEfficiencyEnumeration
  | EnergyStarEnergyEfficiencyEnumeration;
