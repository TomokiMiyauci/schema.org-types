/** Enumerated for values for itemListOrder for indicating how an ordered ItemList is organized.
 * @see https://schema.org/ItemListOrderType
 */
type ItemListOrderType =
  | ItemListOrderAscending
  | ItemListOrderDescending
  | ItemListUnordered;

/** An ItemList ordered with lower values listed first.
 * @see https://schema.org/ItemListOrderAscending
 */
type ItemListOrderAscending = "https://schema.org/ItemListOrderAscending";

/** An ItemList ordered with higher values listed first.
 * @see https://schema.org/ItemListOrderDescending
 */
type ItemListOrderDescending = "https://schema.org/ItemListOrderDescending";

/** An ItemList ordered with no explicit order.
 * @see https://schema.org/ItemListUnordered
 */
type ItemListUnordered = "https://schema.org/ItemListUnordered";

export default ItemListOrderType;
