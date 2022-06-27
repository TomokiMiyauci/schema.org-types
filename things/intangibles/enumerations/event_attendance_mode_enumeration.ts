/** An event that is conducted as a combination of both offline and online modes.
 * @see https://schema.org/MixedEventAttendanceMode
 * @deprecated
 */
export type MixedEventAttendanceMode =
  "https://schema.org/MixedEventAttendanceMode";

/** An event that is primarily conducted offline.
 * @see https://schema.org/OfflineEventAttendanceMode
 * @deprecated
 */
export type OfflineEventAttendanceMode =
  "https://schema.org/OfflineEventAttendanceMode";

/** An event that is primarily conducted online.
 * @see https://schema.org/OnlineEventAttendanceMode
 * @deprecated
 */
export type OnlineEventAttendanceMode =
  "https://schema.org/OnlineEventAttendanceMode";

/** An EventAttendanceModeEnumeration value is one of potentially several modes of organising an event, relating to whether it is online or offline.
 * @see https://schema.org/EventAttendanceModeEnumeration
 * @deprecated
 */
export type EventAttendanceModeEnumeration =
  | MixedEventAttendanceMode
  | OfflineEventAttendanceMode
  | OnlineEventAttendanceMode;
