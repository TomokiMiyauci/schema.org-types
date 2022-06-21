import { DayOfWeek } from "../enumerations/day_of_week.ts";
import { Date, DateTime, Time } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";

export interface OpeningHoursSpecificationProps extends ThingProps {
  /** The closing hour of the place or service on the given day(s) of the week.
   * @see https://schema.org/closes
   */
  closes: Time;

  /** The day of the week for which these opening hours are valid.
   * @see https://schema.org/dayOfWeek
   */
  dayOfWeek: DayOfWeek;

  /** The opening hour of the place or service on the given day(s) of the week.
   * @see https://schema.org/opens
   */
  opens: Time;

  /** The date when the item becomes valid.
   * @see https://schema.org/validFrom
   */
  validFrom: Date | DateTime;

  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   * @see https://schema.org/validThrough
   */
  validThrough: Date | DateTime;
}

/** A structured value providing information about the opening hours of a place or a certain service inside a place.
 * @see https://schema.org/OpeningHoursSpecification
 */
export interface OpeningHoursSpecification
  extends OpeningHoursSpecificationProps {
  "@type": "OpeningHoursSpecification";
}
