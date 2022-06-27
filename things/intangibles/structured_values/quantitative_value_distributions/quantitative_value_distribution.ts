import { Number } from "../../../../data_types.ts";
import { Duration } from "../../quantities/duration.ts";
import { ThingProps } from "../../../thing.ts";

export interface QuantitativeValueDistributionProps extends ThingProps {
  /** The duration of the item (movie, audio recording, event, etc.) in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}.
   * @see https://schema.org/duration
   */
  duration: Duration;

  /** The median value.
   * @see https://schema.org/median
   */
  median: Number;

  /** The 10th percentile value.
   * @see https://schema.org/percentile10
   */
  percentile10: Number;

  /** The 25th percentile value.
   * @see https://schema.org/percentile25
   */
  percentile25: Number;

  /** The 75th percentile value.
   * @see https://schema.org/percentile75
   */
  percentile75: Number;

  /** The 90th percentile value.
   * @see https://schema.org/percentile90
   */
  percentile90: Number;
}

/** A statistical distribution of values.
 * @see https://schema.org/QuantitativeValueDistribution
 */
export interface QuantitativeValueDistribution
  extends QuantitativeValueDistributionProps {
  "@type": "QuantitativeValueDistribution";
}

export type QuantitativeValueDistributionType = QuantitativeValueDistribution;
