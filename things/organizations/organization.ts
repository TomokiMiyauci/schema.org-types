import { ThingProps } from "../thing.ts";
import { CreativeWorkType } from "../creative_works/creative_work.ts";
import { URL } from "../../data_types.ts";

export interface OrganizationProps extends ThingProps {
  /** For a {@link NewsMediaOrganization} or other news-related {@link Organization}, a statement about public engagement activities (for news media, the newsroom’s), including involving the public - digitally or otherwise -- in coverage decisions, reporting and activities after publication.
   * @see https://schema.org/actionableFeedbackPolicy
   */
  actionableFeedbackPolicy: CreativeWorkType | URL;
}

/** An organization such as a school, NGO, corporation, club, etc.
 * @see https://schema.org/Organization
 */
export interface Organization extends OrganizationProps {
  "@type": "Organization";
}
