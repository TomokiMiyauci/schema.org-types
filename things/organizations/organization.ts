import { Demand } from "./../intangibles/demand.ts";
import { ReviewType } from "./../creative_works/reviews/review.ts";
import { ProductType } from "./../products/product.ts";
import { OwnershipInfo } from "../intangibles/structured_values/ownership_info.ts";
import { AboutPage } from "./../creative_works/web_pages/about_page.ts";
import { QuantitativeValue } from "./../intangibles/structured_values/quantitative_value.ts";
import { NonprofitType } from "./../intangibles/enumerations/nonprofit_types/nonprofit_type.ts";
import { ProgramMembership } from "./../intangibles/program_membership.ts";
import { OfferType } from "./../intangibles/offers/offer.ts";
import { ImageObjectType } from "./../creative_works/media_objects/image_objects/image_object.ts";
import { VirtualLocation } from "./../intangibles/virtual_location.ts";
import { Language } from "./../intangibles/language.ts";
import { ThingType } from "./../thing.ts";
import { DefinedTermType } from "./../intangibles/defined_terms/defined_term.ts";
import { InteractionCounter } from "./../intangibles/structured_values/interaction_counter.ts";
import { OfferCatalog } from "./../intangibles/list_items/offer_catalog.ts";
import { MerchantReturnPolicy } from "./../intangibles/merchant_return_policy.ts";
import { EducationalOccupationalCredential } from "./../creative_works/educational_occupational_credential.ts";
import { GrantType } from "./../intangibles/grants/grant.ts";
import { EventType } from "./../events/event.ts";
import { ArticleType } from "./../creative_works/articles/article.ts";
import { ContactPointType } from "./../intangibles/structured_values/contact_points/contact_point.ts";
import { PlaceType } from "./../places/place.ts";
import { GeoShapeType } from "./../intangibles/structured_values/geo_shapes/geo_shape.ts";
import { AdministrativeAreaType } from "./../places/administrative_areas/administrative_area.ts";
import { PersonType } from "./../persons/person.ts";
import { AggregateRatingType } from "./../intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { PostalAddress } from "./../intangibles/structured_values/contact_points/postal_address.ts";
import { ThingProps } from "../thing.ts";
import { CreativeWorkType } from "../creative_works/creative_work.ts";
import { Date, Text, URL } from "../../data_types.ts";
import { Brand } from "../intangibles/brand.ts";

export interface OrganizationProps extends ThingProps {
  /** For a {@link NewsMediaOrganization} or other news-related {@link Organization}, a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
   * @see https://schema.org/actionableFeedbackPolicy
   */
  actionableFeedbackPolicy: CreativeWorkType | URL;

  /** Physical address of the item.
   * @see https://schema.org/address
   */
  address: PostalAddress | Text;

  /** The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating: AggregateRatingType;

  /** Alumni of an organization.
   * @see https://schema.org/alumni
   */
  alumni: PersonType;

  /** The geographic area where a service or offered item is provided.
   * @see https://schema.org/areaServed
   */
  areaServed: AdministrativeAreaType | GeoShapeType | PlaceType | Text;

  /** An award won by or for this item.
   * @see https://schema.org/award
   */
  award: Text;

  /** The brand(s) associated with a product or service, or the brand(s) maintained by an organization or business person.
   * @see https://schema.org/brand
   */
  brand: Brand | OrganizationType;

  /** A contact point for a person or organization.
   * @see https://schema.org/contactPoint
   */
  contactPoint: ContactPointType;

  /** For an {@link Organization} (e.g. {@link NewsMediaOrganization}), a statement describing (in news media, the newsroom’s) disclosure and correction policy for errors.
   * @see https://schema.org/correctionsPolicy
   * @deprecated
   */
  correctionsPolicy: CreativeWorkType | URL;

  /** A relationship between an organization and a department of that organization, also described as an organization (allowing different urls, logos, opening hours). For example: a store with a pharmacy, or a bakery with a cafe.
   * @see https://schema.org/department
   */
  department: OrganizationType;

  /** The date that this organization was dissolved.
   * @see https://schema.org/dissolutionDate
   */
  dissolutionDate: Date;

  /** Statement on diversity policy by an {@link Organization} e.g. a {@link NewsMediaOrganization}. For a {@link NewsMediaOrganization}, a statement describing the newsroom’s diversity policy on both staffing and sources, typically providing staffing data.
   * @see https://schema.org/diversityPolicy
   */
  diversityPolicy: CreativeWorkType | URL;

  /** For an {@link Organization} (often but not necessarily a {@link NewsMediaOrganization}), a report on staffing diversity issues. In a news context this might be for example ASNE or RTDNA (US) reports, or self-reported.
   * @see https://schema.org/diversityStaffingReport
   * @deprecated
   */
  diversityStaffingReport: ArticleType | URL;

  /** The Dun & Bradstreet DUNS number for identifying an organization or business person.
   * @see https://schema.org/duns
   */
  duns: Text;

  /** Email address.
   * @see https://schema.org/email
   */
  email: Text;

  /** Someone working for this organization.
   * @see https://schema.org/employee
   */
  employee: PersonType;

  /** Statement about ethics policy, e.g. of a {@link NewsMediaOrganization} regarding journalistic and publishing practices, or of a {@link Restaurant}, a page describing food source policies. In the case of a {@link NewsMediaOrganization}, an ethicsPolicy is typically a statement describing the personal, organizational, and corporate standards of behavior expected by the organization.
   * @see https://schema.org/ethicsPolicy
   * @deprecated
   */
  ethicsPolicy: CreativeWorkType | URL;

  /** Upcoming or past event associated with this place, organization, or action.
   * @see https://schema.org/event
   */
  event: EventType;

  /** The fax number.
   * @see https://schema.org/faxNumber
   */
  faxNumber: Text;

  /** A person who founded this organization.
   * @see https://schema.org/founder
   */
  founder: PersonType;

  /** The date that this organization was founded.
   * @see https://schema.org/foundingDate
   */
  foundingDate: Date;

  /** The place where the Organization was founded.
   * @see https://schema.org/foundingLocation
   */
  foundingLocation: PlaceType;

  /** A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder: OrganizationType | PersonType;

  /** A {@link Grant} that directly or indirectly provide funding or sponsorship for this item. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/funding
   */
  funding: GrantType;

  /** The {@link https://www.gs1.org/standards/id-keys/gln Global Location Number} (GLN, sometimes also referred to as International Location Number or ILN) of the respective organization, person, or place. The GLN is a 13-digit number used to identify parties and physical locations.
   * @see https://schema.org/globalLocationNumber
   */
  globalLocationNumber: Text;

  /** A credential awarded to the Person or Organization.
   * @see https://schema.org/hasCredential
   * @deprecated
   */
  hasCredential: EducationalOccupationalCredential;

  /** Specifies a MerchantReturnPolicy that may be applicable.
   * @see https://schema.org/hasMerchantReturnPolicy
   * @deprecated
   */
  hasMerchantReturnPolicy: MerchantReturnPolicy;

  /** Indicates an OfferCatalog listing for this Organization, Person, or Service.
   * @see https://schema.org/hasOfferCatalog
   */
  hasOfferCatalog: OfferCatalog;

  /** Points-of-Sales operated by the organization or person.
   * @see https://schema.org/hasPOS
   */
  hasPOS: PlaceType;

  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
   * @see https://schema.org/interactionStatistic
   */
  interactionStatistic: InteractionCounter;

  /** The International Standard of Industrial Classification of All Economic Activities (ISIC), Revision 4 code for a particular organization, business person, or place.
   * @see https://schema.org/isicV4
   */
  isicV4: Text;

  /** An organization identifier as defined in ISO 6523(-1). Note that many existing organization identifiers such as {@link leiCode}, {@link duns} and {@link vatID} can be expressed as an ISO 6523 identifier by setting the ICD part of the ISO 6523 identifier accordingly.
   * @see https://schema.org/iso6523Code
   * @deprecated
   */
  iso6523Code: Text;

  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   * @see https://schema.org/keywords
   */
  keywords: DefinedTermType | Text | URL;

  /** Of a {@link Person}, and less typically of an {@link Organization}, to indicate a topic that is known about - suggesting possible expertise but not implying it. We do not distinguish skill levels here, or relate this to educational content, events, objectives or {@link JobPosting} descriptions.
   * @see https://schema.org/knowsAbout
   * @deprecated
   */
  knowsAbout: Text | ThingType | URL;

  /** Of a {@link Person}, and less typically of an {@link Organization}, to indicate a known language. We do not distinguish skill levels or reading/writing/speaking/signing here. Use language codes from the {@link https://www.rfc-editor.org/info/bcp47 IETF BCP 47 standard}.
   * @see https://schema.org/knowsLanguage
   */
  knowsLanguage: Language | Text;

  /** The official name of the organization, e.g. the registered company name.
   * @see https://schema.org/legalName
   */
  legalName: Text;

  /** An organization identifier that uniquely identifies a legal entity as defined in ISO 17442.
   * @see https://schema.org/leiCode
   */
  leiCode: Text;

  /** The location of, for example, where an event is happening, where an organization is located, or where an action takes place.
   * @see https://schema.org/location
   */
  location: PlaceType | PostalAddress | Text | VirtualLocation;

  /** An associated logo.
   * @see https://schema.org/logo
   */
  logo: ImageObjectType | URL;

  /** A pointer to products or services offered by the organization or person.
   * @see https://schema.org/makesOffer
   */
  makesOffer: OfferType;

  /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
   * @see https://schema.org/member
   */
  member: OrganizationType | PersonType;

  /** An Organization (or ProgramMembership) to which this Person or Organization belongs.
   * @see https://schema.org/memberOf
   */
  memberOf: OrganizationType | ProgramMembership;

  /** The North American Industry Classification System (NAICS) code for a particular organization or business person.
   * @see https://schema.org/naics
   */
  naics: Text;

  /** nonprofit Status indicates the legal status of a non-profit organization in its primary place of business.
   * @see https://schema.org/nonprofitStatus
   * @deprecated
   */
  nonprofitStatus: NonprofitType;

  /** The number of employees in an organization e.g. business.
   * @see https://schema.org/numberOfEmployees
   */
  numberOfEmployees: QuantitativeValue;

  /** For an {@link Organization} (often but not necessarily a {@link NewsMediaOrganization}), a description of organizational ownership structure; funding and grants. In a news/media setting, this is with particular reference to editorial independence. Note that the {@link funder} is also available and can be used to make basic funder information machine-readable.
   * @see https://schema.org/ownershipFundingInfo
   * @deprecated
   */
  ownershipFundingInfo: AboutPage | CreativeWorkType | Text | URL;

  /** Products owned by the organization or person.
   * @see https://schema.org/owns
   */
  owns: OwnershipInfo | ProductType;

  /** The larger organization that this organization is a {@link subOrganization} of, if any.
   * @see https://schema.org/parentOrganization
   */
  parentOrganization: OrganizationType;

  /** The publishingPrinciples property indicates (typically via {@link URL}) a document describing the editorial principles of an {@link Organization} (or individual e.g. a {@link Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link CreativeWork} (e.g. {@link NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link CreativeWork}.
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link funder}) can be expressed using schema.org terminology.
   * @see https://schema.org/publishingPrinciples
   */
  publishingPrinciples: CreativeWorkType | URL;

  /** A review of the item.
   * @see https://schema.org/review
   */
  review: ReviewType;

  /** A pointer to products or services sought by the organization or person (demand).
   * @see https://schema.org/seeks
   */
  seeks: Demand;

  /** A slogan or motto associated with the item.
   * @see https://schema.org/slogan
   */
  slogan: Text;

  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor: OrganizationType | PersonType;

  /** A relationship between two organizations where the first includes the second, e.g., as a subsidiary. See also: the more specific 'department' property.
   * @see https://schema.org/subOrganization
   */
  subOrganization: OrganizationType;

  /** The Tax / Fiscal ID of the organization or person, e.g. the TIN in the US or the CIF/NIF in Spain.
   * @see https://schema.org/taxID
   */
  taxID: Text;

  /** The telephone number.
   * @see https://schema.org/telephone
   */
  telephone: Text;

  /** For an {@link Organization} (typically a {@link NewsMediaOrganization}), a statement about policy on use of unnamed sources and the decision process required.
   * @see https://schema.org/unnamedSourcesPolicy
   * @deprecated
   */
  unnamedSourcesPolicy: CreativeWorkType | URL;

  /** The Value-added Tax ID of the organization or person.
   * @see https://schema.org/vatID
   */
  vatID: Text;
}

/** An organization such as a school, NGO, corporation, club, etc.
 * @see https://schema.org/Organization
 */
export interface Organization extends OrganizationProps {
  "@type": "Organization";
}

export type OrganizationType = Organization;
