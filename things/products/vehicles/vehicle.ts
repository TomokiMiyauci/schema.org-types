import { CarUsageType } from "../../intangibles/enumerations/car_usage_type.ts";
import { EngineSpecification } from "../../intangibles/structured_values/engine_specification.ts";
import { SteeringPositionValue } from "../../intangibles/enumerations/qualitative_values/steering_position_value.ts";
import { DriveWheelConfigurationValue } from "../../intangibles/enumerations/qualitative_values/drive_wheel_configuration_value.ts";
import { Date, Number, Text, URL } from "../../../data_types.ts";
import { QualitativeValueType } from "../../intangibles/enumerations/qualitative_values/qualitative_value.ts";
import { QuantitativeValue } from "../../intangibles/structured_values/quantitative_value.ts";
import { ProductProps } from "../product.ts";
import { ThingProps } from "../../thing.ts";

export interface VehicleProps extends ProductProps, ThingProps {
  /** The time needed to accelerate the vehicle from a given start velocity to a given target velocity.
   *
   * Typical unit code(s): SEC for seconds
   * - Note: There are unfortunately no standard unit codes for seconds/0..100 km/h or seconds/0..60 mph. Simply use "SEC" for seconds and indicate the velocities in the {@link name} of the {@link QuantitativeValue}, or use {@link valueReference} with a {@link QuantitativeValue} of 0..60 mph or 0..100 km/h to specify the reference speeds.
   * @see https://schema.org/accelerationTime
   */
  accelerationTime: QuantitativeValue;

  /** Indicates the design and body style of the vehicle (e.g. station wagon, hatchback, etc.).
   * @see https://schema.org/bodyType
   */
  bodyType: QualitativeValueType | Text | URL;

  /** A {@link callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
   * @see https://schema.org/callSign
   * @deprecated
   */
  callSign: Text;

  /** The available volume for cargo or luggage. For automobiles, this is usually the trunk volume.
   *
   * Typical unit code(s): LTR for liters, FTQ for cubic foot/feet
   *
   * @remark You can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/cargoVolume
   */
  cargoVolume: QuantitativeValue;

  /** The date of the first registration of the vehicle with the respective public authorities.
   * @see https://schema.org/dateVehicleFirstRegistered
   */
  dateVehicleFirstRegistered: Date;

  /** The drive wheel configuration, i.e. which roadwheels will receive torque from the vehicle's engine via the drivetrain.
   * @see https://schema.org/driveWheelConfiguration
   */
  driveWheelConfiguration: DriveWheelConfigurationValue | Text;

  /** The CO2 emissions in g/km. When used in combination with a QuantitativeValue, put "g/km" into the unitText property of that value, since there is no UN/CEFACT Common Code for "g/km".
   * @see https://schema.org/emissionsCO2
   */
  emissionsCO2: Number;

  /** The capacity of the fuel tank or in the case of electric cars, the battery. If there are multiple components for storage, this should indicate the total of all storage of the same type.
   *
   * Typical unit code(s): LTR for liters, GLL of US gallons, GLI for UK / imperial gallons, AMH for ampere-hours (for electrical vehicles).
   * @see https://schema.org/fuelCapacity
   */
  fuelCapacity: QuantitativeValue;

  /** The amount of fuel consumed for traveling a particular distance or temporal duration with the given vehicle (e.g. liters per 100 km).
   * - Note 1: There are unfortunately no standard unit codes for liters per 100 km. Use {@link unitText} to indicate the unit of measurement, e.g. L/100 km.
   * - Note 2: There are two ways of indicating the fuel consumption, {@link fuelConsumption} (e.g. 8 liters per 100 km) and {@link fuelEfficiency} (e.g. 30 miles per gallon). They are reciprocal.
   * - Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use {@link valueReference} to link the value for the fuel consumption to another value.
   * @see https://schema.org/fuelConsumption
   */
  fuelConsumption: QuantitativeValue;

  /** The distance traveled per unit of fuel used; most commonly miles per gallon (mpg) or kilometers per liter (km/L).
   *
   * Note 1: There are unfortunately no standard unit codes for miles per gallon or kilometers per liter. Use {@link unitText} to indicate the unit of measurement, e.g. mpg or km/L.
   * Note 2: There are two ways of indicating the fuel consumption, {@link fuelConsumption} (e.g. 8 liters per 100 km) and {@link fuelEfficiency} (e.g. 30 miles per gallon). They are reciprocal.
   * Note 3: Often, the absolute value is useful only when related to driving speed ("at 80 km/h") or usage pattern ("city traffic"). You can use {@link valueReference} to link the value for the fuel economy to another value.
   * @see https://schema.org/fuelEfficiency
   */
  fuelEfficiency: QuantitativeValue;

  /** The type of fuel suitable for the engine or engines of the vehicle. If the vehicle has only one engine, this property can be attached directly to the vehicle.
   * @see https://schema.org/fuelType
   */
  fuelType: QualitativeValueType | Text | URL;

  /** A textual description of known damages, both repaired and unrepaired.
   * @see https://schema.org/knownVehicleDamages
   */
  knownVehicleDamages: Text;

  /** Indicates that the vehicle meets the respective emission standard.
   * @see https://schema.org/meetsEmissionStandard
   */
  meetsEmissionStandard: QualitativeValueType | Text | URL;

  /** The total distance travelled by the particular vehicle since its initial production, as read from its odometer.
   *
   * Typical unit code(s): KMT for kilometers, SMI for statute miles
   * @see https://schema.org/mileageFromOdometer
   */
  mileageFromOdometer: QuantitativeValue;

  /** The release date of a vehicle model (often used to differentiate versions of the same make and model).
   * @see https://schema.org/modelDate
   */
  modelDate: Date;

  /** The number or type of airbags in the vehicle.
   * @see https://schema.org/numberOfAirbags
   */
  numberOfAirbags: Number | Text;

  /** Typical unit code(s): C62
   * @see https://schema.org/numberOfAxles
   */
  numberOfAxles: Number | QuantitativeValue;

  /** The number of doors.
   *
   * Typical unit code(s): C62
   * @see https://schema.org/numberOfDoors
   */
  numberOfDoors: Number | QuantitativeValue;

  /** The total number of forward gears available for the transmission system of the vehicle.
   *
   * Typical unit code(s): C62
   * @see https://schema.org/numberOfForwardGears
   */
  numberOfForwardGears: Number | QuantitativeValue;

  /** The number of owners of the vehicle, including the current one.
   *
   * Typical unit code(s): C62
   * @see https://schema.org/numberOfPreviousOwners
   */
  numberOfPreviousOwners: Number | QuantitativeValue;

  /** The permitted weight of passengers and cargo, EXCLUDING the weight of the empty vehicle.
   *
   * Typical unit code(s): KGM for kilogram, LBR for pound
   * - Note 1: Many databases specify the permitted TOTAL weight instead, which is the sum of {@link weight} and {@link payload}
   * - Note 2: You can indicate additional information in the {@link name} of the {@link QuantitativeValue} node.
   * - Note 3: You may also link to a {@link QualitativeValue} node that provides additional information using {@link valueReference}.
   * - Note 4: Note that you can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/payload
   */
  payload: QuantitativeValue;

  /** The date of production of the item, e.g. vehicle.
   * @see https://schema.org/productionDate
   */
  productionDate: Date;

  /** The date the item e.g. vehicle was purchased by the current owner.
   * @see https://schema.org/purchaseDate
   */
  purchaseDate: Date;

  /** The number of persons that can be seated (e.g. in a vehicle), both in terms of the physical space available, and in terms of limitations set by law.
   *
   * Typical unit code(s): C62 for persons
   * @see https://schema.org/seatingCapacity
   */
  seatingCapacity: Number | QuantitativeValue;

  /** The speed range of the vehicle. If the vehicle is powered by an engine, the upper limit of the speed range (indicated by maxValue should be the maximum speed achievable under regular conditions.
   *
   * Typical unit code(s): KMH for km/h, HM for mile per hour (0.447 04 m/s), KNT for knot
   *
   * @remark Use {@link minValue} and {@link maxValue} to indicate the range. Typically, the minimal value is zero. * Note 2: There are many different ways of measuring the speed range. You can link to information about how the given value has been determined using the {@link valueReference} property.
   * @see https://schema.org/speed
   */
  speed: QuantitativeValue;

  /** The position of the steering wheel or similar device (mostly for cars).
   * @see https://schema.org/steeringPosition
   */
  steeringPosition: SteeringPositionValue;

  /** The permitted vertical load (TWR) of a trailer attached to the vehicle. Also referred to as Tongue Load Rating (TLR) or Vertical Load Rating (VLR)
   *
   * Typical unit code(s): KGM for kilogram, LBR for pound
   * - Note 1: You can indicate additional information in the name of the {@link QuantitativeValue} node.
   * - Note 2: You may also link to a {@link QualitativeValue} node that provides additional information using {@link valueReference}.
   * - Note 3: Note that you can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/tongueWeight
   */
  tongueWeight: QuantitativeValue;

  /** The permitted weight of a trailer attached to the vehicle.
   *
   * Typical unit code(s): KGM for kilogram, LBR for pound
   * - Note 1: You can indicate additional information in the {@link name} of the {@link QuantitativeValue} node.
   * - Note 2: You may also link to a {@link QualitativeValue} node that provides additional information using {@link valueReference}.
   * - Note 3: Note that you can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/trailerWeight
   */
  trailerWeight: QuantitativeValue;

  /** A short text indicating the configuration of the vehicle, e.g. '5dr hatchback ST 2.5 MT 225 hp' or 'limited edition'.
   * @see https://schema.org/vehicleConfiguration
   */
  vehicleConfiguration: Text;

  /** Information about the engine or engines of the vehicle.
   * @see https://schema.org/vehicleEngine
   */
  vehicleEngine: EngineSpecification;

  /** The Vehicle Identification Number (VIN) is a unique serial number used by the automotive industry to identify individual motor vehicles.
   * @see https://schema.org/vehicleIdentificationNumber
   */
  vehicleIdentificationNumber: Text;

  /** The color or color combination of the interior of the vehicle.
   * @see https://schema.org/vehicleInteriorColor
   */
  vehicleInteriorColor: Text;

  /** The type or material of the interior of the vehicle (e.g. synthetic fabric, leather, wood, etc.). While most interior types are characterized by the material used, an interior type can also be based on vehicle usage or target audience.
   * @see https://schema.org/vehicleInteriorType
   */
  vehicleInteriorType: Text;

  /** The release date of a vehicle model (often used to differentiate versions of the same make and model).
   * @see https://schema.org/vehicleModelDate
   */
  vehicleModelDate: Date;

  /** The number of passengers that can be seated in the vehicle, both in terms of the physical space available, and in terms of limitations set by law.
   *
   * Typical unit code(s): C62 for persons.
   * @see https://schema.org/vehicleSeatingCapacity
   */
  vehicleSeatingCapacity: Number | QuantitativeValue;

  /** Indicates whether the vehicle has been used for special purposes, like commercial rental, driving school, or as a taxi. The legislation in many countries requires this information to be revealed when offering a car for sale.
   * @see https://schema.org/vehicleSpecialUsage
   */
  vehicleSpecialUsage: CarUsageType | Text;

  /** The type of component used for transmitting the power from a rotating power source to the wheels or other relevant component(s) ("gearbox" for cars).
   * @see https://schema.org/vehicleTransmission
   */
  vehicleTransmission: QualitativeValueType | Text | URL;

  /** The permitted total weight of the loaded vehicle, including passengers and cargo and the weight of the empty vehicle.
   *
   * Typical unit code(s): KGM for kilogram, LBR for pound
   * - Note 1: You can indicate additional information in the {@link name} of the {@link QuantitativeValue} node.
   * - Note 2: You may also link to a {@link QualitativeValue} node that provides additional information using {@link valueReference}.
   * - Note 3: Note that you can use {@link minValue} and {@link maxValue} to indicate ranges.
   * @see https://schema.org/weightTotal
   */
  weightTotal: QuantitativeValue;

  /** The distance between the centers of the front and rear wheels.
   *
   * Typical unit code(s): CMT for centimeters, MTR for meters, INH for inches, FOT for foot/feet
   * @see https://schema.org/wheelbase
   */
  wheelbase: QuantitativeValue;
}

/** A vehicle is a device that is designed or used to transport people or cargo over land, water, air, or through space.
 * @see https://schema.org/Vehicle
 */
export interface Vehicle extends VehicleProps {
  "@type": "Vehicle";
}

export type VehicleType = Vehicle;
