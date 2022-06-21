/** The day of the week between Sunday and Tuesday.
 * @see https://schema.org/Monday
 */
export type Monday = "https://schema.org/Monday";

/** The day of the week between Monday and Wednesday.
 * @see https://schema.org/Tuesday
 */
export type Tuesday = "https://schema.org/Tuesday";

/** The day of the week between Tuesday and Thursday.
 * @see https://schema.org/Wednesday
 */
export type Wednesday = "https://schema.org/Wednesday";

/** The day of the week between Wednesday and Friday.
 * @see https://schema.org/Thursday
 */
export type Thursday = "https://schema.org/Thursday";

/** The day of the week between Thursday and Saturday.
 * @see https://schema.org/Friday
 */
export type Friday = "https://schema.org/Friday";

/** The day of the week between Friday and Sunday.
 * @see https://schema.org/Saturday
 */
export type Saturday = "https://schema.org/Saturday";

/** The day of the week between Saturday and Monday.
 * @see https://schema.org/Sunday
 */
export type Sunday = "https://schema.org/Sunday";

/** This stands for any day that is a public holiday; it is a placeholder for all official public holidays in some particular location. While not technically a "day of the week", it can be used with {@link OpeningHoursSpecification}. In the context of an opening hours specification it can be used to indicate opening hours on public holidays, overriding general opening hours for the day of the week on which a public holiday occurs.
 * @see https://schema.org/PublicHolidays
 */
export type PublicHolidays = "https://schema.org/PublicHolidays";

/** The day of the week, e.g. used to specify to which day the opening hours of an OpeningHoursSpecification refer.
 *
 * Originally, URLs from {@link GoodRelations} were used (for {@link Monday}, {@link Tuesday}, {@link Wednesday}, {@link Thursday}, {@link Friday}, {@link Saturday}, {@link Sunday} plus a special entry for {@link PublicHolidays}); these have now been integrated directly into schema.org.
 * @see https://schema.org/DayOfWeek
 */
export type DayOfWeek =
  | Monday
  | Tuesday
  | Wednesday
  | Thursday
  | Friday
  | Saturday
  | Sunday
  | PublicHolidays;
