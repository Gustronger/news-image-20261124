import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Sum up 24 November 2026's world news in one image: this program copies
// the pre-rendered 1024x1024 front page (entry.png, 37 stories, 7 regions)
// into /output. Standard library only, no network.
// Poster layout: one dominant hero band — three tankers hit mines in the
// Strait of Hormuz (labelled CLAIM, UNVERIFIED), 96 drones overnight with
// 73 downed, and the Cikande fire toll rising to 26 — plus a numbers strip,
// ten story cards, a world map with pins, a dense ALSO list and a DATE CHECK
// box listing earlier stories deliberately left out.
const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
const out = join(outDir, "entry.png");

if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });
const buf = readFileSync(src);
if (buf.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}
const width = buf.readUInt32BE(16);
const height = buf.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png must be 1024x1024, got ${width}x${height}`);
}
copyFileSync(src, out);
console.log("entry.png sha256:", createHash("sha256").update(buf).digest("hex"));
