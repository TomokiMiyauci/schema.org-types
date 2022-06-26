import { BreadcrumbList } from "../item_lists/breadcrumb_list.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { WebPageElementType } from "../web_page_elements/web_page_element.ts";
import { Date, Text, URL } from "../../../data_types.ts";
import { ImageObjectType } from "../media_objects/image_objects/image_object.ts";
import { Organization } from "../../organizations/organization.ts";
import { Person } from "../../persons/person.ts";
import { SpeakableSpecification } from "../../intangibles/speakable_specification.ts";
import { Specialty } from "../../intangibles/enumerations/specialties/specialty.ts";
import { ThingProps } from "../../thing.ts";

export interface WebPageProps extends CreativeWorkProps, ThingProps {
  /** A set of links that can help a user understand and navigate a website hierarchy.
   * @see https://schema.org/breadcrumb
   */
  breadcrumb: BreadcrumbList | Text;

  /** Date on which the content on this web page was last reviewed for accuracy and/or completeness.
   * @see https://schema.org/lastReviewed
   */
  lastReviewed: Date;

  /** Indicates if this web page element is the main subject of the page.
   * @see https://schema.org/mainContentOfPage
   */
  mainContentOfPage: WebPageElementType;

  /** Indicates the main image on the page.
   * @see https://schema.org/primaryImageOfPage
   */
  primaryImageOfPage: ImageObjectType;

  /** A link related to this web page, for example to other related web pages.
   * @see https://schema.org/relatedLink
   */
  relatedLink: URL;

  /** People or organizations that have reviewed the content on this web page for accuracy and/or completeness.
   * @see https://schema.org/reviewedBy
   */
  reviewedBy: Organization | Person;

  /** One of the more significant URLs on the page. Typically, these are the non-navigation links that are clicked on the most.
   * @see https://schema.org/significantLink
   */
  significantLink: URL;

  /** Indicates sections of a Web page that are particularly 'speakable' in the sense of being highlighted as being especially appropriate for text-to-speech conversion. Other sections of a page may also be usefully spoken in particular circumstances; the 'speakable' property serves to indicate the parts most likely to be generally useful for speech.
   *
   * The speakable property can be repeated an arbitrary number of times, with three kinds of possible 'content-locator' values:
   *
   * 1. id-value URL references - uses id-value of an element in the page being annotated. The simplest use of speakable has (potentially relative) URL values, referencing identified sections of the document concerned.
   * 2. CSS Selectors - addresses content in the annotated page, eg. via class attribute. Use the {@link cssSelector} property.
   * 3. XPaths - addresses content via XPaths (assuming an XML view of the content). Use the {@link xpath} property.
   *
   * For more sophisticated markup of speakable sections beyond simple ID references, either CSS selectors or XPath expressions to pick out document section(s) as speakable. For this we define a supporting type, {@link SpeakableSpecification} which is defined to be a possible value of the speakable property.
   * @see https://schema.org/speakable
   */
  speakable: URL | SpeakableSpecification;

  /** One of the domain specialities to which this web page's content applies.
   * @see https://schema.org/specialty
   */
  specialty: Specialty;
}

/** A web page. Every web page is implicitly assumed to be declared to be of type WebPage, so the various properties about that webpage, such as breadcrumb may be used. We recommend explicit declaration if these properties are specified, but if they are found outside of an itemscope, they will be assumed to be about the page.
 * @see https://schema.org/WebPage
 */
export interface WebPage extends WebPageProps {
  "@type": "WebPage";
}

export type WebPageType = WebPage;
