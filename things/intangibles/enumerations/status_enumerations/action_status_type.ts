/** An in-progress action (e.g, while watching the movie, or driving to a location).
 * @see https://schema.org/ActiveActionStatus
 */
export type ActiveActionStatus = "https://schema.org/ActiveActionStatus";

/** An action that has already taken place.
 * @see https://schema.org/CompletedActionStatus
 */
export type CompletedActionStatus = "https://schema.org/CompletedActionStatus";

/** An action that failed to complete. The action's error property and the HTTP return code contain more information about the failure.
 * @see https://schema.org/FailedActionStatus
 */
export type FailedActionStatus = "https://schema.org/FailedActionStatus";

/** A description of an action that is supported.
 * @see https://schema.org/PotentialActionStatus
 */
export type PotentialActionStatus = "https://schema.org/PotentialActionStatus";

/** The status of an Action.
 * @see https://schema.org/ActionStatusType
 */
export type ActionStatusType =
  | ActiveActionStatus
  | CompletedActionStatus
  | FailedActionStatus
  | PotentialActionStatus;
