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

- `raw/<video_id>_<slug>.txt` — immutable source transcripts (YouTube auto-transcripts with
  timestamps and chapter markers). Never edited by the LLM.
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
  - file: raw/107BtDYhTkA_mitre.txt
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
  inline citation: `*(source: [raw/107BtDYhTkA_mitre.txt](../raw/107BtDYhTkA_mitre.txt), 12:07)*`
  — file link plus the transcript timestamp the claim came from.
- Use `## Relationships` to restate the frontmatter relations as prose links, e.g.
  `- Spun off from [[mit-lincoln-laboratory]] in 1958.`
- Cross-link liberally with `[[wiki-link]]` (Obsidian-style) using the target's filename stem.
- Flag speculation explicitly: "UAP Gerb alleges..." / "unverified claim:" rather than stating
  contested claims as fact.

## Ingest workflow

1. Read the new raw source fully.
2. Extract entities; check `wiki/index.md` and aliases for existing pages before creating new
   ones (normalize spelling/casing of names/orgs across ASR transcripts).
3. Create/update entity pages with new claims, relations, and citations.
4. Update `wiki/index.md` and append an entry to `wiki/log.md`.

## Relation type registry

See [[relation-types]] for the full list of edge types in use and their semantics.
