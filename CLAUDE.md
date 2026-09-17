# UFO LLM Wiki — Schema

This project implements the [LLM Wiki pattern](llm-wiki.md): `raw/` holds immutable source
transcripts/articles, `wiki/` holds the LLM-maintained knowledge graph of markdown entity
pages, and this file is the schema/convention doc.

Domain: cataloging claims made in UFO/UAP disclosure-research media (YouTube investigative
videos, congressional letters, whistleblower testimony, etc.) about the alleged "UFO legacy
program" ecosystem — organizations, people, programs, places, and events — and the
relationships between them. **This wiki records claims and who made them, not verified fact.**
Sources like "UAP Gerb" videos are speculative investigative journalism; treat all substantive
assertions as attributed claims, not established truth.

## Directory layout

- `raw/<source>/<slug>.md` — immutable source transcripts (YouTube auto-transcripts with
  timestamps and chapter markers), grouped into one subdirectory per source/channel (e.g.
  `raw/gerb/` for UAP Gerb videos). Never edited by the LLM.
- `wiki/index.md` — catalog of all wiki pages, grouped by kind, one line each.
- `wiki/log.md` — append-only ingest/query/lint log, `## [YYYY-MM-DD] ingest | Source Title` entries.
- `wiki/<kebab-case-entity-name>.md` — one file per entity (person, organization, place,
  concept, program, event).

## Entity page format

Each entity page has YAML frontmatter plus prose body:

```yaml
---
title: MITRE Corporation
kind: organization   # organization | person | place | concept | program | event
aliases: [MITER]     # alternate spellings/names seen in sources (ASR transcripts misspell names)
tags: [ffrdc, legacy-program, contractor]
relations:
  - relation: sponsored_by       # edge type, snake_case, from this entity's point of view
    target: air-force            # wiki filename (no .md) of the other entity
    note: "spun off from MIT Lincoln Lab in 1958 to run SAGE"
  - relation: spun_off_from
    target: mit-lincoln-laboratory
sources:
  - file: raw/gerb/mitre.md
    label: "MITRE Corporation - UFO Reverse Engineering, USO Tracking, & Legacy Programs (UAP Gerb)"
---
```

- `kind` is the node type shown in Obsidian graph/Dataview queries.
- `aliases` capture ASR transcription variants of names (e.g. "MITER" for MITRE, "Berles" for
  Burlison, "Lelant" for LaPlante) so future ingests can normalize instead of duplicating pages.
- `relations` are directed edges. Every relationship type used should be documented once in
  [[relation-types]] with a note on whether it's symmetric or asymmetric. Prefer one canonical
  direction per relation type (e.g. always `employed_by` from person→org, never also
  `employs` from org→person) unless both directions carry distinct information.
- `sources` lists every raw file an entity page draws from (grows as more sources are ingested).

## Body conventions

- Open with a one-paragraph summary of the entity.
- Use `## Claims` or thematic subheadings for substantive assertions, each ending with an
  inline citation that names **both** the source and the timestamp, since the wiki now spans
  multiple raw transcripts and a bare timestamp is ambiguous:
  `*([gerb/mitre](../raw/gerb/mitre.md) 12:07)*` or `*([gerb/saic](../raw/gerb/saic.md) 5:26)*`.
  The link text is the source's short key (see registry below); the link target is the raw
  file, so clicking it opens the transcript directly. Multiple citations to the same source in
  one sentence can share a single tag: `*([gerb/saic](../raw/gerb/saic.md) 5:26, 6:00)*`.
  Pages that draw on only one source may still spell it out on first use per section, but the
  short-key form is preferred everywhere for consistency.
- Use `## Relationships` to restate the frontmatter relations as prose links, e.g.
  `- Spun off from [[mit-lincoln-laboratory]] in 1958.`
- Cross-link liberally with `[[wiki-link]]` (Obsidian-style) using the target's filename stem.
- Flag speculation explicitly: "UAP Gerb alleges..." / "unverified claim:" rather than stating
  contested claims as fact.
- **Resolved debt:** pages written during the first ingest (`gerb/mitre.md`) used to
  carry bare timestamps like `*(12:07)*` with no source tag, written before a second source
  existed. These were all implicitly `gerb/mitre` citations and were retrofitted (2026-09-17) to the
  tagged format across the whole `wiki/` directory — see `wiki/log.md`. Any new bare timestamp
  found from now on is a bug, not expected debt.

## Source registry (short keys)

See [`raw/index.md`](raw/index.md) for the full table of short citation keys, raw files, and
titles. Add a row there whenever a new raw source is ingested, and give it a short, memorable
key (lowercase, no spaces — typically the contractor/org the video centers on).

## Ingest workflow

1. Read the new raw source fully.
2. Extract entities; check `wiki/index.md` and aliases for existing pages before creating new
   ones (normalize spelling/casing of names/orgs across ASR transcripts).
3. Create/update entity pages with new claims, relations, and citations.
4. Update `wiki/index.md` and append an entry to `wiki/log.md`.

## Relation type registry

See [[relation-types]] for the full list of edge types in use and their semantics.
