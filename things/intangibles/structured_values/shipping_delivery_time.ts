import { QuantitativeValue } from "./quantitative_value.ts";
import { Time } from "../../../data_types.ts";
import { OpeningHoursSpecification } from "./opening_hours_specification.ts";
import { ThingProps } from "../../thing.ts";

export interface ShippingDeliveryTimeProps extends ThingProps {
  /** Days of the week when the merchant typically operates, indicated via opening hours markup.
   * @see https://schema.org/businessDays
   * @deprecated
   */
  businessDays: OpeningHoursSpecification;

  /** Order cutoff time allows merchants to describe the time after which they will no longer process orders received on that day. For orders processed after cutoff time, one day gets added to the delivery time estimate. This property is expected to be most typically used via the {@link ShippingRateSettings} publication pattern. The time is indicated using the ISO-8601 Time format, e.g. "23:30:00-05:00" would represent 6:30 pm Eastern Standard Time (EST) which is 5 hours behind Coordinated Universal Time (UTC).
   * @see https://schema.org/cutoffTime
   * @deprecated
   */
  cutoffTime: Time;

  /** The typical delay between the receipt of the order and the goods either leaving the warehouse or being prepared for pickup, in case the delivery method is on site pickup. Typical properties: minValue, maxValue, unitCode (d for DAY). This is by common convention assumed to mean business days (if a unitCode is used, coded as "d"), i.e. only counting days when the business normally operates.
   * @see https://schema.org/handlingTime
   * @deprecated
   */
  handlingTime: QuantitativeValue;

  /** The typical delay the order has been sent for delivery and the goods reach the final customer. Typical properties: minValue, maxValue, unitCode (d for DAY).
   * @see https://schema.org/transitTime
   * @deprecated
   */
  transitTime: QuantitativeValue;
}

/** ShippingDeliveryTime provides various pieces of information about delivery times for shipping.
 * @see https://schema.org/ShippingDeliveryTime
 * @deprecated
 */
export interface ShippingDeliveryTime extends ShippingDeliveryTimeProps {
  "@type": "ShippingDeliveryTime";
}
