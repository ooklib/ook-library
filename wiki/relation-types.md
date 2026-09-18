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
  - file: raw/gerb/secrecy_2.md
    label: "Special Access Required - the Secrecy of UFO Crash Retrieval Programs VOL.2 (UAP Gerb)"
  - file: "raw/gp/Green & Pleasant - 2026-03-28 - The Secret Society Running Britain for 140 Years.md"
    label: "The Secret Society Running Britain for 140 Years (Green & Pleasant)"
  - file: "raw/ewa/Eyes Wide Open - 2023-04-05 - THE HISTORY OF THE CIA - Operation Sunrise and the Plan for a New Europe [pt. 2].md"
    label: "THE HISTORY OF THE CIA - Operation Sunrise and the Plan for a New Europe [Pt. 2] (Eyes Wide Open)"
  - file: "raw/ewa/Eyes Wide Open - 2023-04-20 - THE HISTORY OF THE CIA - Mafia Allies and the Beginning of the Global Drug Connection [pt. 3].md"
    label: "THE HISTORY OF THE CIA - Mafia Allies and the Beginning of the Global Drug Connection [Pt. 3] (Eyes Wide Open)"
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
| `governed_by` | concept/program → org | administered/regulated by a named governance body | no |
| `reports_to` | org → org | administrative reporting line distinct from full `part_of` containment | no |
| `member_of` | person → org | affiliation with a society/party distinct from paid employment or board service | no |
| `practices` | org → concept | employs a named strategy/tactic as a matter of policy | no |
| `overlapping_membership_with` | org ↔ org | two organizations share founders/leaders/members, alleged by a source | **yes** |
| `influenced` | person/org → person/org | shaped another's thinking or policy without formal membership/employment | no |
| `recruited_by` | person/org → person/org | recruited as an intelligence asset, agent, or stay-behind network, alleged | no |
| `participated_in` | person → program/event | took part in a specific covert operation or event | no |
| `protected` | person/org → person | used influence to secure another's release, immunity, or leniency, alleged | no |
| `associate_of` | person/org ↔ person/org | criminal, business, or working partnership alleged by a source, without a formal employment/membership hierarchy | **yes** |
