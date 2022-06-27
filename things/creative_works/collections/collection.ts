import { Integer } from "../../../data_types.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface CollectionsProps extends CreativeWorkProps, ThingProps {
  /** The number of items in the {@link Collection}.
   * @deprecated
   * @see https://schema.org/collectionSize
   */
  collectionSize: Integer;
}

/** A collection of items e.g. creative works or products.
 * @see https://schema.org/Collection
 */
export interface Collection extends CollectionsProps {
  "@type": "Collection";
}

export type CollectionType = Collection;
