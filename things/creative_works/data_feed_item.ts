import { ThingType } from "../thing.ts";
import { Date, DateTime } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface DataFeedItemProps extends ThingProps {
  /** The date on which the CreativeWork was created or the item was added to a DataFeed.
   * @see https://schema.org/dateCreated
   */
  dateCreated: Date | DateTime;

  /** The datetime the item was removed from the DataFeed.
   * @see https://schema.org/dateDeleted
   */
  dateDeleted: Date | DateTime;

  /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
   * @see https://schema.org/dateModified
   */
  dateModified: Date | DateTime;

  /** An entity represented by an entry in a list or data feed (e.g. an 'artist' in a list of 'artists')’.
   * @see https://schema.org/item
   */
  item: ThingType;
}

/** A single item within a larger data feed.
 * @see https://schema.org/DataFeedItem
 */
export interface DataFeedItem extends DataFeedItemProps {
  "@type": "DataFeedItem";
}
