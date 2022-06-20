import { Thing } from "./things/thing.ts";
import { BreadcrumbList } from "./things/creative_works/item_lists/breadcrumb_list.ts";
import { WebPage } from "./things/creative_works/web_page.ts";

type DeepPartial<T> = {
  readonly [P in keyof T]?: keyof T[P] extends never ? T[P] : DeepPartial<T[P]>;
};

type SchemaOrg =
  & { "@context": "https://schema.org" }
  & (
    | DeepPartial<Thing>
    | DeepPartial<BreadcrumbList>
    | DeepPartial<WebPage>
  );

export default SchemaOrg;
