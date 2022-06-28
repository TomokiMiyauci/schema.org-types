import { ProductProps } from "./../product.ts";
import { VehicleProps } from "./vehicle.ts";
import { ThingProps } from "../../thing.ts";

export interface MotorizedBicycleProps
  extends VehicleProps, ProductProps, ThingProps {}

/** A motorized bicycle is a bicycle with an attached motor used to power the vehicle, or to assist with pedaling.
 * @see https://schema.org/MotorizedBicycle
 */
export interface MotorizedBicycle extends MotorizedBicycleProps {
  "@type": "MotorizedBicycle";
}
