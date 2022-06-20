import { MusicRecording } from "./music_recording.ts";
import { Text } from "./../../data_types.ts";
import { EventType } from "./../events/event.ts";
import { PersonType } from "./../persons/person.ts";
import { OrganizationType } from "./../organizations/organization.ts";
import { CreativeWorkProps, CreativeWorkType } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface MusicCompositionProps extends CreativeWorkProps, ThingProps {
  /** The person or organization who wrote a composition, or who is the composer of a work performed at some event.
   * @see https://schema.org/composer
   */
  composer: OrganizationType | PersonType;

  /** The date and place the work was first performed.
   * @see https://schema.org/firstPerformance
   */
  firstPerformance: EventType;

  /** Smaller compositions included in this work (e.g. a movement in a symphony).
   * @see https://schema.org/includedComposition
   */
  includedComposition: MusicComposition;

  /** The International Standard Musical Work Code for the composition.
   * @see https://schema.org/iswcCode
   */
  iswcCode: Text;

  /** The person who wrote the words.
   * @see https://schema.org/lyricist
   */
  lyricist: PersonType;

  /** The words in the song.
   * @see https://schema.org/lyrics
   */
  lyrics: CreativeWorkType;

  /** An arrangement derived from the composition.
   * @see https://schema.org/musicArrangement
   */
  musicArrangement: MusicComposition;

  /** The type of composition (e.g. overture, sonata, symphony, etc.).
   * @see https://schema.org/musicCompositionForm
   */
  musicCompositionForm: Text;

  /** The key, mode, or scale this composition uses.
   * @see https://schema.org/musicalKey
   */
  musicalKey: Text;

  /** An audio recording of the work.
   * @see https://schema.org/recordedAs
   */
  recordedAs: MusicRecording;
}

/** A musical composition.
 * @see https://schema.org/MusicComposition
 */
export interface MusicComposition extends MusicCompositionProps {
  "@type": "MusicComposition";
}
