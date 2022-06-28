/** The steering position is on the left side of the vehicle (viewed from the main direction of driving).
 * @see https://schema.org/LeftHandDriving
 */
export type LeftHandDriving = "https://schema.org/LeftHandDriving";

/** The steering position is on the right side of the vehicle (viewed from the main direction of driving).
 * @see https://schema.org/RightHandDriving
 */
export type RightHandDriving = "https://schema.org/RightHandDriving"

/** A value indicating a steering position.
 * @see https://schema.org/SteeringPositionValue
 */
export type SteeringPositionValue = LeftHandDriving | RightHandDriving;
