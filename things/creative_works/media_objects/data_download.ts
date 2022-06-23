import { Text, URL } from "./../../../data_types.ts";
import { CreativeWorkProps } from "./../creative_work.ts";
import { MediaObjectProps } from "./media_object.ts";
import { ThingProps } from "../../thing.ts";

export interface DataDownloadProps
  extends MediaObjectProps, CreativeWorkProps, ThingProps {
  /** A technique or technology used in a {@link Dataset} (or {@link DataDownload}, {@link DataCatalog}), corresponding to the method used for measuring the corresponding variable(s) (described using {@link variableMeasured}). This is oriented towards scientific and scholarly dataset publication but may have broader applicability; it is not intended as a full representation of measurement, but rather as a high level summary for dataset discovery.
   *
   * For example, if {@link variableMeasured} is: molecule concentration, {@link measurementTechnique} could be: "mass spectrometry" or "nmr spectroscopy" or "colorimetry" or "immunofluorescence".
   *
   * If the {@link variableMeasured} is "depression rating", the {@link measurementTechnique} could be "Zung Scale" or "HAM-D" or "Beck Depression Inventory".
   *
   * If there are several {@link variableMeasured} properties recorded for some given data object, use a {@link PropertyValue} for each {@link variableMeasured} and attach the corresponding {@link measurementTechnique}.
   * @see https://schema.org/measurementTechnique
   */
  measurementTechnique: Text | URL;
}

/** A dataset in downloadable form.
 * @see https://schema.org/DataDownload
 */
export interface DataDownload extends DataDownloadProps {
  "@type": "DataDownload";
}
