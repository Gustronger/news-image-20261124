# Tuesday 24 November 2026 — The World in One Day

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/Gustronger/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/Gustronger/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

A program that writes one image summing up Tuesday 24 November 2026's world
news to `/output/entry.png` — 37 stories across 7 regions, drawn as a
newspaper front page with original flat-vector graphics.

Headlines: three tankers hit mines in the Strait of Hormuz (CLAIM,
UNVERIFIED) · 96 drones overnight, 73 downed, Zaporizhzhia apartment strike
kills 2 and wounds 40 · Cikande fire toll rises to 26, 8 still missing ·
US consumer confidence 103.3 · Brent $88.97.

Run it with Node 22: `node main.ts`. No network, no dependencies, standard
library only. It creates `/output` when missing and copies `entry.png` there,
checking the PNG magic bytes and the 1024x1024 dimensions, and logging the
file's sha256.

Entry for the make.fun bounty
[Sum up 24 November's world news in one image](https://make.fun/bounty/news-image-20261124).
Strict 24-Nov-only dating: every story was first reported on 24 November
2026, and the DATE CHECK box on the page lists earlier stories that were
deliberately left out. Unverified claims are labelled CLAIM, reported facts
REPORTED, and forecasts FORECAST.
