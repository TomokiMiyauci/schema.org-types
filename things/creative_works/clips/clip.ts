import { CreativeWorkSeriesType } from "../creative_work_series/creative_work_series.ts";
import { CreativeWorkSeasonType } from "../creative_work_seasons/creative_work_season.ts";
import { EpisodeType } from "../episodes/episode.ts";
import { MusicGroup } from "../../organizations/performing_groups/music_group.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";
import { PersonType } from "../../persons/person.ts";
import { Integer, Number, Text } from "../../../data_types.ts";
import { HyperTocEntry } from "../hyper_toc_entry.ts";

export interface ClipProps extends CreativeWorkProps, ThingProps {
  /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor: PersonType;

  /** Position of the clip within an ordered group of clips.
   * @see https://schema.org/clipNumber
   */
  clipNumber: Integer | Text;

  /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director: PersonType;

  /** The end time of the clip expressed as the number of seconds from the beginning of the work.
   * @see https://schema.org/endOffset
   */
  endOffset: HyperTocEntry;

  /** The composer of the soundtrack.
   * @see https://schema.org/musicBy
   */
  musicBy: MusicGroup | PersonType;

  /** The episode to which this clip belongs.
   * @see https://schema.org/partOfEpisode
   */
  partOfEpisode: EpisodeType;

  /** The season to which this episode belongs.
   * @see https://schema.org/partOfSeason
   */
  partOfSeason: CreativeWorkSeasonType;

  /** The series to which this episode or season belongs.
   * @see https://schema.org/partOfSeries
   */
  partOfSeries: CreativeWorkSeriesType;

  /** The start time of the clip expressed as the number of seconds from the beginning of the work.
   * @see https://schema.org/startOffset
   */
  startOffset: HyperTocEntry | Number;
}

/** A short TV or radio program or a segment/part of a program.
 * @see https://schema.org/Clip
 */
export interface Clip extends ClipProps {
  "@type": "Clip";
}

export type ClipType = Clip;
