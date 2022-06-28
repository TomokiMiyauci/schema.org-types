import { Text } from "../../../data_types.ts";
import { QualitativeValueType } from "../enumerations/qualitative_values/qualitative_value.ts";
import { QuantitativeValue } from "./quantitative_value.ts";
import { ThingProps } from "../../thing.ts";

export interface EngineSpecificationProps extends ThingProps {
  /** The volume swept by all of the pistons inside the cylinders of an internal combustion engine in a single movement.
   *
   * Typical unit code(s): CMQ for cubic centimeter, LTR for liters, INQ for cubic inches
   * - Note 1: You can link to information about how the given value has been determined using the {@link valueReference} property.
   * - Note 2: You can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/engineDisplacement
   */
  engineDisplacement: QuantitativeValue;

  /** The power of the vehicle's engine. Typical unit code(s): KWT for kilowatt, BHP for brake horsepower, N12 for metric horsepower (PS, with 1 PS = 735,49875 W)
   *
   * - Note 1: There are many different ways of measuring an engine's power. For an overview, @see http://en.wikipedia.org/wiki/Horsepower#Enginepowertest_codes.
   * - Note 2: You can link to information about how the given value has been determined using the {@link valueReference} property.
   * - Note 3: You can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/enginePower
   */
  enginePower: QuantitativeValue;

  /** The type of engine or engines powering the vehicle.
   * @see https://schema.org/engineType
   */
  engineType: QualitativeValueType;

  /** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
   * @see https://schema.org/fuelType
   */
  fuelType: QualitativeValueType | Text | URL;

  /** The torque (turning force) of the vehicle's engine.
   *
   * Typical unit code(s): NU for newton metre (N m), F17 for pound-force per foot, or F48 for pound-force per inch
   * - Note 1: You can link to information about how the given value has been determined (e.g. reference RPM) using the {@link valueReference} property.
   * - Note 2: You can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/torque
   */
  torque: QuantitativeValue;
}

/** Information about the engine of the vehicle. A vehicle can have multiple engines represented by multiple engine specification entities.
 * @see https://schema.org/EngineSpecification
 */
export interface EngineSpecification extends EngineSpecificationProps {
  "@type": "EngineSpecification";
}
