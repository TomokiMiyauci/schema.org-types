import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";
import { DefinedTermType } from "../../intangibles/defined_terms/defined_term.ts";

export interface DefinedTermSetProps extends CreativeWorkProps, ThingProps {
  /** A Defined Term contained in this term set.
   * @see https://schema.org/hasDefinedTerm
   * @deprecated
   */
  hasDefinedTerm: DefinedTermType;
}

/** A set of defined terms for example a set of categories or a classification scheme, a glossary, dictionary or enumeration.
 * @see https://schema.org/DefinedTermSet
 */
export interface DefinedTermSet extends DefinedTermSetProps {
  "@type": "DefinedTermSet";
}

export type DefinedTermSetType = DefinedTermSet;
