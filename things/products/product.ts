import { SizeSpecificationType } from "../intangibles/enumerations/qualitative_values/size_specification.ts";
import { ReviewType } from "../creative_works/reviews/review.ts";
import { OfferType } from "../intangibles/offers/offer.ts";
import { Demand } from "../intangibles/demand.ts";
import { ImageObjectType } from "../creative_works/media_objects/image_objects/image_object.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { OfferItemCondition } from "../intangibles/enumerations/offer_item_condition.ts";
import { ProductModel } from "./product_model.ts";
import { ProductGroup } from "./product_group.ts";
import { ServiceType } from "../intangibles/services/service.ts";
import { MerchantReturnPolicy } from "../intangibles/merchant_return_policy.ts";
import { EnergyConsumptionDetails } from "../intangibles/energy_consumption_details.ts";
import { AdultOrientedEnumeration } from "../intangibles/enumerations/adult_oriented_enumeration.ts";
import { GrantType } from "../intangibles/grants/grant.ts";
import { QuantitativeValue } from "../intangibles/structured_values/quantitative_value.ts";
import { Distance } from "../intangibles/quantities/distance.ts";
import { Country } from "../places/administrative_areas/country.ts";
import { PhysicalActivityCategory } from "../intangibles/enumerations/physical_activity_category.ts";
import { CategoryCodeType } from "../intangibles/defined_terms/category_codes/category_code.ts";
import { ThingType } from "../thing.ts";
import { Brand } from "../intangibles/brand.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { Boolean, Date, Text, URL } from "../../data_types.ts";
import { AudienceType } from "../intangibles/audiences/audience.ts";
import { AggregateRatingType } from "../intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { PropertyValueType } from "../intangibles/structured_values/property_values/property_value.ts";
import { ThingProps } from "../thing.ts";

export interface ProductProps extends ThingProps {
  /** A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   *
   * @remark Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty: PropertyValueType;

  /** The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating: AggregateRatingType;

  /** An intended audience, i.e. a group for whom something was created.
   * @see https://schema.org/audience
   */
  audience: AudienceType;

  /** An award won by or for this item.
   * @see https://schema.org/award
   */
  award: Text;

  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   * @see https://schema.org/brand
   */
  brand: Brand | OrganizationType;

  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   * @see https://schema.org/category
   */
  category:
    | CategoryCodeType
    | PhysicalActivityCategory
    | Text
    | ThingType
    | URL;

  /** The color of the product.
   * @see https://schema.org/color
   */
  color: Text;

  /** The place where the product was assembled.
   * @see https://schema.org/countryOfAssembly
   * @deprecated
   */
  countryOfAssembly: Text;

  /** The place where the item (typically {@link Product}) was last processed and tested before importation.
   * @see https://schema.org/countryOfLastProcessing
   * @deprecated
   */
  countryOfLastProcessing: Text;

  /** The country of origin of something, including products as well as creative works such as movie and TV content.
   *
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link contentLocation} and {@link locationCreated} may be more applicable.
   *
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   * @see https://schema.org/countryOfOrigin
   */
  countryOfOrigin: Country;

  /** The depth of the item.
   * @see https://schema.org/depth
   */
  depth: Distance | QuantitativeValue;

  /** A {@link Grant} that directly or indirectly provide funding or sponsorship for this item. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/funding
   * @deprecated
   */
  funding: GrantType;

  /** A Global Trade Item Number ({@link https://www.gs1.org/standards/id-keys/gtin GTIN}). GTINs identify trade items, including products and services, using numeric identification codes. The {@link gtin} property generalizes the earlier {@link gtin8}, {@link gtin12}, {@link gtin13}, and {@link gtin14} properties. The GS1 {@link https://www.gs1.org/standards/Digital-Link/1-0 digital link specifications} express GTINs as URLs. A correct {@link gtin} value should be a valid GTIN, which means that it should be an all-numeric string of either 8, 12, 13 or 14 digits, or a "GS1 Digital Link" URL based on such a string. The numeric component should also have a {@link https://www.gs1.org/services/check-digit-calculator valid GS1 check digit} and meet the other rules for valid GTINs. See also {@link https://www.gs1.org/standards/id-keys/gtin GS1's GTIN Summary} and {@link https://en.wikipedia.org/wiki/Global_Trade_Item_Number Wikipedia} for more details. Left-padding of the gtin values is not required or encouraged.
   * @see https://schema.org/gtin
   */
  gtin: Text;

  /** The GTIN-12 code of the product, or the product to which the offer refers. The GTIN-12 is the 12-digit GS1 Identification Key composed of a U.P.C. Company Prefix, Item Reference, and Check Digit used to identify trade items. See {@link https://www.gs1.org/standards/id-keys/gtin GS1 GTIN Summary} for more details.
   * @see https://schema.org/gtin12
   */
  gtin12: Text;

  /** The GTIN-13 code of the product, or the product to which the offer refers. This is equivalent to 13-digit ISBN codes and EAN UCC-13. Former 12-digit UPC codes can be converted into a GTIN-13 code by simply adding a preceding zero. See {@link https://www.gs1.org/standards/id-keys/gtin GS1 GTIN Summary} for more details.
   * @see https://schema.org/gtin13
   */
  gtin13: Text;

  /** The GTIN-14 code of the product, or the product to which the offer refers. See {@link https://www.gs1.org/standards/id-keys/gtin GS1 GTIN Summary} for more details.
   * @see https://schema.org/gtin14
   */
  gtin14: Text;

  /** The GTIN-8 code of the product, or the product to which the offer refers. This code is also known as EAN/UCC-8 or 8-digit EAN. See {@link https://www.gs1.org/standards/id-keys/gtin GS1 GTIN Summary} for more details.
   * @see https://schema.org/gtin8
   */
  gtin8: Text;

  /** Used to tag an item to be intended or suitable for consumption or use by adults only.
   * @see https://schema.org/hasAdultConsideration
   * @deprecated
   */
  hasAdultConsideration: AdultOrientedEnumeration;

  /** Defines the energy efficiency Category (also known as "class" or "rating") for a product according to an international energy efficiency standard.
   * @see https://schema.org/hasEnergyConsumptionDetails
   * @deprecated
   */
  hasEnergyConsumptionDetails: EnergyConsumptionDetails;

  /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
   * @see https://schema.org/hasMeasurement
   * @deprecated
   */
  hasMeasurement: QuantitativeValue;

  /** Specifies a MerchantReturnPolicy that may be applicable.
   * @see https://schema.org/hasMerchantReturnPolicy
   * @deprecated
   */
  hasMerchantReturnPolicy: MerchantReturnPolicy;

  /** The height of the item.
   * @see https://schema.org/height
   */
  height: Distance | QuantitativeValue;

  /** Indicates the {@link productGroupID} for a {@link ProductGroup} that this product {@link isVariantOf}.
   * @see https://schema.org/inProductGroupWithID
   * @deprecated
   */
  inProductGroupWithID: Text;

  /** A pointer to another product (or multiple products) for which this product is an accessory or spare part.
   * @see https://schema.org/isAccessoryOrSparePartFor
   */
  isAccessoryOrSparePartFor: ProductType;

  /** A pointer to another product (or multiple products) for which this product is a consumable.
   * @see https://schema.org/isConsumableFor
   */
  isConsumableFor: ProductType;

  /** Indicates whether this content is family friendly.
   * @see https://schema.org/isFamilyFriendly
   */
  isFamilyFriendly: Boolean;

  /** A pointer to another, somehow related product (or multiple products).
   * @see https://schema.org/isRelatedTo
   */
  isRelatedTo: ProductType | ServiceType;

  /** A pointer to another, functionally similar product (or multiple products).
   * @see https://schema.org/isSimilarTo
   */
  isSimilarTo: ProductType | ServiceType;

  /** Indicates the kind of product that this is a variant of. In the case of {@link ProductModel}, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a {@link ProductGroup}, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with {@link ProductGroup}, this property can apply to any {@link Product} included in the group.
   * @see https://schema.org/isVariantOf
   */
  isVariantOf: ProductGroup | ProductModel;

  /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer.
   * Also used for product return policies to specify the condition of products accepted for returns.
   * @see https://schema.org/itemCondition
   */
  itemCondition: OfferItemCondition;

  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   * @see https://schema.org/keywords
   */
  keywords: DefinedTermType | Text | URL;

  /** An associated logo.
   * @see https://schema.org/logo
   */
  logo: ImageObjectType | URL;

  /** The manufacturer of the product.
   * @see https://schema.org/manufacturer
   */
  manufacturer: OrganizationType;

  /** A material that something is made from, e.g. leather, wool, cotton, paper.
   * @see https://schema.org/material
   */
  material: ProductType | Text | URL;

  /** The model of the product. Use with the URL of a ProductModel or a textual representation of the model identifier. The URL of the ProductModel can be from an external source. It is recommended to additionally provide strong product identifiers via the gtin8/gtin13/gtin14 and mpn properties.
   * @see https://schema.org/model
   */
  model: ProductModel | Text;

  /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   * @see https://schema.org/mpn
   */
  mpn: Text;

  /** Indicates the {@link https://en.wikipedia.org/wiki/NATO_Stock_Number NATO stock number} (nsn) of a {@link Product}.
   * @see https://schema.org/nsn
   * @deprecated
   */
  nsn: Text;

  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see
   */
  offers: Demand | OfferType;

  /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
   * @see https://schema.org/pattern
   * @deprecated
   */
  pattern: DefinedTermType | Text;

  /** The product identifier, such as ISBN. For example: meta itemprop="productID" content="isbn:123-456-789".
   * @see https://schema.org/productID
   */
  productID: Text;

  /** The date of production of the item, e.g. vehicle.
   * @see https://schema.org/productionDate
   */
  productionDate: Date;

  /** The date the item e.g. vehicle was purchased by the current owner.
   * @see https://schema.org/purchaseDate
   */
  purchaseDate: Date;

  /** The release date of a product or product model. This can be used to distinguish the exact variant of a product.
   * @see https://schema.org/releaseDate
   */
  releaseDate: Date;

  /** A review of the item.
   * @see https://schema.org/review
   */
  review: ReviewType;

  /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured {@link SizeSpecification}; in other cases, the {@link width}, {@link height}, {@link depth} and {@link weight} properties may be more applicable.
   * @see https://schema.org/size
   * @deprecated
   */
  size: DefinedTermType | QuantitativeValue | SizeSpecificationType | Text;

  /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   * @see https://schema.org/sku
   */
  sku: Text;

  /** A slogan or motto associated with the item.
   * @see https://schema.org/slogan
   */
  slogan: Text;

  /** The weight of the product or person.
   * @see https://schema.org/weight
   */
  weight: QuantitativeValue;

  /** The width of the item.
   * @see https://schema.org/width
   */
  width: Distance | QuantitativeValue;
}

/** Any offered product or service. For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
 * @see https://schema.org/Product
 */
export interface Product extends ProductProps {
  "@type": "Product";
}

export type ProductType = Product;
