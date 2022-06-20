import { ThingProps } from "../../thing.ts";
import { Text, URL } from "../../../data_types.ts";
import { DefinedTermSetType } from "../../creative_works/defined_term_sets/defined_term_set.ts";

export interface DefinedTermProps extends ThingProps {
  /** A {@link DefinedTermSet} that contains this term.
   */
  inDefinedTermSet: DefinedTermSetType | URL;

  /** A code that identifies this {@link DefinedTerm} within a {@link DefinedTermSet}.
   * @see https://schema.org/termCode
   */
  termCode: Text;
}

/** A word, name, acronym, phrase, etc. with a formal definition. Often used in the context of category or subject classification, glossaries or dictionaries, product or creative work types, etc. Use the name property for the term being defined, use termCode if the term has an alpha-numeric code allocated, use description to provide the definition of the term.
 * @see https://schema.org/DefinedTerm
 * @deprecated
 */
export interface DefinedTerm extends DefinedTermProps {
  "@type": "DefineTerm";
}

export type DefinedTermType = DefinedTerm;
