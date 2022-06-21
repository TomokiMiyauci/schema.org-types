import { ProductGroup } from "./product_group.ts";
import { ProductProps } from "./product.ts";
import { ThingProps } from "../thing.ts";

export interface ProductModelProps extends ProductProps, ThingProps {
  /** Indicates the kind of product that this is a variant of. In the case of {@link ProductModel}, this is a pointer (from a ProductModel) to a base product from which this product is a variant. It is safe to infer that the variant inherits all product features from the base model, unless defined locally. This is not transitive. In the case of a {@link ProductGroup}, the group description also serves as a template, representing a set of Products that vary on explicitly defined, specific dimensions only (so it defines both a set of variants, as well as which values distinguish amongst those variants). When used with {@link ProductGroup}, this property can apply to any {@link Product} included in the group.
   * @see https://schema.org/isVariantOf
   */
  isVariantOf: ProductGroup | ProductModel;

  /** A pointer from a previous, often discontinued variant of the product to its newer variant.
   * @see https://schema.org/predecessorOf
   */
  predecessorOf: ProductModel;

  /** A pointer from a newer variant of a product to its previous, often discontinued predecessor.
   * @see https://schema.org/successorOf
   */
  successorOf: ProductModel;
}

/** A datasheet or vendor specification of a product (in the sense of a prototypical description).
 * @see https://schema.org/ProductModel
 */
export interface ProductModel extends ProductModelProps {
  "@type": "ProductModel";
}
