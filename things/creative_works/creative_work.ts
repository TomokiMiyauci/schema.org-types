import { VideoObjectType } from "./media_objects/video_objects/video_object.ts";
import { Duration } from "../intangibles/quantities/duration.ts";
import { SizeSpecification } from "../intangibles/enumerations/qualitative_values/size_specification.ts";
import { ReviewType } from "./reviews/review.ts";
import { EventType } from "../events/event.ts";
import { PublicationEventType } from "../events/publication_events/publication_event.ts";
import { OfferType } from "../intangibles/offers/offer.ts";
import { Demand } from "../intangibles/demand.ts";
import { QuantitativeValue } from "../intangibles/structured_values/quantitative_value.ts";
import { ProductType } from "../products/product.ts";
import { Claim } from "./claim.ts";
import { InteractionCounter } from "../intangibles/structured_values/interaction_counter.ts";
import { Language } from "../intangibles/language.ts";
import { GrantType } from "../intangibles/grants/grant.ts";
import { AlignmentObject } from "../intangibles/alignment_object.ts";
import { Country } from "../places/administrative_areas/country.ts";
import { CorrectionComment } from "./comments/correction_comment.ts";
import { RatingType } from "../intangibles/ratings/rating.ts";
import { PlaceType } from "../places/place.ts";
import {
  Boolean,
  Date,
  DateTime,
  Integer,
  Number,
  Text,
  URL,
} from "../../data_types.ts";
import { CommentType } from "./comments/comment.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { AudioObjectType } from "./media_objects/audio_objects/audio_object.ts";
import { MusicRecording } from "./music_recording.ts";
import { ClipType } from "./clips/clip.ts";
import { ThingProps, ThingType } from "../thing.ts";
import { AmpStory } from "./amp_story.ts";
import { BookType } from "./books/book.ts";
import { ItemListType } from "./item_lists/item_list.ts";
import { PersonType } from "../persons/person.ts";
import { AggregateRating } from "../intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { WebPageType } from "./web_page.ts";
import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { MediaObjectType } from "./media_objects/media_object.ts";
import { AudienceType } from "../intangibles/audiences/audience.ts";

export interface CreativeWorkProps extends ThingProps {
  /** The subject matter of the content.
   * @see https://schema.org/about
   */
  about: ThingType;

  /** An abstract is a short description that summarizes a {@link CreativeWork}.
   * @deprecated
   */
  abstract: Text;

  /** The human sensory perceptual system or cognitive faculty through which a person may process or perceive information. Values should be drawn from the {@link https://www.w3.org/2021/a11y-discov-vocab/latest/#accessMode-vocabulary approved vocabulary}.
   * @see https://schema.org/accessMode
   */
  accessMode: Text;

  /** A list of single or combined accessModes that are sufficient to understand all the intellectual content of a resource. Values should be drawn from the {@link https://www.w3.org/2021/a11y-discov-vocab/latest/#accessModeSufficient-vocabulary approved vocabulary}.
   * @see https://schema.org/accessModeSufficient
   */
  accessModeSufficient: ItemListType;

  /** Indicates that the resource is compatible with the referenced accessibility API. Values should be drawn from the {@link https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityAPI-vocabulary approved vocabulary}.
   * @see https://schema.org/accessibilityAPI
   */
  accessibilityAPI: Text;

  /** Identifies input methods that are sufficient to fully control the described resource. Values should be drawn from the {@link https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary approved vocabulary}.
   * @see https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityControl-vocabulary
   */
  accessibilityControl: Text;

  /** Content features of the resource, such as accessible media, alternatives and supported enhancements for accessibility. Values should be drawn from the {@link https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityFeature-vocabulary approved vocabulary}.
   * @see https://schema.org/accessibilityFeature
   */
  accessibilityFeature: Text;

  /** A characteristic of the described resource that is physiologically dangerous to some users. Related to WCAG 2.0 guideline 2.3. Values should be drawn from the {@link https://www.w3.org/2021/a11y-discov-vocab/latest/#accessibilityHazard-vocabulary approved vocabulary}.
   * @see https://schema.org/accessibilityHazard
   */
  accessibilityHazard: Text;

  /** A human-readable summary of specific accessibility features or deficiencies, consistent with the other accessibility metadata but expressing subtleties such as "short descriptions are present but long descriptions will be needed for non-visual users" or "short descriptions are present and no long descriptions are needed."
   * @see https://schema.org/accessibilitySummary
   */
  accessibilitySummary: Text;

  /** Specifies the Person that is legally accountable for the CreativeWork.
   * @see https://schema.org/accountablePerson
   */
  accountablePerson: PersonType;

  /** Indicates a page documenting how licenses can be purchased or otherwise acquired, for the current item.
   * @see https://schema.org/acquireLicensePage
   */
  acquireLicensePage: CreativeWorkType | URL;

  /** The overall rating, based on a collection of reviews or ratings, of the item.
   * @see https://schema.org/aggregateRating
   */
  aggregateRating: AggregateRating;

  /** A secondary title of the CreativeWork.
   * @see https://schema.org/alternativeHeadline
   */
  alternativeHeadline: Text;

  /** Indicates a page or other link involved in archival of a {@link CreativeWork}. In the case of {@link MediaReview}, the items in a {@link MediaReviewItem} may often become inaccessible, but be archived by archival, journalistic, activist, or law enforcement organizations. In such cases, the referenced page may not directly publish the content.
   * @see https://schema.org/archivedAt
   */
  archivedAt: URL | WebPageType;

  /** The item being described is intended to assess the competency or learning outcome defined by the referenced term.
   * @see https://schema.org/assesses
   */
  assesses: Text | DefinedTermType;

  /** A media object that encodes this CreativeWork. This property is a synonym for encoding.
   * @see https://schema.org/associatedMedia
   */
  associatedMedia: MediaObjectType;

  /** An intended audience, i.e. a group for whom something was created.
   * @see https://schema.org/audience
   */
  audience: AudienceType;

  /** An embedded audio object.
   * @see https://schema.org/audio
   */
  audio: AudioObjectType | ClipType | MusicRecording;

  /** The author of this content or rating. Please note that author is special in that HTML 5 provides a special mechanism for indicating authorship via the rel tag.
   * That is equivalent to this and may be used interchangeably.
   * @see https://schema.org/author
   */
  author: OrganizationType | PersonType;

  /** An award won by or for this item.
   * @see https://schema.org/award
   */
  award: Text;

  /** Fictional person connected with a creative work.
   * @see https://schema.org/character
   */
  character: PersonType;

  /** A citation or reference to another creative work, such as another publication, web page, scholarly article, etc.
   * @see https://schema.org/citation
   */
  citation: CreativeWorkType | Text;

  /** Comments, typically from users.
   * @see https://schema.org/comment
   */
  comment: CommentType;

  /** The number of comments this CreativeWork (e.g. Article, Question or Answer) has received. This is most applicable to works published in Web sites with commenting system; additional comments may exist elsewhere.
   * @see https://schema.org/commentCount
   */
  commentCount: Integer;

  /** Conditions that affect the availability of, or method(s) of access to, an item. Typically used for real world items such as an {@link ArchiveComponent} held by an {@link ArchiveOrganization}. This property is not suitable for use as a general Web access control mechanism. It is expressed only in natural language.
   *
   * For example "Available by appointment from the Reading Room" or "Accessible only from logged-in accounts ".
   * @see https://schema.org/conditionsOfAccess
   * @deprecated
   */
  conditionsOfAccess: Text;

  /** The location depicted or described in the content. For example, the location in a photograph or painting.
   * @see https://schema.org/contentLocation
   */
  contentLocation: PlaceType;

  /** Official rating of a piece of content—for example,'MPAA PG-13'.
   * @see https://schema.org/contentRating
   */
  contentRating: RatingType | Text;

  /** The specific time described by a creative work, for works (e.g. articles, video objects etc.) that emphasise a particular moment within an Event.
   * @see https://schema.org/contentReferenceTime
   * @deprecated
   */
  contentReferenceTime: DateTime;

  /** A secondary contributor to the CreativeWork or Event.
   * @see https://schema.org/contributor
   */
  contributor: OrganizationType | PersonType;

  /** The party holding the legal copyright to the CreativeWork.
   * @see https://schema.org/copyrightHolder
   */
  copyrightHolder: OrganizationType | PersonType;

  /** Text of a notice appropriate for describing the copyright aspects of this Creative Work, ideally indicating the owner of the copyright for the Work.
   * @see https://schema.org/copyrightNotice
   * @deprecated
   */
  copyrightNotice: Text;

  /** The year during which the claimed copyright for the CreativeWork was first asserted.
   * @see https://schema.org/copyrightYear
   */
  copyrightYear: Number;

  /** Indicates a correction to a {@link CreativeWork}, either via a {@link CorrectionComment}, textually or in another document.
   * @see https://schema.org/correction
   * @deprecated
   */
  correction: CorrectionComment | Text | URL;

  /** The country of origin of something, including products as well as creative works such as movie and TV content.
   *
   * In the case of TV and movie, this would be the country of the principle offices of the production company or individual responsible for the movie. For other kinds of {@link CreativeWork} it is difficult to provide fully general guidance, and properties such as {@link contentLocation} and {@link locationCreated} may be more applicable.
   *
   * In the case of products, the country of origin of the product. The exact interpretation of this may vary by context and product type, and cannot be fully enumerated here.
   * @see https://schema.org/countryOfOrigin
   */
  countryOfOrigin: Country;

  /** The status of a creative work in terms of its stage in a lifecycle. Example terms include Incomplete, Draft, Published, Obsolete. Some organizations define a set of terms for the stages of their publication lifecycle.
   * @see https://schema.org/creativeWorkStatus
   * @deprecated
   */
  creativeWorkStatus: DefinedTermType | Text;

  /** The creator/author of this CreativeWork. This is the same as the Author property for CreativeWork.
   * @see https://schema.org/creator
   */
  creator: OrganizationType | PersonType;

  /** Text that can be used to credit person(s) and/or organization(s) associated with a published Creative Work.
   * @see https://schema.org/creditText
   * @deprecated
   */
  creditText: Text;

  /** The date on which the CreativeWork was created or the item was added to a DataFeed.
   * @see https://schema.org/dateCreated
   */
  dateCreated: Date | DateTime;

  /** The date on which the CreativeWork was most recently modified or when the item's entry was modified within a DataFeed.
   * @see https://schema.org/dateModified
   */
  dateModified: Date | DateTime;

  /** Date of first broadcast/publication.
   * @see https://schema.org/datePublished
   */
  datePublished: Date | DateTime;

  /** A link to the page containing the comments of the CreativeWork.
   * @see https://schema.org/discussionUrl
   */
  discussionUrl: URL;

  /** An {@link https://www.eidr.org/ EIDR} (Entertainment {@link Identifier} Registry) identifier representing a specific edit / edition for a work of film or television.
   *
   * For example, the motion picture known as "Ghostbusters" whose {@link titleEIDR} is "10.5240/7EC7-228A-510A-053E-CBB8-J", has several edits e.g. "10.5240/1F2A-E1C5-680A-14C6-E76B-I" and "10.5240/8A35-3BEE-6497-5D12-9E4F-3".
   *
   * Since schema.org types like {@link Movie} and {@link TVEpisode} can be used for both works and their multiple expressions, it is possible to use {@link titleEIDR} alone (for a general description), or alongside {@link editEIDR} for a more edit-specific description.
   * @see https://schema.org/editEIDR
   * @deprecated
   */
  editEIDR: Text | URL;

  /** Specifies the Person who edited the CreativeWork.
   * @see https://schema.org/editor
   */
  editor: PersonType;

  /** An alignment to an established educational framework.
   *
   * This property should not be used where the nature of the alignment can be described using a simple property, for example to express that a resource {@link teaches} or {@link assesses} a competency.
   * @see https://schema.org/educationalAlignment
   */
  educationalAlignment: AlignmentObject;

  /** The level in terms of progression through an educational or training context. Examples of educational levels include 'beginner', 'intermediate' or 'advanced', and formal sets of level indicators.
   * @see https://schema.org/educationalLevel
   * @deprecated
   */
  educationalLevel: DefinedTermType | Text | URL;

  /** The purpose of a work in the context of education; for example, 'assignment', 'group work'.
   * @see https://schema.org/educationalUse
   */
  educationalUse: DefinedTermType | Text;

  /** A media object that encodes this CreativeWork. This property is a synonym for associatedMedia.
   * @see https://schema.org/encoding
   */
  encoding: MediaObjectType;

  /** Media type typically expressed using a MIME format (see {@link http://www.iana.org/assignments/media-types/media-types.xhtml IANA site} and {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types MDN reference}) e.g. application/zip for a SoftwareApplication binary, audio/mpeg for .mp3 etc.).
   *
   * In cases where a {@link CreativeWork} has several media type representations, {@link encoding} can be used to indicate each {@link MediaObject} alongside particular {@link encodingFormat} information.
   *
   * Unregistered or niche encoding and file formats can be indicated instead via the most appropriate URL, e.g. defining Web page or a Wikipedia/Wikidata entry.
   * @see
   */
  encodingFormat: Text | URL;

  /** A creative work that this work is an example/instance/realization/derivation of.
   * @see https://schema.org/exampleOfWork
   */
  exampleOfWork: CreativeWorkType;

  /** Date the content expires and is no longer useful or available. For example a {@link VideoObject} or {@link NewsArticle} whose availability or relevance is time-limited, or a {@link ClaimReview} fact check whose publisher wants to indicate that it may no longer be relevant (or helpful to highlight) after some date.
   * @see https://schema.org/expires
   */
  expires: Date;

  /** A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder: OrganizationType | PersonType;

  /** A {@link Grant} that directly or indirectly provide funding or sponsorship for this item. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/funding
   */
  funding: GrantType;

  /** Genre of the creative work, broadcast channel or group.
   * @see https://schema.org/genre
   */
  genre: Text | URL;

  /** Indicates an item or CreativeWork that is part of this item, or CreativeWork (in some sense).
   * @see https://schema.org/hasPart
   */
  hasPart: CreativeWorkType;

  /** Headline of the article.
   * @see https://schema.org/headline
   */
  headline: Text;

  /** The language of the content or performance or used in an action. Please use one of the language codes from the {@link https://www.rfc-editor.org/info/bcp47 IETF BCP 47 standard}. See also {@link availableLanguage}.
   * @see https://schema.org/inLanguage
   */
  inLanguage: Language | Text;

  /** The number of interactions for the CreativeWork using the WebSite or SoftwareApplication. The most specific child type of InteractionCounter should be used.
   * @see https://schema.org/interactionStatistic
   */
  interactionStatistic: InteractionCounter;

  /** The predominant mode of learning supported by the learning resource. Acceptable values are 'active', 'expositive', or 'mixed'.
   * @see https://schema.org/interactivityType
   */
  interactivityType: Text;

  /** Used to indicate a specific claim contained, implied, translated or refined from the content of a {@link MediaObject} or other {@link CreativeWork}. The interpreting party can be indicated using {@link claimInterpreter}.
   * @see https://schema.org/interpretedAsClaim
   */
  interpretedAsClaim: Claim;

  /** A flag to signal that the item, event, or place is accessible for free.
   * @see https://schema.org/isAccessibleForFree
   */
  isAccessibleForFree: Boolean;

  /** A resource from which this work is derived or from which it is a modification or adaption.
   * @see https://schema.org/isBasedOn
   */
  isBasedOn: CreativeWorkType | ProductType | URL;

  /** Indicates whether this content is family friendly.
   * @see https://schema.org/isFamilyFriendly
   */
  isFamilyFriendly: Boolean;

  /** Indicates an item or CreativeWork that this item, or CreativeWork (in some sense), is part of.
   * @see https://schema.org/isPartOf
   */
  isPartOf: CreativeWorkType | URL;

  /** Keywords or tags used to describe some item. Multiple textual entries in a keywords list are typically delimited by commas, or by repeating the property.
   * @see https://schema.org/keywords
   */
  keywords: DefinedTermType | Text | URL;

  /** The predominant type or kind characterizing the learning resource. For example, 'presentation', 'handout'.
   * @see https://schema.org/learningResourceType
   */
  learningResourceType: DefinedTermType | Text;

  /** A license document that applies to this content, typically indicated by URL.
   * @see https://schema.org/license
   */
  license: CreativeWorkType | URL;

  /** The location where the CreativeWork was created, which may not be the same as the location depicted in the CreativeWork.
   * @see https://schema.org/locationCreated
   */
  locationCreated: PlaceType;

  /** Indicates the primary entity described in some page or other CreativeWork.
   * @see https://schema.org/mainEntity
   */
  mainEntity: ThingType;

  /** A maintainer of a {@link Dataset}, software package ({@link SoftwareApplication}), or other {@link Project}. A maintainer is a {@link Person} or {@link Organization} that manages contributions to, and/or publication of, some (typically complex) artifact. It is common for distributions of software and data to be based on "upstream" sources. When {@link maintainer} is applied to a specific version of something e.g. a particular version or packaging of a {@link Dataset}, it is always possible that the upstream source has a different maintainer. The {@link isBasedOn} property can be used to indicate such relationships between datasets to make the different maintenance roles clear. Similarly in the case of software, a package may have dedicated maintainers working on integration into software distributions such as Ubuntu, as well as upstream maintainers of the underlying work.
   * @see https://schema.org/maintainer
   */
  maintainer: OrganizationType | PersonType;

  /** A material that something is made from, e.g. leather, wool, cotton, paper.
   * @see https://schema.org/material
   */
  material: ProductType | Text | URL;

  /** The quantity of the materials being described or an expression of the physical space they occupy.
   * @see https://schema.org/materialExtent
   * @deprecated
   */
  materialExtent: QuantitativeValue | Text;

  /** Indicates that the CreativeWork contains a reference to, but is not necessarily about a concept.
   * @see https://schema.org/mentions
   */
  mentions: ThingType;

  /** An offer to provide this item—for example, an offer to sell a product, rent the DVD of a movie, perform a service, or give away tickets to an event. Use {@link businessFunction} to indicate the kind of transaction offered, i.e. sell, lease, etc. This property can also be used to describe a {@link Demand}. While this property is listed as expected on a number of common types, it can be used in others. In that case, using a second type, such as Product or a subtype of Product, can clarify the nature of the offer.
   * @see https://schema.org/offers
   */
  offers: Demand | OfferType;

  /** A pattern that something has, for example 'polka dot', 'striped', 'Canadian flag'. Values are typically expressed as text, although links to controlled value schemes are also supported.
   * @see https://schema.org/pattern
   * @deprecated
   */
  pattern: DefinedTermType | Text;

  /** The position of an item in a series or sequence of items.
   * @see https://schema.org/position
   */
  position: Integer | Text;

  /** The person or organization who produced the work (e.g. music album, movie, tv/radio series etc.).
   * @see https://schema.org/producer
   */
  producer: OrganizationType | PersonType;

  /** The service provider, service operator, or service performer; the goods producer. Another party (a seller) may offer those services or goods on behalf of the provider. A provider may also serve as the seller.
   * @see https://schema.org/provider
   * @deprecated
   */
  provider: OrganizationType | PersonType;

  /** A publication event associated with the item.
   * @see https://schema.org/publication
   */
  publication: PublicationEventType;

  /** The publisher of the creative work.
   * @see https://schema.org/publisher
   */
  publisher: OrganizationType | PersonType;

  /** The publishing division which published the comic.
   * @see https://schema.org/publisherImprint
   */
  publisherImprint: OrganizationType;

  /** The publishingPrinciples property indicates (typically via {@link URL}) a document describing the editorial principles of an {@link Organization} (or individual e.g. a {@link Person} writing a blog) that relate to their activities as a publisher, e.g. ethics or diversity policies. When applied to a {@link CreativeWork} (e.g. {@link NewsArticle}) the principles are those of the party primarily responsible for the creation of the {@link CreativeWork}.
   *
   * While such policies are most typically expressed in natural language, sometimes related information (e.g. indicating a {@link funder}) can be expressed using schema.org terminology.
   * @see https://schema.org/publishingPrinciples
   */
  publishingPrinciples: CreativeWorkType | URL;

  /** The Event where the CreativeWork was recorded. The CreativeWork may capture all or part of the event.
   * @see https://schema.org/recordedAt
   */
  recordedAt: EventType;

  /** The place and time the release was issued, expressed as a PublicationEvent.
   * @see https://schema.org/releasedEvent
   */
  releasedEvent: PublicationEventType;

  /** A review of the item.
   * @see https://schema.org/review
   */
  review: ReviewType;

  /** Indicates (by URL or string) a particular version of a schema used in some CreativeWork. This property was created primarily to indicate the use of a specific schema.org release, e.g. 10.0 as a simple string, or more explicitly via URL, https://schema.org/docs/releases.html#v10.0. There may be situations in which other schemas might usefully be referenced this way, e.g. http://dublincore.org/specifications/dublin-core/dces/1999-07-02/ but this has not been carefully explored in the community.
   * @see https://schema.org/schemaVersion
   */
  schemaVersion: Text | URL;

  /** Indicates the date on which the current structured data was generated / published. Typically used alongside {@link sdPublisher}.
   * @see https://schema.org/sdDatePublished
   */
  sdDatePublished: Date;

  /** A license document that applies to this structured data, typically indicated by URL.
   * @see https://schema.org/sdLicense
   * @deprecated
   */
  sdLicense: CreativeWorkType | URL;

  /** Indicates the party responsible for generating and publishing the current structured data markup, typically in cases where the structured data is derived automatically from existing published content but published on a different site. For example, student projects and open data initiatives often re-publish existing content with more explicitly structured metadata. The {@link sdPublisher} property helps make such practices more explicit.
   * @see https://schema.org/sdPublisher
   * @deprecated
   */
  sdPublisher: OrganizationType | PersonType;

  /** A standardized size of a product or creative work, specified either through a simple textual string (for example 'XL', '32Wx34L'), a QuantitativeValue with a unitCode, or a comprehensive and structured {@link SizeSpecification}; in other cases, the {@link width}, {@link height}, {@link depth} and {@link weight} properties may be more applicable.
   * @see https://schema.org/size
   */
  size: DefinedTermType | QuantitativeValue | SizeSpecification | Text;

  /** The Organization on whose behalf the creator was working.
   * @see https://schema.org/sourceOrganization
   */
  sourceOrganization: OrganizationType;

  /** The "spatial" property can be used in cases when more specific properties (e.g. {@link locationCreated}, {@link spatialCoverage}, {@link contentLocation}) are not known to be appropriate.
   * @see https://schema.org/spatial
   */
  spatial: PlaceType;

  /** The spatialCoverage of a CreativeWork indicates the place(s) which are the focus of the content. It is a subproperty of contentLocation intended primarily for more technical and detailed materials. For example with a Dataset, it indicates areas that the dataset describes: a dataset of New York weather would have spatialCoverage which was the place: the state of New York.
   * @see https://schema.org/spatialCoverage
   */
  spatialCoverage: PlaceType;

  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor: OrganizationType | PersonType;

  /** The item being described is intended to help a person learn the competency or learning outcome defined by the referenced term.
   * @see https://schema.org/teaches
   */
  teaches: DefinedTermType | Text;

  /** The "temporal" property can be used in cases where more specific properties (e.g. {@link temporalCoverage}, {@link dateCreated}, {@link dateModified}, {@link datePublished}) are not known to be appropriate.
   * @see https://schema.org/temporal
   */
  temporal: DateTime | Text;

  /** The temporalCoverage of a CreativeWork indicates the period that the content applies to, i.e. that it describes, either as a DateTime or as a textual string indicating a time period in {@link https://schema.org/temporalCoverage ISO 8601 time interval format}. In the case of a Dataset it will typically indicate the relevant time period in a precise notation (e.g. for a 2011 census dataset, the year 2011 would be written "2011/2012"). Other forms of content e.g. ScholarlyArticle, Book, TVSeries or TVEpisode may indicate their temporalCoverage in broader terms - textually or via well-known URL. Written works such as books may sometimes have precise temporal coverage too, e.g. a work set in 1939 - 1945 can be indicated in ISO 8601 interval format format via "1939/1945".
   *
   * Open-ended date ranges can be written with ".." in place of the end date. For example, "2015-11/.." indicates a range beginning in November 2015 and with no specified final date. This is tentative and might be updated in future when ISO 8601 is officially updated.
   * @see https://schema.org/temporalCoverage
   */
  temporalCoverage: DateTime | Text | URL;

  /** The textual content of this CreativeWork.
   * @see https://schema.org/text
   */
  text: Text;

  /** A thumbnail image relevant to the Thing.
   * @see https://schema.org/thumbnailUrl
   */
  thumbnailUrl: URL;

  /** Approximate or typical time it takes to work with or through this learning resource for the typical intended target audience, e.g. 'PT30M', 'PT1H25M'.
   * @see https://schema.org/timeRequired
   */
  timeRequired: Duration;

  /** The work that this work has been translated from. e.g. 物种起源 is a translationOf “On the Origin of Species”
   * @see https://schema.org/translationOfWork
   */
  translationOfWork: CreativeWorkType;

  /** Organization or person who adapts a creative work to different languages, regional differences and technical requirements of a target market, or that translates during some event.
   * @see https://schema.org/translator
   */
  translator: OrganizationType | PersonType;

  /** The typical expected age range, e.g. '7-9', '11-'.
   * @see https://schema.org/typicalAgeRange
   */
  typicalAgeRange: Text;

  /** The schema.org {@link usageInfo} property indicates further information about a {@link CreativeWork}. This property is applicable both to works that are freely available and to those that require payment or other transactions. It can reference additional information e.g. community expectations on preferred linking and citation conventions, as well as purchasing details. For something that can be commercially licensed, usageInfo can provide detailed, resource-specific information about licensing options.
   *
   * This property can be used alongside the license property which indicates license(s) applicable to some piece of content. The usageInfo property can provide information about other licensing options, e.g. acquiring commercial usage rights for an image that is also available under non-commercial creative commons licenses.
   * @see https://schema.org/usageInfo
   */
  usageInfo: CreativeWorkType | URL;

  /** The version of the CreativeWork embodied by a specified resource.
   * @see https://schema.org/version
   */
  version: Number | Text;

  /** An embedded video object.
   * @see https://schema.org/video
   */
  video: ClipType | VideoObjectType;

  /** Example/instance/realization/derivation of the concept of this creative work. eg. The paperback edition, first edition, or eBook.
   * @see https://schema.org/workExample
   */
  workExample: CreativeWorkType;

  /** A work that is a translation of the content of this work. e.g. 西遊記 has an English workTranslation “Journey to the West”,a German workTranslation “Monkeys Pilgerfahrt” and a Vietnamese translation Tây du ký bình khảo.
   * @see https://schema.org/workTranslation
   */
  workTranslation: CreativeWorkType;
}

/** The most generic kind of creative work, including books, movies, photographs, software programs, etc.
 * @see https://schema.org/CreativeWork
 */
export interface CreativeWork extends CreativeWorkProps {
  "@type": "CreativeWork";
}

export type CreativeWorkType = CreativeWork | AmpStory | BookType;
