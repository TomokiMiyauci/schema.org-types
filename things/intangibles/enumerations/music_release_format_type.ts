/** CDFormat.
 * @see https://schema.org/CDFormat
 */
type CDFormat = "https://schema.org/CDFormat";

/** CassetteFormat.
 * @see https://schema.org/CassetteFormat
 */
type CassetteFormat = "https://schema.org/CassetteFormat";

/** DVDFormat.
 * @see https://schema.org/DVDFormat
 */
type DVDFormat = "https://schema.org/DVDFormat";

/** Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 * @see https://schema.org/MusicReleaseFormatType
 */

/** DigitalAudioTapeFormat.
 * @see https://schema.org/DigitalAudioTapeFormat
 */
type DigitalAudioTapeFormat = "https://schema.org/DigitalAudioTapeFormat";

/** DigitalFormat.
 * @see https://schema.org/DigitalFormat
 */
type DigitalFormat = "https://schema.org/DigitalFormat";

/** LaserDiscFormat.
 * @see https://schema.org/LaserDiscFormat
 */
type LaserDiscFormat = "https://schema.org/LaserDiscFormat";

/** VinylFormat.
 * @see https://schema.org/VinylFormat
 */
type VinylFormat = "https://schema.org/VinylFormat";

/** Format of this release (the type of recording media used, ie. compact disc, digital media, LP, etc.).
 * @see https://schema.org/MusicReleaseFormatType
 */
export type MusicReleaseFormatType =
  | CDFormat
  | CassetteFormat
  | DVDFormat
  | DigitalAudioTapeFormat
  | DigitalFormat
  | LaserDiscFormat
  | VinylFormat;
