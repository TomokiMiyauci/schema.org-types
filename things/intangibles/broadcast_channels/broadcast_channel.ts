import { BroadcastServiceType } from "../services/broadcast_services/broadcast_service.ts";
import { CableOrSatelliteService } from "../services/cable_or_satellite_service.ts";
import { BroadcastFrequencySpecification } from "../broadcast_frequency_specification.ts";
import { Text, URL } from "./../../../data_types.ts";
import { ThingProps } from "../../thing.ts";

export interface BroadcastChannelProps extends ThingProps {
  /** The unique address by which the BroadcastService can be identified in a provider lineup. In US, this is typically a number.
   * @see https://schema.org/broadcastChannelId
   */
  broadcastChannelId: Text;

  /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".
   * @see https://schema.org/broadcastFrequency
   */
  broadcastFrequency: BroadcastFrequencySpecification | Text;

  /** The type of service required to have access to the channel (e.g. Standard or Premium).
   * @see https://schema.org/broadcastServiceTier
   */
  broadcastServiceTier: Text;

  /** Genre of the creative work, broadcast channel or group.
   * @see https://schema.org/genre
   */
  genre: Text | URL;

  /** A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
   * @see https://schema.org/BroadcastChannel
   */
  inBroadcastLineup: CableOrSatelliteService;

  /** The BroadcastService offered on this channel.
   * @see https://schema.org/providesBroadcastService
   */
  providesBroadcastService: BroadcastServiceType;
}

/** A unique instance of a BroadcastService on a CableOrSatelliteService lineup.
 * @see https://schema.org/BroadcastChannel
 */
export interface BroadcastChannel extends BroadcastChannelProps {
  "@type": "BroadcastChannel";
}

export type BroadcastChannelType = BroadcastChannel;
