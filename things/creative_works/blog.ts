import { Text } from "../../data_types.ts";
import { BlogPostingType } from "./articles/social_media_postings/blog_postings/blog_posting.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface BlogProps extends CreativeWorkProps, ThingProps {
  /** A posting that is part of this blog.
   * @see https://schema.org/blogPost
   */
  blogPost: BlogPostingType;

  /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
   * @see https://schema.org/issn
   */
  issn: Text;
}

/** A {@link https://en.wikipedia.org/wiki/Blog blog}, sometimes known as a "weblog". Note that the individual posts ({@link BlogPosting}s) in a {@link Blog} are often colloqually referred to by the same term.
 * @see https://schema.org/Blog
 */
export interface Blog extends BlogProps {
  "@type": "Blog";
}
