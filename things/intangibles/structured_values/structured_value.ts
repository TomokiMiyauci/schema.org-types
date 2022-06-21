import { ThingProps } from "../../thing.ts";

// deno-lint-ignore no-empty-interface
export interface StructuredValueProps extends ThingProps {}

/** Structured values are used when the value of a property has a more complex structure than simply being a textual value or a reference to another thing.
 * @see https://schema.org/StructuredValue
 */
export interface StructuredValue extends StructuredValueProps {
  "@type": "StructuredValue";
}

export type StructuredValueType = StructuredValue;
