import { ProductType } from "../../products/product.ts";
import { PersonType } from "../../persons/person.ts";
import { OrganizationType } from "../../organizations/organization.ts";
import { MedicalEntityType } from "../../medical_entities/medical_entity.ts";
import { EventType } from "../../events/event.ts";
import { CreativeWorkType } from "../../creative_works/creative_work.ts";
import { BioChemEntityType } from "../../bio_chem_entities/bio_chem_entity.ts";
import { ThingProps } from "../../thing.ts";

export interface GrantProps extends ThingProps {
  /** Indicates something directly or indirectly funded or sponsored through a {@link Grant}. See also {@link ownershipFundingInfo}.
   * @see https://schema.org/fundedItem
   */
  fundedItem:
    | BioChemEntityType
    | CreativeWorkType
    | EventType
    | MedicalEntityType
    | OrganizationType
    | PersonType
    | ProductType;

  /** A person or organization that supports (sponsors) something through some kind of financial contribution.
   * @see https://schema.org/funder
   */
  funder: OrganizationType | PersonType;

  /** A person or organization that supports a thing through a pledge, promise, or financial contribution. e.g. a sponsor of a Medical Study or a corporate sponsor of an event.
   * @see https://schema.org/sponsor
   */
  sponsor: OrganizationType | PersonType;
}

/** A grant, typically financial or otherwise quantifiable, of resources. Typically a {@link funder} sponsors some {@link MonetaryAmount} to an {@link Organization} or {@link Person}, sometimes not necessarily via a dedicated or long-lived {@link Project}, resulting in one or more outputs, or {@link fundedItems}. For financial sponsorship, indicate the {@link funder} of a {@link MonetaryGrant}. For non-financial support, indicate {@link sponsor} of {@link Grant}s of resources (e.g. office space).
 *
 * Grants support activities directed towards some agreed collective goals, often but not always organized as {@link Project}s. Long-lived projects are sometimes sponsored by a variety of grants over time, but it is also common for a project to be associated with a single grant.
 *
 * The amount of a {@link Grant} is represented using {@link amount} as a {@link MonetaryAmount}.
 * @see https://schema.org/Grant
 * @deprecated
 */
export interface Grant extends GrantProps {
  "@type": "Grant";
}

export type GrantType = Grant;
