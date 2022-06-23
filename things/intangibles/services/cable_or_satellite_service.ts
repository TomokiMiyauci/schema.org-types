import { ServiceProps } from "./service.ts";
import { ThingProps } from "../../thing.ts";

export interface CableOrSatelliteServiceProps
  extends ServiceProps, ThingProps {}

/** A service which provides access to media programming like TV or radio. Access may be via cable or satellite.
 * @see https://schema.org/CableOrSatelliteService
 */
export interface CableOrSatelliteService extends CableOrSatelliteServiceProps {
  "@type": "CableOrSatelliteService";
}
