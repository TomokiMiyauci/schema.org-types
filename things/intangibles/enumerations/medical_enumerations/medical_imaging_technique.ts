/** X-ray computed tomography imaging.
 * @see https://schema.org/CT
 */
export type CT = "https://schema.org/CT";

/** Magnetic resonance imaging.
 * @see https://schema.org/MRI
 */
export type MRI = "https://schema.org/MRI";

/** Positron emission tomography imaging.
 * @see https://schema.org/PET
 */
export type PET = "https://schema.org/PET";

/** Radiography is an imaging technique that uses electromagnetic radiation other than visible light, especially X-rays, to view the internal structure of a non-uniformly composed and opaque object such as the human body.
 * @see https://schema.org/Radiography
 */
export type Radiography = "https://schema.org/Radiography";

/** Ultrasound imaging.
 * @see https://schema.org/Ultrasound
 */
export type Ultrasound = "https://schema.org/Ultrasound";

/** X-ray imaging.
 * @see https://schema.org/XRay
 */
export type XRay = "https://schema.org/XRay";

/** Any medical imaging modality typically used for diagnostic purposes. Enumerated type.
 * @see https://schema.org/MedicalImagingTechnique
 */
export type MedicalImagingTechnique =
  | CT
  | MRI
  | PET
  | Radiography
  | Ultrasound
  | XRay;
