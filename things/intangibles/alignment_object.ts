import { Text, URL } from "../../data_types.ts";
import { ThingProps } from "../thing.ts";

export interface AlignmentObjectProps extends ThingProps {
  /** A category of alignment between the learning resource and the framework node. Recommended values include: 'requires', 'textComplexity', 'readingLevel', and 'educationalSubject'.
   * @see https://schema.org/alignmentType
   */
  alignmentType: Text;

  /** The framework to which the resource being described is aligned.
   * @see https://schema.org/educationalFramework
   */
  educationalFramework: Text;

  /** The description of a node in an established educational framework.
   * @see https://schema.org/targetDescription
   */
  targetDescription: Text;

  /** The name of a node in an established educational framework.
   * @see https://schema.org/targetName
   */
  targetName: Text;

  /** The URL of a node in an established educational framework.
   * @see https://schema.org/targetUrl
   */
  targetUrl: URL;
}

/** An intangible item that describes an alignment between a learning resource and a node in an educational framework.
 *
 * Should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link teaches} or {@link assesses} a competency.
 * @see https://schema.org/AlignmentObject
 */
export interface AlignmentObject extends AlignmentObjectProps {
  "@type": "AlignmentObject";
}
