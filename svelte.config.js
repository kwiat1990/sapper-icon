import autoProcess from "svelte-preprocess";

const production = process.env.NODE_ENV === "production";

export const preprocess = autoProcess({
  sourceMap: !production,
  defaults: {
    style: "scss",
  },
  postcss: true,
});