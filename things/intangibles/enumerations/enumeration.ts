import { Property } from "../property.ts";
import { Class } from "../class.ts";
import { ThingProps } from "../../thing.ts";

export interface EnumerationProps extends ThingProps {
  /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
   * @see https://schema.org/supersededBy
   */
  supersededBy: Class | EnumerationType | Property;
}

/** Lists or enumerations—for example, a list of cuisines or music genres, etc.
 * @see https://schema.org/Enumeration
 */
export interface Enumeration extends EnumerationProps {
  "@type": "Enumeration";
}

export type EnumerationType = Enumeration;
