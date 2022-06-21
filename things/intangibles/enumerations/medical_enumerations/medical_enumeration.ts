import { DrugCostCategory } from "./drug_cost_category.ts";
import { DrugPregnancyCategory } from "./drug_pregnancy_category.ts";
import { DrugPrescriptionStatus } from "./drug_prescription_status.ts";
import { InfectiousAgentClass } from "./infectious_agent_class.ts";
import { MedicalAudienceType } from "./medical_audience_type.ts";
import { MedicalDevicePurpose } from "./medical_device_purpose.ts";
import { MedicalEvidenceLevel } from "./medical_evidence_level.ts";
import { MedicalImagingTechnique } from "./medical_imaging_technique.ts";
import { MedicalObservationalStudyDesign } from "./medical_observational_study_design.ts";
import { MedicalProcedureType } from "./medical_procedure_type.ts";
import { MedicalSpecialty } from "./medical_specialty.ts";
import { MedicalStudyStatus } from "./medical_study_status.ts";
import { MedicalTrialDesign } from "./medical_trial_design.ts";
import { MedicineSystem } from "./medicine_system.ts";
import { PhysicalExam } from "../../../medical_entities/medical_procedures/physical_exam.ts";

/** Enumerations related to health and the practice of medicine: A concept that is used to attribute a quality to another concept, as a qualifier, a collection of items or a listing of all of the elements of a set in medicine practice.
 * @see https://schema.org/MedicalEnumeration
 */
export type MedicalEnumeration =
  | DrugCostCategory
  | DrugPregnancyCategory
  | DrugPrescriptionStatus
  | InfectiousAgentClass
  | MedicalAudienceType
  | MedicalDevicePurpose
  | MedicalEvidenceLevel
  | MedicalImagingTechnique
  | MedicalObservationalStudyDesign
  | MedicalProcedureType
  | MedicalSpecialty
  | MedicalStudyStatus
  | MedicalTrialDesign
  | MedicineSystem
  | PhysicalExam;
