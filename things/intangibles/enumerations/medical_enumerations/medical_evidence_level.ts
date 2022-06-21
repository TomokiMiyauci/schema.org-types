/** Data derived from multiple randomized clinical trials or meta-analyses.
 * @see https://schema.org/EvidenceLevelA
 */
export type EvidenceLevelA = "https://schema.org/EvidenceLevelA";

/** Data derived from a single randomized trial, or nonrandomized studies.
 * @see https://schema.org/EvidenceLevelB
 */
export type EvidenceLevelB = "https://schema.org/EvidenceLevelB";

/** Only consensus opinion of experts, case studies, or standard-of-care.
 * @see https://schema.org/EvidenceLevelC
 */
export type EvidenceLevelC = "https://schema.org/EvidenceLevelC";

/** Level of evidence for a medical guideline. Enumerated type.
 * @see https://schema.org/MedicalEvidenceLevel
 */
export type MedicalEvidenceLevel =
  | EvidenceLevelA
  | EvidenceLevelB
  | EvidenceLevelC;
