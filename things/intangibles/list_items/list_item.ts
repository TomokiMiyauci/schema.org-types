import { ThingProps, ThingType } from "../../thing.ts";
import { Integer, Text } from "../../../data_types.ts";

export interface ListItemProps extends ThingProps {
  /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.
   * @see https://schema.org/item
   */
  item: ThingType;

  /** A link to the ListItem that follows the current one.
   * @see https://schema.org/nextItem
   */
  nextItem: ListItemType;

  /** The position of an item in a series or sequence of items.
   * @see https://schema.org/position
   */
  position: Text | Integer;

  /** A link to the ListItem that preceeds the current one.
   * @see https://schema.org/previousItem
   */
  previousItem: ListItemType;
}

/** An list item, e.g. a step in a checklist or how-to description.
 * @see https://schema.org/ListItem
 */
export interface ListItem extends ListItemProps {
  "@type": "ListItem";
}

export type ListItemType = ListItem;
