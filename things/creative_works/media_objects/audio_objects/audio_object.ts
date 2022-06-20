import { MediaObjectProps, MediaObjectType } from "../media_object.ts";
import { CreativeWorkProps } from "../../creative_work.ts";
import { Text } from "../../../../data_types.ts";

export interface AudioObjectProps extends MediaObjectProps, CreativeWorkProps {
  /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link encodingFormat}.
   * @see https://schema.org/caption
   */
  caption: MediaObjectType | Text;

  /** Represents textual captioning from a {@link MediaObject}, e.g. text of a 'meme'.
   * @see https://schema.org/embeddedTextCaption
   * @deprecated
   */
  embeddedTextCaption: Text;

  /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
   * @see https://schema.org/transcript
   */
  transcript: Text;
}

/** An audio file.
 * @see https://schema.org/AudioObject
 */
export interface AudioObject extends AudioObjectProps {
  "@type": "AudioObject";
}

export type AudioObjectType = AudioObject;
