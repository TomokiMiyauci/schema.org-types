import { CreativeWorkProps } from "../creative_work.ts";
import { CSSSelectorType, XPathType } from "../../../data_types.ts";

export interface WebPageElementProps extends CreativeWorkProps {
  /** A CSS selector, e.g. of a {@link SpeakableSpecification} or {@link WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
   * @see https://schema.org/cssSelector
   */
  cssSelector: CSSSelectorType;

  /** An XPath, e.g. of a {@link SpeakableSpecification} or {@link WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
   * @see https://schema.org/xpath
   */
  xpath: XPathType;
}

/** A web page element, like a table or an image.
 * @see https://schema.org/WebPageElement
 */
export interface WebPageElement extends WebPageElementProps {
  "@type": "WebPageElement";
}

export type WebPageElementType = WebPageElement;
