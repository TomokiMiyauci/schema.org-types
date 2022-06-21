import { MedicalTherapyType } from "../medical_procedures/therapeutic_procedures/medical_therapies/medical_therapy.ts";
import { MedicalConditionType } from "../medical_conditions/medical_condition.ts";
import { AnatomicalSystem } from "../anatomical_system.ts";
import { ImageObjectType } from "../../creative_works/media_objects/image_objects/image_object.ts";
import { Text } from "../../../data_types.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface AnatomicalStructureProps
  extends MedicalEntityProps, ThingProps {
  /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
   * @see https://schema.org/associatedPathophysiology
   */
  associatedPathophysiology: Text;

  /** Location in the body of the anatomical structure.
   * @see https://schema.org/bodyLocation
   */
  bodyLocation: Text;

  /** Other anatomical structures to which this structure is connected.
   * @see https://schema.org/connectedTo
   */
  connectedTo: AnatomicalStructureType;

  /** An image containing a diagram that illustrates the structure and/or its component substructures and/or connections with other structures.
   * @see https://schema.org/diagram
   */
  diagram: ImageObjectType;

  /** The anatomical or organ system that this structure is part of.
   * @see https://schema.org/partOfSystem
   */
  partOfSystem: AnatomicalSystem;

  /** A medical condition associated with this anatomy.
   * @see https://schema.org/relatedCondition
   */
  relatedCondition: MedicalConditionType;

  /** A medical therapy related to this anatomy.
   * @see https://schema.org/relatedTherapy
   */
  relatedTherapy: MedicalTherapyType;

  /** Component (sub-)structure(s) that comprise this anatomical structure.
   * @see https://schema.org/subStructure
   */
  subStructure: AnatomicalStructureType;
}

/** Any part of the human body, typically a component of an anatomical system. Organs, tissues, and cells are all anatomical structures.
 * @see https://schema.org/AnatomicalStructure
 */
export interface AnatomicalStructure extends AnatomicalStructureProps {
  "@type": "AnatomicalStructure";
}

export type AnatomicalStructureType = AnatomicalStructure;
