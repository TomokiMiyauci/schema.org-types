import { ThingProps } from "../thing.ts";

// deno-lint-ignore no-empty-interface
export interface IntangibleProps extends ThingProps {}

/** A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
 * @see https://schema.org/Intangible
 */
export interface Intangible extends IntangibleProps {
  "@type": "Intangible";
}

export type IntangibleType = Intangible;
