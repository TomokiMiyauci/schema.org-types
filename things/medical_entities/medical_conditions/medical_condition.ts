import { MedicalTestType } from "../medical_tests/medical_test.ts";
import { MedicalStudyStatus } from "../../intangibles/enumerations/medical_enumerations/medical_study_status.ts";
import { EventStatusType } from "../../intangibles/enumerations/status_enumerations/event_status_type.ts";
import { MedicalConditionStage } from "../medical_intangibles/medical_condition_stage.ts";
import { MedicalSignOrSymptomType } from "./medical_sign_or_symptoms/medical_sign_or_symptom.ts";
import { MedicalRiskFactor } from "../medical_risk_factor.ts";
import { MedicalTherapyType } from "../medical_procedures/therapeutic_procedures/medical_therapies/medical_therapy.ts";
import { Text } from "../../../data_types.ts";
import { Drug } from "../substances/drug.ts";
import { DDxElement } from "../medical_intangibles/d_dx_element.ts";
import { SuperficialAnatomy } from "../superficial_anatomy.ts";
import { AnatomicalSystem } from "../anatomical_system.ts";
import { AnatomicalStructureType } from "../anatomical_structures/anatomical_structure.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface MedicalConditionProps extends MedicalEntityProps, ThingProps {
  /** The anatomy of the underlying organ system or structures associated with this entity.
   * @see https://schema.org/associatedAnatomy
   */
  associatedAnatomy:
    | AnatomicalStructureType
    | AnatomicalSystem
    | SuperficialAnatomy;

  /** One of a set of differential diagnoses for the condition. Specifically, a closely-related or competing diagnosis typically considered later in the cognitive process whereby this medical condition is distinguished from others most likely responsible for a similar collection of signs and symptoms to reach the most parsimonious diagnosis or diagnoses in a patient.
   * @see https://schema.org/differentialDiagnosis
   */
  differentialDiagnosis: DDxElement;

  /** Specifying a drug or medicine used in a medication procedure.
   * @see https://schema.org/drug
   */
  drug: Drug;

  /** The characteristics of associated patients, such as age, gender, race etc.
   * @see https://schema.org/epidemiology
   */
  epidemiology: Text;

  /** The likely outcome in either the short term or long term of the medical condition.
   * @see https://schema.org/expectedPrognosis
   */
  expectedPrognosis: Text;

  /** The expected progression of the condition if it is not treated and allowed to progress naturally.
   * @see https://schema.org/naturalProgression
   */
  naturalProgression: Text;

  /** Changes in the normal mechanical, physical, and biochemical functions that are associated with this activity or condition.
   * @see https://schema.org/pathophysiology
   */
  pathophysiology: Text;

  /** A possible unexpected and unfavorable evolution of a medical condition. Complications may include worsening of the signs or symptoms of the disease, extension of the condition to other organ systems, etc.
   * @see https://schema.org/possibleComplication
   */
  possibleComplication: Text;

  /** A possible treatment to address this condition, sign or symptom.
   * @see https://schema.org/possibleTreatment
   */
  possibleTreatment: MedicalTherapyType;

  /** A preventative therapy used to prevent an initial occurrence of the medical condition, such as vaccination.
   * @see https://schema.org/primaryPrevention
   */
  primaryPrevention: MedicalTherapyType;

  /** A modifiable or non-modifiable factor that increases the risk of a patient contracting this condition, e.g. age, coexisting condition.
   * @see https://schema.org/riskFactor
   */
  riskFactor: MedicalRiskFactor;

  /** A preventative therapy used to prevent reoccurrence of the medical condition after an initial episode of the condition.
   * @see https://schema.org/secondaryPrevention
   */
  secondaryPrevention: MedicalTherapyType;

  /** A sign or symptom of this condition. Signs are objective or physically observable manifestations of the medical condition while symptoms are the subjective experience of the medical condition.
   * @see https://schema.org/signOrSymptom
   */
  signOrSymptom: MedicalSignOrSymptomType;

  /** The stage of the condition, if applicable.
   * @see https://schema.org/stage
   */
  stage: MedicalConditionStage;

  /** The status of the study (enumerated).
   * @see https://schema.org/status
   */
  status: EventStatusType | MedicalStudyStatus | Text;

  /** A medical test typically performed given this condition.
   * @see https://schema.org/typicalTest
   */
  typicalTest: MedicalTestType;
}

/** Any condition of the human body that affects the normal functioning of a person, whether physically or mentally. Includes diseases, injuries, disabilities, disorders, syndromes, etc.
 * @see https://schema.org/MedicalCondition
 */
export interface MedicalCondition extends MedicalConditionProps {
  "@type": "MedicalCondition";
}

export type MedicalConditionType = MedicalCondition;
