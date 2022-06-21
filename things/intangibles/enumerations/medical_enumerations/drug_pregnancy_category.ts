/** A designation by the US FDA signifying that adequate and well-controlled studies have failed to demonstrate a risk to the fetus in the first trimester of pregnancy (and there is no evidence of risk in later trimesters).
 * @see https://schema.org/FDAcategoryA
 */
export type FDAcategoryA = "https://schema.org/FDAcategoryA";

/** A designation by the US FDA signifying that animal reproduction studies have failed to demonstrate a risk to the fetus and there are no adequate and well-controlled studies in pregnant women.
 * @see https://schema.org/FDAcategoryB
 */
export type FDAcategoryB = "https://schema.org/FDAcategoryB";

/** A designation by the US FDA signifying that animal reproduction studies have shown an adverse effect on the fetus and there are no adequate and well-controlled studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks.
 * @see https://schema.org/FDAcategoryC
 */
export type FDAcategoryC = "https://schema.org/FDAcategoryC";

/** A designation by the US FDA signifying that there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience or studies in humans, but potential benefits may warrant use of the drug in pregnant women despite potential risks.
 * @see https://schema.org/FDAcategoryD
 */
export type FDAcategoryD = "https://schema.org/FDAcategoryD";

/** A designation by the US FDA signifying that studies in animals or humans have demonstrated fetal abnormalities and/or there is positive evidence of human fetal risk based on adverse reaction data from investigational or marketing experience, and the risks involved in use of the drug in pregnant women clearly outweigh potential benefits.
 * @see https://schema.org/FDAcategoryX
 */
export type FDAcategoryX = "https://schema.org/FDAcategoryX";

/** A designation that the drug in question has not been assigned a pregnancy category designation by the US FDA.
 * @see https://schema.org/FDAnotEvaluated
 */
export type FDAnotEvaluated = "https://schema.org/FDAnotEvaluated";

/** Categories that represent an assessment of the risk of fetal injury due to a drug or pharmaceutical used as directed by the mother during pregnancy.
 * @see https://schema.org/DrugPregnancyCategory
 */
export type DrugPregnancyCategory =
  | FDAcategoryA
  | FDAcategoryB
  | FDAcategoryC
  | FDAcategoryD
  | FDAcategoryX
  | FDAnotEvaluated;
