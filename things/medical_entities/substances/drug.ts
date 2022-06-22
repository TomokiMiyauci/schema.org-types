import { DrugPrescriptionStatus } from "../../intangibles/enumerations/medical_enumerations/drug_prescription_status.ts";
import { DrugPregnancyCategory } from "../../intangibles/enumerations/medical_enumerations/drug_pregnancy_category.ts";
import { MaximumDoseSchedule } from "../medical_intangibles/dose_schedules/maximum_dose_schedule.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { MedicalEnumeration } from "../../intangibles/enumerations/medical_enumerations/medical_enumeration.ts";
import { DrugLegalStatus } from "../medical_intangibles/drug_legal_status.ts";
import { HealthInsurancePlan } from "../../intangibles/health_insurance_plan.ts";
import { DrugClass } from "../drug_class.ts";
import { DoseScheduleType } from "../medical_intangibles/dose_schedules/dose_schedule.ts";
import { DrugStrength } from "../medical_intangibles/drug_strength.ts";
import { MedicalEntityProps } from "../medical_entity.ts";
import { Boolean, Text, URL } from "../../../data_types.ts";
import { SubstanceProps } from "./substance.ts";
import { ThingProps } from "../../thing.ts";

export interface DrugProps
  extends SubstanceProps, MedicalEntityProps, ThingProps {
  /** An active ingredient, typically chemical compounds and/or biologic substances.
   * @see https://schema.org/activeIngredient
   */
  activeIngredient: Text;

  /** A route by which this drug may be administered, e.g. 'oral'.
   * @see https://schema.org/administrationRoute
   */
  administrationRoute: Text;

  /** Any precaution, guidance, contraindication, etc. related to consumption of alcohol while taking this drug.
   * @see https://schema.org/alcoholWarning
   */
  alcoholWarning: Text;

  /** An available dosage strength for the drug.
   * @see https://schema.org/availableStrength
   */
  availableStrength: DrugStrength;

  /** Any precaution, guidance, contraindication, etc. related to this drug's use by breastfeeding mothers.
   * @see https://schema.org/breastfeedingWarning
   */
  breastfeedingWarning: Text;

  /** Description of the absorption and elimination of drugs, including their concentration (pharmacokinetics, pK) and biological effects (pharmacodynamics, pD).
   * @see https://schema.org/clinicalPharmacology
   */
  clinicalPharmacology: Text;

  /** A dosage form in which this drug/supplement is available, e.g. 'tablet', 'suspension', 'injection'.
   * @see https://schema.org/dosageForm
   */
  dosageForm: Text;

  /** A dosing schedule for the drug for a given population, either observed, recommended, or maximum dose based on the type used.
   * @see https://schema.org/doseSchedule
   */
  doseSchedule: DoseScheduleType;
  /** The class of drug this belongs to (e.g., statins).
   * @see https://schema.org/drugClass
   */
  drugClass: DrugClass;

  /** The unit in which the drug is measured, e.g. '5 mg tablet'.
   * @see https://schema.org/drugUnit
   */
  drugUnit: Text;
  /** Any precaution, guidance, contraindication, etc. related to consumption of specific foods while taking this drug.
   * @see https://schema.org/foodWarning
   */
  foodWarning: Text;
  /** The insurance plans that cover this drug.
   * @see https://schema.org/includedInHealthInsurancePlan
   * @deprecated
   */
  includedInHealthInsurancePlan: HealthInsurancePlan;
  /** Another drug that is known to interact with this drug in a way that impacts the effect of this drug or causes a risk to the patient. Note: disease interactions are typically captured as contraindications.
   * @see https://schema.org/interactingDrug
   */
  interactingDrug: Drug;
  /** True if the drug is available in a generic form (regardless of name).
   * @see https://schema.org/isAvailableGenerically
   */
  isAvailableGenerically: Boolean;
  /** True if this item's name is a proprietary/brand name (vs. generic name).
   * @see https://schema.org/isProprietary
   */
  isProprietary: Boolean;
  /** Link to the drug's label details.
   * @see https://schema.org/labelDetails
   */
  labelDetails: URL;
  /** The drug or supplement's legal status, including any controlled substance schedules that apply.
   * @see https://schema.org/legalStatus
   */
  legalStatus: DrugLegalStatus | MedicalEnumeration | Text;
  /** The manufacturer of the product.
   * @see https://schema.org/manufacturer
   */
  manufacturer: OrganizationType;
  /** Recommended intake of this supplement for a given population as defined by a specific recommending authority.
   * @see https://schema.org/maximumIntake
   */
  maximumIntake: MaximumDoseSchedule;
  /** The specific biochemical interaction through which this drug or supplement produces its pharmacological effect.
   * @see https://schema.org/mechanismOfAction
   */
  mechanismOfAction: Text;

  /** The generic name of this drug or supplement.
   * @see https://schema.org/nonProprietaryName
   */
  nonProprietaryName: Text;

  /** Any information related to overdose on a drug, including signs or symptoms, treatments, contact information for emergency response.
   * @see https://schema.org/overdosage
   */

  overdosage: Text;
  /** Pregnancy category of this drug.
   * @see https://schema.org/pregnancyCategory
   */
  pregnancyCategory: DrugPregnancyCategory;

  /** Any precaution, guidance, contraindication, etc. related to this drug's use during pregnancy.
   * @see https://schema.org/pregnancyWarning
   */
  pregnancyWarning: Text;
  /** Link to prescribing information for the drug.
   * @see https://schema.org/prescribingInfo
   */
  prescribingInfo: URL;
  /** Indicates the status of drug prescription eg. local catalogs classifications or whether the drug is available by prescription or over-the-counter, etc.
   * @see https://schema.org/prescriptionStatus
   */
  prescriptionStatus: DrugPrescriptionStatus | Text;
  /** Proprietary name given to the diet plan, typically by its originator or creator.
   * @see https://schema.org/proprietaryName
   */
  proprietaryName: Text;
  /** Any other drug related to this one, for example commonly-prescribed alternatives.
   * @see https://schema.org/relatedDrug
   */
  relatedDrug: Drug;
  /** The RxCUI drug identifier from RXNORM.
   * @see https://schema.org/rxcui
   * @deprecated
   */
  rxcui: Text;
  /** Any FDA or other warnings about the drug (text or URL).
   * @see https://schema.org/warning
   */
  warning: Text | URL;
}

/** A chemical or biologic substance, used as a medical therapy, that has a physiological effect on an organism. Here the term drug is used interchangeably with the term medicine although clinical knowledge make a clear difference between them.
 * @see https://schema.org/Drug
 */
export interface Drug extends DrugProps {
  "@type": "Drug";
}
