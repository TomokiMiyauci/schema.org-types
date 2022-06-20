import { MusicPlaylistProps } from "./music_playlist.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";
import { Text } from "../../../data_types.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { PersonType } from "../../persons/person.ts";
import { Duration } from "../../intangibles/quantities/duration.ts";
import { MusicReleaseFormatType } from "../../intangibles/enumerations/music_release_format_type.ts";
import { MusicAlbum } from "./music_album.ts";

export interface MusicReleaseProps
  extends MusicPlaylistProps, CreativeWorkProps, ThingProps {
  /** The catalog number for the release.
   * @see https://schema.org/catalogNumber
   */
  catalogNumber: Text;

  /** The group the release is credited to if different than the byArtist. For example, Red and Blue is credited to "Stefani Germanotta Band", but by Lady Gaga.
   * @see https://schema.org/creditedTo
   */
  creditedTo: OrganizationType | PersonType;

  /** The duration of the item (movie, audio recording, event, etc.) in {@link ISO 8601 date format}.
   * @see https://schema.org/duration
   */
  duration: Duration;

  /** Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
   * @see https://schema.org/musicReleaseFormat
   */
  musicReleaseFormat: MusicReleaseFormatType;

  /** The label that issued the release.
   * @see https://schema.org/recordLabel
   */
  recordLabel: OrganizationType;

  /** The album this is a release of.
   * @see https://schema.org/releaseOf
   */
  releaseOf: MusicAlbum;
}

/** A MusicRelease is a specific release of a music album.
 * @see https://schema.org/MusicRelease
 */
export interface MusicRelease extends MusicReleaseProps {
  "@type": "MusicRelease";
}
