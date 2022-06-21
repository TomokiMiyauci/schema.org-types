/** A trial design in which neither the researcher nor the patient knows the details of the treatment the patient was randomly assigned to.
 * @see https://schema.org/DoubleBlindedTrial
 */
export type DoubleBlindedTrial = "https://schema.org/DoubleBlindedTrial";

/** An international trial.
 * @see https://schema.org/InternationalTrial
 */
export type InternationalTrial = "https://schema.org/InternationalTrial";

/** A trial that takes place at multiple centers.
 * @see https://schema.org/MultiCenterTrial
 */
export type MultiCenterTrial = "https://schema.org/MultiCenterTrial";

/** A trial design in which the researcher knows the full details of the treatment, and so does the patient.
 * @see https://schema.org/OpenTrial
 */
export type OpenTrial = "https://schema.org/OpenTrial";

/** A placebo-controlled trial design.
 * @see https://schema.org/PlaceboControlledTrial
 */
export type PlaceboControlledTrial =
  "https://schema.org/PlaceboControlledTrial";

/** A randomized trial design.
 * @see https://schema.org/RandomizedTrial
 */
export type RandomizedTrial = "https://schema.org/RandomizedTrial";

/** A trial design in which the researcher knows which treatment the patient was randomly assigned to but the patient does not.
 * @see https://schema.org/SingleBlindedTrial
 */
export type SingleBlindedTrial = "https://schema.org/SingleBlindedTrial";

/** A trial that takes place at a single center.
 * @see https://schema.org/SingleCenterTrial
 */
export type SingleCenterTrial = "https://schema.org/SingleCenterTrial";

/** A trial design in which neither the researcher, the person administering the therapy nor the patient knows the details of the treatment the patient was randomly assigned to.
 * @see https://schema.org/TripleBlindedTrial
 */
export type TripleBlindedTrial = "https://schema.org/TripleBlindedTrial";

/** Design models for medical trials. Enumerated type.
 * @see https://schema.org/MedicalTrialDesign
 */
export type MedicalTrialDesign =
  | DoubleBlindedTrial
  | InternationalTrial
  | MultiCenterTrial
  | OpenTrial
  | PlaceboControlledTrial
  | RandomizedTrial
  | SingleBlindedTrial
  | SingleCenterTrial
  | TripleBlindedTrial;
