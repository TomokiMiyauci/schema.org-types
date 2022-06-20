import { Text } from "../../../../data_types.ts";
import { MediaObjectProps } from "../media_object.ts";
import { ThingProps } from "../../../thing.ts";

export interface ImageObjectProps extends MediaObjectProps, ThingProps {
  /** The caption for this object. For downloadable machine formats (closed caption, subtitles etc.) use MediaObject and indicate the {@link https://schema.org/encodingFormat encodingFormat}.
   * @see https://schema.org/caption
   */
  caption: Text;
}

/** An image file.
 * @see https://schema.org/ImageObject
 */
export interface ImageObject extends ImageObjectProps {
  "@type": "ImageObject";
}

export type ImageObjectType = ImageObject;
