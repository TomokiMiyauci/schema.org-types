import { VideoObjectType } from "../media_objects/video_objects/video_object.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { CreativeWorkSeriesType } from "../creative_work_series/creative_work_series.ts";
import { Integer, Text } from "../../../data_types.ts";
import { EpisodeType } from "../episodes/episode.ts";
import { Date, DateTime } from "../../../data_types.ts";
import { PersonType } from "../../persons/person.ts";
import { ThingProps } from "../../thing.ts";
import { CreativeWorkProps } from "../creative_work.ts";

export interface CreativeWorkSeasonProps extends CreativeWorkProps, ThingProps {
  /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor: PersonType;

  /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director: PersonType;

  /** The end date and time of the item (in {@link ISO 8601 date format}).
   * @see https://schema.org/endDate
   */
  endDate: Date | DateTime;

  /** An episode of a tv, radio or game media within a series or season.
   * @see https://schema.org/episode
   */
  episode: EpisodeType;

  /** The number of episodes in this season or series.
   * @see https://schema.org/numberOfEpisodes
   */
  numberOfEpisodes: Integer;

  /** The series to which this episode or season belongs.
   * @see https://schema.org/partOfSeries
   */
  partOfSeries: CreativeWorkSeriesType;

  /** The production company or studio responsible for the item e.g. series, video game, episode etc.
   * @see https://schema.org/productionCompany
   */
  productionCompany: OrganizationType;

  /** Position of the season within an ordered group of seasons.
   * @see https://schema.org/seasonNumber
   */
  seasonNumber: Integer | Text;

  /** The start date and time of the item (in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}).
   * @see https://schema.org/startDate
   */
  startDate: Date | DateTime;

  /** The trailer of a movie or tv/radio series, season, episode, etc.
   * @see https://schema.org/trailer
   */
  trailer: VideoObjectType;
}

/** A media season e.g. tv, radio, video game etc.
 * @see https://schema.org/CreativeWorkSeason
 */
export interface CreativeWorkSeason extends CreativeWorkSeasonProps {
  "@type": "CreativeWorkSeason";
}

export type CreativeWorkSeasonType = CreativeWorkSeason;
