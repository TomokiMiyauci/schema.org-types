/** Item contains alcohol or promotes alcohol consumption.
 * @see https://schema.org/AlcoholConsideration
 * @deprecated
 */
export type AlcoholConsideration = "https://schema.org/AlcoholConsideration";

/** The item is dangerous and requires careful handling and/or special training of the user. See also the {@link https://unece.org/DAM/trans/danger/publi/unrec/rev17/English/02EREv17_Part2.pdf UN Model Classification} defining the 9 classes of dangerous goods such as explosives, gases, flammables, and more.
 * @see https://schema.org/DangerousGoodConsideration
 * @deprecated
 */
export type DangerousGoodConsideration =
  "https://schema.org/DangerousGoodConsideration";

/** Item is a pharmaceutical (e.g., a prescription or OTC drug) or a restricted medical device.
 * @see https://schema.org/HealthcareConsideration
 * @deprecated
 */
export type HealthcareConsideration =
  "https://schema.org/HealthcareConsideration";

/** Item is a narcotic as defined by the {@link https://www.incb.org/incb/en/narcotic-drugs/Yellowlist/yellow-list.html 1961 UN convention}, for example marijuna or heroin.
 * @see https://schema.org/NarcoticConsideration
 * @deprecated
 */
export type NarcoticConsideration = "https://schema.org/NarcoticConsideration";

/** A general code for cases where relevance to children is reduced, e.g. adult education, mortgages, retirement-related products, etc.
 * @see https://schema.org/ReducedRelevanceForChildrenConsideration
 * @deprecated
 */
export type ReducedRelevanceForChildrenConsideration =
  "https://schema.org/ReducedRelevanceForChildrenConsideration";

/** The item contains sexually oriented content such as nudity, suggestive or explicit material, or related online services, or is intended to enhance sexual activity. Examples: Erotic videos or magazine, sexual enhancement devices, sex toys.
 * @see https://schema.org/SexualContentConsideration
 * @deprecated
 */
export type SexualContentConsideration =
  "https://schema.org/SexualContentConsideration";

/** Item contains tobacco and/or nicotine, for example cigars, cigarettes, chewing tobacco, e-cigarettes, or hookahs.
 * @see https://schema.org/TobaccoNicotineConsideration
 * @deprecated
 */
export type TobaccoNicotineConsideration =
  "https://schema.org/TobaccoNicotineConsideration";

/** The item is suitable only for adults, without indicating why. Due to widespread use of "adult" as a euphemism for "sexual", many such items are likely suited also for the SexualContentConsideration code.
 * @see https://schema.org/UnclassifiedAdultConsideration
 * @deprecated
 */
export type UnclassifiedAdultConsideration =
  "https://schema.org/UnclassifiedAdultConsideration";

/** Item shows or promotes violence.
 * @see https://schema.org/ViolenceConsideration
 * @deprecated
 */
export type ViolenceConsideration = "https://schema.org/ViolenceConsideration";

/** The item is intended to induce bodily harm, for example guns, mace, combat knives, brass knuckles, nail or other bombs, and spears.
 * @see https://schema.org/WeaponConsideration
 * @deprecated
 */
export type WeaponConsideration = "https://schema.org/WeaponConsideration";

/** Enumeration of considerations that make a product relevant or potentially restricted for adults only.
 * @see https://schema.org/AdultOrientedEnumeration
 * @deprecated
 */
export type AdultOrientedEnumeration =
  | AlcoholConsideration
  | DangerousGoodConsideration
  | HealthcareConsideration
  | NarcoticConsideration
  | ReducedRelevanceForChildrenConsideration
  | SexualContentConsideration
  | TobaccoNicotineConsideration
  | UnclassifiedAdultConsideration
  | ViolenceConsideration
  | WeaponConsideration;
