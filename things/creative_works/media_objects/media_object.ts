import { CreativeWorkProps } from "../creative_work.ts";
import { Text } from "../../../data_types.ts";

export interface MediaObjectProps extends CreativeWorkProps {
  /** The bitrate of the media object.
   * @see https://schema.org/bitrate
   */
  bitrate: Text;
}

/** A media object, such as an image, video, or audio object embedded in a web page or a downloadable dataset i.e. DataDownload. Note that a creative work may have many media objects associated with it on the same web page. For example, a page about a single song (MusicRecording) may have a music video (VideoObject), and a high and low bandwidth audio stream (2 AudioObject's).
 * @see https://schema.org/MediaObject
 */
export interface MediaObject extends MediaObjectProps {
  "@type": "MediaObject";
}

export type MediaObjectType = MediaObject;
