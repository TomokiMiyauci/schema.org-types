import { QualitativeValueType } from "./enumerations/qualitative_values/qualitative_value.ts";
import { QuantitativeValue } from "./structured_values/quantitative_value.ts";
import { Number, Text } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface BroadcastFrequencySpecificationProps extends ThingProps {
  /** The frequency in MHz for a particular broadcast.
   * @see https://schema.org/broadcastFrequencyValue
   */
  broadcastFrequencyValue: Number | QuantitativeValue;

  /** The modulation (e.g. FM, AM, etc) used by a particular broadcast service.
   * @see https://schema.org/broadcastSignalModulation
   * @deprecated
   */
  broadcastSignalModulation: QualitativeValueType | Text;

  /** The subchannel used for the broadcast.
   * @see https://schema.org/broadcastSubChannel
   * @deprecated
   */
  broadcastSubChannel: Text;
}

/** The frequency in MHz and the modulation used for a particular BroadcastService.
 * @see https://schema.org/BroadcastFrequencySpecification
 */
export interface BroadcastFrequencySpecification
  extends BroadcastFrequencySpecificationProps {
  "@type": "BroadcastFrequencySpecification";
}
