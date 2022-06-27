import { Duration } from "./quantities/duration.ts";
import { Date, DateTime, Integer, Text, Time } from "../../data_types.ts";
import { DayOfWeek } from "./enumerations/day_of_week.ts";
import { ThingProps } from "../thing.ts";

export interface ScheduleProps extends ThingProps {
  /** Defines the day(s) of the week on which a recurring {@link Event} takes place. May be specified using either {@link DayOfWeek}, or alternatively {@link Text} conforming to iCal's syntax for byDay recurrence rules.
   * @see https://schema.org/byDay
   * @deprecated
   */
  byDay: DayOfWeek | Text;

  /** Defines the month(s) of the year on which a recurring {@link Event} takes place. Specified as an {@link Integer} between 1-12. January is 1.
   * @see https://schema.org/byMonth
   * @deprecated
   */
  byMonth: Integer;

  /** Defines the day(s) of the month on which a recurring {@link Event} takes place. Specified as an {@link Integer} between 1-31.
   * @see https://schema.org/byMonthDay
   */
  byMonthDay: Integer;

  /** Defines the week(s) of the month on which a recurring Event takes place. Specified as an Integer between 1-5. For clarity, byMonthWeek is best used in conjunction with byDay to indicate concepts like the first and third Mondays of a month.
   * @see https://schema.org/byMonthWeek
   */
  byMonthWeek: Integer;

  /** The duration of the item (movie, audio recording, event, etc.) in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}.
   * @see https://schema.org/duration
   */
  duration: Duration;

  /** The end date and time of the item (in {@link ISO 8601 date format}).
   * @see https://schema.org/endDate
   */
  endDate: Date | DateTime;

  /** The endTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to end. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December. For media, including audio and video, it's the time offset of the end of a clip within a larger file.
   *
   * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/endTime
   */
  endTime: DateTime | Time;

  /** Defines a {@link Date} or {@link DateTime} during which a scheduled {@link Event} will not take place. The property allows exceptions to a {@link Schedule} to be specified. If an exception is specified as a {@link DateTime} then only the event that would have started at that specific date and time should be excluded from the schedule. If an exception is specified as a {@link Date} then any event that is scheduled for that 24 hour period should be excluded from the schedule. This allows a whole day to be excluded from the schedule without having to itemise every scheduled event.
   * @see https://schema.org/exceptDate
   * @deprecated
   */
  exceptDate: Date | DateTime;

  /** Defines the number of times a recurring {@link Event} will take place.
   * @see https://schema.org/repeatCount
   */
  repeatCount: Integer;

  /** Defines the frequency at which {@link Event}s will occur according to a schedule {@link Schedule}. The intervals between events should be defined as a {@link Duration} of time.
   * @see https://schema.org/repeatFrequency
   * @deprecated
   */
  repeatFrequency: Duration | Text;

  /** Indicates the timezone for which the time(s) indicated in the {@link Schedule} are given. The value provided should be among those listed in the IANA Time Zone Database.
   * @see https://schema.org/scheduleTimezone
   * @deprecated
   */
  scheduleTimezone: Text;

  /** The start date and time of the item (in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}).
   * @see https://schema.org/startDate
   */
  startDate: Date | DateTime;

  /** The startTime of something. For a reserved event or service (e.g. FoodEstablishmentReservation), the time that it is expected to start. For actions that span a period of time, when the action was performed. e.g. John wrote a book from January to December. For media, including audio and video, it's the time offset of the start of a clip within a larger file.
   *
   * Note that Event uses startDate/endDate instead of startTime/endTime, even when describing dates with times. This situation may be clarified in future revisions.
   * @see https://schema.org/startTime
   */
  startTime: DateTime | Time;
}

/** A schedule defines a repeating time period used to describe a regularly occurring {@link Event}. At a minimum a schedule will specify {@link repeatFrequency} which describes the interval between occurences of the event. Additional information can be provided to specify the schedule more precisely. This includes identifying the day(s) of the week or month when the recurring event will take place, in addition to its start and end time. Schedules may also have start and end dates to indicate when they are active, e.g. to define a limited calendar of events.
 * @see https://schema.org/Schedule
 * @deprecated
 */
export interface Schedule extends ScheduleProps {
  "@type": "Schedule";
}
