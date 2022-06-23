import { PropertyValueType } from "../../intangibles/structured_values/property_values/property_value.ts";
import { Text, URL } from "./../../../data_types.ts";
import { DataCatalog } from "./../data_catalog.ts";
import { DataDownload } from "../media_objects/data_download.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";

export interface DatasetProps extends CreativeWorkProps, ThingProps {
  /** A downloadable form of this dataset, at a specific location, in a specific format.
   * @see https://schema.org/distribution
   */
  distribution: DataDownload;

  /** A body of structured information describing some topic(s) of interest.
   * @see https://schema.org/Dataset
   */
  includedInDataCatalog: DataCatalog;

  /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
   * @see https://schema.org/issn
   */
  issn: Text;

  /** A technique or technology used in a {@link https://schema.org/Dataset Dataset} (or {@link https://schema.org/DataDownload DataDownload}, {@link https://schema.org/DataCatalog DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link https://schema.org/variableMeasured variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
   *
   * For example, if {@link https://schema.org/variableMeasured variableMeasured} is: molecule concentration, {@link measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
   *
   * If the {@link https://schema.org/variableMeasured variableMeasured} is "depression rating", the {@link measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   *
   * If there are several {@link https://schema.org/variableMeasured variableMeasured} properties recorded for some given data object, use a {@link https://schema.org/PropertyValue PropertyValue} for each {@link https://schema.org/variableMeasured variableMeasured} and attach the corresponding {@link measurementTechnique}.
   * @see https://schema.org/measurementTechnique
   */
  measurementTechnique: Text | URL;

  /** The variableMeasured property can indicate (repeated as necessary) the variables that are measured in some dataset, either described as text or as pairs of identifier and description using PropertyValue.
   * @see https://schema.org/variableMeasured
   * @deprecated
   */
  variableMeasured: PropertyValueType | Text;
}

/** A body of structured information describing some topic(s) of interest.
 * @see https://schema.org/Dataset
 */
export interface Dataset extends DatasetProps {
  "@type": "Dataset";
}

export type DatasetType = Dataset;
