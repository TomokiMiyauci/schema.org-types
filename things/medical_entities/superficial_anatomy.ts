import { MedicalTherapyType } from "./medical_procedures/therapeutic_procedures/medical_therapies/medical_therapy.ts";
import { MedicalConditionType } from "./medical_conditions/medical_condition.ts";
import { AnatomicalSystem } from "./anatomical_system.ts";
import { AnatomicalStructureType } from "./anatomical_structures/anatomical_structure.ts";
import { Text } from "../../data_types.ts";
import { MedicalEntityProps } from "./medical_entity.ts";
import { ThingProps } from "../thing.ts";

export interface SuperficialAnatomyProps
  extends MedicalEntityProps, ThingProps {
  /** If applicable, a description of the pathophysiology associated with the anatomical system, including potential abnormal changes in the mechanical, physical, and biochemical functions of the system.
   * @see https://schema.org/associatedPathophysiology
   */
  associatedPathophysiology: Text;

  /** Anatomical systems or structures that relate to the superficial anatomy.
   * @see https://schema.org/relatedAnatomy
   */
  relatedAnatomy: AnatomicalStructureType | AnatomicalSystem;

  /** A medical condition associated with this anatomy.
   * @see https://schema.org/relatedCondition
   */
  relatedCondition: MedicalConditionType;

  /** A medical therapy related to this anatomy.
   * @see https://schema.org/relatedTherapy
   */
  relatedTherapy: MedicalTherapyType;

  /** The significance associated with the superficial anatomy; as an example, how characteristics of the superficial anatomy can suggest underlying medical conditions or courses of treatment.
   * @see https://schema.org/significance
   */
  significance: Text;
}

/** Anatomical features that can be observed by sight (without dissection), including the form and proportions of the human body as well as surface landmarks that correspond to deeper subcutaneous structures. Superficial anatomy plays an important role in sports medicine, phlebotomy, and other medical specialties as underlying anatomical structures can be identified through surface palpation. For example, during back surgery, superficial anatomy can be used to palpate and count vertebrae to find the site of incision. Or in phlebotomy, superficial anatomy can be used to locate an underlying vein; for example, the median cubital vein can be located by palpating the borders of the cubital fossa (such as the epicondyles of the humerus) and then looking for the superficial signs of the vein, such as size, prominence, ability to refill after depression, and feel of surrounding tissue support. As another example, in a subluxation (dislocation) of the glenohumeral joint, the bony structure becomes pronounced with the deltoid muscle failing to cover the glenohumeral joint allowing the edges of the scapula to be superficially visible. Here, the superficial anatomy is the visible edges of the scapula, implying the underlying dislocation of the joint (the related anatomical structure).
 * @see https://schema.org/SuperficialAnatomy
 */
export interface SuperficialAnatomy extends SuperficialAnatomyProps {
  "@type": "SuperficialAnatomy";
}
