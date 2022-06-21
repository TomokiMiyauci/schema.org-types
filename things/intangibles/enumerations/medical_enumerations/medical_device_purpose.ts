/** A medical device used for diagnostic purposes.
 * @see https://schema.org/Diagnostic
 */
export type Diagnostic = "https://schema.org/Diagnostic";

/** A medical device used for therapeutic purposes.
 * @see https://schema.org/Therapeutic
 */
export type Therapeutic = "https://schema.org/Therapeutic";

/** Categories of medical devices, organized by the purpose or intended use of the device.
 * @see https://schema.org/MedicalDevicePurpose
 */
export type MedicalDevicePurpose = Diagnostic | Therapeutic;
