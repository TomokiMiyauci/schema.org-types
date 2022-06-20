/** Book format: Audiobook. This is an enumerated value for use with the bookFormat property. There is also a type 'Audiobook' in the bib extension which includes Audiobook specific properties.
 * @see https://schema.org/AudiobookFormat
 */
type AudiobookFormat = "https://schema.org/AudiobookFormat";

/** Book format: Ebook.
 * @see https://schema.org/EBook
 */
type EBook = "https://schema.org/EBook";

/** Book format: GraphicNovel. May represent a bound collection of ComicIssue instances.
 * @see https://schema.org/GraphicNovel
 */
type GraphicNovel = "https://schema.org/GraphicNovel";

/** Book format: Hardcover.
 * @see https://schema.org/Hardcover
 */
type Hardcover = "https://schema.org/Hardcover";

/** Book format: Paperback.
 * @see https://schema.org/Paperback
 */
type Paperback = "https://schema.org/Paperback";

/** The publication format of the book.
 * @see https://schema.org/BookFormatType
 */
export type BookFormatType =
  | AudiobookFormat
  | EBook
  | GraphicNovel
  | Hardcover
  | Paperback;
