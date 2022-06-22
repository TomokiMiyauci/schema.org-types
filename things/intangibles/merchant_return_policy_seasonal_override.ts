import { MerchantReturnEnumeration } from "./enumerations/merchant_return_enumeration.ts";
import { Date, DateTime, Integer } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface MerchantReturnPolicySeasonalOverrideProps extends ThingProps {
  /** The end date and time of the item (in {@link https://schema.org/endDate ISO 8601 date format}).
   * @see https://schema.org/endDate
   */
  endDate: Date | DateTime;

  /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the {@link returnPolicyCategory} property is specified as {@link MerchantReturnFiniteReturnWindow}.
   * @see https://schema.org/merchantReturnDays
   */
  merchantReturnDays: Date | DateTime | Integer;

  /** Specifies an applicable return policy (from an enumeration).
   * @see https://schema.org/returnPolicyCategory
   */
  returnPolicyCategory: MerchantReturnEnumeration;

  /** The start date and time of the item (in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}).
   * @see https://schema.org/startDate
   */
  startDate: Date | DateTime;
}

/** A seasonal override of a return policy, for example used for holidays.
 * @see https://schema.org/MerchantReturnPolicySeasonalOverride
 * @deprecated
 */
export interface MerchantReturnPolicySeasonalOverride
  extends MerchantReturnPolicySeasonalOverrideProps {
  "@type": "MerchantReturnPolicySeasonalOverride";
}
