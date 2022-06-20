import { ThingProps } from "../../thing.ts";

// deno-lint-ignore no-empty-interface
export interface DurationProps extends ThingProps {}

/** Quantity: Duration (use {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 duration format}).
 * @see https://schema.org/Duration
 */
export interface Duration extends DurationProps {
  "@type": "Duration";
}
