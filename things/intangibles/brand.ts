import { Text } from "../../data_types.ts";
import { Review } from "../creative_works/reviews/review.ts";
import { URL } from "../../data_types.ts";
import { ImageObjectType } from "../creative_works/media_objects/image_objects/image_object.ts";
import { AggregateRatingType } from "./ratings/aggregate_ratings/aggregate_rating.ts";
import { ThingProps } from "../thing.ts";

export interface BrandProps extends ThingProps {
  /** The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating: AggregateRatingType;

  /** An associated logo.
   * @see https://schema.org/logo
   */
  logo: ImageObjectType | URL;

  /** A review of the item.
   * @see https://schema.org/review
   */
  review: Review;

  /** A slogan or motto associated with the item.
   * @see https://schema.org/slogan
   */
  slogan: Text;
}

/** A brand is a name used by an organization or business person for labeling a product, product group, or similar.
 * @see https://schema.org/Brand
 */
export interface Brand extends BrandProps {
  "@type": "Brand";
}
