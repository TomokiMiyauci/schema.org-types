import { Text } from "../../../data_types.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { DefinedTermProps } from "../../intangibles/defined_terms/defined_term.ts";
import { CategoryCodeProps } from "../../intangibles/defined_terms/category_codes/category_code.ts";
import { ThingProps } from "../../thing.ts";

export interface MedicalCodeProps
  extends CategoryCodeProps, DefinedTermProps, MedicalEntityProps, ThingProps {
  /** A short textual code that uniquely identifies the value.
   * @see https://schema.org/codeValue
   */
  codeValue: Text;

  /** The coding system, e.g. 'ICD-10'.
   * @see https://schema.org/codingSystem
   */
  codingSystem: Text;
}

/** A code for a medical entity.
 * @see https://schema.org/MedicalCode
 */
export interface MedicalCode extends MedicalCodeProps {
  "@type": "MedicalCode";
}
