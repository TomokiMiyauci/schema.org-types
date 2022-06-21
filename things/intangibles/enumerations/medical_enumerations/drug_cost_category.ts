/** The drug's cost represents the maximum reimbursement paid by an insurer for the drug.
 * @see https://schema.org/ReimbursementCap
 */
export type ReimbursementCap = "https://schema.org/ReimbursementCap";

/** The drug's cost represents the retail cost of the drug.
 * @see https://schema.org/Retail
 */
export type Retail = "https://schema.org/Retail";

/** The drug's cost represents the wholesale acquisition cost of the drug.
 * @see https://schema.org/Wholesale
 */
export type Wholesale = "https://schema.org/Wholesale";

/** Enumerated categories of medical drug costs.
 * @see https://schema.org/DrugCostCategory
 */
export type DrugCostCategory = ReimbursementCap | Retail | Wholesale;
