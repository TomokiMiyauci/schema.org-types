import { Number } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface OccupationalExperienceRequirementsProps extends ThingProps {
  /** Indicates the minimal number of months of experience required for a position.
   * @see https://schema.org/monthsOfExperience
   * @deprecated
   */
  monthsOfExperience: Number;
}

/** Indicates employment-related experience requirements, e.g. {@link monthsOfExperience}.
 * @see https://schema.org/OccupationalExperienceRequirements
 * @deprecated
 */
export interface OccupationalExperienceRequirements
  extends OccupationalExperienceRequirementsProps {
  "@type": "OccupationalExperienceRequirements";
}
