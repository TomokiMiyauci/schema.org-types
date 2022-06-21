/** Medical clinicians, including practicing physicians and other medical professionals involved in clinical practice.
 * @see https://schema.org/Clinician
 */
export type Clinician = "https://schema.org/Clinician";

/** Medical researchers.
 * @see https://schema.org/MedicalResearcher
 */
export type MedicalResearcher = "https://schema.org/MedicalResearcher";

/** Target audiences types for medical web pages. Enumerated type.
 * @see https://schema.org/MedicalAudienceType
 */
export type MedicalAudienceType = Clinician | MedicalResearcher;
