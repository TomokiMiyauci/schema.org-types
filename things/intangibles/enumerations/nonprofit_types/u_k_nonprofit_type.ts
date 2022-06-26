/** CharitableIncorporatedOrganization: Non-profit type referring to a Charitable Incorporated Organization (UK).
 * @see https://schema.org/CharitableIncorporatedOrganization
 * @deprecated
 */
export type CharitableIncorporatedOrganization =
  "https://schema.org/CharitableIncorporatedOrganization";

/** Non-profit type referring to a charitable company that is limited by guarantee (UK).
 * @see https://schema.org/LimitedByGuaranteeCharity
 * @deprecated
 */
export type LimitedByGuaranteeCharity =
  "https://schema.org/LimitedByGuaranteeCharity";

/** Non-profit type referring to a UK trust.
 * @see https://schema.org/UKTrust
 * @deprecated
 */
export type UKTrust = "https://schema.org/UKTrust";

/** Non-profit type referring to a charitable company that is not incorporated (UK).
 * @see https://schema.org/UnincorporatedAssociationCharity
 * @deprecated
 */
export type UnincorporatedAssociationCharity =
  "https://schema.org/UnincorporatedAssociationCharity";

/** Non-profit organization type originating from the United Kingdom.
 * @see https://schema.org/UKNonprofitType
 * @deprecated
 */
export type UKNonprofitType =
  | CharitableIncorporatedOrganization
  | LimitedByGuaranteeCharity
  | UKTrust
  | UnincorporatedAssociationCharity;
