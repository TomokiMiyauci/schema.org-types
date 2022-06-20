import { MusicPlaylistProps } from "./music_playlist.ts";
import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";
import { MusicAlbumProductionType } from "../../intangibles/enumerations/music_album_production_type.ts";
import { MusicAlbumReleaseType } from "../../intangibles/enumerations/music_album_release_type.ts";
import { MusicRelease } from "./music_release.ts";
import { MusicGroup } from "../../organizations/performing_groups/music_group.ts";
import { PersonType } from "../../persons/person.ts";

export interface MusicAlbumProps
  extends MusicPlaylistProps, CreativeWorkProps, ThingProps {
  /** Classification of the album by it's type of content: soundtrack, live album, studio album, etc.
   * @see https://schema.org/albumProductionType
   */
  albumProductionType: MusicAlbumProductionType;

  /** A release of this album.
   * @see https://schema.org/albumRelease
   */
  albumRelease: MusicRelease;

  /** The kind of release which this album is: single, EP or album.
   * @see https://schema.org/albumReleaseType
   */
  albumReleaseType: MusicAlbumReleaseType;

  /** The artist that performed this album or recording.
   * @see https://schema.org/byArtist
   */
  byArtist: MusicGroup | PersonType;
}

/** A collection of music tracks.
 * @see https://schema.org/MusicAlbum
 */
export interface MusicAlbum extends MusicAlbumProps {
  "@type": "MusicAlbum";
}
