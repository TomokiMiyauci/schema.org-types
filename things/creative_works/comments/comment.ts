import { Integer } from "../../../data_types.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface CommentProps extends CreativeWorkProps, ThingProps {
  /** The number of downvotes this question, answer or comment has received from the community.
   * @see https://schema.org/downvoteCount
   */
  downvoteCount: Integer;

  /** The parent of a question, answer or item in general.
   * @see https://schema.org/parentItem
   */
  parentItem: CommentType;

  /** The number of upvotes this question, answer or comment has received from the community.
   * @see https://schema.org/upvoteCount
   */
  upvoteCount: Integer;
}

/** A comment on an item - for example, a comment on a blog post. The comment's content is expressed via the {@link text} property, and its topic via {@link about}, properties shared with all CreativeWorks.
 * @see https://schema.org/Comment
 */
export interface Comment extends CommentProps {
  "@type": "Comment";
}

export type CommentType = Comment;
