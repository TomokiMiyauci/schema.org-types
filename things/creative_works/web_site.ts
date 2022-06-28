import { Text } from "../../data_types.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";

export interface WebSiteProps extends CreativeWorkProps, ThingProps {
  /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
   * @see https://schema.org/issn
   */
  issn: Text;
}

/** A WebSite is a set of related web pages and other items typically served from a single web domain and accessible via URLs.
 * @see https://schema.org/WebSite
 */
export interface WebSite extends WebSiteProps {
  "@type": "WebSite";
}
