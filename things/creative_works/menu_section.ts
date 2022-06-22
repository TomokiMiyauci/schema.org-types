import { MenuItem } from "./../intangibles/menu_item";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface MenuSectionProps extends CreativeWorkProps, ThingProps {
  hasMenuItem: MenuItem;
}

/** A sub-grouping of food or drink items in a menu. E.g. courses (such as 'Dinner', 'Breakfast', etc.), specific type of dishes (such as 'Meat', 'Vegan', 'Drinks', etc.), or some other classification made by the menu provider.
 * @see https://schema.org/MenuSection
 */
export interface MenuSection extends MenuSectionProps {
  "@type": "MenuSection";
}
