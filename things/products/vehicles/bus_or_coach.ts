import { QuantitativeValue } from "../../intangibles/structured_values/quantitative_value.ts";
import { Text } from "../../../data_types.ts";
import { ProductProps } from "./../product.ts";
import { VehicleProps } from "./vehicle.ts";
import { ThingProps } from "../../thing.ts";

export interface BusOrCoachProps
  extends VehicleProps, ProductProps, ThingProps {
  /** The ACRISS Car Classification Code is a code used by many car rental companies, for classifying vehicles. ACRISS stands for Association of Car Rental Industry Systems and Standards.
   * @see https://schema.org/acrissCode
   */
  acrissCode: Text;

  /** The permitted total weight of cargo and installations (e.g. a roof rack) on top of the vehicle.
   *
   * Typical unit code(s): KGM for kilogram, LBR for pound
   * - Note 1: You can indicate additional information in the {@link name} of the {@link QuantitativeValue} node.
   * - Note 2: You may also link to a {@link QualitativeValue} node that provides additional information using {@link valueReference}
   * - Note 3: Note that you can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/roofLoad
   */
  roofLoad: QuantitativeValue;
}

/** A bus (also omnibus or autobus) is a road vehicle designed to carry passengers. Coaches are luxury busses, usually in service for long distance travel.
 * @see https://schema.org/BusOrCoach
 */
export interface BusOrCoach extends BusOrCoachProps {
  "@type": "BusOrCoach";
}
