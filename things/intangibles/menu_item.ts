import { RestrictedDiet } from "./enumerations/restricted_diet.ts";
import { NutritionInformation } from "./structured_values/nutrition_information.ts";
import { MenuSection } from "./../creative_works/menu_section.ts";
import { ThingProps } from "../thing.ts";
import { Offer } from "./offers/offer.ts";
import { Demand } from "./demand.ts";

export interface MenuItemProps extends ThingProps {
  /** Additional menu item(s) such as a side dish of salad or side order of fries that can be added to this menu item. Additionally it can be a menu section containing allowed add-on menu items for this menu item.
   * @see https://schema.org/menuAddOn
   */
  menuAddOn: MenuItem | MenuSection;

  /** Nutrition information about the recipe or menu item.
   * @see https://schema.org/nutrition
   */
  nutrition: NutritionInformation;

  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   * @deprecated
   */
  offers: Demand | Offer;

  /** Indicates a dietary restriction or guideline for which this recipe or menu item is suitable, e.g. diabetic, halal etc.
   * @see https://schema.org/suitableForDiet
   */
  suitableForDiet: RestrictedDiet;
}

/** A food or drink item listed in a menu or menu section.
 * @see https://schema.org/MenuItem
 */
export interface MenuItem extends MenuItemProps {
  "@type": "MenuItem";
}
