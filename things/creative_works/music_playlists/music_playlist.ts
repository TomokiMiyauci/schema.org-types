import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";
import { Integer } from "../../../data_types.ts";
import { ItemListType } from "../item_lists/item_list.ts";

export interface MusicPlaylistProps extends CreativeWorkProps, ThingProps {
  /** The number of tracks in this album or playlist.
   * @see https://schema.org/numTracks
   */
  numTracks: Integer;

  /** A music recording (track)—usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
   * @see https://schema.org/track
   */
  track: ItemListType;
}

/** A collection of music tracks in playlist form.
 * @see https://schema.org/MusicPlaylist
 */
export interface MusicPlaylist extends MusicPlaylistProps {
  "@type": "MusicPlaylist";
}

export type MusicPlaylistType = MusicPlaylist;
