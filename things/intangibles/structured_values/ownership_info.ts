import { ServiceType } from "../services/service.ts";
import { ProductType } from "../../products/product.ts";
import { DateTime } from "../../../data_types.ts";
import { PersonType } from "../../persons/person.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { ThingProps } from "../../thing.ts";

export interface OwnershipInfoProps extends ThingProps {
  /** The organization or person from which the product was acquired.
   * @see https://schema.org/acquiredFrom
   */
  acquiredFrom: OrganizationType | PersonType;

  /** The date and time of obtaining the product.
   * @see https://schema.org/OwnershipInfo
   */
  ownedFrom: DateTime;

  /** The date and time of giving up ownership on the product.
   * @see https://schema.org/ownedThrough
   */
  ownedThrough: DateTime;

  /** The product that this structured value is referring to.
   * @see https://schema.org/typeOfGood
   */
  typeOfGood: ProductType | ServiceType;
}

/** A structured value providing information about when a certain organization or person owned a certain product.
 * @see https://schema.org/OwnershipInfo
 */
export interface OwnershipInfo extends OwnershipInfoProps {
  "@type": "OwnershipInfo";
}
