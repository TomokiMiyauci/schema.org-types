/** Text representing a CSS selector.
 * @see https://schema.org/CssSelectorType
 */
export type CSSSelectorType = string;

/** Text representing an XPath (typically but not necessarily version 1.0).
 * @see https://schema.org/XPathType
 * @deprecated
 */
export type XPathType = string;

/** Data type: URL.
 * @see https://schema.org/URL
 */
export type URL = string;

/** Data type: Text.
 * @see https://schema.org/Text
 */
export type Text = string;

/** Usage guidelines:
 * - Use values from 0123456789 (Unicode 'DIGIT ZERO' (U+0030) to 'DIGIT NINE' (U+0039)) rather than superficially similiar Unicode symbols.
 * - Use '.' (Unicode 'FULL STOP' (U+002E)) rather than ',' to indicate a decimal point. Avoid using these symbols as a readability separator.
 * @see https://schema.org/Number
 */
export type Number = number;

/** Data type: Integer.
 * @see https://schema.org/Integer
 */
export type Integer = number;
