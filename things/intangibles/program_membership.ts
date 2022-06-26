import { QuantitativeValue } from "./structured_values/quantitative_value.ts";
import { Number, Text } from "../../data_types.ts";
import { PersonType } from "../persons/person.ts";
import { OrganizationType } from "../organizations/organization.ts";
import { ThingProps } from "../thing.ts";

export interface ProgramMembershipProps extends ThingProps {
  /** The organization (airline, travelers' club, etc.) the membership is made with.
   * @see https://schema.org/hostingOrganization
   */
  hostingOrganization: OrganizationType;

  /** A member of an Organization or a ProgramMembership. Organizations can be members of organizations; ProgramMembership is typically for individuals.
   * @see https://schema.org/member
   */
  member: OrganizationType | PersonType;

  /** A unique identifier for the membership.
   * @see https://schema.org/membershipNumber
   */
  membershipNumber: Text;

  /** The number of membership points earned by the member. If necessary, the unitText can be used to express the units the points are issued in. (e.g. stars, miles, etc.)
   * @see https://schema.org/membershipPointsEarned
   * @deprecated
   */
  membershipPointsEarned: Number | QuantitativeValue;

  /** The program providing the membership.
   * @see https://schema.org/programName
   */
  programName: Text;
}

/** Used to describe membership in a loyalty programs (e.g. "StarAliance"), traveler clubs (e.g. "AAA"), purchase clubs ("Safeway Club"), etc.
 * @see https://schema.org/ProgramMembership
 */
export interface ProgramMembership extends ProgramMembershipProps {
  "@type": "ProgramMembership";
}
