import { MusicRecording } from "./../../creative_works/music_recording.ts";
import { ItemListType } from "./../../creative_works/item_lists/item_list.ts";
import { Text, URL } from "./../../../data_types.ts";
import { MusicAlbum } from "./../../creative_works/music_playlists/music_album.ts";
import { OrganizationProps } from "../organization.ts";
import { ThingProps } from "../../thing.ts";

export interface MusicGroupProps extends OrganizationProps, ThingProps {
  /** A music album.
   * @see https://schema.org/album
   */
  album: MusicAlbum;

  /** Genre of the creative work, broadcast channel or group.
   * @see https://schema.org/genre
   */
  genre: Text | URL;

  /** A music recording (track)—usually a single song. If an ItemList is given, the list should contain items of type MusicRecording.
   * @see https://schema.org/track
   */
  track: ItemListType | MusicRecording;
}

/** A musical group, such as a band, an orchestra, or a choir. Can also be a solo musician.
 * @see https://schema.org/MusicGroup
 */
export interface MusicGroup extends MusicGroupProps {
  "@type": "MusicGroup";
}
