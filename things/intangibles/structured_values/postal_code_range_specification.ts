import { Text } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";

export interface PostalCodeRangeSpecificationProps extends ThingProps {
  /** First postal code in a range (included).
   * @see https://schema.org/postalCodeBegin
   * @deprecated
   */
  postalCodeBegin: Text;

  /** Last postal code in the range (included). Needs to be after {@link postalCodeBegin}.
   * @see https://schema.org/postalCodeEnd
   * @deprecated`
   */
  postalCodeEnd: Text;
}

/** Indicates a range of postalcodes, usually defined as the set of valid codes between {@link postalCodeBegin} and {@link postalCodeEnd}, inclusively.
 * @see https://schema.org/PostalCodeRangeSpecification
 * @deprecated
 */
export interface PostalCodeRangeSpecification
  extends PostalCodeRangeSpecificationProps {
  "@type": "PostalCodeRangeSpecification";
}
