/** Physical activity of relatively low intensity that depends primarily on the aerobic energy-generating process; during activity, the aerobic metabolism uses oxygen to adequately meet energy demands during exercise.
 * @see https://schema.org/AerobicActivity
 */
export type AerobicActivity = "https://schema.org/AerobicActivity";

/** Physical activity that is of high-intensity which utilizes the anaerobic metabolism of the body.
 * @see https://schema.org/AnaerobicActivity
 */
export type AnaerobicActivity = "https://schema.org/AnaerobicActivity";

/** Physical activity that is engaged to help maintain posture and balance.
 * @see https://schema.org/Balance
 */
export type Balance = "https://schema.org/Balance";

/** Physical activity that is engaged in to improve joint and muscle flexibility.
 * @see https://schema.org/Flexibility
 */
export type Flexibility = "https://schema.org/Flexibility";

/** Any physical activity engaged in for recreational purposes. Examples may include ballroom dancing, roller skating, canoeing, fishing, etc.
 * @see https://schema.org/LeisureTimeActivity
 */
export type LeisureTimeActivity = "https://schema.org/LeisureTimeActivity";

/** Any physical activity engaged in for job-related purposes. Examples may include waiting tables, maid service, carrying a mailbag, picking fruits or vegetables, construction work, etc.
 * @see https://schema.org/OccupationalActivity
 */
export type OccupationalActivity = "https://schema.org/OccupationalActivity";

/** Physical activity that is engaged in to improve muscle and bone strength. Also referred to as resistance training.
 * @see https://schema.org/StrengthTraining
 */
export type StrengthTraining = "https://schema.org/StrengthTraining";

/** Categories of physical activity, organized by physiologic classification.
 * @see https://schema.org/PhysicalActivityCategory
 */

export type PhysicalActivityCategory =
  | AerobicActivity
  | AnaerobicActivity
  | Balance
  | Flexibility
  | LeisureTimeActivity
  | OccupationalActivity
  | StrengthTraining;
