import { Occupation } from "./things/intangibles/occupation.ts";
import { EducationalOrganization } from "./things/organizations/educational_organizations/educational_organization.ts";
import { CivicStructure } from "./things/places/civic_structures/civic_structure.ts";
import { Person } from "./things/persons/person.ts";
import { EntryPoint } from "./things/intangibles/entry_point.ts";
import { Action } from "./things/actions/action.ts";
import { EducationalOccupationalCredential } from "./things/creative_works/educational_occupational_credential.ts";
import { Article } from "./things/creative_works/articles/article.ts";
import { ProgramMembership } from "./things/intangibles/program_membership.ts";
import { OwnershipInfo } from "./things/intangibles/structured_values/ownership_info.ts";
import { Organization } from "./things/organizations/organization.ts";
import { AboutPage } from "./things/creative_works/web_pages/about_page.ts";
import { DataFeedItem } from "./things/creative_works/data_feed_item.ts";
import { DataDownload } from "./things/creative_works/media_objects/data_download.ts";
import { DataFeed } from "./things/creative_works/datasets/data_feeds/data_feed.ts";
import { Dataset } from "./things/creative_works/datasets/dataset.ts";
import { DataCatalog } from "./things/creative_works/data_catalog.ts";
import { SoftwareApplication } from "./things/creative_works/software_applications/software_application.ts";
import { BroadcastChannel } from "./things/intangibles/broadcast_channels/broadcast_channel.ts";
import { CableOrSatelliteService } from "./things/intangibles/services/cable_or_satellite_service.ts";
import { BroadcastFrequencySpecification } from "./things/intangibles/broadcast_frequency_specification.ts";
import { Comment } from "./things/creative_works/comments/comment.ts";
import { BroadcastService } from "./things/intangibles/services/broadcast_services/broadcast_service.ts";
import { Claim } from "./things/creative_works/claim.ts";
import { PublicationEvent } from "./things/events/publication_events/publication_event.ts";
import { AlignmentObject } from "./things/intangibles/alignment_object.ts";
import { InteractionCounter } from "./things/intangibles/structured_values/interaction_counter.ts";
import { VirtualLocation } from "./things/intangibles/virtual_location.ts";
import { CreativeWork } from "./things/creative_works/creative_work.ts";
import { CorrectionComment } from "./things/creative_works/comments/correction_comment.ts";
import { PaymentCard } from "./things/intangibles/services/financial_products/payment_cards/payment_card.ts";
import { MerchantReturnPolicySeasonalOverride } from "./things/intangibles/merchant_return_policy_seasonal_override.ts";
import { MerchantReturnPolicy } from "./things/intangibles/merchant_return_policy.ts";
import { PostalCodeRangeSpecification } from "./things/intangibles/structured_values/postal_code_range_specification.ts";
import { DefinedRegion } from "./things/intangibles/structured_values/defined_region.ts";
import { ShippingDeliveryTime } from "./things/intangibles/structured_values/shipping_delivery_time.ts";
import { OfferShippingDetails } from "./things/intangibles/structured_values/offer_shipping_details.ts";
import { Offer } from "./things/intangibles/offers/offer.ts";
import { RepaymentSpecification } from "./things/intangibles/structured_values/repayment_specification.ts";
import { LoanOrCredit } from "./things/intangibles/services/financial_products/loan_or_credits/loan_or_credit.ts";
import { MonetaryAmount } from "./things/intangibles/structured_values/monetary_amount.ts";
import { NutritionInformation } from "./things/intangibles/structured_values/nutrition_information.ts";
import { Mass } from "./things/intangibles/quantities/mass.ts";
import { Energy } from "./things/intangibles/quantities/energy.ts";
import { MenuSection } from "./things/creative_works/menu_section.ts";
import { MenuItem } from "./things/intangibles/menu_item.ts";
import { AggregateOffer } from "./things/intangibles/offers/aggregate_offer.ts";
import { FinancialProduct } from "./things/intangibles/services/financial_products/financial_product.ts";
import { TypeAndQuantityNode } from "./things/intangibles/structured_values/type_and_quantity_node.ts";
import { WarrantyPromise } from "./things/intangibles/structured_values/warranty_promisel.ts";
import { PriceSpecification } from "./things/intangibles/structured_values/price_specifications/price_specification.ts";
import { Trip } from "./things/intangibles/trips/trip.ts";
import { Demand } from "./things/intangibles/demand.ts";
import { HealthPlanFormulary } from "./things/intangibles/health_plan_formulary.ts";
import { HealthPlanNetwork } from "./things/intangibles/health_plan_network.ts";
import { HealthInsurancePlan } from "./things/intangibles/health_insurance_plan.ts";
import { ServiceChannel } from "./things/intangibles/service_channel.ts";
import { Service } from "./things/intangibles/services/service.ts";
import { OfferCatalog } from "./things/intangibles/list_items/offer_catalog.ts";
import { DrugClass } from "./things/medical_entities/drug_class.ts";
import { DrugStrength } from "./things/medical_entities/medical_intangibles/drug_strength.ts";
import { Drug } from "./things/medical_entities/substances/drug.ts";
import { AnatomicalSystem } from "./things/medical_entities/anatomical_system.ts";
import { MedicalDevice } from "./things/medical_entities/medical_device.ts";
import { MedicalRiskFactor } from "./things/medical_entities/medical_risk_factor.ts";
import { SuperficialAnatomy } from "./things/medical_entities/superficial_anatomy.ts";
import { AnatomicalStructure } from "./things/medical_entities/anatomical_structures/anatomical_structure.ts";
import { MedicalSignOrSymptom } from "./things/medical_entities/medical_conditions/medical_sign_or_symptoms/medical_sign_or_symptom.ts";
import { MedicalSign } from "./things/medical_entities/medical_conditions/medical_sign_or_symptoms/medical_signs/medical_sign.ts";
import { DDxElement } from "./things/medical_entities/medical_intangibles/d_dx_element.ts";
import { MedicalConditionStage } from "./things/medical_entities/medical_intangibles/medical_condition_stage.ts";
import { DoseSchedule } from "./things/medical_entities/medical_intangibles/dose_schedules/dose_schedule.ts";
import { MaximumDoseSchedule } from "./things/medical_entities/medical_intangibles/dose_schedules/maximum_dose_schedule.ts";
import { MedicalProcedure } from "./things/medical_entities/medical_procedures/medical_procedure.ts";
import { TherapeuticProcedure } from "./things/medical_entities/medical_procedures/therapeutic_procedures/therapeutic_procedure.ts";
import { MedicalTherapy } from "./things/medical_entities/medical_procedures/therapeutic_procedures/medical_therapies/medical_therapy.ts";
import { MedicalContraindication } from "./things/medical_entities/medical_contraindication.ts";
import { MedicalTest } from "./things/medical_entities/medical_tests/medical_test.ts";
import { Substance } from "./things/medical_entities/substances/substance.ts";
import { MedicalCondition } from "./things/medical_entities/medical_conditions/medical_condition.ts";
import { Taxon } from "./things/taxon.ts";
import { Gene } from "./things/bio_chem_entities/gene.ts";
import { BioChemEntity } from "./things/bio_chem_entities/bio_chem_entity.ts";
import { CategoryCodeSet } from "./things/creative_works/defined_term_sets/category_code_set.ts";
import { EnergyConsumptionDetails } from "./things/intangibles/energy_consumption_details.ts";
import { QualitativeValue } from "./things/intangibles/enumerations/qualitative_values/qualitative_value.ts";
import { SizeSpecification } from "./things/intangibles/enumerations/qualitative_values/size_specification.ts";
import { StructuredValue } from "./things/intangibles/structured_values/structured_value.ts";
import { QuantitativeValue } from "./things/intangibles/structured_values/quantitative_value.ts";
import { MedicalGuideline } from "./things/medical_entities/medical_guidelines/medical_guideline.ts";
import { DrugLegalStatus } from "./things/medical_entities/medical_intangibles/drug_legal_status.ts";
import { MedicalStudy } from "./things/medical_entities/medical_studies/medical_study.ts";
import { MedicalEntity } from "./things/medical_entities/medical_entity.ts";
import { MedicalCode } from "./things/medical_entities/medical_intangibles/medical_code.ts";
import { Property } from "./things/intangibles/property.ts";
import { WebContent } from "./things/creative_works/web_contents/web_content.ts";
import { Enumeration } from "./things/intangibles/enumerations/enumeration.ts";
import { Class } from "./things/intangibles/class.ts";
import { Distance } from "./things/intangibles/quantities/distance.ts";
import { Grant } from "./things/intangibles/grants/grant.ts";
import { CategoryCode } from "./things/intangibles/defined_terms/category_codes/category_code.ts";
import { Review } from "./things/creative_works/reviews/review.ts";
import { Brand } from "./things/intangibles/brand.ts";
import { ProductModel } from "./things/products/product_model.ts";
import { ProductGroup } from "./things/products/product_group.ts";
import { Product } from "./things/products/product.ts";
import { GeoShape } from "./things/intangibles/structured_values/geo_shapes/geo_shape.ts";
import { OpeningHoursSpecification } from "./things/intangibles/structured_values/opening_hours_specification.ts";
import { GeoCoordinates } from "./things/intangibles/structured_values/geo_coordinates.ts";
import { ContactPoint } from "./things/intangibles/structured_values/contact_points/contact_point.ts";
import { Language } from "./things/intangibles/language.ts";
import { Country } from "./things/places/administrative_areas/country.ts";
import { GeospatialGeometry } from "./things/intangibles/geospatial_geometry.ts";
import { LocationFeatureSpecification } from "./things/intangibles/structured_values/property_values/location_feature_specification.ts";
import { PostalAddress } from "./things/intangibles/structured_values/contact_points/postal_address.ts";
import { Place } from "./things/places/place.ts";
import { Episode } from "./things/creative_works/episodes/episode.ts";
import { Clip } from "./things/creative_works/clips/clip.ts";
import { VideoObject } from "./things/creative_works/media_objects/video_objects/video_object.ts";
import { AdministrativeArea } from "./things/places/administrative_areas/administrative_area.ts";
import { MusicComposition } from "./things/creative_works/music_composition.ts";
import { MusicGroup } from "./things/organizations/performing_groups/music_group.ts";
import { CreativeWorkSeries } from "./things/creative_works/creative_work_series/creative_work_series.ts";
import { CreativeWorkSeason } from "./things/creative_works/creative_work_seasons/creative_work_season.ts";
import { MusicRecording } from "./things/creative_works/music_recording.ts";
import { MusicPlaylist } from "./things/creative_works/music_playlists/music_playlist.ts";
import { MusicRelease } from "./things/creative_works/music_playlists/music_release.ts";
import { MusicAlbum } from "./things/creative_works/music_playlists/music_album.ts";
import { Thing } from "./things/thing.ts";
import { BreadcrumbList } from "./things/creative_works/item_lists/breadcrumb_list.ts";
import { WebPage } from "./things/creative_works/web_pages/web_page.ts";
import { Book } from "./things/creative_works/books/book.ts";
import { Rating } from "./things/intangibles/ratings/rating.ts";
import { AggregateRating } from "./things/intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { DefinedTermSet } from "./things/creative_works/defined_term_sets/defined_term_set.ts";
import { DefinedTerm } from "./things/intangibles/defined_terms/defined_term.ts";
import { Audience } from "./things/intangibles/audiences/audience.ts";
import { AudioObject } from "./things/creative_works/media_objects/audio_objects/audio_object.ts";
import { HyperTocEntry } from "./things/creative_works/hyper_toc_entry.ts";
import { Duration } from "./things/intangibles/quantities/duration.ts";
import { ArrayableWithoutSyntaxToken, DeepPartial } from "./utils.ts";

type SyntaxToken = {
  /** Used to define the short-hand names that are used throughout a JSON-LD document.
   * @see https://www.w3.org/TR/json-ld11/#the-context
   */
  // deno-lint-ignore ban-types
  "@context": "https://schema.org" | ({} & string);

  /** Used to set the type of a node or the datatype of a typed value.
   * @see https://www.w3.org/TR/json-ld11/#specifying-the-type
   */
  "@type": string;
};

type SchemaOrg =
  & SyntaxToken
  & (
    | DeepPartial<ArrayableWithoutSyntaxToken<Thing>>
    | DeepPartial<ArrayableWithoutSyntaxToken<BreadcrumbList>>
    | DeepPartial<ArrayableWithoutSyntaxToken<WebPage>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Book>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Rating>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AggregateRating>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DefinedTermSet>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DefinedTerm>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Audience>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AudioObject>>
    | DeepPartial<ArrayableWithoutSyntaxToken<HyperTocEntry>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Duration>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MusicAlbum>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MusicRelease>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MusicPlaylist>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MusicRecording>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CreativeWorkSeason>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CreativeWorkSeries>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MusicGroup>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MusicComposition>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AdministrativeArea>>
    | DeepPartial<ArrayableWithoutSyntaxToken<VideoObject>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Clip>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Episode>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Place>>
    | DeepPartial<ArrayableWithoutSyntaxToken<PostalAddress>>
    | DeepPartial<ArrayableWithoutSyntaxToken<LocationFeatureSpecification>>
    | DeepPartial<ArrayableWithoutSyntaxToken<GeospatialGeometry>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Country>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Language>>
    | DeepPartial<ArrayableWithoutSyntaxToken<ContactPoint>>
    | DeepPartial<ArrayableWithoutSyntaxToken<GeoCoordinates>>
    | DeepPartial<ArrayableWithoutSyntaxToken<OpeningHoursSpecification>>
    | DeepPartial<ArrayableWithoutSyntaxToken<GeoShape>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Product>>
    | DeepPartial<ArrayableWithoutSyntaxToken<ProductGroup>>
    | DeepPartial<ArrayableWithoutSyntaxToken<ProductModel>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Brand>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Review>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CategoryCode>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Grant>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Distance>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Class>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Enumeration>>
    | DeepPartial<ArrayableWithoutSyntaxToken<WebContent>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Property>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalCode>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalEntity>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalStudy>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DrugLegalStatus>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalGuideline>>
    | DeepPartial<ArrayableWithoutSyntaxToken<QuantitativeValue>>
    | DeepPartial<ArrayableWithoutSyntaxToken<StructuredValue>>
    | DeepPartial<ArrayableWithoutSyntaxToken<SizeSpecification>>
    | DeepPartial<ArrayableWithoutSyntaxToken<QualitativeValue>>
    | DeepPartial<ArrayableWithoutSyntaxToken<EnergyConsumptionDetails>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CategoryCodeSet>>
    | DeepPartial<ArrayableWithoutSyntaxToken<BioChemEntity>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Gene>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Taxon>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalCondition>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Substance>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalTest>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalContraindication>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalTherapy>>
    | DeepPartial<ArrayableWithoutSyntaxToken<TherapeuticProcedure>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalProcedure>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MaximumDoseSchedule>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DoseSchedule>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalConditionStage>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DDxElement>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalSign>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalSignOrSymptom>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AnatomicalStructure>>
    | DeepPartial<ArrayableWithoutSyntaxToken<SuperficialAnatomy>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalRiskFactor>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MedicalDevice>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AnatomicalSystem>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Drug>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DrugStrength>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DrugClass>>
    | DeepPartial<ArrayableWithoutSyntaxToken<OfferCatalog>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Service>>
    | DeepPartial<ArrayableWithoutSyntaxToken<ServiceChannel>>
    | DeepPartial<ArrayableWithoutSyntaxToken<HealthInsurancePlan>>
    | DeepPartial<ArrayableWithoutSyntaxToken<HealthPlanNetwork>>
    | DeepPartial<ArrayableWithoutSyntaxToken<HealthPlanFormulary>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Demand>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Trip>>
    | DeepPartial<ArrayableWithoutSyntaxToken<PriceSpecification>>
    | DeepPartial<ArrayableWithoutSyntaxToken<WarrantyPromise>>
    | DeepPartial<ArrayableWithoutSyntaxToken<TypeAndQuantityNode>>
    | DeepPartial<ArrayableWithoutSyntaxToken<FinancialProduct>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AggregateOffer>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MenuItem>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MenuSection>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Energy>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Mass>>
    | DeepPartial<ArrayableWithoutSyntaxToken<NutritionInformation>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MonetaryAmount>>
    | DeepPartial<ArrayableWithoutSyntaxToken<LoanOrCredit>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Offer>>
    | DeepPartial<ArrayableWithoutSyntaxToken<RepaymentSpecification>>
    | DeepPartial<ArrayableWithoutSyntaxToken<OfferShippingDetails>>
    | DeepPartial<ArrayableWithoutSyntaxToken<ShippingDeliveryTime>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DefinedRegion>>
    | DeepPartial<ArrayableWithoutSyntaxToken<PostalCodeRangeSpecification>>
    | DeepPartial<ArrayableWithoutSyntaxToken<MerchantReturnPolicy>>
    | DeepPartial<
      ArrayableWithoutSyntaxToken<MerchantReturnPolicySeasonalOverride>
    >
    | DeepPartial<ArrayableWithoutSyntaxToken<PaymentCard>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CorrectionComment>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CreativeWork>>
    | DeepPartial<ArrayableWithoutSyntaxToken<VirtualLocation>>
    | DeepPartial<ArrayableWithoutSyntaxToken<InteractionCounter>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AlignmentObject>>
    | DeepPartial<ArrayableWithoutSyntaxToken<PublicationEvent>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Claim>>
    | DeepPartial<ArrayableWithoutSyntaxToken<BroadcastService>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Comment>>
    | DeepPartial<ArrayableWithoutSyntaxToken<BroadcastFrequencySpecification>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CableOrSatelliteService>>
    | DeepPartial<ArrayableWithoutSyntaxToken<BroadcastChannel>>
    | DeepPartial<ArrayableWithoutSyntaxToken<SoftwareApplication>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DataCatalog>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Dataset>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DataFeed>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DataDownload>>
    | DeepPartial<ArrayableWithoutSyntaxToken<DataFeedItem>>
    | DeepPartial<ArrayableWithoutSyntaxToken<AboutPage>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Organization>>
    | DeepPartial<ArrayableWithoutSyntaxToken<OwnershipInfo>>
    | DeepPartial<ArrayableWithoutSyntaxToken<ProgramMembership>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Article>>
    | DeepPartial<
      ArrayableWithoutSyntaxToken<EducationalOccupationalCredential>
    >
    | DeepPartial<ArrayableWithoutSyntaxToken<Action>>
    | DeepPartial<ArrayableWithoutSyntaxToken<EntryPoint>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Person>>
    | DeepPartial<ArrayableWithoutSyntaxToken<CivicStructure>>
    | DeepPartial<ArrayableWithoutSyntaxToken<EducationalOrganization>>
    | DeepPartial<ArrayableWithoutSyntaxToken<Occupation>>
  );

export default SchemaOrg;
