import { CreativeWorkType } from "../../creative_work.ts";
import { ArticleProps } from "../article.ts";
import { CreativeWorkProps } from "../../creative_work.ts";
import { ThingProps } from "../../../thing.ts";

export interface SocialMediaPostingProps
  extends ArticleProps, CreativeWorkProps, ThingProps {
  /** A CreativeWork such as an image, video, or audio clip shared as part of this posting.
   * @see https://schema.org/sharedContent
   */
  sharedContent: CreativeWorkType;
}

/** A post to a social media platform, including blog posts, tweets, Facebook posts, etc.
 * @see https://schema.org/SocialMediaPosting
 */
export interface SocialMediaPosting extends SocialMediaPostingProps {
  "@type": "SocialMediaPosting";
}

export type SocialMediaPostingType = SocialMediaPosting;
