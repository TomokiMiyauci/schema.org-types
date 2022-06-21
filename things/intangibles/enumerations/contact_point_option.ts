/** Uses devices to support users with hearing impairments.
 * @see https://schema.org/HearingImpairedSupported
 */
export type HearingImpairedSupported =
  "https://schema.org/HearingImpairedSupported";

/** The associated telephone number is toll free.
 * @see https://schema.org/TollFree
 */
export type TollFree = "https://schema.org/TollFree";

/** Enumerated options related to a ContactPoint.
 * @see https://schema.org/ContactPointOption
 */
export type ContactPointOption = HearingImpairedSupported | TollFree;
