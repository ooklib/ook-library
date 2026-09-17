---
title: Relation Types
kind: concept
aliases: []
tags: [meta, schema]
relations: []
sources:
  - file: raw/gerb/mitre.md
    label: "MITRE Corporation - UFO Reverse Engineering, USO Tracking, & Legacy Programs (UAP Gerb)"
  - file: raw/gerb/nro.md
    label: "National Reconnaissance Office - UFO Crash Retrievals, Surveillance, and Legacy Program Gatekeepers (UAP Gerb)"
---

Registry of directed relation types used across the wiki's `relations:` frontmatter. Most are
asymmetric (the inverse is implied, not separately stored). Symmetric ones are noted.

| relation | direction | meaning | symmetric? |
|---|---|---|---|
| `sponsored_by` | org → org/gov | funding/oversight sponsor of an FFRDC or program | no |
| `spun_off_from` | org → org | organizationally founded out of another org | no |
| `founded` | org/person → org | founding actor → founded entity | no |
| `operates` | org → org/program | parent runs/administers a subordinate entity or program | no |
| `mission_partner_of` | org ↔ org | collaborators on a joint program, roughly equal footing | **yes** |
| `contractor_for` | org → org/program | performs contracted work for a program/sponsor | no |
| `provides_counterintelligence_for` | org → org/program | CI/security support role | no |
| `employed_by` | person → org | past or present staff/board role | no |
| `board_member_of` | person → org | serves/served on corporate board or trustees | no |
| `preceded_by` / `succeeded_by` | person ↔ role | sequential office-holders | inverse pair |
| `alleged_by` | claim/program → person/org | who made the claim (attribution, not fact) | no |
| `located_at` | org/program → place | physical site of an office/program | no |
| `part_of` | entity → entity | administrative/organizational containment | no |
| `investigates` | person → org/program | researcher/journalist covering the subject | no |
| `references_testimony_of` | program/claim → person | cites a named witness/whistleblower | no |
| `analogous_to` | concept → concept | comparison drawn by a source, not identity | **yes** |
| `monitors` | program → entity | surveillance/tracking target of a program | no |
| `reverse_engineers` | program → entity | technology exploitation target | no |
| `coincides_with` | event → event | alleged temporal correlation, not proven causation | **yes** |
| `authored` | person → document/concept | wrote a specific report, book, or document | no |
| `acquired_by` / `renamed_to` | org → org | corporate acquisition or name-change identity chain | no |
| `liaison_to` | person → org | served as an official go-between for another org | no |
| `oversees` | org → org/program | joint acquisition/budget authority over another entity | no |
