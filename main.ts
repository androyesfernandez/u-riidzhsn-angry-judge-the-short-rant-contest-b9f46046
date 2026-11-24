// Angry Judge: The Short Rant Contest — a program that writes one 236-character
// rant about a four-minute voice note to /output/entry.txt. The rant keeps the
// judge's anger pointed at the padding, not the person: four minutes of nothing
// for two words that could have been a text.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Someone sent a four-minute voice note to the group chat to say something that was, word for word, \"yeah sounds good.\" Four minutes. I listened to breathing, a dog, a microwave, and then, at last, the entire plot twist: yeah sounds good.";

if (LINE.length < 1 || LINE.length > 400 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("LINE must be 1-400 non-whitespace characters with no newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(outDir + "/entry.txt", LINE, "utf8");
