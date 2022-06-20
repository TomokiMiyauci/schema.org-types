import { ThingProps, ThingType } from "./thing.ts";

export interface ActionProps extends ThingProps {
  /** For failed actions, more information on the cause of the failure.
   * @see https://schema.org/error
   */
  error: ThingType;
}

/** An action performed by a direct agent and indirect participants upon a direct object. Optionally happens at a location with the help of an inanimate instrument. The execution of the action may produce a result. Specific action sub-type documentation specifies the exact expectation of each argument/role.
 * @see {@link http://blog.schema.org/2014/04/announcing-schemaorg-actions.html blog post} and {@link http://blog.schema.org/2014/04/announcing-schemaorg-actions.html Actions overview document}.
 */
export interface Action extends ActionProps {
  "@type": "Action";
}

export type ActionType = Action;
