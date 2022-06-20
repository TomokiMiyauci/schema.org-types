import { PlaceType } from "../places/place.ts";
import { ThingProps } from "../thing.ts";

export interface GeospatialGeometryProps extends ThingProps {
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
}

/** (Eventually to be defined as) a supertype of GeoShape designed to accommodate definitions from Geo-Spatial best practices.
 * @see https://schema.org/GeospatialGeometry
 * @deprecated
 */
export interface GeospatialGeometry extends GeospatialGeometryProps {
  "@type": "GeospatialGeometry";
}
