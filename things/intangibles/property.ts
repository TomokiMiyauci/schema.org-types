import { EnumerationType } from "./enumerations/enumeration.ts";
import { Class } from "./class.ts";
import { ThingProps } from "../thing.ts";

export interface PropertyProps extends ThingProps {
  /** Relates a property to a class that is (one of) the type(s) the property is expected to be used on.
   * @see https://schema.org/domainIncludes
   */
  domainIncludes: Class;

  /** Relates a property to a property that is its inverse. Inverse properties relate the same pairs of items to each other, but in reversed direction. For example, the 'alumni' and 'alumniOf' properties are inverseOf each other. Some properties don't have explicit inverses; in these situations RDFa and JSON-LD syntax for reverse properties can be used.
   * @see https://schema.org/inverseOf
   */
  inverseOf: Property;

  /** Relates a property to a class that constitutes (one of) the expected type(s) for values of the property.
   * @see https://schema.org/rangeIncludes
   */
  rangeIncludes: Class;

  /** Relates a term (i.e. a property, class or enumeration) to one that supersedes it.
   * @see https://schema.org/supersededBy
   */
  supersededBy: Class | EnumerationType | Property;
}

/** A property, used to indicate attributes and relationships of some Thing; equivalent to rdf:Property.
 * @see https://schema.org/Property
 */
export interface Property extends PropertyProps {
  "@type": "Property";
}
