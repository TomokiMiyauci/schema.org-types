import { Thing } from "./things/thing.ts";
import { BreadcrumbList } from "./things/creative_works/item_lists/breadcrumb_list.ts";
import { WebPage } from "./things/creative_works/web_page.ts";
import { Book } from "./things/creative_works/books/book.ts";
import { Rating } from "./things/intangibles/ratings/rating.ts";
import { AggregateRating } from "./things/intangibles/ratings/aggregate_ratings/aggregate_rating.ts";
import { DefinedTermSet } from "./things/creative_works/defined_term_sets/defined_term_set.ts";
import { DefinedTerm } from "./things/intangibles/defined_terms/defined_term.ts";

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
  );

export default SchemaOrg;
