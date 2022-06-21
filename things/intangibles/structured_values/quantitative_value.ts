import { QualitativeValueType } from "../enumerations/qualitative_values/qualitative_value.ts";
import { MeasurementTypeEnumeration } from "../enumerations/measurement_type_enumerations/measurement_type_enumeration.ts";
import { EnumerationType } from "../enumerations/enumeration.ts";
import { DefinedTermType } from "../defined_terms/defined_term.ts";
import { StructuredValueType } from "./structured_value.ts";
import { Boolean, Number, Text, URL } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";
import { PropertyValueType } from "../../intangibles/structured_values/property_values/property_value.ts";

export interface QuantitativeValueProps extends ThingProps {
  /** A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   *
   * @remark Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty: PropertyValueType;

  /** The upper value of some characteristic or property.
   * @see https://schema.org/maxValue
   */
  maxValue: Number;

  /** The lower value of some characteristic or property.
   * @see https://schema.org/minValue
   */
  minValue: Number;

  /** The unit of measurement given using the UN/CEFACT Common Code (3 characters) or a URL. Other codes than the UN/CEFACT Common Code may be used with a prefix followed by a colon.
   * @see https://schema.org/unitCode
   */
  unitCode: Text | URL;

  /** A string or text indicating the unit of measurement. Useful if you cannot provide a standard unit code for {@link unitCode}.
   * @see https://schema.org/unitText
   */
  unitText: Text;

  /** The value of the quantitative value or property value node.
   * - For {@link QuantitativeValue} and {@link MonetaryAmount}, the recommended type for values is 'Number'.
   * - For {@link PropertyValue}, it can be 'Text;', 'Number', 'Boolean', or 'StructuredValue'.
   * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
   * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
   * @see https://schema.org/value
   */
  value: Boolean | Number | Text | StructuredValueType;

  /** A secondary value that provides additional information on the original value, e.g. a reference temperature or a type of measurement.
   * @see https://schema.org/valueReference
   */
  valueReference:
    | DefinedTermType
    | EnumerationType
    | MeasurementTypeEnumeration
    | PropertyValueType
    | QualitativeValueType
    | QuantitativeValue
    | StructuredValueType
    | Text;
}

/** A point value or interval for product characteristics and other purposes.
 * @see https://schema.org/QuantitativeValue
 */
export interface QuantitativeValue extends QuantitativeValueProps {
  "@type": "QuantitativeValue";
}
