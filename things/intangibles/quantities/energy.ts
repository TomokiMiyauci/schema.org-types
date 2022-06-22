import { ThingProps } from "../../thing.ts";

// deno-lint-ignore no-empty-interface
export interface EnergyProps extends ThingProps {}

/** Properties that take Energy as values are of the form '<Number> <Energy unit of measure>'.
 * @see https://schema.org/Energy
 */
export interface Energy extends EnergyProps {
  "@type": "Energy";
}
