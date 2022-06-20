import { ThingProps } from "../../thing.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { PersonType } from "../../persons/person.ts";
import { Number, Text } from "../../../data_types.ts";

/** A rating is an evaluation on a numeric scale, such as 1 to 5 stars.
 * @see https://schema.org/Rating
 */
export interface RatingProps extends ThingProps {
  /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag. That is equivalent to this and may be used interchangeably.
   * @see https://schema.org/author
   */
  author: OrganizationType | PersonType;

  /** The highest value allowed in this rating system. If bestRating is omitted, 5 is assumed.
   * @see https://schema.org/bestRating
   */
  bestRating: Number | Text;

  /** A short explanation (e.g. one to two sentences) providing background context and other information that led to the conclusion expressed in the rating. This is particularly applicable to ratings associated with "fact check" markup using {@link https://schema.org/ClaimReview ClaimReview}.
   * @see https://schema.org/ratingExplanation
   * @deprecated
   */
  ratingExplanation: Text;

  /** The rating for the content.
   * Usage guidelines:
   * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
   * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   */
  ratingValue: Number | Text;

  /** This Review or Rating is relevant to this part or facet of the itemReviewed.
   * @see https://schema.org/reviewAspect
   */
  reviewAspect: Text;

  /** The lowest value allowed in this rating system. If worstRating is omitted, 1 is assumed.
   * @see https://schema.org/worstRating
   */
  worstRating: Number | Text;
}

export interface Rating extends RatingProps {
  "@type": "Rating";
}

export type RatingType = Rating;
