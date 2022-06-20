import { CreativeWorkProps } from "../creative_work.ts";
import { ThingProps } from "../../thing.ts";
import { Boolean, Integer, Text } from "../../../data_types.ts";
import { PersonType } from "../../persons/person.ts";
import { BookFormatType } from "../../intangibles/enumerations/book_format_type.ts";

export interface BookProps extends CreativeWorkProps, ThingProps {
  /** Indicates whether the book is an abridged edition.
   * @see https://schema.org/abridged
   */
  abridged: Boolean;

  /** The edition of the book.
   * @see https://schema.org/bookEdition
   */
  bookEdition: Text;

  /** The format of the book.
   * @see https://schema.org/bookFormat
   */
  bookFormat: BookFormatType;

  /** The illustrator of the book.
   * @see https://schema.org/illustrator
   */
  illustrator: PersonType;

  /** The ISBN of the book.
   * @see https://schema.org/isbn
   */
  isbn: Text;

  /** The number of pages in the book.
   * @see https://schema.org/numberOfPages
   */
  numberOfPages: Integer;
}

export interface Book extends BookProps {
  "@type": "Book";
}

export type BookType = Book;
