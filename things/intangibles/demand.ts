import { WarrantyPromise } from "./structured_values/warranty_promisel.ts";
import { PersonType } from "./../persons/person.ts";
import { OrganizationType } from "./../organizations/organization.ts";
import { TripType } from "./trips/trip.ts";
import { ServiceType } from "./services/service.ts";
import { ProductType } from "./../products/product.ts";
import { MenuItem } from "./menu_item.ts";
import { EventType } from "./../events/event.ts";
import { CreativeWorkType } from "./../creative_works/creative_work.ts";
import { AggregateOffer } from "./offers/aggregate_offer.ts";
import { OfferItemCondition } from "./enumerations/offer_item_condition.ts";
import { TypeAndQuantityNode } from "./structured_values/type_and_quantity_node.ts";
import { PriceSpecificationType } from "./structured_values/price_specifications/price_specification.ts";
import { BusinessEntityType } from "./enumerations/business_entity_type.ts";
import { BusinessFunction } from "./enumerations/business_function.ts";
import { DeliveryMethod } from "./enumerations/delivery_method.ts";
import { ItemAvailability } from "./enumerations/item_availability.ts";
import { Date, DateTime, Text, Time } from "./../../data_types.ts";
import { PlaceType } from "./../places/place.ts";
import { GeoShapeType } from "./structured_values/geo_shapes/geo_shape.ts";
import { AdministrativeAreaType } from "./../places/administrative_areas/administrative_area.ts";
import { QuantitativeValue } from "./structured_values/quantitative_value.ts";
import { PaymentMethod } from "./enumerations/payment_methods/payment_method.ts";
import { LoanOrCreditType } from "./services/financial_products/loan_or_credits/loan_or_credit.ts";
import { ThingProps } from "../thing.ts";

export interface DemandProps extends ThingProps {
  /** The payment method(s) accepted by seller for this offer.
   * @see https://schema.org/acceptedPaymentMethod
   */
  acceptedPaymentMethod: LoanOrCreditType | PaymentMethod;

  /** The amount of time that is required between accepting the offer and the actual usage of the resource or service.
   * @see https://schema.org/advanceBookingRequirement
   */
  advanceBookingRequirement: QuantitativeValue;

  /** The geographic area where a service or offered item is provided.
   * @see https://schema.org/areaServed
   */
  areaServed: AdministrativeAreaType | GeoShapeType | PlaceType | Text;

  /** The availability of this item—for example In stock, Out of stock, Pre-order, etc.
   * @see https://schema.org/availability
   */
  availability: ItemAvailability;

  /** The end of the availability of the product or service included in the offer.
   * @see https://schema.org/availabilityEnds
   */
  availabilityEnds: Date | DateTime | Time;

  /** The beginning of the availability of the product or service included in the offer.
   * @see https://schema.org/availabilityStarts
   */
  availabilityStarts: Date | DateTime | Time;

  /** The place(s) from which the offer can be obtained (e.g. store locations).
   * @see https://schema.org/availableAtOrFrom
   */
  availableAtOrFrom: PlaceType;

  /** The delivery method(s) available for this offer.
   * @see https://schema.org/availableDeliveryMethod
   */
  availableDeliveryMethod: DeliveryMethod;

  /** The business function (e.g. sell, lease, repair, dispose) of the offer or component of a bundle (TypeAndQuantityNode). The default is http://purl.org/goodrelations/v1#Sell.
   * @see https://schema.org/businessFunction
   */
  businessFunction: BusinessFunction;

  /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup.
   * @see https://schema.org/deliveryLeadTime
   */
  deliveryLeadTime: QuantitativeValue;

  /** The type(s) of customers for which the given offer is valid.
   * @see https://schema.org/eligibleCustomerType
   */
  eligibleCustomerType: BusinessEntityType;

  /** The duration for which the given offer is valid.
   * @see https://schema.org/eligibleDuration
   */
  eligibleDuration: QuantitativeValue;

  /** The interval and unit of measurement of ordering quantities for which the offer or price specification is valid. This allows e.g. specifying that a certain freight charge is valid only for a certain quantity.
   * @see https://schema.org/eligibleQuantity
   */
  eligibleQuantity: QuantitativeValue;

  /** The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is valid.
   * @see https://schema.org/eligibleRegion
   */
  eligibleRegion: GeoShapeType | PlaceType | Text;

  /** The transaction volume, in a monetary unit, for which the offer or price specification is valid, e.g. for indicating a minimal purchasing volume, to express free shipping above a certain order volume, or to limit the acceptance of credit cards to purchases to a certain minimal amount.
   * @see https://schema.org/eligibleTransactionVolume
   */
  eligibleTransactionVolume: PriceSpecificationType;

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

  /** This links to a node or nodes indicating the exact quantity of the products included in an {@link Offer} or {@link ProductCollection}.
   * @see https://schema.org/includesObject
   */
  includesObject: TypeAndQuantityNode;

  /** The ISO 3166-1 (ISO 3166-1 alpha-2) or ISO 3166-2 code, the place, or the GeoShape for the geo-political region(s) for which the offer or delivery charge specification is not valid, e.g. a region where the transaction is not allowed.
   * @see https://schema.org/ineligibleRegion
   * @deprecated
   */
  ineligibleRegion: GeoShapeType | PlaceType | Text;

  /** The current approximate inventory level for the item or items.
   * @see https://schema.org/inventoryLevel
   */
  inventoryLevel: QuantitativeValue;

  /** A predefined value from OfferItemCondition specifying the condition of the product or service, or the products or services included in the offer. Also used for product return policies to specify the condition of products accepted for returns.
   * @see https://schema.org/itemCondition
   */
  itemCondition: OfferItemCondition;

  /** An item being offered (or demanded). The transactional nature of the offer or demand is documented using {@link businessFunction}, e.g. sell, lease etc. While several common expected types are listed explicitly in this definition, others can be used. Using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/itemOffered
   */
  itemOffered:
    | AggregateOffer
    | CreativeWorkType
    | EventType
    | MenuItem
    | ProductType
    | ServiceType
    | TripType;

  /** The Manufacturer Part Number (MPN) of the product, or the product to which the offer refers.
   * @see https://schema.org/mpn
   */
  mpn: Text;

  /** One or more detailed price specifications, indicating the unit price and delivery or payment charges.
   * @see https://schema.org/priceSpecification
   */
  priceSpecification: PriceSpecificationType;

  /** An entity which offers (sells / leases / lends / loans) the services / goods. A seller may also be a provider.
   * @see https://schema.org/seller
   */
  seller: OrganizationType | PersonType;

  /** The serial number or any alphanumeric identifier of a particular product. When attached to an offer, it is a shortcut for the serial number of the product included in the offer.
   * @see https://schema.org/serialNumber
   */
  serialNumber: Text;

  /** The Stock Keeping Unit (SKU), i.e. a merchant-specific identifier for a product or service, or the product to which the offer refers.
   * @see https://schema.org/sku
   */
  sku: Text;

  /** The date when the item becomes valid.
   * @see https://schema.org/validFrom
   */
  validFrom: Date | DateTime;

  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   * @see https://schema.org/validThrough
   */
  validThrough: Date | DateTime;

  /** The warranty promise(s) included in the offer.
   * @see https://schema.org/warranty
   */
  warranty: WarrantyPromise;
}

/** A demand entity represents the public, not necessarily binding, not necessarily exclusive, announcement by an organization or person to seek a certain type of goods or services. For describing demand using this type, the very same properties used for Offer apply.
 * @see https://schema.org/Demand
 */
export interface Demand extends DemandProps {
  "@type": "Demand";
}
