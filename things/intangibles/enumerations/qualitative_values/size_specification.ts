import { GenderType } from "../gender_type.ts";
import { SizeSystemEnumeration } from "../size_system_enumerations/size_system_enumeration.ts";
import { Text } from "../../../../data_types.ts";
import { SizeGroupEnumeration } from "../size_group_enumerations/size_group_enumeration.ts";
import { QuantitativeValue } from "../../structured_values/quantitative_value.ts";
import { EnumerationProps } from "../enumeration.ts";
import { QuantitativeValueProps } from "../../structured_values/quantitative_value.ts";
import { ThingProps } from "../../../thing.ts";

export interface SizeSpecificationProps
  extends QuantitativeValueProps, EnumerationProps, ThingProps {
  /** A product measurement, for example the inseam of pants, the wheel size of a bicycle, or the gauge of a screw. Usually an exact measurement, but can also be a range of measurements for adjustable products, for example belts and ski bindings.
   * @see https://schema.org/hasMeasurement
   */
  hasMeasurement: QuantitativeValue;

  /** The size group (also known as "size type") for a product's size. Size groups are common in the fashion industry to define size segments and suggested audiences for wearable products. Multiple values can be combined, for example "men's big and tall", "petite maternity" or "regular"
   * @see https://schema.org/sizeGroup
   */
  sizeGroup: SizeGroupEnumeration | Text;

  /** The size system used to identify a product's size. Typically either a standard (for example, "GS1" or "ISO-EN13402"), country code (for example "US" or "JP"), or a measuring system (for example "Metric" or "Imperial").
   * @see https://schema.org/sizeSystem
   */
  sizeSystem: SizeSystemEnumeration | Text;

  /** The age or age range for the intended audience or person, for example 3-12 months for infants, 1-5 years for toddlers.
   * @see https://schema.org/suggestedAge
   */
  suggestedAge: QuantitativeValue;

  /** The suggested gender of the intended person or audience, for example "male", "female", or "unisex".
   * @see https://schema.org/suggestedGender
   */
  suggestedGender: GenderType | Text;

  /** A suggested range of body measurements for the intended audience or person, for example inseam between 32 and 34 inches or height between 170 and 190 cm. Typically found on a size chart for wearable products.
   * @see https://schema.org/suggestedMeasurement
   * @deprecated
   */
  suggestedMeasurement: QuantitativeValue;
}

/** Size related properties of a product, typically a size code ({@link name}) and optionally a {@link sizeSystem}, {@link sizeGroup}, and product measurements ({@link hasMeasurement}). In addition, the intended audience can be defined through {@link suggestedAge}, {@link suggestedGender}, and suggested body measurements ({@link suggestedMeasurement}).
 * @see https://schema.org/SizeSpecification
 * @deprecated
 */
export interface SizeSpecification extends SizeSpecificationProps {
  "@type": "SizeSpecification";
}
