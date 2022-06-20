import { ThingProps, ThingType } from "../thing.ts";
import { AmpStory } from "./amp_story.ts";
import { BookType } from "./books/book.ts";

export interface CreativeWorkProps extends ThingProps {
  /** The subject matter of the content.
   * @see https://schema.org/about
   */
  about: ThingType;
}

/** The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 * @see https://schema.org/CreativeWork
 */
export interface CreativeWork extends CreativeWorkProps {
  "@type": "CreativeWork";
}

export type CreativeWorkType = CreativeWork | AmpStory | BookType;
