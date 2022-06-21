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
import { WebPage } from "./things/creative_works/web_page.ts";
import { Book } from "./things/creative_works/books/book.ts";
import { Rating } from "./things/intangibles/ratings/rating.ts";
import { AggregateRating } from "./things/intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { DefinedTermSet } from "./things/creative_works/defined_term_sets/defined_term_set.ts";
import { DefinedTerm } from "./things/intangibles/defined_terms/defined_term.ts";
import { Audience } from "./things/intangibles/audiences/audience.ts";
import { AudioObject } from "./things/creative_works/media_objects/audio_objects/audio_object.ts";
import { HyperTocEntry } from "./things/creative_works/hyper_toc_entry.ts";
import { Duration } from "./things/intangibles/quantities/duration.ts";

type DeepPartial<T> = {
  readonly [P in keyof T]?: keyof T[P] extends never ? T[P] : DeepPartial<T[P]>;
};

type SchemaOrg =
  & { "@context": "https://schema.org" }
  & (
    | DeepPartial<Thing>
    | DeepPartial<BreadcrumbList>
    | DeepPartial<WebPage>
    | DeepPartial<Book>
    | DeepPartial<Rating>
    | DeepPartial<AggregateRating>
    | DeepPartial<DefinedTermSet>
    | DeepPartial<DefinedTerm>
    | DeepPartial<Audience>
    | DeepPartial<AudioObject>
    | DeepPartial<HyperTocEntry>
    | DeepPartial<Duration>
    | DeepPartial<MusicAlbum>
    | DeepPartial<MusicRelease>
    | DeepPartial<MusicPlaylist>
    | DeepPartial<MusicRecording>
    | DeepPartial<CreativeWorkSeason>
    | DeepPartial<CreativeWorkSeries>
    | DeepPartial<MusicGroup>
    | DeepPartial<MusicComposition>
    | DeepPartial<AdministrativeArea>
    | DeepPartial<VideoObject>
    | DeepPartial<Clip>
    | DeepPartial<Episode>
    | DeepPartial<Place>
    | DeepPartial<PostalAddress>
    | DeepPartial<LocationFeatureSpecification>
    | DeepPartial<GeospatialGeometry>
    | DeepPartial<Country>
    | DeepPartial<Language>
    | DeepPartial<ContactPoint>
    | DeepPartial<GeoCoordinates>
    | DeepPartial<OpeningHoursSpecification>
    | DeepPartial<GeoShape>
    | DeepPartial<Product>
    | DeepPartial<ProductGroup>
    | DeepPartial<ProductModel>
    | DeepPartial<Brand>
    | DeepPartial<Review>
    | DeepPartial<CategoryCode>
    | DeepPartial<Grant>
    | DeepPartial<Distance>
    | DeepPartial<Class>
    | DeepPartial<Enumeration>
    | DeepPartial<WebContent>
    | DeepPartial<Property>
    | DeepPartial<MedicalCode>
    | DeepPartial<MedicalEntity>
    | DeepPartial<MedicalStudy>
    | DeepPartial<DrugLegalStatus>
    | DeepPartial<MedicalGuideline>
    | DeepPartial<QuantitativeValue>
    | DeepPartial<StructuredValue>
    | DeepPartial<SizeSpecification>
    | DeepPartial<QualitativeValue>
    | DeepPartial<EnergyConsumptionDetails>
    | DeepPartial<CategoryCodeSet>
    | DeepPartial<BioChemEntity>
  );

export default SchemaOrg;
