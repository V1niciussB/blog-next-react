import { styleText } from "util";

export function logColor(...msg: (string | number)[]) {
  const messages = msg
    .map((message) => styleText(["bgBlue", "whiteBright"], `${message}`))
    .join(" ");
  console.log(styleText("green", messages));
}
