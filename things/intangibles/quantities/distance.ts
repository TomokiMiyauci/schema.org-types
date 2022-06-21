import { ThingProps } from "../../thing.ts";

// deno-lint-ignore no-empty-interface
export interface DistanceProps extends ThingProps {}

/** Properties that take Distances as values are of the form '<Number> <Length unit of measure>'. E.g., '7 ft'.
 * @see https://schema.org/Distance
 */
export interface Distance extends DistanceProps {
  "@type": "Distance";
}
