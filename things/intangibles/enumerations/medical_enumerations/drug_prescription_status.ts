/** The character of a medical substance, typically a medicine, of being available over the counter or not.
 * @see https://schema.org/OTC
 */
export type OTC = "https://schema.org/OTC";

/** Available by prescription only.
 * @see https://schema.org/PrescriptionOnly
 */
export type PrescriptionOnly = "https://schema.org/PrescriptionOnly";

/** Indicates whether this drug is available by prescription or over-the-counter.
 * @see https://schema.org/DrugPrescriptionStatus
 */
export type DrugPrescriptionStatus = OTC | PrescriptionOnly;
