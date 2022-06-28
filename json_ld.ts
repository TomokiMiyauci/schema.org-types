import { Arrayable } from "./utils.ts";

export type JSONPrimitive = string | number | null | boolean;

export default interface JSONLD {
  [k: string]: Arrayable<JSONPrimitive | JSONLD>;
}
