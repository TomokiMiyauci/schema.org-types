import { Language } from "../../language.ts";
import { BroadcastChannelType } from "../../broadcast_channels/broadcast_channel.ts";
import { BroadcastFrequencySpecification } from "./../../broadcast_frequency_specification.ts";
import { Text } from "../../../../data_types.ts";
import { OrganizationType } from "../../../organizations/organization.ts";
import { ServiceProps } from "../service.ts";
import { ThingProps } from "../../../thing.ts";

export interface BroadcastServiceProps extends ServiceProps, ThingProps {
  /** The media network(s) whose content is broadcast on this station.
   * @see https://schema.org/broadcastAffiliateOf
   */
  broadcastAffiliateOf: OrganizationType;

  /** The name displayed in the channel guide. For many US affiliates, it is the network name.
   * @see https://schema.org/broadcastDisplayName
   */
  broadcastDisplayName: Text;

  /** The frequency used for over-the-air broadcasts. Numeric values or simple ranges e.g. 87-99. In addition a shortcut idiom is supported for frequences of AM and FM radio channels, e.g. "87 FM".
   * @see https://schema.org/broadcastFrequency
   */
  broadcastFrequency: BroadcastFrequencySpecification | Text;

  /** The timezone in {@link https://schema.org/broadcastTimezone ISO 8601 format} for which the service bases its broadcasts.
   * @see https://schema.org/broadcastTimezone
   */
  broadcastTimezon: Text;

  /** The organization owning or operating the broadcast service.
   * @see https://schema.org/broadcaster
   */
  broadcaster: OrganizationType;

  /** A {@link callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
   * @see https://schema.org/callSign
   */
  callSign: Text;

  /** A broadcast channel of a broadcast service.
   * @see https://schema.org/hasBroadcastChannel
   */
  hasBroadcastChannel: BroadcastChannelType;

  /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link https://www.rfc-editor.org/info/bcp47 IETF BCP 47 standard|. See also {@link availableLanguage}.
   * @see https://schema.org/inLanguage
   */
  inLanguage: Language | Text;

  /** A broadcast service to which the broadcast service may belong to such as regional variations of a national channel.
   * @see https://schema.org/parentService
   */
  parentService: BroadcastServiceType;

  /** The type of screening or video broadcast used (e.g. IMAX, 3D, SD, HD, etc.).
   * @see https://schema.org/videoFormat
   */
  videoFormat: Text;
}

/** A delivery service through which content is provided via broadcast over the air or online.
 * @see https://schema.org/BroadcastService
 */
export interface BroadcastService extends BroadcastServiceProps {
  "@type": "BroadcastService";
}

export type BroadcastServiceType = BroadcastService;
