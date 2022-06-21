import { Number, Text } from "../../../data_types.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface MedicalConditionStageProps
  extends MedicalEntityProps, ThingProps {
  /** The stage represented as a number, e.g. 3.
   * @see https://schema.org/stageAsNumber
   */
  stageAsNumber: Number;

  /** The substage, e.g. 'a' for Stage IIIa.
   * @see https://schema.org/subStageSuffix
   */
  subStageSuffix: Text;
}

/** A stage of a medical condition, such as 'Stage IIIa'.
 * @see https://schema.org/MedicalConditionStage
 */
export interface MedicalConditionStage extends MedicalConditionStageProps {
  "@type": "MedicalConditionStage";
}
