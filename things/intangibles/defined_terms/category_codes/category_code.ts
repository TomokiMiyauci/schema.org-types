import { CategoryCodeSet } from "../../../creative_works/defined_term_sets/category_code_set.ts";
import { Text, URL } from "./../../../../data_types.ts";
import { DefinedTermProps } from "../defined_term.ts";
import { ThingProps } from "../../../thing.ts";

export interface CategoryCodeProps extends DefinedTermProps, ThingProps {
  /** A short textual code that uniquely identifies the value.
   * @see https://schema.org/codeValue
   * @deprecated
   */
  codeValue: Text;

  /** A {@link CategoryCodeSet} that contains this category code.
   * @see https://schema.org/inCoedeSet
   * @deprecated
   */
  inCodeSet: CategoryCodeSet | URL;
}

/** A Category Code.
 * @see https://schema.org/CategoryCode
 * @deprecated
 */
export interface CategoryCode extends CategoryCodeProps {
  "@type": "CategoryCode";
}

export type CategoryCodeType = CategoryCode;
