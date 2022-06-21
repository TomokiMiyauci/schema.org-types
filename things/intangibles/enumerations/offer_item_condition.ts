/** Indicates that the item is damaged.
 * @see https://schema.org/DamagedCondition
 */
export type DamagedCondition = "https://schema.org/DamagedCondition";

/** Indicates that the item is new.
 * @see https://schema.org/NewCondition
 */
export type NewCondition = "https://schema.org/NewCondition";

/** Indicates that the item is refurbished.
 * @see https://schema.org/RefurbishedCondition
 */
export type RefurbishedCondition = "https://schema.org/RefurbishedCondition";

/** Indicates that the item is used.
 * @see https://schema.org/UsedCondition
 */
export type UsedCondition = "https://schema.org/UsedCondition";

/** A list of possible conditions for the item.
 * @see https://schema.org/OfferItemCondition
 */
export type OfferItemCondition =
  | DamagedCondition
  | NewCondition
  | RefurbishedCondition
  | UsedCondition;
