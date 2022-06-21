/** A system of medicine that originated in India over thousands of years and that focuses on integrating and balancing the body, mind, and spirit.
 * @see https://schema.org/Ayurvedic
 */
export type Ayurvedic = "https://schema.org/Ayurvedic";

/** A system of medicine focused on the relationship between the body's structure, mainly the spine, and its functioning.
 * @see https://schema.org/Chiropractic
 */
export type Chiropractic = "https://schema.org/Chiropractic";

/** A system of medicine based on the principle that a disease can be cured by a substance that produces similar symptoms in healthy people.
 * @see https://schema.org/Homeopathic
 */
export type Homeopathic = "https://schema.org/Homeopathic";

/** A system of medicine focused on promoting the body's innate ability to heal itself.
 * @see https://schema.org/Osteopathic
 */
export type Osteopathic = "https://schema.org/Osteopathic";

/** A system of medicine based on common theoretical concepts that originated in China and evolved over thousands of years, that uses herbs, acupuncture, exercise, massage, dietary therapy, and other methods to treat a wide range of conditions.
 * @see https://schema.org/TraditionalChinese
 */
export type TraditionalChinese = "https://schema.org/TraditionalChinese";

/** The conventional Western system of medicine, that aims to apply the best available evidence gained from the scientific method to clinical decision making. Also known as conventional or Western medicine.
 * @see https://schema.org/WesternConventional
 */
export type WesternConventional = "https://schema.org/WesternConventional";

/** Systems of medical practice.
 * @see https://schema.org/MedicineSystem
 */
export type MedicineSystem =
  | Ayurvedic
  | Chiropractic
  | Homeopathic
  | Osteopathic
  | TraditionalChinese
  | WesternConventional;
