import { NLNonprofitType } from "./n_l_nonprofit_type.ts";
import { UKNonprofitType } from "./u_k_nonprofit_type.ts";
import { USNonprofitType } from "./u_s_nonprofit_type.ts";

/** NonprofitType enumerates several kinds of official non-profit types of which a non-profit organization can be.
 * @see https://schema.org/NonprofitType
 * @deprecated
 */
export type NonprofitType = NLNonprofitType | UKNonprofitType | USNonprofitType;
