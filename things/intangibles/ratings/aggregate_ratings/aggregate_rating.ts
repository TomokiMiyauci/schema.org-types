import { RatingProps } from "../rating.ts";
import { ThingProps, ThingType } from "../../../thing.ts";
import { Integer } from "../../../../data_types.ts";

export interface AggregateRatingProps extends RatingProps, ThingProps {
  /** The item that is being reviewed/rated.
   * @see https://schema.org/itemReviewed
   */
  itemReviewed: ThingType;

  /** The count of total number of ratings.
   * @see https://schema.org/ratingCount
   */
  ratingCount: Integer;

  /** The count of total number of reviews.
   * @see https://schema.org/reviewCount
   */
  reviewCount: Integer;
}

/** The average rating based on multiple ratings or reviews.
 * @see https://schema.org/AggregateRating
 */
export interface AggregateRating extends AggregateRatingProps {
  "@type": "AggregateRating";
}

export type AggregateRatingType = AggregateRating;
