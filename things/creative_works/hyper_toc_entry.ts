import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";
import { MediaObjectType } from "./media_objects/media_object.ts";
import { Text } from "../../data_types.ts";

export interface HyperTocEntryProps extends CreativeWorkProps, ThingProps {
  /** A media object that encodes this CreativeWork. This property is a synonym for encoding.
   * @see https://schema.org/associatedMedia
   */
  associatedMedia: MediaObjectType;

  /** A {@link HyperTocEntry} can have a {@link tocContinuation} indicated, which is another {@link HyperTocEntry} that would be the default next item to play or render.
   * @see https://schema.org/tocContinuation
   * @deprecated
   */
  tocContinuation: HyperTocEntry;

  /** Text of an utterances (spoken words, lyrics etc.) that occurs at a certain section of a media object, represented as a {@link HyperTocEntry}.
   * @see https://schema.org/utterances
   * @deprecated
   */
  utterances: Text;
}

/** A HyperToEntry is an item within a {@link HyperToc}, which represents a hypertext table of contents for complex media objects, such as {@link VideoObject}, {@link AudioObject}. The media object itself is indicated using {@link associatedMedia}. Each section of interest within that content can be described with a {@link HyperTocEntry}, with associated {@link startOffset} and {@link endOffset}. When several entries are all from the same file, {@link associatedMedia} is used on the overarching {@link HyperTocEntry}; if the content has been split into multiple files, they can be referenced using {@link associatedMedia} on each {@link HyperTocEntry}.
 * @see https://schema.org/HyperTocEntry
 */
export interface HyperTocEntry extends HyperTocEntryProps {
  "@type": "HyperTocEntry";
}
