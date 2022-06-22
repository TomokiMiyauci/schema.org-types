import { ThingProps } from "../../thing.ts";

// deno-lint-ignore no-empty-interface
export interface MassProps extends ThingProps {}

/** Properties that take Mass as values are of the form '<Number> <Mass unit of measure>'. E.g., '7 kg'.
 * @see https://schema.org/Mass
 */
export interface Mass extends MassProps {
  "@type": "Mass";
}
