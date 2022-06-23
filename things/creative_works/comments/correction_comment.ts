import { CommentProps } from "./comment.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface CorrectionCommentProps
  extends CommentProps, CreativeWorkProps, ThingProps {}

/** A {@link comment} that corrects {@link CreativeWork}.
 * @see https://schema.org/CorrectionComment
 * @deprecated
 */
export interface CorrectionComment extends CorrectionCommentProps {
  "@type": "CorrectionComment";
}
