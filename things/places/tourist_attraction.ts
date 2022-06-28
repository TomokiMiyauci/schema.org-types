import { AudienceType } from "./../intangibles/audiences/audience.ts";
import { Text } from "./../../data_types.ts";
import { Language } from "./../intangibles/language.ts";
import { PlaceProps } from "./place.ts";
import { ThingProps } from "../thing.ts";

export interface TouristAttractionProps extends PlaceProps, ThingProps {
  /** A language someone may use with or at the item, service or place. Please use one of the language codes from the {@link https://www.rfc-editor.org/info/bcp47 IETF BCP 47 standard}. See also {@link inLanguage}.
   * @see https://schema.org/availableLanguage
   */
  availableLanguage: Language | Text;

  /** Attraction suitable for type(s) of tourist. eg. Children, visitors from a particular country, etc.
   * @see https://schema.org/touristType
   */
  touristType: AudienceType | Text;
}

/** A tourist attraction. In principle any Thing can be a {@link TouristAttraction}, from a {@link Mountain} and {@link LandmarksOrHistoricalBuildings} to a {@link LocalBusiness}. This Type can be used on its own to describe a general {@link TouristAttraction}, or be used as an {@link additionalType} to add tourist attraction properties to any other type.
 * @see https://schema.org/TouristAttraction
 */
export interface TouristAttraction extends TouristAttractionProps {
  "@type": "TouristAttraction";
}
