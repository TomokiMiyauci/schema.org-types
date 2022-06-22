/** Indicates that the item is available on back order.
 * @see https://schema.org/BackOrder
 */
export type BackOrder = "https://schema.org/BackOrder";

/** Indicates that the item has been discontinued.
 * @see https://schema.org/Discontinued
 */
export type Discontinued = "https://schema.org/Discontinued";

/** Indicates that the item is in stock.
 * @see https://schema.org/InStock
 */
export type InStock = "https://schema.org/InStock";

/** Indicates that the item is available only at physical locations.
 * @see https://schema.org/InStoreOnly
 */
export type InStoreOnly = "https://schema.org/InStoreOnly";

/** Indicates that the item has limited availability.
 * @see https://schema.org/LimitedAvailability
 */
export type LimitedAvailability = "https://schema.org/LimitedAvailability";

/** Indicates that the item is available only online.
 * @see https://schema.org/OnlineOnly
 */
export type OnlineOnly = "https://schema.org/OnlineOnly";

/** Indicates that the item is out of stock.
 * @see https://schema.org/OutOfStock
 */
export type OutOfStock = "https://schema.org/OutOfStock";

/** Indicates that the item is available for pre-order.
 * @see https://schema.org/PreOrder
 */
export type PreOrder = "https://schema.org/PreOrder";

/** Indicates that the item is available for ordering and delivery before general availability.
 * @see https://schema.org/PreSale
 */
export type PreSale = "https://schema.org/PreSale";

/** Indicates that the item has sold out.
 * @see https://schema.org/SoldOut
 */
export type SoldOut = "https://schema.org/SoldOut";

/** A list of possible product availability options.
 * @see https://schema.org/ItemAvailability
 */
export type ItemAvailability =
  | BackOrder
  | Discontinued
  | InStock
  | InStoreOnly
  | LimitedAvailability
  | OnlineOnly
  | OutOfStock
  | PreOrder
  | PreSale
  | SoldOut;
