/** Pathogenic bacteria that cause bacterial infection.
 * @see https://schema.org/Bacteria
 */
export type Bacteria = "https://schema.org/Bacteria";

/** Pathogenic fungus.
 * @see https://schema.org/Fungus
 */
export type Fungus = "https://schema.org/Fungus";

/** Multicellular parasite that causes an infection.
 * @see https://schema.org/MulticellularParasite
 */
export type MulticellularParasite = "https://schema.org/MulticellularParasite";

/** A prion is an infectious agent composed of protein in a misfolded form.
 * @see https://schema.org/Prion
 */
export type Prion = "https://schema.org/Prion";

/** Single-celled organism that causes an infection.
 * @see https://schema.org/Protozoa
 */
export type Protozoa = "https://schema.org/Protozoa";

/** Pathogenic virus that causes viral infection.
 * @see https://schema.org/Virus
 */
export type Virus = "https://schema.org/Virus";

/** Classes of agents or pathogens that transmit infectious diseases. Enumerated type.
 * @see https://schema.org/InfectiousAgentClass
 */
export type InfectiousAgentClass =
  | Bacteria
  | Fungus
  | MulticellularParasite
  | Prion
  | Protozoa
  | Virus;
