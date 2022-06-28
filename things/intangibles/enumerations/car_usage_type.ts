/** Indicates the usage of the vehicle for driving school.
 * @see https://schema.org/DrivingSchoolVehicleUsage
 */
export type DrivingSchoolVehicleUsage =
  "https://schema.org/DrivingSchoolVehicleUsage";

/** Indicates the usage of the vehicle as a rental car.
 * @see https://schema.org/RentalVehicleUsage
 */
export type RentalVehicleUsage = "https://schema.org/RentalVehicleUsage";

/** Indicates the usage of the car as a taxi.
 * @see https://schema.org/TaxiVehicleUsage
 */
export type TaxiVehicleUsage = "https://schema.org/TaxiVehicleUsage";

/** A value indicating a special usage of a car, e.g. commercial rental, driving school, or as a taxi.
 * @see https://schema.org/CarUsageType
 */
export type CarUsageType =
  | DrivingSchoolVehicleUsage
  | RentalVehicleUsage
  | TaxiVehicleUsage;
