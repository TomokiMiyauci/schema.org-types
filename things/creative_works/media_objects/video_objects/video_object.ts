import { ImageObjectType } from "../image_objects/image_object.ts";
import { MusicGroup } from "../../../organizations/performing_groups/music_group.ts";
import { MediaObjectType } from "../media_object.ts";
import { Text } from "../../../../data_types.ts";
import { PersonType } from "../../../persons/person.ts";
import { ThingProps } from "../../../thing.ts";
import { CreativeWorkProps } from "../../creative_work.ts";
import { MediaObjectProps } from "../media_object.ts";

export interface VideoObjectProps
  extends MediaObjectProps, CreativeWorkProps, ThingProps {
  /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor: PersonType;

  /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link encodingFormat}.
   * @see https://schema.org/caption
   */
  caption: MediaObjectType | Text;

  /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director: PersonType;

  /** Represents textual captioning from a {@link MediaObject}, e.g. text of a 'meme'.
   * @see https://schema.org/embeddedTextCaption
   * @deprecated
   */
  embeddedTextCaption: Text;

  /** The composer of the soundtrack.
   * @see https://schema.org/musicBy
   */
  musicBy: MusicGroup | PersonType;

  /** Thumbnail image for an image or video.
   * @see https://schema.org/thumbnail
   */
  thumbnail: ImageObjectType;

  /** If this MediaObject is an AudioObject or VideoObject, the transcript of that object.
   * @see https://schema.org/transcript
   */
  transcript: Text;

  /** The frame size of the video.
   * @see https://schema.org/videoFrameSize
   */
  videoFrameSize: Text;

  /** The quality of the video.
   * @see https://schema.org/videoQuality
   */
  videoQuality: Text;
}

/** A video file.
 * @see https://schema.org/VideoObject
 */
export interface VideoObject extends VideoObjectProps {
  "@type": "VideoObject";
}

export type VideoObjectType = VideoObject;
