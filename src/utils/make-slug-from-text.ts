import slugify from "slugify";
import { makeRamdomString } from "./make-random-strings";

export const makeSlugFromText = (text: string) => {
  const slug = slugify(text, {
    lower: true,
    strict: true,
    trim: true,
  });

  return `${slug}-${makeRamdomString()}`;
};
