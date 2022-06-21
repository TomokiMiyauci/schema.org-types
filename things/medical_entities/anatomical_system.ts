import { MedicalTherapyType } from "./medical_procedures/therapeutic_procedures/medical_therapies/medical_therapy.ts";
import { MedicalConditionType } from "./medical_conditions/medical_condition.ts";
import { AnatomicalStructureType } from "./anatomical_structures/anatomical_structure.ts";
import { Text } from "../../data_types.ts";
import { MedicalEntityProps } from "./medical_entity.ts";
import { ThingProps } from "../thing.ts";

export interface AnatomicalSystemProps extends MedicalEntityProps, ThingProps {
  /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
   * @see https://schema.org/associatedPathophysiology
   */
  associatedPathophysiology: Text;

  /** Specifying something physically contained by something else. Typically used here for the underlying anatomical structures, such as organs, that comprise the anatomical system.
   * @see https://schema.org/comprisedOf
   */
  comprisedOf: AnatomicalStructureType | AnatomicalSystem;

  /** A medical condition associated with this anatomy.
   * @see https://schema.org/relatedCondition
   */
  relatedCondition: MedicalConditionType;

  /** Related anatomical structure(s) that are not part of the system but relate or connect to it, such as vascular bundles associated with an organ system.
   * @see https://schema.org/relatedStructure
   */
  relatedStructure: AnatomicalStructureType;

  /** A medical therapy related to this anatomy.
   * @see https://schema.org/relatedTherapy
   */
  relatedTherapy: MedicalTherapyType;
}

/** An anatomical system is a group of anatomical structures that work together to perform a certain task. Anatomical systems, such as organ systems, are one organizing principle of anatomy, and can includes circulatory, digestive, endocrine, integumentary, immune, lymphatic, muscular, nervous, reproductive, respiratory, skeletal, urinary, vestibular, and other systems.
 * @see https://schema.org/AnatomicalSystem
 */
export interface AnatomicalSystem extends AnatomicalSystemProps {
  "@type": "AnatomicalSystem";
}
