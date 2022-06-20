type Primitive = string | number | null | boolean;

export default interface JSONLD {
  [k: string]: Primitive | JSONLD;
}
