import { Text } from "../../data_types.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { AnatomicalSystem } from "../medical_entities/anatomical_system.ts";
import { AnatomicalStructureType } from "../medical_entities/anatomical_structures/anatomical_structure.ts";
import { BioChemEntityProps, BioChemEntityType } from "./bio_chem_entity.ts";
import { ThingProps } from "../thing.ts";

export interface GeneProps extends BioChemEntityProps, ThingProps {
  /** Another gene which is a variation of this one.
   * @see https://schema.org/alternativeOf
   * @deprecated
   */
  alternativeOf: Gene;

  /** Another BioChemEntity encoded by this one.
   * @see https://schema.org/encodesBioChemEntity
   * @deprecated
   */
  encodesBioChemEntity: BioChemEntityType;

  /** Tissue, organ, biological sample, etc in which activity of this gene has been observed experimentally. For example brain, digestive system.
   * @see https://schema.org/expressedIn
   * @deprecated
   */
  expressedIn:
    | AnatomicalStructureType
    | AnatomicalSystem
    | BioChemEntityType
    | DefinedTermType;

  /** A symbolic representation of a BioChemEnity. For example, a nucleotide sequence of a Gene or an amino acid sequence of a Protein.
   * @see https://schema.org/hasBioPolymerSequence
   * @deprecated
   */
  hasBioPolymerSequence: Text;
}

/** A discrete unit of inheritance which affects one or more biological traits (Source: https://en.wikipedia.org/wiki/Gene). Examples include FOXP2 (Forkhead box protein P2), SCARNA21 (small Cajal body-specific RNA 21), A- (agouti genotype).
 * @see https://schema.org/Gene
 * @deprecated
 */
export interface Gene extends GeneProps {
  "@type": "Gene";
}
