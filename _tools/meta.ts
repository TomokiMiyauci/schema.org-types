import { BuildOptions } from "https://deno.land/x/dnt@0.26.0/mod.ts";

export const makeOptions = (version: string): BuildOptions => ({
  test: false,
  shims: {
    deno: false,
  },
  typeCheck: true,
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  package: {
    name: "schema.org-types",
    version,
    description: "Types for schema.org with JSON-LD",
    keywords: [
      "schema.org",
      "json-ld",
      "types",
    ],
    license: "MIT",
    homepage: "https://github.com/TomokiMiyauci/schema.org-types",
    repository: {
      type: "git",
      url: "git+https://github.com/TomokiMiyauci/schema.org-types.git",
    },
    bugs: {
      url: "https://github.com/TomokiMiyauci/schema.org-types/issues",
    },
    sideEffects: false,
    type: "module",
  },
  packageManager: "pnpm",
});
