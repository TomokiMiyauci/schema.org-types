import { Taxon } from "../taxon.ts";
import { Gene } from "./gene.ts";
import { GrantType } from "../intangibles/grants/grant.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { Text, URL } from "../../data_types.ts";
import { PropertyValueType } from "../intangibles/structured_values/property_values/property_value.ts";
import { MedicalConditionType } from "../medical_entities/medical_conditions/medical_condition.ts";
import { ThingProps } from "../thing.ts";

export interface BioChemEntityProps extends ThingProps {
  /** Disease associated to this BioChemEntity. Such disease can be a MedicalCondition or a URL. If you want to add an evidence supporting the association, please use PropertyValue.
   * @see https://schema.org/associatedDisease
   * @deprecated
   */
  associatedDisease: MedicalConditionType | PropertyValueType | URL;

  /** A BioChemEntity that is known to interact with this item.
   * @see https://schema.org/bioChemInteraction
   * @deprecated
   */
  bioChemInteraction: BioChemEntityType;

  /** A similar BioChemEntity, e.g., obtained by fingerprint similarity algorithms.
   * @see https://schema.org/bioChemSimilarity
   * @deprecated
   */
  bioChemSimilarity: BioChemEntityType;

  /** A role played by the BioChemEntity within a biological context.
   * @see https://schema.org/biologicalRole
   * @deprecated
   */
  biologicalRole: DefinedTermType;

  /** A {@link Grant} that directly or indirectly provide funding or sponsorship for this item. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/funding
   * @deprecated
   */
  funding: GrantType;

  /** Indicates a BioChemEntity that (in some sense) has this BioChemEntity as a part.
   * @see https://schema.org/hasBioChemEntityPart
   * @deprecated
   */
  hasBioChemEntityPart: BioChemEntityType;

  /** Molecular function performed by this BioChemEntity; please use PropertyValue if you want to include any evidence.
   * @see https://schema.org/hasMolecularFunction
   * @deprecated
   */
  hasMolecularFunction: DefinedTermType | PropertyValueType | URL;

  /** A common representation such as a protein sequence or chemical structure for this entity. For images use schema.org/image.
   * @see https://schema.org/hasRepresentation
   * @deprecated
   */
  hasRepresentation: PropertyValueType | Text | URL;

  /** Another BioChemEntity encoding by this one.
   * @see https://schema.org/isEncodedByBioChemEntity
   * @deprecated
   */
  isEncodedByBioChemEntity: Gene;

  /** Biological process this BioChemEntity is involved in; please use PropertyValue if you want to include any evidence.
   * @see https://schema.org/isInvolvedInBiologicalProcess
   * @deprecated
   */
  isInvolvedInBiologicalProcess: DefinedTermType | PropertyValueType | URL;

  /** Subcellular location where this BioChemEntity is located; please use PropertyValue if you want to include any evidence.
   * @see https://schema.org/isLocatedInSubcellularLocation
   * @deprecated
   */
  isLocatedInSubcellularLocation: DefinedTermType | PropertyValueType | URL;

  /** Indicates a BioChemEntity that is (in some sense) a part of this BioChemEntity.
   * @see https://schema.org/isPartOfBioChemEntity
   * @deprecated
   */
  isPartOfBioChemEntity: BioChemEntityType;

  /** The taxonomic grouping of the organism that expresses, encodes, or in someway related to the BioChemEntity.
   * @see https://schema.org/taxonomicRange
   * @deprecated
   */
  taxonomicRange: DefinedTermType | Taxon | Text | URL;
}

/** Any biological, chemical, or biochemical thing. For example: a protein; a gene; a chemical; a synthetic chemical.
 * @see https://schema.org/BioChemEntity
 * @deprecated
 */
export interface BioChemEntity extends BioChemEntityProps {
  "@type": "BioChemEntity";
}

export type BioChemEntityType = BioChemEntity;
