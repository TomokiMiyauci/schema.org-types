import { DefinedTermType } from "./defined_terms/defined_term.ts";
import { CategoryCodeType } from "./defined_terms/category_codes/category_code.ts";
import { AdministrativeAreaType } from "../places/administrative_areas/administrative_area.ts";
import { OccupationalExperienceRequirements } from "./occupational_experience_requirements.ts";
import { Number, Text } from "../../data_types.ts";
import { MonetaryAmountDistribution } from "./structured_values/quantitative_value_distributions/monetary_amount_distribution.ts";
import { MonetaryAmount } from "./structured_values/monetary_amount.ts";
import { EducationalOccupationalCredential } from "../creative_works/educational_occupational_credential.ts";
import { ThingProps } from "../thing.ts";

export interface OccupationProps extends ThingProps {
  /** Educational background needed for the position or Occupation.
   * @see https://schema.org/educationRequirements
   * @deprecated
   */
  educationRequirements: EducationalOccupationalCredential;

  /** An estimated salary for a job posting or occupation, based on a variety of variables including, but not limited to industry, job title, and location. Estimated salaries are often computed by outside organizations rather than the hiring organization, who may not have committed to the estimated value.
   * @see https://schema.org/estimatedSalary
   */
  estimatedSalary: MonetaryAmount | MonetaryAmountDistribution | Number;

  /** Description of skills and experience needed for the position or Occupation.
   * @see https://schema.org/experienceRequirements
   */
  experienceRequirements: OccupationalExperienceRequirements | Text;

  /** The region/country for which this occupational description is appropriate. Note that educational requirements and qualifications can vary between jurisdictions.
   * @see https://schema.org/occupationLocation
   */
  occupationLocation: AdministrativeAreaType;

  /** A category describing the job, preferably using a term from a taxonomy such as {@link https://www.onetcenter.org/taxonomy.html BLS O*NET-SOC}, {@link https://www.ilo.org/public/english/bureau/stat/isco/isco08/ ISCO-08} or similar, with the property repeated for each applicable value. Ideally the taxonomy should be identified, and both the textual label and formal code for the category should be provided.
   * @remark for historical reasons, any textual label and formal code provided as a literal may be assumed to be from O*NET-SOC.
   * @see https://schema.org/occupationalCategory
   * @deprecated
   */
  occupationalCategory: CategoryCodeType | Text;

  /** Specific qualifications required for this role or Occupation.
   * @see https://schema.org/qualifications
   * @deprecated
   */
  qualifications: EducationalOccupationalCredential | Text;

  /** Responsibilities associated with this role or Occupation.
   * @see https://schema.org/responsibilities
   */
  responsibilities: Text;

  /** A statement of knowledge, skill, ability, task or any other assertion expressing a competency that is desired or required to fulfill this role or to work in this occupation.
   * @see https://schema.org/skills
   */
  skills: DefinedTermType | Text;
}

/** A profession, may involve prolonged training and/or a formal qualification.
 * @see https://schema.org/Occupation
 */
export interface Occupation extends OccupationProps {
  "@type": "Occupation";
}
