/** All-wheel Drive is a transmission layout where the engine drives all four wheels.
 * @see https://schema.org/AllWheelDriveConfiguration
 */
export type AllWheelDriveConfiguration =
  "https://schema.org/AllWheelDriveConfiguration";

/** Four-wheel drive is a transmission layout where the engine primarily drives two wheels with a part-time four-wheel drive capability.
 * @see https://schema.org/FourWheelDriveConfiguration
 */
export type FourWheelDriveConfiguration =
  "https://schema.org/FourWheelDriveConfiguration";

/** Front-wheel drive is a transmission layout where the engine drives the front wheels.
 * @see https://schema.org/FrontWheelDriveConfiguration
 */
export type FrontWheelDriveConfiguration =
  "https://schema.org/FrontWheelDriveConfiguration";

/** Real-wheel drive is a transmission layout where the engine drives the rear wheels.
 * @see https://schema.org/RearWheelDriveConfiguration
 */
export type RearWheelDriveConfiguration =
  "https://schema.org/RearWheelDriveConfiguration";

/** A value indicating which roadwheels will receive torque.
 * @see https://schema.org/DriveWheelConfigurationValue
 */
export type DriveWheelConfigurationValue =
  | AllWheelDriveConfiguration
  | FourWheelDriveConfiguration
  | FrontWheelDriveConfiguration
  | RearWheelDriveConfiguration;
