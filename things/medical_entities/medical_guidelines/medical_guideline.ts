import { MedicalEntityType } from "../medical_entity.ts";
import { Date, Text } from "../../../data_types.ts";
import { MedicalEvidenceLevel } from "../../intangibles/enumerations/medical_enumerations/medical_evidence_level.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface MedicalGuidelineProps extends MedicalEntityProps, ThingProps {
  /** Strength of evidence of the data used to formulate the guideline (enumerated).
   * @see https://schema.org/evidenceLevel
   */
  evidenceLevel: MedicalEvidenceLevel;

  /** Source of the data used to formulate the guidance, e.g. RCT, consensus opinion, etc.
   * @see https://schema.org/evidenceOrigin
   */
  evidenceOrigin: Text;

  /** Date on which this guideline's recommendation was made.
   * @see https://schema.org/guidelineDate
   */
  guidelineDate: Date;

  /** The medical conditions, treatments, etc. that are the subject of the guideline.
   * @see https://schema.org/guidelineSubject
   */
  guidelineSubject: MedicalEntityType;
}

/** Any recommendation made by a standard society (e.g. ACC/AHA) or consensus statement that denotes how to diagnose and treat a particular condition. Note: this type should be used to tag the actual guideline recommendation; if the guideline recommendation occurs in a larger scholarly article, use MedicalScholarlyArticle to tag the overall article, not this type. Note also: the organization making the recommendation should be captured in the recognizingAuthority base property of MedicalEntity.
 * @see https://schema.org/MedicalGuideline
 */
export interface MedicalGuideline extends MedicalGuidelineProps {
  "@type": "MedicalGuideline";
}

export type MedicalGuidelineType = MedicalGuideline;
