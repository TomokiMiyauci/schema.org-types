import { Property } from "./property.ts";
import { EnumerationType } from "./enumerations/enumeration.ts";
import { ThingProps } from "../thing.ts";

export interface ClassProps extends ThingProps {
  /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
   * @see https://schema.org/supersededBy
   */
  supersededBy: Class | EnumerationType | Property;
}

/** A class, also often called a 'Type'; equivalent to rdfs:Class.
 * @see https://schema.org/Class
 */
export interface Class extends ClassProps {
  "@type": "Class";
}
