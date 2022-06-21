/** Active, but not recruiting new participants.
 * @see https://schema.org/ActiveNotRecruiting
 */
export type ActiveNotRecruiting = "https://schema.org/ActiveNotRecruiting";

/** Completed.
 * @see https://schema.org/Completed
 */
export type Completed = "https://schema.org/Completed";

/** Enrolling participants by invitation only.
 * @see https://schema.org/EnrollingByInvitation
 */
export type EnrollingByInvitation = "https://schema.org/EnrollingByInvitation";

/** Not yet recruiting.
 * @see https://schema.org/NotYetRecruiting
 */
export type NotYetRecruiting = "https://schema.org/NotYetRecruiting";

/** Recruiting participants.
 * @see https://schema.org/Recruiting
 */
export type Recruiting = "https://schema.org/Recruiting";

/** Results are available.
 * @see https://schema.org/ResultsAvailable
 */
export type ResultsAvailable = "https://schema.org/ResultsAvailable";

/** Suspended.
 * @see https://schema.org/Suspended
 */
export type Suspended = "https://schema.org/Suspended";

/** Terminated.
 * @see https://schema.org/Terminated
 */
export type Terminated = "https://schema.org/Terminated";

/** Withdrawn.
 * @see https://schema.org/Withdrawn
 */
export type Withdrawn = "https://schema.org/Withdrawn";

/** The status of a medical study. Enumerated type.
 * @see https://schema.org/MedicalStudyStatus
 */
export type MedicalStudyStatus =
  | ActiveNotRecruiting
  | Completed
  | EnrollingByInvitation
  | NotYetRecruiting
  | Recruiting
  | ResultsAvailable
  | Suspended
  | Terminated
  | Withdrawn;
