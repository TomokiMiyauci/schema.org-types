export type Arrayable<T> = T | T[];

export type ArrayableProps<T, K extends keyof T = keyof T> = {
  [k in K]: Arrayable<T[k]>;
};

export type DeepPartial<T> = {
  readonly [P in keyof T]?: keyof T[P] extends never ? T[P] : DeepPartial<T[P]>;
};

export type RemoveIndexSignature<T> = {
  [k in keyof T as k extends `${infer K}` ? K : never]: T[k];
};

export type ArrayableWithoutSyntaxToken<T extends Record<"@type", unknown>> =
  & ArrayableProps<T, Exclude<keyof RemoveIndexSignature<T>, "@type">>
  & Pick<T, "@type">;
