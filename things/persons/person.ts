import { ThingProps } from "../thing.ts";
import { Text } from "../../data_types.ts";

export interface PersonProps extends ThingProps {
  /** An additional name for a Person, can be used for a middle name.
   * @see https://schema.org/additionalName
   */
  additionalName: Text;
}

export interface Person extends PersonProps {
  "@type": "Person";
}

export type PersonType = Person;
