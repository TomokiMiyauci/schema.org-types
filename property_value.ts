import { ThingProps } from "./thing.ts";
import { Number, Text, URL } from "./data_types.ts";

export interface PropertyValueProps extends ThingProps {
  /** The upper value of some characteristic or property.
   * @see https://schema.org/maxValue
   */
  maxValue: Number;

  /** A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
   *
   * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
   *
   * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   *
   * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link measurementTechnique}.
   * @see https://schema.org/measurementTechnique
   */
  measurementTechnique: Text | URL;
}

/** A property-value pair, e.g. representing a feature of a product or place. Use the 'name' property for the name of the property. If there is an additional human-readable version of the value, put that into the 'description' property.
 *
 * Always use specific schema.org properties when a) they exist and b) you can populate them. Using PropertyValue as a substitute will typically not trigger the same effect as using the original, specific property.
 * @see https://schema.org/PropertyValue
 */
export interface PropertyValue extends PropertyValueProps {
  "@type": "PropertyValue";
}

export type PropertyValueType = ThingProps;
