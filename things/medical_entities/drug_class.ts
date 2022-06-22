import { Drug } from "./substances/drug.ts";
import { MedicalEntityProps } from "./medical_entity.ts";
import { ThingProps } from "../thing.ts";

export interface DrugClassProps extends MedicalEntityProps, ThingProps {
  /** Specifying a drug or medicine used in a medication procedure.
   * @see https://schema.org/drug
   */
  drug: Drug;
}

/** A class of medical drugs, e.g., statins. Classes can represent general pharmacological class, common mechanisms of action, common physiological effects, etc.
 * @see https://schema.org/DrugClass
 */
export interface DrugClass extends DrugClassProps {
  "@type": "DrugClass";
}
