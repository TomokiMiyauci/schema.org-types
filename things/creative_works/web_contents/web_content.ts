import { ThingProps } from "./../../thing.ts";
import { CreativeWorkProps } from "./../creative_work.ts";

export interface WebContentProps extends CreativeWorkProps, ThingProps {}

/** WebContent is a type representing all {@link WebPage}, {@link WebSite} and {@link WebPageElement} content. It is sometimes the case that detailed distinctions between Web pages, sites and their parts is not always important or obvious. The {@link WebContent} type makes it easier to describe Web-addressable content without requiring such distinctions to always be stated. (The intent is that the existing types {@link WebPage}, {@link WebSite} and {@link WebPageElement} will eventually be declared as subtypes of {@link WebContent}).
 * @see https://schema.org/WebContent
 */
export interface WebContent extends WebContentProps {
  "@type": "WebContent";
}

export type WebContentType = WebContent;
