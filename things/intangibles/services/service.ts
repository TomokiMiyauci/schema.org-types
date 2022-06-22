import { GovernmentBenefitsType } from "../enumerations/government_benefits_type.ts";
import { ReviewType } from "../../creative_works/reviews/review.ts";
import { Offer } from "../offers/offer.ts";
import { Demand } from "../demand.ts";
import { ImageObjectType } from "../../creative_works/media_objects/image_objects/image_object.ts";
import { ProductType } from "../../products/product.ts";
import { OpeningHoursSpecification } from "./../structured_values/opening_hours_specification.ts";
import { OfferCatalog } from "../list_items/offer_catalog.ts";
import { ThingType } from "../../thing.ts";
import { PhysicalActivityCategory } from "../enumerations/physical_activity_category.ts";
import { CategoryCodeType } from "../defined_terms/category_codes/category_code.ts";
import { PersonType } from "../../persons/person.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { Brand } from "../brand.ts";
import { ServiceChannel } from "../service_channel.ts";
import { AudienceType } from "../audiences/audience.ts";
import { Text, URL } from "../../../data_types.ts";
import { PlaceType } from "../../places/place.ts";
import { GeoShapeType } from "../structured_values/geo_shapes/geo_shape.ts";
import { AdministrativeAreaType } from "../../places/administrative_areas/administrative_area.ts";
import { AggregateRatingType } from "../ratings/aggregate_ratings/aggregate_rating.ts";
import { ThingProps } from "../../thing.ts";

export interface ServiceProps extends ThingProps {
  /** The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating: AggregateRatingType;

  /** The geographic area where a service or offered item is provided.
   * @see https://schema.org/areaServed
   */
  areaServed: AdministrativeAreaType | GeoShapeType | PlaceType | Text;

  /** An intended audience, i.e. a group for whom something was created.
   * @see https://schema.org/audience
   */
  audience: AudienceType;

  /** A means of accessing the service (e.g. a phone bank, a web site, a location, etc.).
   * @see https://schema.org/availableChannel
   */
  availableChannel: ServiceChannel;

  /** An award won by or for this item.
   * @see https://schema.org/award
   */
  award: Text;

  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   * @see https://schema.org/brand
   */
  brand: Brand | OrganizationType;

  /** An entity that arranges for an exchange between a buyer and a seller. In most cases a broker never acquires or releases ownership of a product or service involved in an exchange. If it is not clear whether an entity is a broker, seller, or buyer, the latter two terms are preferred.
   * @see https://schema.org/broker
   */
  broker: OrganizationType | PersonType;

  /** A category for the item. Greater signs or slashes can be used to informally indicate a category hierarchy.
   * @see https://schema.org/category
   */
  category:
    | CategoryCodeType
    | PhysicalActivityCategory
    | Text
    | ThingType
    | URL;

  /** Indicates an OfferCatalog listing for this Organization, Person, or Service.
   * @see https://schema.org/hasOfferCatalog
   */
  hasOfferCatalog: OfferCatalog;

  /** The hours during which this service or contact is available.
   * @see https://schema.org/hoursAvailable
   */
  hoursAvailable: OpeningHoursSpecification;

  /** A pointer to another, somehow related product (or multiple products).
   * @see https://schema.org/isRelatedTo
   */
  isRelatedTo: ProductType | ServiceType;

  /** A pointer to another, functionally similar product (or multiple products).
   * @see https://schema.org/isSimilarTo
   */
  isSimilarTo: ProductType | ServiceType;

  /** An associated logo.
   * @see https://schema.org/logo
   */
  logo: ImageObjectType | URL;

  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   * @deprecated
   */
  offers: Demand | Offer;

  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   * @see https://schema.org/provider
   * @deprecated
   */
  provider: OrganizationType | PersonType;

  /** Indicates the mobility of a provided service (e.g. 'static', 'dynamic').
   * @see https://schema.org/providerMobility
   */
  providerMobility: Text;

  /** A review of the item.
   * @see https://schema.org/review
   */
  review: ReviewType;

  /** The tangible thing generated by the service, e.g. a passport, permit, etc.
   * @see https://schema.org/serviceOutput
   */
  serviceOutput: ThingType;

  /** The type of service being offered, e.g. veterans' benefits, emergency relief, etc.
   * @see https://schema.org/serviceType
   */
  serviceType: GovernmentBenefitsType | Text;

  /** A slogan or motto associated with the item.
   * @see https://schema.org/slogan
   */
  slogan: Text;

  /** Human-readable terms of service documentation.
   * @see https://schema.org/termsOfService
   * @deprecated
   */
  termsOfService: Text | URL;
}

/** A service provided by an organization, e.g. delivery service, print services, etc.
 * @see https://schema.org/Service
 */
export interface Service extends ServiceProps {
  "@type": "Service";
}

export type ServiceType = Service;
