import { SpeakableSpecification } from "../../intangibles/speakable_specification.ts";
import { CreativeWorkType } from "../creative_work.ts";
import { Integer, Text, URL } from "../../../data_types.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface ArticleProps extends CreativeWorkProps, ThingProps {
  /** The actual body of the article.
   * @see https://schema.org/articleBody
   */
  articleBody: Text;

  /** Articles may belong to one or more 'sections' in a magazine or newspaper, such as Sports, Lifestyle, etc.
   * @see https://schema.org/articleSection
   */
  articleSection: Text;

  /** For an {@link Article}, typically a {@link NewsArticle}, the backstory property provides a textual summary giving a brief explanation of why and how an article was created. In a journalistic setting this could include information about reporting process, methods, interviews, data sources, etc.
   * @see https://schema.org/backstory
   * @deprecated
   */
  backstory: CreativeWorkType | Text;

  /** The page on which the work ends; for example "138" or "xvi".
   * @see https://schema.org/pageEnd
   */
  pageEnd: Integer | Text;

  /** The page on which the work starts; for example "135" or "xiii".
   * @see https://schema.org/pageStart
   */
  pageStart: Integer | Text;

  /** Any description of pages that is not separated into pageStart and pageEnd; for example, "1-6, 9, 55" or "10-12, 46-49".
   * @see https://schema.org/pagination
   */
  pagination: Text;

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

  /** The number of words in the text of the Article.
   * @see https://schema.org/wordCount
   */
  wordCount: Integer;
}

/** An article, such as a news article or piece of investigative report. Newspapers and magazines have articles of many different types and this is intended to cover them all.
 * ```html
 *
 * ```
 * @see https://schema.org/Article
 */
export interface Article extends ArticleProps {
  "@type": "Article";
}

export type ArticleType = Article;
