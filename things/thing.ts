import { Text, URL } from "../data_types.ts";
import { PropertyValueType } from "./intangibles/structured_values/property_values/property_value.ts";
import { ImageObjectType } from "./creative_works/media_objects/image_objects/image_object.ts";
import {
  CreativeWork,
  CreativeWorkType,
} from "./creative_works/creative_work.ts";
import { ActionType } from "./actions/action.ts";
import { Event, EventType } from "./events/event.ts";
import JSONLD from "../json_ld.ts";

export interface ThingProps extends JSONLD {
  /** An additional type for the item, typically used for adding more specific types from external vocabularies in microdata syntax. This is a relationship between something and a class that the thing is in. In RDFa syntax, it is better to use the native RDFa syntax - the 'typeof' attribute - for multiple types. Schema.org tools may have only weaker understanding of extra types, in particular those defined externally.
   * @see https://schema.org/additionalType
   */
  additionalType: URL;

  /** An alias for the item.
   * @see https://schema.org/alternateName
   */
  alternateName: Text;

  /** A description of the item.
   * @see https://schema.org/description
   */
  description: Text;

  /** A sub property of description. A short description of the item used to disambiguate from other, similar items. Information from other properties (in particular, name) may be necessary for the description to be useful for disambiguation.
   * @see https://schema.org/disambiguatingDescription
   */
  disambiguatingDescription: Text;

  /** The identifier property represents any kind of identifier for any kind of {@link Thing}, such as ISBNs, GTIN codes, UUIDs etc. Schema.org provides dedicated properties for representing many of these, either as textual strings or as URL (URI) links.
   * @see {@link https://schema.org/docs/datamodel.html#identifierBg background notes} for more details.
   * @see https://schema.org/identifier
   */
  identifier: Text | URL | PropertyValueType;

  /** An image of the item. This can be a {@link URL} or a fully described {@link ImageObject}.
   * @see https://schema.org/image
   */
  image: URL | ImageObjectType;

  /** Indicates a page (or other CreativeWork) for which this thing is the main entity being described.
   * @see {@link https://schema.org/docs/datamodel.html#mainEntityBackground background notes} for details.
   *
   * Inverse-property: mainEntity
   */
  mainEntityOfPage: URL | CreativeWorkType;

  /** The name of the item.
   * @see https://schema.org/name
   */
  name: Text;

  /** Indicates a potential Action, which describes an idealized action in which this thing would play an 'object' role.
   * @see https://schema.org/potentialAction
   */
  potentialAction: ActionType;

  /** URL of a reference Web page that unambiguously indicates the item's identity. E.g. the URL of the item's Wikipedia page, Wikidata entry, or official website.
   * @see https://schema.org/sameAs
   */
  sameAs: URL;

  /** A CreativeWork or Event about this Thing.
   *
   * Inverse-property: about
   * @see https://schema.org/subjectOf
   */
  subjectOf: CreativeWorkType | EventType;

  /** URL of the item.
   * @see https://schema.org/url
   */
  url: URL;
}

/** The most generic type of item.
 * @see https://schema.org/Thing
 */
export interface Thing extends ThingProps {
  "@type": "Thing";
}

export type ThingType = Thing | CreativeWork | Event;
