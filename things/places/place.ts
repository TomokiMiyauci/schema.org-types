import { ThingProps } from "../thing.ts";
import { PropertyValueType } from "../intangibles/structured_values/property_values/property_value.ts";

export interface PlaceProps extends ThingProps {
  /** A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   *
   * @remark Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty: PropertyValueType;
}

/** Entities that have a somewhat fixed, physical extension.
 * @see https://schema.org/Place
 */
export interface Place {
  "@type": "Place";
}

export type PlaceType = Place;
