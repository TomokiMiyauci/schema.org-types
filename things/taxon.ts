import { PropertyValueType } from "./intangibles/structured_values/property_values/property_value.ts";
import { DefinedTermType } from "./intangibles/defined_terms/defined_term.ts";
import { Text, URL } from "../data_types.ts";
import { ThingProps } from "./thing.ts";

export interface TaxonProps extends ThingProps {
  /** Closest child taxa of the taxon in question.
   * @see https://schema.org/childTaxon
   * @deprecated
   */
  childTaxon: Taxon | Text | URL;

  /** A Defined Term contained in this term set.
   * @see https://schema.org/hasDefinedTerm
   * @deprecated
   */
  hasDefinedTerm: DefinedTermType;

  /** Closest parent taxon of the taxon in question.
   * @see https://schema.org/parentTaxon
   * @deprecated
   */
  parentTaxon: Taxon | Text | URL;

  /** The taxonomic rank of this taxon given preferably as a URI from a controlled vocabulary – (typically the ranks from TDWG TaxonRank ontology or equivalent Wikidata URIs).
   * @see https://schema.org/taxonRank
   */
  taxonRank: PropertyValueType | Text | URL;
}

/** A set of organisms asserted to represent a natural cohesive biological unit.
 * @see https://schema.org/Taxon
 * @deprecated
 */
export interface Taxon extends TaxonProps {
  "@type": "Taxon";
}
