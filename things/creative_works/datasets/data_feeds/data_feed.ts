import { ThingType } from "../../../thing.ts";
import { Text } from "../../../../data_types.ts";
import { DataFeedItem } from "../../data_feed_item.ts";
import { CreativeWorkProps } from "./../../creative_work.ts";
import { DatasetProps } from "../dataset.ts";
import { ThingProps } from "../../../thing.ts";

export interface DataFeedProps
  extends DatasetProps, CreativeWorkProps, ThingProps {
  /** An item within in a data feed. Data feeds may have many elements.
   * @see https://schema.org/dataFeedElement
   */
  dataFeedElement: DataFeedItem | Text | ThingType;
}

/** A single feed providing structured information about one or more entities or topics.
 * @see https://schema.org/DataFeed
 */
export interface DataFeed extends DataFeedProps {
  "@type": "DataFeed";
}

export type DataFeedType = DataFeed;
