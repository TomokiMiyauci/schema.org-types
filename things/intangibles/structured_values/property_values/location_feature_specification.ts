import { Date, DateTime } from "../../../../data_types.ts";
import { OpeningHoursSpecification } from "../opening_hours_specification.ts";
import { ThingProps } from "../../../thing.ts";
import { PropertyValueProps } from "./property_value.ts";

export interface LocationFeatureSpecificationProps
  extends PropertyValueProps, ThingProps {
  /** The hours during which this service or contact is available.
   * @see https://schema.org/hoursAvailable
   */
  hoursAvailable: OpeningHoursSpecification;

  /** The date when the item becomes valid.
   * @see https://schema.org/validFrom
   */
  validFrom: Date | DateTime;

  /** The date after when the item is not valid. For example the end of an offer, salary period, or a period of opening hours.
   * @see https://schema.org/validThrough
   */
  validThrough: Date | DateTime;
}

/** Specifies a location feature by providing a structured value representing a feature of an accommodation as a property-value pair of varying degrees of formality.
 * @see https://schema.org/LocationFeatureSpecification
 */
export interface LocationFeatureSpecification
  extends LocationFeatureSpecificationProps {
  "@type": "LocationFeatureSpecification";
}
