import { MerchantReturnPolicySeasonalOverride } from "./merchant_return_policy_seasonal_override.ts";
import { MerchantReturnEnumeration } from "./enumerations/merchant_return_enumeration.ts";
import { ReturnMethodEnumeration } from "./enumerations/return_method_enumeration.ts";
import { RefundTypeEnumeration } from "./enumerations/refund_type_enumeration.ts";
import { OfferItemCondition } from "./enumerations/offer_item_condition.ts";
import { MonetaryAmount } from "./structured_values/monetary_amount.ts";
import { ReturnLabelSourceEnumeration } from "./enumerations/return_label_source_enumeration.ts";
import { ReturnFeesEnumeration } from "./enumerations/return_fees_enumeration.ts";
import {
  Boolean,
  Date,
  DateTime,
  Integer,
  Number,
  Text,
  URL,
} from "../../data_types.ts";
import { Country } from "../places/administrative_areas/country.ts";
import { ThingProps } from "../thing.ts";
import { PropertyValueType } from "../intangibles/structured_values/property_values/property_value.ts";

export interface MerchantReturnPolicyProps extends ThingProps {
  /** A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   *
   * @remark Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty: PropertyValueType;

  /** A country where a particular merchant return policy applies to, for example the two-letter ISO 3166-1 alpha-2 country code.
   * @see https://schema.org/applicableCountry
   * @deprecated
   */
  applicableCountry: Country | Text;

  /** The type of return fees if the product is returned due to customer remorse.
   * @see https://schema.org/customerRemorseReturnFees
   * @deprecated
   */
  customerRemorseReturnFees: ReturnFeesEnumeration;

  /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned due to customer remorse.
   * @see https://schema.org/customerRemorseReturnLabelSource
   * @deprecated
   */
  customerRemorseReturnLabelSource: ReturnLabelSourceEnumeration;

  /** The amount of shipping costs if a product is returned due to customer remorse. Applicable when property {@link customerRemorseReturnFees} equals {@link ReturnShippingFees}.
   * @see https://schema.org/customerRemorseReturnShippingFeesAmount
   * @deprecated
   */
  customerRemorseReturnShippingFeesAmount: MonetaryAmount;

  /** Are in-store returns offered? (for more advanced return methods use the {@link returnMethod} property)
   * @see https://schema.org/inStoreReturnsOffered
   * @deprecated
   */
  inStoreReturnsOffered: Boolean;

  /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer.
   * Also used for product return policies to specify the condition of products accepted for returns.
   * @see https://schema.org/itemCondition
   * @deprecated
   */
  itemCondition: OfferItemCondition;

  /** The type of return fees for returns of defect products.
   * @see https://schema.org/itemDefectReturnFees
   * @deprecated
   */
  itemDefectReturnFees: ReturnFeesEnumeration;

  /** The method (from an enumeration) by which the customer obtains a return shipping label for a defect product.
   * @see https://schema.org/itemDefectReturnLabelSource
   * @deprecated
   */
  itemDefectReturnLabelSource: ReturnLabelSourceEnumeration;

  /** Amount of shipping costs for defect product returns. Applicable when property {@link itemDefectReturnFees} equals {@link ReturnShippingFees}.
   * @see https://schema.org/itemDefectReturnShippingFeesAmount
   * @deprecated
   */
  itemDefectReturnShippingFeesAmount: MonetaryAmount;

  /** Specifies either a fixed return date or the number of days (from the delivery date) that a product can be returned. Used when the {@link returnPolicyCategory} property is specified as {@link MerchantReturnFiniteReturnWindow}.
   * @see https://schema.org/merchantReturnDays
   * @deprecated
   */
  merchantReturnDays: Date | DateTime | Integer;

  /** Specifies a Web page or service by URL, for product returns.
   * @see https://schema.org/merchantReturnLink
   * @deprecated
   */
  merchantReturnLink: URL;

  /** Enumerates several kinds of product return refund types.
   * @see https://schema.org/RefundTypeEnumeration
   * @deprecated
   */
  refundType: RefundTypeEnumeration;

  /** Use {@link MonetaryAmount} to specify a fixed restocking fee for product returns, or use {@link Number} to specify a percentage of the product price paid by the customer.
   * @see https://schema.org/restockingFee
   * @deprecated
   */
  restockingFee: MonetaryAmount | Number;

  /** The type of return fees for purchased products (for any return reason)
   * @see https://schema.org/returnFees
   * @deprecated
   */
  returnFees: ReturnFeesEnumeration;

  /** The method (from an enumeration) by which the customer obtains a return shipping label for a product returned for any reason.
   * @see https://schema.org/returnLabelSource
   * @deprecated
   */
  returnLabelSource: ReturnLabelSourceEnumeration;

  /** The type of return method offered, specified from an enumeration.
   * @see https://schema.org/returnMethod
   * @deprecated
   */
  returnMethod: ReturnMethodEnumeration;

  /** Enumerates several kinds of product return policies.
   * @see https://schema.org/MerchantReturnEnumeration
   * @deprecated
   */
  returnPolicyCategory: MerchantReturnEnumeration;

  /** The country where the product has to be sent to for returns, for example "Ireland" using the {@link name} property of {@link Country}. You can also provide the two-letter {@link https://en.wikipedia.org/wiki/ISO_3166-1 ISO 3166-1 alpha-2 country code}. Note that this can be different from the country where the product was originally shipped from or sent too.
   * @see https://schema.org/returnPolicyCountry
   * @deprecated
   */
  returnPolicyCountry: Country | Text;

  /** Seasonal override of a return policy.
   * @see https://schema.org/returnPolicySeasonalOverride
   * @deprecated
   */
  returnPolicySeasonalOverride: MerchantReturnPolicySeasonalOverride;

  /** Amount of shipping costs for product returns (for any reason). Applicable when property {@link returnFees} equals {@link ReturnShippingFees}.
   * @see https://schema.org/returnShippingFeesAmount
   * @deprecated
   */
  returnShippingFeesAmount: MonetaryAmount;
}

/** A MerchantReturnPolicy provides information about product return policies associated with an {@link Organization}, {@link Product}, or {@link Offer}.
 * @see https://schema.org/MerchantReturnPolicy
 * @deprecated
 */
export interface MerchantReturnPolicy extends MerchantReturnPolicyProps {
  "@type": "MerchantReturnPolicy";
}
