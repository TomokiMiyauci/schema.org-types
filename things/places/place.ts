import { OpeningHoursSpecification } from "../intangibles/structured_values/opening_hours_specification.ts";
import { ImageObjectType } from "../creative_works/media_objects/image_objects/image_object.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { GeospatialGeometry } from "../intangibles/geospatial_geometry.ts";
import { GeoShapeType } from "../intangibles/structured_values/geo_shapes/geo_shape.ts";
import { GeoCoordinates } from "../intangibles/structured_values/geo_coordinates.ts";
import { EventType } from "../events/event.ts";
import { LocationFeatureSpecification } from "../intangibles/structured_values/property_values/location_feature_specification.ts";
import { AggregateRatingType } from "../intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { Boolean, Integer, Number, Text, URL } from "../../data_types.ts";
import { PostalAddress } from "../intangibles/structured_values/contact_points/postal_address.ts";
import { ThingProps } from "../thing.ts";
import { PropertyValueType } from "../intangibles/structured_values/property_values/property_value.ts";

export interface PlaceProps extends ThingProps {
  /** A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   *
   * @remark Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty: PropertyValueType;

  /** Physical address of the item.
   * @see https://schema.org/address
   */
  address: PostalAddress | Text;

  /** The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating: AggregateRatingType;

  /** An amenity feature (e.g. a characteristic or service) of the Accommodation. This generic property does not make a statement about whether the feature is included in an offer for the main accommodation or available at extra costs.
   * @see https://schema.org/amenityFeature
   */
  amenityFeature: LocationFeatureSpecification;

  /** A short textual code (also called "store code") that uniquely identifies a place of business. The code is typically assigned by the parentOrganization and used in structured URLs.
   *
   * For example, in the URL http://www.starbucks.co.uk/store-locator/etc/detail/3047 the code "3047" is a branchCode for a particular branch.
   * @see https://schema.org/branchCode
   */
  branchCode: Text;

  /** The basic containment relation between a place and one that contains it.
   * @see https://schema.org/containedInPlace
   */
  containedInPlace: PlaceType;

  /** The basic containment relation between a place and another that it contains.
   * @see https://schema.org/containsPlace
   */
  containsPlace: PlaceType;

  /** Upcoming or past event associated with this place, organization, or action.
   * @see https://schema.org/event
   */
  event: EventType;

  /** The fax number.
   * @see https://schema.org/faxNumber
   */
  faxNumber: Text;

  /** The geo coordinates of the place.
   * @see https://schema.org/geo
   */
  geo: GeoCoordinates | GeoShapeType;

  /** Represents a relationship between two geometries (or the places they represent), relating a containing geometry to a contained geometry. "a contains b iff no points of b lie in the exterior of a, and at least one point of the interior of b lies in the interior of a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}.
   * @see https://schema.org/geoContains
   */
  geoContains: GeospatialGeometry | PlaceType;

  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that covers it. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}.
   * @see https://schema.org/geoCoveredBy
   */
  geoCoveredBy: GeospatialGeometry | PlaceType;

  /** Represents a relationship between two geometries (or the places they represent), relating a covering geometry to a covered geometry. "Every point of b is a point of (the interior or boundary of) a". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}.
   * @see https://schema.org/geoCovers
   */
  geoCovers: GeospatialGeometry | PlaceType;

  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that crosses it: "a crosses b: they have some but not all interior points in common, and the dimension of the intersection is less than that of at least one of them". As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}.
   * @see https://schema.org/geoCrosses
   */
  geoCrosses: GeospatialGeometry | PlaceType;

  /** Represents spatial relations in which two geometries (or the places they represent) are topologically disjoint: they have no point in common. They form a set of disconnected geometries." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM})
   * @see https://schema.org/geoDisjoint
   */
  geoDisjoint: GeospatialGeometry | PlaceType;

  /** Represents spatial relations in which two geometries (or the places they represent) are topologically equal, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}. "Two geometries are topologically equal if their interiors intersect and no part of the interior or boundary of one geometry intersects the exterior of the other" (a symmetric relationship)
   * @see https://schema.org/geoEquals
   */
  geoEquals: GeospatialGeometry | PlaceType;

  /** Represents spatial relations in which two geometries (or the places they represent) have at least one point in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}.
   * @see https://schema.org/geoIntersects
   */
  geoIntersects: GeospatialGeometry | PlaceType;

  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to another that geospatially overlaps it, i.e. they have some but not all points in common. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}.
   * @see https://schema.org/geoOverlaps
   */
  geoOverlaps: GeospatialGeometry | PlaceType;

  /** Represents spatial relations in which two geometries (or the places they represent) touch: they have at least one boundary point in common, but no interior points." (a symmetric relationship, as defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM} )
   * @see https://schema.org/geoTouches
   */
  geoTouches: GeospatialGeometry | PlaceType;

  /** Represents a relationship between two geometries (or the places they represent), relating a geometry to one that contains it, i.e. it is inside (i.e. within) its interior. As defined in {@link https://en.wikipedia.org/wiki/DE-9IM DE-9IM}.
   * @see https://schema.org/geoWithin
   */
  geoWithin: GeospatialGeometry | PlaceType;

  /** The {@link https://www.gs1.org/standards/id-keys/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
   * @see https://schema.org/globalLocationNumber
   */
  globalLocationNumber: Text;

  /** Indicates whether some facility (e.g. {@link FoodEstablishment}, {@link CovidTestingFacility}) offers a service that can be used by driving through in a car. In the case of {@link CovidTestingFacility} such facilities could potentially help with social distancing from other potentially-infected users.
   * @see https://schema.org/hasDriveThroughService
   * @deprecated
   */
  hasDriveThroughService: Boolean;

  /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
   * @see https://schema.org/isicV4
   */
  isicV4: Text;

  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   * @see https://schema.org/keywords
   */
  keywords: DefinedTermType | Text | URL;

  /** The latitude of a location. For example 37.42242 ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}).
   * @see https://schema.org/latitude
   */
  latitude: Number | Text;

  /** An associated logo.
   * @see https://schema.org/logo
   */
  logo: ImageObjectType | URL;

  /** The longitude of a location. For example -122.08585 ({@link https://en.wikipedia.org/wiki/World_Geodetic_System WGS 84}).
   * @see https://schema.org/longitude
   */
  longitude: Number | Text;

  /** The total number of individuals that may attend an event or venue.
   * @see https://schema.org/maximumAttendeeCapacity
   */
  maximumAttendeeCapacity: Integer;

  /** The opening hours of a certain place.
   * @see https://schema.org/openingHoursSpecification
   */
  openingHoursSpecification: OpeningHoursSpecification;

  /** The telephone number.
   * @see https://schema.org/telephone
   */
  telephone: Text;

  /** A page providing information on how to book a tour of some {@link Place}, such as an {@link Accommodation} or {@link ApartmentComplex} in a real estate setting, as well as other kinds of tours as appropriate.
   * @see https://schema.org/tourBookingPage
   * @deprecated
   */
  tourBookingPage: URL;
}

/** Entities that have a somewhat fixed, physical extension.
 * @see https://schema.org/Place
 */
export interface Place {
  "@type": "Place";
}

export type PlaceType = Place;
