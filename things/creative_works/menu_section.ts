import { MenuItem } from "../intangibles/menu_item.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface MenuSectionProps extends CreativeWorkProps, ThingProps {
  /** A food or drink item contained in a menu or menu section.
   * @see https://schema.org/hasMenuItem
   */
  hasMenuItem: MenuItem;

  /** A subgrouping of the menu (by dishes, course, serving time period, etc.).
   * @see https://schema.org/hasMenuSection
   */
  hasMenuSection: MenuSection;
}

/** A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 * @see https://schema.org/MenuSection
 */
export interface MenuSection extends MenuSectionProps {
  "@type": "MenuSection";
}
