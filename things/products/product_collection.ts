import { TypeAndQuantityNode } from "../intangibles/structured_values/type_and_quantity_node.ts";
import { CollectionsProps } from "../creative_works/collections/collection.ts";
import { CreativeWorkProps } from "../creative_works/creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface ProductCollectionProps
  extends CollectionsProps, CreativeWorkProps, ThingProps {
  /** This links to a node or nodes indicating the exact quantity of the products included in an {@link Offer} or {@link ProductCollection}.
   * @see https://schema.org/includesObject
   */
  includesObject: TypeAndQuantityNode;
}

/** A set of products (either {@link ProductGroups} or specific variants) that are listed together e.g. in an {@link Offer}.
 * @see https://schema.org/ProductCollection
 */
export interface ProductCollection extends ProductCollectionProps {
  "@type": "ProductCollection";
}
