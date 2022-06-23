import { PersonType } from "../persons/person.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { CreativeWorkProps, CreativeWorkType } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface ClaimProps extends CreativeWorkProps, ThingProps {
  /** Indicates an occurence of a {@link Claim} in some {@link CreativeWork}.
   * @see https://schema.org/appearance
   * @deprecated
   */
  appearance: CreativeWorkType;

  /** For a {@link Claim} interpreted from MediaObject content sed to indicate a claim contained, implied or refined from the content of a {@link MediaObject}.
   * @see https://schema.org/claimInterpreter
   * @deprecated
   */
  claimInterpreter: OrganizationType | PersonType;

  /** Indicates the first known occurence of a {@link Claim} in some {@link CreativeWork}.
   * @see https://schema.org/firstAppearance
   * @deprecated
   */
  firstAppearance: CreativeWorkType;
}

/** A {@link Claim} in Schema.org represents a specific, factually-oriented claim that could be the {@link itemReviewed} in a {@link ClaimReview}. The content of a claim can be summarized with the {@link text} property. Variations on well known claims can have their common identity indicated via {@link sameAs} links, and summarized with a {@link name}. Ideally, a {@link Claim} description includes enough contextual information to minimize the risk of ambiguity or inclarity. In practice, many claims are better understood in the context in which they appear or the interpretations provided by claim reviews.
 *
 * Beyond {@link ClaimReview}, the Claim type can be associated with related creative works - for example a {@link ScholarlyArticle} or {@link Question} might be {@link about} some {@link Claim}.
 *
 * At this time, Schema.org does not define any types of relationship between claims. This is a natural area for future exploration.
 * @see https://schema.org/Claim
 * @deprecated
 */
export interface Claim extends ClaimProps {
  "@type": "Claim";
}
