/** A benefit for basic income.
 * @see https://schema.org/BasicIncome
 * @deprecated
 */
export type BasicIncome = "https://schema.org/BasicIncome";

/** A benefit for supporting businesses.
 * @see https://schema.org/BusinessSupport
 * @deprecated
 */
export type BusinessSupport = "https://schema.org/BusinessSupport";

/** A benefit for disability support.
 * @see https://schema.org/DisabilitySupport
 * @deprecated
 */
export type DisabilitySupport = "https://schema.org/DisabilitySupport";

/** A benefit for one-time payments for individuals.
 * @see https://schema.org/OneTimePayments
 * @deprecated
 */
export type OneTimePayments = "https://schema.org/OneTimePayments";

/** A benefit for paid leave.
 * @see https://schema.org/PaidLeave
 * @deprecated
 */
export type PaidLeave = "https://schema.org/PaidLeave";

/** A benefit for parental support.
 * @see https://schema.org/ParentalSupport
 * @deprecated
 */
export type ParentalSupport = "https://schema.org/ParentalSupport";

/** A benefit for health care.
 * @see https://schema.org/HealthCare
 * @deprecated
 */
export type HealthCare = "https://schema.org/HealthCare";

/** A benefit for unemployment support.
 * @see https://schema.org/UnemploymentSupport
 * @deprecated
 */
export type UnemploymentSupport = "https://schema.org/UnemploymentSupport";

/** GovernmentBenefitsType enumerates several kinds of government benefits to support the COVID-19 situation. Note that this structure may not capture all benefits offered.
 * @see https://schema.org/GovernmentBenefitsType
 * @deprecated
 */
export type GovernmentBenefitsType =
  | BasicIncome
  | BusinessSupport
  | DisabilitySupport
  | OneTimePayments
  | PaidLeave
  | ParentalSupport
  | HealthCare
  | UnemploymentSupport;
