import { ItemListProps } from "../../creative_works/item_lists/item_list.ts";
import { ThingProps } from "../../thing.ts";

export interface OfferCatalogProps extends ItemListProps, ThingProps {}

/** An OfferCatalog is an ItemList that contains related Offers and/or further OfferCatalogs that are offeredBy the same provider.
 * @see https://schema.org/OfferCatalog
 */
export interface OfferCatalog extends OfferCatalogProps {
  "@type": "OfferCatalog";
}
