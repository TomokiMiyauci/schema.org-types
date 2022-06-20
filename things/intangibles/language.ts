import { ThingProps } from "../thing.ts";

// deno-lint-ignore no-empty-interface
export interface LanguageProps extends ThingProps {}

/** Natural languages such as Spanish, Tamil, Hindi, English, etc. Formal language code tags expressed in {@link https://en.wikipedia.org/wiki/IETF_language_tag BCP 47} can be used via the {@link alternateName} property. The Language type previously also covered programming languages such as Scheme and Lisp, which are now best represented using {@link ComputerLanguage}.
 * @see https://schema.org/Language
 */
export interface Language extends LanguageProps {
  "@type": "Language";
}
