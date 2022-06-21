/** The event has been cancelled. If the event has multiple startDate values, all are assumed to be cancelled. Either startDate or previousStartDate may be used to specify the event's cancelled date(s).
 * @see https://schema.org/EventCancelled
 */
export type EventCancelled = "https://schema.org/EventCancelled";

/** Indicates that the event was changed to allow online participation. See {@link eventAttendanceMode} for specifics of whether it is now fully or partially online.
 * @see https://schema.org/EventMovedOnline
 */
export type EventMovedOnline = "https://schema.org/EventMovedOnline";

/** The event has been postponed and no new date has been set. The event's previousStartDate should be set.
 * @see https://schema.org/EventPostponed
 */
export type EventPostponed = "https://schema.org/EventPostponed";

/** The event has been rescheduled. The event's previousStartDate should be set to the old date and the startDate should be set to the event's new date. (If the event has been rescheduled multiple times, the previousStartDate property may be repeated).
 * @see https://schema.org/EventRescheduled
 */
export type EventRescheduled = "https://schema.org/EventRescheduled";

/** The event is taking place or has taken place on the startDate as scheduled. Use of this value is optional, as it is assumed by default.
 * @see https://schema.org/EventScheduled
 */
export type EventScheduled = "https://schema.org/EventScheduled";

/** EventStatusType is an enumeration type whose instances represent several states that an Event may be in.
 * @see https://schema.org/EventStatusType
 */
export type EventStatusType =
  | EventCancelled
  | EventMovedOnline
  | EventPostponed
  | EventRescheduled
  | EventScheduled;
