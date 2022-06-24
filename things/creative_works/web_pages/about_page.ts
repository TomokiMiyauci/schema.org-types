import { CreativeWorkProps } from "./../creative_work.ts";
import { WebPageProps } from "./web_page.ts";
import { ThingProps } from "../../thing.ts";

export interface AboutPageProps
  extends WebPageProps, CreativeWorkProps, ThingProps {}

/** Web page type: About page.
 * @see https://schema.org/AboutPage
 */
export interface AboutPage extends AboutPageProps {
  "@type": "AboutPage";
}
