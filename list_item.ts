import { ThingProps, ThingType } from "./thing.ts";
import { Integer, Text } from "./data_types.ts";

/** An list item, e.g. a step in a checklist or how-to description.
 * @see https://schema.org/ListItem
 */
export interface ListItemProps extends ThingProps {
  /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’. */
  item: ThingType;

  /** A link to the ListItem that follows the current one. */
  nextItem: ListItemType;

  /** The position of an item in a series or sequence of items. */
  position: Text | Integer;

  /** A link to the ListItem that preceeds the current one. */
  previousItem: ListItemType;
}

export interface ListItem extends ListItemProps {
  "@type": "ListItem";
}

export type ListItemType = ListItem;
