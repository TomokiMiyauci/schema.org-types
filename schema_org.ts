import { Thing } from "./thing.ts";
import { BreadcrumbList } from "./breadcrumb_list.ts";

type DeepPartial<T> = {
  readonly [P in keyof T]?: keyof T[P] extends never ? T[P] : DeepPartial<T[P]>;
};

type SchemaOrg = (
  & { "@context": "https://schema.org" }
  & (
    | DeepPartial<Thing>
    | DeepPartial<BreadcrumbList>
  )
);

export default SchemaOrg;
