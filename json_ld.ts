import { Arrayable } from "./utils.ts";

type Primitive = string | number | null | boolean;

export default interface JSONLD {
  [k: string]: Arrayable<Primitive | JSONLD>;
}
