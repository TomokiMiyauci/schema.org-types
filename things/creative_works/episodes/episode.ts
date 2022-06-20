import { Integer, Text } from "../../../data_types.ts";
import { ThingProps } from "../../thing.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { PersonType } from "../../persons/person.ts";
import { Duration } from "../../intangibles/quantities/duration.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { CreativeWorkSeriesType } from "../creative_work_series/creative_work_series.ts";
import { CreativeWorkSeasonType } from "../creative_work_seasons/creative_work_season.ts";
import { VideoObjectType } from "../media_objects/video_objects/video_object.ts";
import { MusicGroup } from "../../organizations/performing_groups/music_group.ts";

export interface EpisodeProps extends CreativeWorkProps, ThingProps {
  /** An actor, e.g. in tv, radio, movie, video games etc., or in an event. Actors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/actor
   */
  actor: PersonType;

  /** A director of e.g. tv, radio, movie, video gaming etc. content, or of an event. Directors can be associated with individual items or with a series, episode, clip.
   * @see https://schema.org/director
   */
  director: PersonType;

  /** The duration of the item (movie, audio recording, event, etc.) in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}.
   * @see https://schema.org/duration
   */
  duration: Duration;

  /** Position of the episode within an ordered group of episodes.
   * @see https://schema.org/episodeNumber
   */
  episodeNumber: Integer | Text;

  /** The composer of the soundtrack.
   * @see https://schema.org/musicBy
   */
  musicBy: MusicGroup | PersonType;

  /** The season to which this episode belongs.
   * @see https://schema.org/partOfSeason
   */
  partOfSeason: CreativeWorkSeasonType;

  /** The series to which this episode or season belongs.
   * @see https://schema.org/partOfSeries
   */
  partOfSeries: CreativeWorkSeriesType;

  /** The production company or studio responsible for the item e.g. series, video game, episode etc.
   * @see https://schema.org/productionCompany
   */
  productionCompany: OrganizationType;

  /** The trailer of a movie or tv/radio series, season, episode, etc.
   * @see https://schema.org/trailer
   */
  trailer: VideoObjectType;
}

/** A media episode (e.g. TV, radio, video game) which can be part of a series or season.
 * @see https://schema.org/Episode
 */
export interface Episode extends EpisodeProps {
  "@type": "Episode";
}

export type EpisodeType = Episode;
