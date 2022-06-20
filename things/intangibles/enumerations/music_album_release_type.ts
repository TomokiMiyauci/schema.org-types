/** AlbumRelease.
 * @see https://schema.org/AlbumRelease
 */
export type AlbumRelease = "https://schema.org/AlbumRelease";

/** BroadcastRelease.
 * @see https://schema.org/BroadcastRelease
 */
export type BroadcastRelease = "https://schema.org/BroadcastRelease";

/** EPRelease.
 * @see https://schema.org/EPRelease
 */
export type EPRelease = "https://schema.org/EPRelease";

/** SingleRelease.
 * @see https://schema.org/SingleRelease
 */
export type SingleRelease = "https://schema.org/SingleRelease";

/** The kind of release which this album is: single, EP or album.
 * @see https://schema.org/MusicAlbumReleaseType
 */
export type MusicAlbumReleaseType =
  | AlbumRelease
  | BroadcastRelease
  | EPRelease
  | SingleRelease;
