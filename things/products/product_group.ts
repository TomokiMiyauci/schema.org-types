import { DefinedTermType } from "../intangibles/defined_terms/defined_term.ts";
import { Text } from "../../data_types.ts";
import { ProductProps, ProductType } from "./product.ts";
import { ThingProps } from "../thing.ts";

export interface ProductGroupProps extends ProductProps, ThingProps {
  /** Indicates a {@link Product} that is a member of this {@link ProductGroup} (or {@link ProductModel}).
   * @see https://schema.org/hasVariant
   * @deprecated
   */
  hasVariant: ProductType;

  /** Indicates a textual identifier for a ProductGroup.
   * @see https://schema.org/productGroupID
   * @deprecated
   */
  productGroupID: Text;

  /** Indicates the property or properties by which the variants in a {@link ProductGroup} vary, e.g. their size, color etc. Schema.org properties can be referenced by their short name e.g. "color"; terms defined elsewhere can be referenced with their URIs.
   * @see https://schema.org/variesBy
   * @deprecated
   */
  variesBy: DefinedTermType | Text;
}

/** A ProductGroup represents a group of {@link Product}s that vary only in certain well-described ways, such as by {@link size}, {@link color}, {@link material} etc.
 *
 * While a ProductGroup itself is not directly offered for sale, the various varying products that it represents can be. The ProductGroup serves as a prototype or template, standing in for all of the products who have an {@link isVariantOf} relationship to it. As such, properties (including additional types) can be applied to the ProductGroup to represent characteristics shared by each of the (possibly very many) variants. Properties that reference a ProductGroup are not included in this mechanism; neither are the following specific properties {@link variesBy}, {@link hasVariant}, {@link url}.
 * @see https://schema.org/ProductGroup
 * @deprecated
 */
export interface ProductGroup extends ProductGroupProps {
  "@type": "ProductGroup";
}
