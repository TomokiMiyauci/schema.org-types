import { MusicComposition } from "./music_composition.ts";
import { CreativeWorkProps } from "./creative_work.ts";
import { ThingProps } from "../thing.ts";
import { MusicGroup } from "../organizations/performing_groups/music_group.ts";
import { PersonType } from "../persons/person.ts";
import { Duration } from "../intangibles/quantities/duration.ts";
import { MusicAlbum } from "./music_playlists/music_album.ts";
import { MusicPlaylistType } from "./music_playlists/music_playlist.ts";
import { Text } from "../../data_types.ts";

export interface MusicRecordingProps extends CreativeWorkProps, ThingProps {
  /** The artist that performed this album or recording.
   * @see https://schema.org/byArtist
   */
  byArtist: MusicGroup | PersonType;

  /** The duration of the item (movie, audio recording, event, etc.) in {@link https://en.wikipedia.org/wiki/ISO_8601 ISO 8601 date format}.
   * @see https://schema.org/duration
   */
  duration: Duration;

  /** The album to which this recording belongs.
   * @see https://schema.org/inAlbum
   */
  inAlbum: MusicAlbum;

  /** The playlist to which this recording belongs.
   * @see https://schema.org/inPlaylist
   */
  inPlaylist: MusicPlaylistType;

  /** The International Standard Recording Code for the recording.
   * @see https://schema.org/isrcCode
   */
  isrcCode: Text;

  /** The composition this track is a recording of.
   * @see https://schema.org/recordingOf
   */
  recordingOf: MusicComposition;
}

/** A music recording (track), usually a single song.
 * @see https://schema.org/MusicRecording
 */
export interface MusicRecording extends MusicRecordingProps {
  "@type": "MusicRecording";
}
