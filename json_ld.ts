type Primitive = string | number | null | boolean;

export default interface JSONLD {
  "@type": Primitive | JSONLD;
  "@context": Primitive | JSONLD;

  [k: string]: Primitive | JSONLD;
}
