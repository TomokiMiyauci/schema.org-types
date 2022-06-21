import { DefinedTermSetProps } from "./defined_term_set.ts";
import { CategoryCodeType } from "../../intangibles/defined_terms/category_codes/category_code.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface CategoryCodeSetProps
  extends DefinedTermSetProps, CreativeWorkProps, ThingProps {
  /** A Category code contained in this code set.
   * @see https://schema.org/hasCategoryCode
   */
  hasCategoryCode: CategoryCodeType;
}

/** A set of Category Code values.
 * @see https://schema.org/CategoryCodeSet
 */
export interface CategoryCodeSet extends CategoryCodeSetProps {
  "@type": "CategoryCodeSet";
}
