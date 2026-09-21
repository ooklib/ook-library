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
  - file: "raw/ewa/Eyes Wide Open - 2023-06-28 - THE HISTORY OF THE CIA - Red Scare, Blackmail, and the Blue Suite [pt. 5.2].md"
    label: "THE HISTORY OF THE CIA - Red Scare, Blackmail, and the Blue Suite [Pt. 5.2] (Eyes Wide Open)"
  - file: "raw/ewa/Eyes Wide Open - 2023-07-28 - THE HISTORY OF THE CIA - France’s Secret Armies and the Pan-Europa Project [pt. 5.3].md"
    label: "THE HISTORY OF THE CIA - France's Secret Armies and the Pan-Europa Project [Pt. 5.3] (Eyes Wide Open)"
  - file: "raw/jm/Jesse Michels - 2025-04-22 - Presidential Advisor - I Directly Handled UFO Material (Ft. Harald Malmgren).md"
    label: "Presidential Advisor - I Directly Handled UFO Material (ft. Harald Malmgren) (Jesse Michels)"
  - file: "raw/jm/Jesse Michels - 2024-02-22 - The CIA Scientist Who Built UFOs Before Bob Lazar (Townsend Brown Documentary) .md"
    label: "The CIA Scientist Who Built UFOs Before Bob Lazar (Townsend Brown Documentary) (Jesse Michels)"
  - file: "raw/gerb/UAP Gerb - 2024-01-09 - The Wilson Davis Memo and US Secret UFO Reverse Engineering Programs.md"
    label: "The Wilson Davis Memo and US Secret UFO Reverse Engineering Programs (UAP Gerb)"
  - file: raw/gerb/UAP Gerb - 2024-01-29 - UFOs and Nuclear Weapons - A Fascinating Connection.md
    label: "UFOs and Nuclear Weapons - A Fascinating Connection (UAP Gerb)"
  - file: "raw/gerb/UAP Gerb - 2024-03-18 - The 1933 Magenta, Italy UFO Crash.md"
    label: "The 1933 Magenta, Italy UFO Crash (UAP Gerb)"
  - file: "raw/gerb/UAP Gerb - 2024-04-08 - Dr. Robert Sarbacher & the US Government's Secret UFO Crash Retrieval Group.md"
    label: "Dr. Robert Sarbacher & the US Government's Secret UFO Crash Retrieval Group (UAP Gerb)"
  - file: "raw/gerb/UAP Gerb - 2025-02-20 - Dugway Proving Ground - UFO Legacy Programs.md"
    label: "Dugway Proving Ground - UFO Legacy Programs (UAP Gerb)"
  - file: "raw/gerb/UAP Gerb - 2025-03-17 - Deep Underground Military Bases (D.U.M.Bs.) - UFO Legacy Programs.md"
    label: "Deep Underground Military Bases (D.U.M.Bs.) - UFO Legacy Programs (UAP Gerb)"
  - file: "raw/jm/Jesse Michels - 2025-04-17 - Did Henry Kissinger Oversee A UFO Crash Retrieval Program.md"
    label: "Did Henry Kissinger Oversee A UFO Crash Retrieval Program (Jesse Michels)"
  - file: "raw/jm/Jesse Michels - 2025-04-10 - UFO Secrets Are Held By A Global Cabal (Ft. Steven Greer).md"
    label: '"UFO Secrets Are Held By A Global Cabal" (ft. Steven Greer) (Jesse Michels)'
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
| `controls` | org/concept → org | alleged command or direction of another organization, as claimed by a source (attribution, not fact) | no |
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
| `worked_at` | person → place | employed at a specific hotel/site where the place (not an org) is the node; used instead of `employed_by` | no |
| `trained_by` | person → person | received tradecraft training/instruction from another individual, distinct from formal employment | no |
| `briefed_by` | person → person | received a claimed private briefing (UFO/legacy-program or otherwise) from another individual, alleged; distinct from `trained_by` (tradecraft instruction) | no |
| `accuses` | person → person/org | publicly alleges wrongdoing, co-option or disinformation by the target, as the source's own claim (not fact); distinct from `alleged_by`, which points at the claimant | no |
| `child_of` | person → person | parent-child kinship, child to parent; used by `oompa/maxwells` | no |
| `founded_by` | org → person | founder of an organization, from the org's point of view (inverse of `founded`, used where the org page is the subject) | no |
| `collaborated_with` | org/person → org/concept/regime | business or operational cooperation with a named regime or program, alleged by a source (used by `brof_stein/nazi-brands`) | no |
| `hosted_by` | event/episode → person/org | who moderated, hosted or organized the event or episode | no |
| `features` | episode/event/page → person/entity | a named person, event or item appears prominently in it (used by `jm/nell-pasulka`) | no |
| `references` | episode/concept → entity | explicitly cites or draws on another entity as evidence or background, without endorsing it | no |
| `related_to` | entity ↔ entity | loose thematic association drawn by a source, weaker than `analogous_to` or `influenced` | **yes** |
| `authored_by` | book/document → person | inverse of `authored`, used where the work's page is the subject | no |
| `criticized_by` | document/event → person/org | who publicly criticized or rebutted it, as reported by a source (used by `gerb/kirkpatrick`) | no |
| `led_by` | program/org → person | who directed or ran it, per a source | no |
