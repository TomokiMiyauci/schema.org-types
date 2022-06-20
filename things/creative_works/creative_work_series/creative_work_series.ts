import { Date, DateTime, Text } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";
import { CreativeWorkProps } from "../creative_work.ts";

export interface CreativeWorkSeriesProps extends CreativeWorkProps, ThingProps {
  /** The end date and time of the item (in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}).
   * @see https://schema.org/endDate
   */
  endDate: Date | DateTime;

  /** The International Standard Serial Number (ISSN) that identifies this serial publication. You can repeat this property to identify different formats of, or the linking ISSN (ISSN-L) for, this serial publication.
   * @see https://schema.org/issn
   */
  issn: Text;

  /** The start date and time of the item (in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}).
   * @see https://schema.org/startDate
   */
  startDate: Date | DateTime;
}

/** A CreativeWorkSeries in schema.org is a group of related items, typically but not necessarily of the same kind. CreativeWorkSeries are usually organized into some order, often chronological. Unlike {@link ItemList} which is a general purpose data structure for lists of things, the emphasis with CreativeWorkSeries is on published materials (written e.g. books and periodicals, or media such as tv, radio and games).
 *
 * Specific subtypes are available for describing {@link TVSeries}, {@link RadioSeries}, {@link MovieSeries}, {@link BookSeries}, {@link Periodical} and {@link VideoGameSeries}. In each case, the {@link hasPart} / {@link isPartOf} properties can be used to relate the CreativeWorkSeries to its parts. The general CreativeWorkSeries type serves largely just to organize these more specific and practical subtypes.
 *
 * It is common for properties applicable to an item from the series to be usefully applied to the containing group. Schema.org attempts to anticipate some of these cases, but publishers should be free to apply properties of the series parts to the series as a whole wherever they seem appropriate.
 * @see https://schema.org/CreativeWorkSeries
 */
export interface CreativeWorkSeries extends CreativeWorkSeriesProps {
  "@type": "CreativeWorkSeries";
}

export type CreativeWorkSeriesType = CreativeWorkSeries;
