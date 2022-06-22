import { Text } from "../../../data_types.ts";
import { Mass } from "../quantities/mass.ts";
import { Energy } from "../quantities/energy.ts";
import { ThingProps } from "../../thing.ts";

export interface NutritionInformationProps extends ThingProps {
  /** The number of calories.
   * @see https://schema.org/calories
   */
  calories: Energy;

  /** The number of grams of carbohydrates.
   * @see https://schema.org/carbohydrateContent
   */
  carbohydrateContent: Mass;

  /** The number of milligrams of cholesterol.
   * @see https://schema.org/cholesterolContent
   */
  cholesterolContent: Mass;

  /** The number of grams of fat.
   * @see https://schema.org/fatContent
   */
  fatContent: Mass;

  /** The number of grams of fiber.
   * @see https://schema.org/fiberContent
   */
  fiberContent: Mass;

  /** The number of grams of protein.
   * @see https://schema.org/proteinContent
   */
  proteinContent: Mass;

  /** The number of grams of saturated fat.
   * @see https://schema.org/saturatedFatContent
   */
  saturatedFatContent: Mass;

  /** The serving size, in terms of the number of volume or mass.
   * @see https://schema.org/servingSize
   */
  servingSize: Text;

  /** The number of milligrams of sodium.
   * @see https://schema.org/sodiumContent
   */
  sodiumContent: Mass;

  /** The number of grams of sugar.
   * @see https://schema.org/sugarContent
   */
  sugarContent: Mass;

  /** The number of grams of trans fat.
   * @see https://schema.org/transFatContent
   */
  transFatContent: Mass;

  /** The number of grams of unsaturated fat.
   * @see https://schema.org/unsaturatedFatContent
   */
  unsaturatedFatContent: Mass;
}

/** Nutritional information about the recipe.
 * @see https://schema.org/NutritionInformation
 */
export interface NutritionInformation extends NutritionInformationProps {
  "@type": "NutritionInformation";
}
