import { MediaObjectProps } from "./media_objects/media_object.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface AmpStoryProps
  extends MediaObjectProps, CreativeWorkProps, ThingProps {
}

export interface AmpStory extends AmpStoryProps {
  "@type": "AmpStory";
}
