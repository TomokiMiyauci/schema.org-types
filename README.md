# schema.org-types

Definition of types of [Schema.org](https://schema.org/) with
[JSON-LD](https://json-ld.org/).

## Example

```tsx
import { SchemaOrg } from "https://deno.land/x/schema_org_types/mod.ts";
const schemaOrg: SchemaOrg = {
  "@context": "https://schema.org/",
  "@type": "Thing",
  name: "Schema.org Ontology",
  subjectOf: {
    "@type": "Book",
    name: "The Complete History of Schema.org",
  },
};

<script type="application/ld+json">
  {JSON.stringify(schemaOrg, null, 2)};
</script>;
```
