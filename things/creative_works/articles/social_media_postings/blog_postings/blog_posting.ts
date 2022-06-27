import { SocialMediaPostingProps } from "../social_media_posting.ts";
import { ArticleProps } from "../../article.ts";
import { CreativeWorkProps } from "../../../creative_work.ts";
import { ThingProps } from "../../../../thing.ts";

export interface BlogPostingProps
  extends
    SocialMediaPostingProps,
    ArticleProps,
    CreativeWorkProps,
    ThingProps {}

/** A blog post.
 * @see https://schema.org/BlogPosting
 */
export interface BlogPosting extends BlogPostingProps {
  "@type": "BlogPosting";
}

export type BlogPostingType = BlogPosting;
