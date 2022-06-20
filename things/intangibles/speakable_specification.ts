import { ThingProps } from "../thing.ts";
import { CSSSelectorType, XPathType } from "../../data_types.ts";

export interface SpeakableSpecificationProps extends ThingProps {
  /** A CSS selector, e.g. of a {@link SpeakableSpecification} or {@link WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
   * @see https://schema.org/cssSelector
   */
  cssSelector: CSSSelectorType;

  /** An XPath, e.g. of a {@link SpeakableSpecification} or {@link WebPageElement}. In the latter case, multiple matches within a page can constitute a single conceptual "Web page element".
   * @see https://schema.org/xpath
   */
  xpath: XPathType;
}

/** A SpeakableSpecification indicates (typically via {@link https://schema.org/xpath xpath} or {@link https://schema.org/cssSelector cssSelector}) sections of a document that are highlighted as particularly {@link https://schema.org/speakable speakable}. Instances of this type are expected to be used primarily as values of the {@link https://schema.org/speakable speakable} property.
 * @see https://schema.org/SpeakableSpecification
 */
export interface SpeakableSpecification extends SpeakableSpecificationProps {
  "@type": "SpeakableSpecification";
}
