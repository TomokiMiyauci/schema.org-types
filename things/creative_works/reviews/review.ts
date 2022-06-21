import { RatingType } from "./../../intangibles/ratings/rating.ts";
import { WebContent } from "./../web_contents/web_content.ts";
import { Text } from "./../../../data_types.ts";
import { ListItemType } from "./../../intangibles/list_items/list_item.ts";
import { ItemListType } from "./../item_lists/item_list.ts";
import { ThingType } from "./../../thing.ts";
import { CreativeWorkProps } from "./../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface ReviewProps extends CreativeWorkProps, ThingProps {
  /** An associated {@link ClaimReview}, related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case {@link relatedMediaReview} would commonly be used on a {@link ClaimReview}, while {@link relatedClaimReview} would be used on {@link MediaReview}.
   * @deprecated
   */
  associatedClaimReview: ReviewType;

  /** An associated {@link MediaReview}, related by specific common content, topic or claim. The expectation is that this property would be most typically used in cases where a single activity is conducting both claim reviews and media reviews, in which case {@link relatedMediaReview} would commonly be used on a {@link ClaimReview}, while {@link relatedClaimReview} would be used on {@link MediaReview}.
   * @see https://schema.org/associatedMediaReview
   * @deprecated
   */
  associatedMediaReview: ReviewType;

  /** An associated {@link Review}.
   * @see https://schema.org/associatedReview
   * @deprecated
   */
  associatedReview: ReviewType;

  /** The item that is being reviewed/rated.
   * @see https://schema.org/itemReviewed
   */
  itemReviewed: ThingType;

  /** Indicates, in the context of a {@link Review} (e.g. framed as 'pro' vs 'con' considerations), negative considerations - either as unstructured text, or a list.
   * @see https://schema.org/negativeNotes
   * @deprecated
   */
  negativeNotes: ItemListType | ListItemType | Text | WebContent;

  /** Indicates, in the context of a {@link Review} (e.g. framed as 'pro' vs 'con' considerations), positive considerations - either as unstructured text, or a list.
   * @see https://schema.org/positiveNotes
   * @deprecated
   */
  positiveNotes: ItemListType | ListItemType | Text | WebContent;

  /** This Review or Rating is relevant to this part or facet of the itemReviewed.
   * @see https://schema.org/reviewAspect
   */
  reviewAspect: Text;

  /** The actual body of the review.
   * @see https://schema.org/reviewBody
   */
  reviewBody: Text;

  /** The rating given in this review. Note that reviews can themselves be rated. The reviewRating applies to rating given by the review. The {@link aggregateRating} property applies to the review itself, as a creative work.
   * @see https://schema.org/reviewRating
   */
  reviewRating: RatingType;
}

/** A review of an item - for example, of a restaurant, movie, or store.
 * @see https://schema.org/Review
 */
export interface Review extends ReviewProps {
  "@type": "Review";
}

export type ReviewType = Review;
