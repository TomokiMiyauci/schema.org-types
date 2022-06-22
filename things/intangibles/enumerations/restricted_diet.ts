/** A diet appropriate for people with diabetes.
 * @see https://schema.org/DiabeticDiet
 */
export type DiabeticDiet = "https://schema.org/DiabeticDiet";

/** A diet exclusive of gluten.
 * @see https://schema.org/GlutenFreeDiet
 */
export type GlutenFreeDiet = "https://schema.org/GlutenFreeDiet";

/** A diet conforming to Islamic dietary practices.
 * @see https://schema.org/HalalDiet
 */
export type HalalDiet = "https://schema.org/HalalDiet";

/** A diet conforming to Hindu dietary practices, in particular, beef-free.
 * @see https://schema.org/HinduDiet
 */
export type HinduDiet = "https://schema.org/HinduDiet";

/** A diet conforming to Jewish dietary practices.
 * @see https://schema.org/KosherDiet
 */
export type KosherDiet = "https://schema.org/KosherDiet";

/** A diet focused on reduced calorie intake.
 * @see https://schema.org/LowCalorieDiet
 */
export type LowCalorieDiet = "https://schema.org/LowCalorieDiet";

/** A diet focused on reduced fat and cholesterol intake.
 * @see https://schema.org/LowFatDiet
 */
export type LowFatDiet = "https://schema.org/LowFatDiet";

/** A diet appropriate for people with lactose intolerance.
 * @see https://schema.org/LowLactoseDiet
 */
export type LowLactoseDiet = "https://schema.org/LowLactoseDiet";

/** A diet focused on reduced sodium intake.
 * @see https://schema.org/LowSaltDiet
 */
export type LowSaltDiet = "https://schema.org/LowSaltDiet";

/** A diet exclusive of all animal products.
 * @see https://schema.org/VeganDiet
 */
export type VeganDiet = "https://schema.org/VeganDiet";

/** A diet exclusive of animal meat.
 * @see https://schema.org/VegetarianDiet
 */
export type VegetarianDiet = "https://schema.org/VegetarianDiet";

/** A diet restricted to certain foods or preparations for cultural, religious, health or lifestyle reasons.
 * @see https://schema.org/RestrictedDiet
 */
export type RestrictedDiet =
  | DiabeticDiet
  | GlutenFreeDiet
  | HalalDiet
  | HinduDiet
  | KosherDiet
  | LowCalorieDiet
  | LowFatDiet
  | LowLactoseDiet
  | LowSaltDiet
  | VeganDiet
  | VegetarianDiet;
