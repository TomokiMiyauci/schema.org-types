import { Demand } from "../intangibles/demand.ts";
import { CreativeWorkType } from "../creative_works/creative_work.ts";
import { EventType } from "../events/event.ts";
import { ProductType } from "../products/product.ts";
import { OwnershipInfo } from "../intangibles/structured_values/ownership_info.ts";
import { PriceSpecificationType } from "../intangibles/structured_values/price_specifications/price_specification.ts";
import { MonetaryAmount } from "../intangibles/structured_values/monetary_amount.ts";
import { Country } from "../places/administrative_areas/country.ts";
import { ProgramMembership } from "../intangibles/program_membership.ts";
import { OfferType } from "../intangibles/offers/offer.ts";
import { Language } from "../intangibles/language.ts";
import { ThingType } from "../thing.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { InteractionCounter } from "../intangibles/structured_values/interaction_counter.ts";
import { QuantitativeValue } from "../intangibles/structured_values/quantitative_value.ts";
import { Distance } from "../intangibles/quantities/distance.ts";
import { OfferCatalog } from "../intangibles/list_items/offer_catalog.ts";
import { Occupation } from "../intangibles/occupation.ts";
import { EducationalOccupationalCredential } from "../creative_works/educational_occupational_credential.ts";
import { GenderType } from "../intangibles/enumerations/gender_type.ts";
import { GrantType } from "../intangibles/grants/grant.ts";
import { ContactPointType } from "../intangibles/structured_values/contact_points/contact_point.ts";
import { Brand } from "../intangibles/brand.ts";
import { PlaceType } from "../places/place.ts";
import { EducationalOrganizationType } from "../organizations/educational_organizations/educational_organization.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { PostalAddress } from "../intangibles/structured_values/contact_points/postal_address.ts";
import { ThingProps } from "../thing.ts";
import { Date, Text, URL } from "../../data_types.ts";

export interface PersonProps extends ThingProps {
  /** An additional name for a Person, can be used for a middle name.
   * @see https://schema.org/additionalName
   */
  additionalName: Text;

  /** Physical address of the item.
   * @see https://schema.org/address
   */
  address: PostalAddress | Text;

  /** An organization that this person is affiliated with. For example, a school/university, a club, or a team.
   * @see https://schema.org/affiliation
   */
  affiliation: OrganizationType;

  /** An organization that the person is an alumni of.
   * @see https://schema.org/alumniOf
   */
  alumniOf: EducationalOrganizationType | OrganizationType;

  /** An award won by or for this item.
   * @see https://schema.org/award
   */
  award: Text;

  /** Date of birth.
   * @see https://schema.org/birthDate
   */
  birthDate: Date;

  /** The place where the person was born.
   * @see https://schema.org/birthPlace
   */
  birthPlace: PlaceType;

  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   * @see https://schema.org/brand
   */
  brand: Brand | OrganizationType;

  /** A {@link callsign}, as used in broadcasting and radio communications to identify people, radio and TV stations, or vehicles.
   * @see https://schema.org/callSign
   * @deprecated
   */
  callSign: Text;

  /** A child of the person.
   * @see https://schema.org/children
   */
  children: PersonType;

  /** A colleague of the person.
   * @see https://schema.org/colleague
   */
  colleague: PersonType | URL;

  /** A contact point for a person or organization.
   * @see https://schema.org/contactPoint
   */
  contactPoint: ContactPointType;

  /** Date of death.
   * @see https://schema.org/deathDate
   */
  deathDate: Date;

  /** The place where the person died.
   * @see https://schema.org/deathPlace
   */
  deathPlace: PlaceType;

  /** The Dun & Bradstreet DUNS number for identifying an organization or business person.
   * @see https://schema.org/duns
   */
  duns: Text;

  /** Email address.
   * @see https://schema.org/email
   */
  email: Text;

  /** Family name. In the U.S., the last name of a Person.
   * @see https://schema.org/familyName
   */
  familyName: Text;

  /** The fax number.
   * @see https://schema.org/faxNumber
   */
  faxNumber: Text;

  /** The most generic uni-directional social relation.
   * @see https://schema.org/follows
   */
  follows: PersonType;

  /** A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder: OrganizationType | PersonType;

  /** A {@link Grant} that directly or indirectly provide funding or sponsorship for this item. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/funding
   */
  funding: GrantType;

  /** Gender of something, typically a {@link Person}, but possibly also fictional characters, animals, etc. While https://schema.org/Male and https://schema.org/Female may be used, text strings are also acceptable for people who do not identify as a binary gender. The {@link gender} property can also be used in an extended sense to cover e.g. the gender of sports teams. As with the gender of individuals, we do not try to enumerate all possibilities. A mixed-gender {@link SportsTeam} can be indicated with a text value of "Mixed".
   * @see https://schema.org/gender
   */
  gender: GenderType | Text;

  /** Given name. In the U.S., the first name of a Person.
   * @see https://schema.org/givenName
   */
  givenName: Text;

  /** The {@link https://www.gs1.org/standards/id-keys/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
   * @see https://schema.org/globalLocationNumber
   */
  globalLocationNumber: Text;

  /** A credential awarded to the Person or Organization.
   * @see https://schema.org/hasCredential
   * @deprecated
   */
  hasCredential: EducationalOccupationalCredential;

  /** The Person's occupation. For past professions, use Role for expressing dates.
   * @see https://schema.org/hasOccupation
   */
  hasOccupation: Occupation;

  /** Indicates an OfferCatalog listing for this Organization, Person, or Service.
   * @see https://schema.org/hasOfferCatalog
   */
  hasOfferCatalog: OfferCatalog;

  /** Points-of-Sales operated by the organization or person.
   * @see https://schema.org/hasPOS
   */
  hasPOS: PlaceType;

  /** The height of the item.
   * @see https://schema.org/height
   */
  height: Distance | QuantitativeValue;

  /** A contact location for a person's residence.
   * @see https://schema.org/homeLocation
   */
  homeLocation: ContactPointType | PlaceType;

  /** An honorific prefix preceding a Person's name such as Dr/Mrs/Mr.
   * @see https://schema.org/honorificPrefix
   */
  honorificPrefix: Text;

  /** An honorific suffix following a Person's name such as M.D. /PhD/MSCSW.
   * @see https://schema.org/honorificSuffix
   */
  honorificSuffix: Text;

  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
   * @see https://schema.org/interactionStatistic
   */
  interactionStatistic: InteractionCounter;

  /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
   * @see https://schema.org/isicV4
   */
  isicV4: Text;

  /** The job title of the person (for example, Financial Manager).
   * @see https://schema.org/jobTitle
   * @deprecated
   */
  jobTitle: DefinedTermType | Text;

  /** The most generic bi-directional social/work relation.
   * @see https://schema.org/knows
   */
  knows: PersonType;

  /** Of a {@link Person}, and less typically of an {@link Organization}, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or {@link JobPosting} descriptions.
   * @see https://schema.org/knowsAbout
   */
  knowsAbout: Text | ThingType | URL;

  /** Of a {@link Person}, and less typically of an {@link Organization}, to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the {@link https://www.rfc-editor.org/info/bcp47 IETF BCP 47 standard}.
   * @see https://schema.org/knowsLanguage
   */
  knowsLanguage: Language | Text;

  /** A pointer to products or services offered by the organization or person.
   * @see https://schema.org/makesOffer
   */
  makesOffer: OfferType;

  /** An Organization (or ProgramMembership) to which this Person or Organization belongs.
   * @see https://schema.org/memberOf
   */
  memberOf: OrganizationType | ProgramMembership;

  /** The North American Industry Classification System (NAICS) code for a particular organization or business person.
   * @see https://schema.org/naics
   */
  naics: Text;

  /** Nationality of the person.
   * @see https://schema.org/nationality
   */
  nationality: Country;

  /** The total financial value of the person as calculated by subtracting assets from liabilities.
   * @see https://schema.org/netWorth
   */
  netWorth: MonetaryAmount | PriceSpecificationType;

  /** Products owned by the organization or person.
   * @see https://schema.org/owns
   */
  owns: OwnershipInfo | ProductType;

  /** A parent of this person.
   * @see https://schema.org/parent
   */
  parent: PersonType;

  /** Event that this person is a performer or participant in.
   * @see https://schema.org/performerIn
   */
  performerIn: EventType;

  /** The publishingPrinciples property indicates (typically via {@link URL}) a document describing the editorial principles of an {@link Organization} (or individual e.g. a {@link Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link CreativeWork} (e.g. {@link NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link CreativeWork}.
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link funder}) can be expressed using schema.org terminology.
   * @see https://schema.org/publishingPrinciples
   */
  publishingPrinciples: CreativeWorkType | URL;

  /** The most generic familial relation.
   * @see https://schema.org/relatedTo
   */
  relatedTo: PersonType;

  /** A pointer to products or services sought by the organization or person (demand).
   * @see https://schema.org/seeks
   */
  seeks: Demand;

  /** A sibling of the person.
   * @see https://schema.org/sibling
   */
  sibling: PersonType;

  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor: OrganizationType | PersonType;

  /** The person's spouse.
   * @see https://schema.org/spouse
   */
  spouse: PersonType;

  /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
   * @see https://schema.org/taxID
   */
  taxID: Text;

  /** The telephone number.
   * @see https://schema.org/telephone
   */
  telephone: Text;

  /** The Value-added Tax ID of the organization or person.
   * @see https://schema.org/vatID
   */
  vatID: Text;

  /** The weight of the product or person.
   * @see https://schema.org/weight
   */
  weight: QuantitativeValue;

  /** A contact location for a person's place of work.
   * @see https://schema.org/workLocation
   */
  workLocation: ContactPointType | PlaceType;

  /** Organizations that the person works for.
   * @see https://schema.org/worksFor
   */
  worksFor: OrganizationType;
}

/** A person (alive, dead, undead, or fictional).
 * @see https://schema.org/Person
 */
export interface Person extends PersonProps {
  "@type": "Person";
}

export type PersonType = Person;
