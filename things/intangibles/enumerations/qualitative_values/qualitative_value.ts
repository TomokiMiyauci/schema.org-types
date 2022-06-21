import { QuantitativeValue } from "../../structured_values/quantitative_value.ts";
import { StructuredValueType } from "../../structured_values/structured_value.ts";
import { EnumerationProps } from "../enumeration.ts";
import { ThingProps } from "../../../thing.ts";
import { PropertyValueType } from "../../../intangibles/structured_values/property_values/property_value.ts";
import { MeasurementTypeEnumeration } from "../../enumerations/measurement_type_enumerations/measurement_type_enumeration.ts";
import { EnumerationType } from "../../enumerations/enumeration.ts";
import { DefinedTermType } from "../../defined_terms/defined_term.ts";
import { Text } from "../../../../data_types.ts";

export interface QualitativeValueProps extends EnumerationProps, ThingProps {
  /** A property-value pair representing an additional characteristics of the entitity, e.g. a product feature or another characteristic for which there is no matching property in schema.org.
   *
   * @remark Publishers should be aware that applications designed to use specific schema.org properties (e.g. https://schema.org/width, https://schema.org/color, https://schema.org/gtin13, ...) will typically expect such data to be provided using those properties, rather than using the generic property/value mechanism.
   * @see https://schema.org/additionalProperty
   */
  additionalProperty: PropertyValueType;

  /** This ordering relation for qualitative values indicates that the subject is equal to the object.
   * @see https://schema.org/equal
   */
  equal: QualitativeValueType;

  /** This ordering relation for qualitative values indicates that the subject is greater than the object.
   * @see https://schema.org/greater
   */
  greater: QualitativeValueType;

  /** This ordering relation for qualitative values indicates that the subject is greater than or equal to the object.
   * @see https://schema.org/greaterOrEqual
   */
  greaterOrEqual: QualitativeValueType;

  /** This ordering relation for qualitative values indicates that the subject is lesser than the object.
   * @see https://schema.org/lesser
   */
  lesser: QualitativeValueType;

  /** This ordering relation for qualitative values indicates that the subject is lesser than or equal to the object.
   * @see https://schema.org/lesserOrEqual
   */
  lesserOrEqual: QualitativeValueType;

  /** This ordering relation for qualitative values indicates that the subject is not equal to the object.
   * @see https://schema.org/nonEqual
   */
  nonEqual: QualitativeValueType;

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

/** A predefined value for a product characteristic, e.g. the power cord plug type 'US' or the garment sizes 'S', 'M', 'L', and 'XL'.
 * @see https://schema.org/QualitativeValue
 */
export interface QualitativeValue extends QualitativeValueProps {
  "@type": "QualitativeValue";
}

export type QualitativeValueType = QualitativeValue;
