import { BlogPostingType } from "./blog_posting.ts";
import { DateTime } from "../../../../../data_types.ts";
import { SocialMediaPostingProps } from "../social_media_posting.ts";
import { ArticleProps } from "../../article.ts";
import { CreativeWorkProps } from "../../../creative_work.ts";
import { ThingProps } from "../../../../thing.ts";

export interface LiveBlogPostingProps
  extends SocialMediaPostingProps, ArticleProps, CreativeWorkProps, ThingProps {
  /** The time when the live blog will stop covering the Event. Note that coverage may continue after the Event concludes.
   * @see https://schema.org/coverageEndTime
   */
  coverageEndTime: DateTime;

  /** The time when the live blog will begin covering the Event. Note that coverage may begin before the Event's start time. The LiveBlogPosting may also be created before coverage begins.
   * @see https://schema.org/coverageStartTime
   */
  coverageStartTime: DateTime;

  /** An update to the LiveBlog.
   * @see https://schema.org/liveBlogUpdate
   */
  liveBlogUpdate: BlogPostingType;
}

/** A {@link LiveBlogPosting} is a {@link BlogPosting} intended to provide a rolling textual coverage of an ongoing event through continuous updates.
 * @see https://schema.org/LiveBlogPosting
 */
export interface LiveBlogPosting extends LiveBlogPostingProps {
  "@type": "LiveBlogPosting";
}
