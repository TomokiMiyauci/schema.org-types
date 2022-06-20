import { MediaObjectProps } from "./media_objects/media_object.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface AmpStoryProps
  extends MediaObjectProps, CreativeWorkProps, ThingProps {
}

/** A creative work with a visual storytelling format intended to be viewed online, particularly on mobile devices.
 * @see https://schema.org/AmpStory
 * @deprecated
 */
export interface AmpStory extends AmpStoryProps {
  "@type": "AmpStory";
}

export type AmpStoryType = AmpStory;
