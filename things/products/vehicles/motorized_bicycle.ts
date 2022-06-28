import { ProductProps } from "./../product.ts";
import { VehicleProps } from "./vehicle.ts";
import { ThingProps } from "../../thing.ts";

export interface MotorcycleProps
  extends VehicleProps, ProductProps, ThingProps {}

/** A motorcycle or motorbike is a single-track, two-wheeled motor vehicle.
 * @see https://schema.org/Motorcycle
 */
export interface Motorcycle extends MotorcycleProps {
  "@type": "Motorcycle";
}
