# Raw Source Registry

Catalog of every immutable source transcript/article under `raw/`, keyed by the short citation
key used in wiki entity pages (see `CLAUDE.md`'s Body conventions section for the citation
format). Add a row here whenever a new raw source is ingested, and give it a short, memorable
key (lowercase, no spaces — typically the contractor/org the video centers on, or one or two
words from the title/interviewee for interview-style sources).

Two raw file naming conventions coexist:

- **Old (first-ingest) format:** `raw/<channel>/<slug>.md`, plain ASR transcript. Used for the
  first nine UAP Gerb videos ingested into the wiki (`raw/gerb/mitre.md`, `raw/gerb/saic.md`,
  etc.). Existing wiki pages cite these files directly and are **not** being relinked — see
  CLAUDE.md's "Resolved debt" note and the caveat below.
- **New format:** `raw/<channel>/<Channel> - <YYYY-MM-DD> - <Video Title>.md`, extracted via a
  browser script and including a `Source:`/`Date:`/`## Description` header plus the transcript.
  Less concise, but carries publish date and canonical title. All newly ingested sources
  (including duplicate re-grabs of the nine already-ingested Gerb videos, done incidentally
  while bulk-exporting the channel) use this format.

**Caveat on the 9 duplicated Gerb rows below:** the `key` (e.g. `gerb/mitre`) is what wiki pages
actually cite and still resolves to the old short-named file. The `raw file` column for these
rows has been repointed to the new, expanded-format re-grab of the same video for registry
completeness — so the table's link and the wiki's citation link diverge for these nine rows only.
Do not "fix" this without also touching every citing wiki page.

The `ingested` column in the Sources table is `false` when a source is first registered and is
flipped to `true` by the ingest itself (in the same commit as the wiki edits), so it always shows
which transcripts still await ingestion.

## Channels

| channel key | directory | full name | focus |
|---|---|---|---|
| `gerb` | `raw/gerb/` | UAP Gerb | UFO legacy programs, crash retrievals, reverse engineering |
| `a52` | `raw/a52/` | Area52 (DEBRIEFED, Chris Ramsey) | UFO/UAP interviews |
| `ewa` | `raw/ewa/` | Eyes Wide Open | CIA history, para-politics, JFK assassination research |
| `jm` | `raw/jm/` | Jesse Michels (American Alchemy) | UFO/alien tech interviews |
| `rc` | `raw/rc/` | Ross Coulthart / NewsNation | UAP whistleblower interviews |
| `gp` | `raw/gp/` | Green & Pleasant | British secret societies / power structures |
| `mpu` | `raw/mpu/` | More Perfect Union | secret societies / power structures |
| `rjm` | `raw/rjm/` | Richard J Murphy | City of London / power structures |
| `yogsoggeth` | `raw/yogsoggeth/` | Yogsoggeth | archival re-upload of historical whistleblower talks |
| `911mmry` | `raw/911mmry/` | 911MmRy | 9/11 / political-connection clip compilations |
| `banijay` | `raw/banijay/` | Banijay Documentaries | investigative documentaries on secret societies / Nazi elite |
| `brof_stein` | `raw/brof_stein/` | Brofessor Stein | corporate history / Nazi-era business ties |
| `finaius` | `raw/finaius/` | FINAiUS | dynastic wealth / banking family history |
| `lei` | `raw/lei/` | Lei's Real Talk | finance / geopolitics commentary (Epstein, Wall Street, China) |
| `mm` | `raw/mm/` | MagnatesMedia | business tycoon / robber-baron biographies |
| `oompa` | `raw/oompa/` | oompaville | intelligence / Epstein-Maxwell network commentary |
| `va` | `raw/va/` | Video Advice | elite-system / prediction commentary |
| `wm` | `raw/wm/` | Winston Marshall | interviews on WEF / Great Reset / power structures |

## Sources

| key | raw file | title | ingested |
|---|---|---|---|
| `gerb/mitre` | `raw/gerb/UAP Gerb - 2026-08-07 - The MITRE Corporation - UFO Reverse Engineering, USO Tracking, & Legacy Programs.md` | The MITRE Corporation - UFO Reverse Engineering, USO Tracking, & Legacy Programs (UAP Gerb) | true |
| `gerb/saic` | `raw/gerb/UAP Gerb - 2025-06-21 - UFO Legacy Programs - Science Applications International Corporation (SAIC).md` | UFO Legacy Programs - Science Applications International Corporation (SAIC) (UAP Gerb) | true |
| `gerb/nro` | `raw/gerb/UAP Gerb - 2025-12-13 - National Reconnaissance Office - UFO Crash Retrievals, Surveillance, and Legacy Program Gatekeepers.md` | National Reconnaissance Office - UFO Crash Retrievals, Surveillance, and Legacy Program Gatekeepers (UAP Gerb) | true |
| `gerb/lockheed` | `raw/gerb/UAP Gerb - 2025-09-26 - Lockheed Martin - UFO Reverse Engineering, Material Exploitation, & Legacy Programs.md` | Lockheed Martin - UFO Reverse Engineering, Material Exploitation, & Legacy Programs (UAP Gerb) | true |
| `gerb/sandia` | `raw/gerb/UAP Gerb - 2025-11-01 - Sandia National Laboratories - UFO Reverse Engineering, Material Exploitation, & Legacy Programs.md` | Sandia National Laboratories - UFO Reverse Engineering, Material Exploitation, & Legacy Programs (UAP Gerb) | true |
| `gerb/northrop_trw` | `raw/gerb/UAP Gerb - 2026-03-20 - Northrop Grumman & TRW - UFO Reverse Engineering, Material Exploitation, & Legacy Programs [Vol.2].md` | Northrop Grumman & TRW - UFO Reverse Engineering, Material Exploitation, & Legacy Programs Vol.2 (UAP Gerb) | true |
| `gerb/hidden_wing` | `raw/gerb/UAP Gerb - 2026-01-30 - The Hidden Wing - US Air Force UFO Reverse Engineering Programs.md` | The Hidden Wing - US Air Force UFO Reverse Engineering Programs (UAP Gerb) | true |
| `gerb/secrecy_1` | `raw/gerb/UAP Gerb - 2026-05-01 - The Manhattan Project 2.0 - the Secrecy of UFO Crash Retrieval Programs [VOL.1].md` | The Manhattan Project 2.0 - the Secrecy of UFO Crash Retrieval Programs VOL.1 (UAP Gerb) | true |
| `gerb/secrecy_2` | `raw/gerb/UAP Gerb - 2026-06-19 - Special Access Required - the Secrecy of UFO Crash Retrieval Programs [VOL.2].md` | Special Access Required - the Secrecy of UFO Crash Retrieval Programs VOL.2 (UAP Gerb) | true |
| `gerb/wilson-davis` | `raw/gerb/UAP Gerb - 2024-01-09 - The Wilson Davis Memo and US Secret UFO Reverse Engineering Programs.md` | The Wilson Davis Memo and US Secret UFO Reverse Engineering Programs (UAP Gerb) | true |
| `gerb/iceberg-1` | `raw/gerb/UAP Gerb - 2024-01-12 - The Alien and UFO Obscure Oddities Iceberg (Level 1).md` | The Alien and UFO Obscure Oddities Iceberg (Level 1) (UAP Gerb) | false |
| `gerb/iceberg-2` | `raw/gerb/UAP Gerb - 2024-01-16 - The Alien and UFO Obscure Oddities Iceberg (Level 2).md` | The Alien and UFO Obscure Oddities Iceberg (Level 2) (UAP Gerb) | false |
| `gerb/marines` | `raw/gerb/UAP Gerb - 2024-01-18 - The Marines Who Got too Close to UFOs.md` | The Marines Who Got too Close to UFOs (UAP Gerb) | false |
| `gerb/flight-grounded` | `raw/gerb/UAP Gerb - 2024-01-21 - The First Commercial Flight Grounded Due to UFOs.md` | The First Commercial Flight Grounded Due to UFOs (UAP Gerb) | false |
| `gerb/moondust` | `raw/gerb/UAP Gerb - 2024-01-24 - MOON DUST - The Pentagon's Secret UFO Programs.md` | MOON DUST - The Pentagon's Secret UFO Programs (UAP Gerb) | false |
| `gerb/kirkpatrick` | `raw/gerb/UAP Gerb - 2024-01-26 - The Modern Day UFO Disinformation Agent - Dr. Sean Kirkpatrick's Lies.md` | The Modern Day UFO Disinformation Agent - Dr. Sean Kirkpatrick's Lies (UAP Gerb) | false |
| `gerb/nukes` | `raw/gerb/UAP Gerb - 2024-01-29 - UFOs and Nuclear Weapons - A Fascinating Connection.md` | UFOs and Nuclear Weapons - A Fascinating Connection (UAP Gerb) | true |
| `gerb/air-force-encounters` | `raw/gerb/UAP Gerb - 2024-02-01 - Global Air Force UFO Encounters You've Probably Never Heard of.md` | Global Air Force UFO Encounters You've Probably Never Heard of (UAP Gerb) | false |
| `gerb/flyby` | `raw/gerb/UAP Gerb - 2024-02-05 - Incredible UFO Footage - FLYBY.md` | Incredible UFO Footage - FLYBY (UAP Gerb) | false |
| `gerb/stigma` | `raw/gerb/UAP Gerb - 2024-02-09 - The Origin of the UFO Stigma.md` | The Origin of the UFO Stigma (UAP Gerb) | false |
| `gerb/metapod` | `raw/gerb/UAP Gerb - 2024-02-12 - Incredible UFO Footage - METAPOD.md` | Incredible UFO Footage - METAPOD (UAP Gerb) | false |
| `gerb/nell` | `raw/gerb/UAP Gerb - 2024-02-14 - SOL Foundation - Karl Nell - A Key Figure in UAP Disclosure.md` | SOL Foundation - Karl Nell - A Key Figure in UAP Disclosure (UAP Gerb) | false |
| `gerb/battelle` | `raw/gerb/UAP Gerb - 2024-02-18 - UFOs in the Private Sector - Battelle Memorial Institute.md` | UFOs in the Private Sector - Battelle Memorial Institute (UAP Gerb) | false |
| `gerb/fastwalkers` | `raw/gerb/UAP Gerb - 2024-02-27 - FASTWALKERS - UFOs Outside Earth.md` | FASTWALKERS - UFOs Outside Earth (UAP Gerb) | false |
| `gerb/kingman` | `raw/gerb/UAP Gerb - 2024-03-05 - The 1953 Kingman, Arizona UFO Crash.md` | The 1953 Kingman, Arizona UFO Crash (UAP Gerb) | false |
| `gerb/knuth` | `raw/gerb/UAP Gerb - 2024-03-10 - The Physics of UFOs - Dr. Kevin Knuth.md` | The Physics of UFOs - Dr. Kevin Knuth (UAP Gerb) | false |
| `gerb/magenta` | `raw/gerb/UAP Gerb - 2024-03-18 - The 1933 Magenta, Italy UFO Crash.md` | The 1933 Magenta, Italy UFO Crash (UAP Gerb) | true |
| `gerb/herrera-1` | `raw/gerb/UAP Gerb - 2024-03-28 - Michael Herrera - UFO Whistleblower (ft. Joeyisnotmyname).md` | Michael Herrera - UFO Whistleblower (ft. Joeyisnotmyname) (UAP Gerb) | false |
| `gerb/sarbacher` | `raw/gerb/UAP Gerb - 2024-04-08 - Dr. Robert Sarbacher & the US Government's Secret UFO Crash Retrieval Group.md` | Dr. Robert Sarbacher & the US Government's Secret UFO Crash Retrieval Group (UAP Gerb) | true |
| `gerb/uso` | `raw/gerb/UAP Gerb - 2024-04-17 - USO - Unidentified Submerged Objects.md` | USO - Unidentified Submerged Objects (UAP Gerb) | false |
| `gerb/uso-casebook` | `raw/gerb/UAP Gerb - 2024-04-26 - USO Case Book_ Unidentified Submerged Objects Throughout History.md` | USO Case Book: Unidentified Submerged Objects Throughout History (UAP Gerb) | false |
| `gerb/whistleblowers-1` | `raw/gerb/UAP Gerb - 2024-05-05 - UFO Whistleblowers [Vol.1].md` | UFO Whistleblowers [Vol.1] (UAP Gerb) | false |
| `gerb/del-rio` | `raw/gerb/UAP Gerb - 2024-05-17 - The 1950s Del Rio, Texas UFO Crashes.md` | The 1950s Del Rio, Texas UFO Crashes (UAP Gerb) | false |
| `gerb/whistleblowers-2` | `raw/gerb/UAP Gerb - 2024-05-26 - UFO Whistleblowers [Vol.2].md` | UFO Whistleblowers [Vol.2] (UAP Gerb) | false |
| `gerb/special-forces` | `raw/gerb/UAP Gerb - 2024-06-16 - US Special Forces Confession - I Recovered Crashed UFOs - Fact or Fiction.md` | US Special Forces Confession - I Recovered Crashed UFOs - Fact or Fiction (UAP Gerb) | false |
| `gerb/herrera-2` | `raw/gerb/UAP Gerb - 2024-06-30 - Michael Herrera - Insights into UAP Encounter and Black Program Insiders.md` | Michael Herrera - Insights into UAP Encounter and Black Program Insiders (UAP Gerb) | false |
| `gerb/off-world-tech` | `raw/gerb/UAP Gerb - 2024-07-17 - Off-World Technologies Division - UAP Technology Reverse Engineering.md` | Off-World Technologies Division - UAP Technology Reverse Engineering (UAP Gerb) | false |
| `gerb/coyame` | `raw/gerb/UAP Gerb - 2024-08-09 - The 1974 Coyame, Mexico UFO Crash.md` | The 1974 Coyame, Mexico UFO Crash (UAP Gerb) | false |
| `gerb/mj12` | `raw/gerb/UAP Gerb - 2024-08-25 - The Majestic-12 Documents [With Ryan S. Wood].md` | The Majestic-12 Documents [With Ryan S. Wood] (UAP Gerb) | true |
| `gerb/kecksburg` | `raw/gerb/UAP Gerb - 2024-09-12 - The 1965 Kecksburg, Pennsylvania UFO Crash.md` | The 1965 Kecksburg, Pennsylvania UFO Crash (UAP Gerb) | false |
| `gerb/edwards-afb` | `raw/gerb/UAP Gerb - 2024-10-02 - UAP Reverse Engineering at Edwards Air Force Base [Redacted List Vol.2].md` | UAP Reverse Engineering at Edwards Air Force Base [Redacted List Vol.2] (UAP Gerb) | false |
| `gerb/mccandlish` | `raw/gerb/UAP Gerb - 2024-10-21 - Alien Reproduction Vehicle - the Testimony of Mark McCandlish.md` | Alien Reproduction Vehicle - the Testimony of Mark McCandlish (UAP Gerb) | false |
| `gerb/tr-3b` | `raw/gerb/UAP Gerb - 2024-11-30 - Alien Reproduction Vehicle - TR-3B and the Flying Triangles.md` | Alien Reproduction Vehicle - TR-3B and the Flying Triangles (UAP Gerb) | false |
| `gerb/corso` | `raw/gerb/UAP Gerb - 2025-01-03 - Philip J. Corso - US Army UFO Technology Research & Development.md` | Philip J. Corso - US Army UFO Technology Research & Development (UAP Gerb) | false |
| `gerb/northrop` | `raw/gerb/UAP Gerb - 2025-01-27 - UFO Legacy Programs - Northrop Grumman.md` | UFO Legacy Programs - Northrop Grumman (UAP Gerb) | false |
| `gerb/dugway` | `raw/gerb/UAP Gerb - 2025-02-20 - Dugway Proving Ground - UFO Legacy Programs.md` | Dugway Proving Ground - UFO Legacy Programs (UAP Gerb) | true |
| `gerb/dumbs` | `raw/gerb/UAP Gerb - 2025-03-17 - Deep Underground Military Bases (D.U.M.Bs.) - UFO Legacy Programs.md` | Deep Underground Military Bases (D.U.M.Bs.) - UFO Legacy Programs (UAP Gerb) | true |
| `gerb/navy` | `raw/gerb/UAP Gerb - 2025-04-11 - US Navy UFO Crash Retrieval & Reverse Engineering Programs.md` | US Navy UFO Crash Retrieval & Reverse Engineering Programs (UAP Gerb) | false |
| `gerb/weygandt` | `raw/gerb/UAP Gerb - 2025-05-16 - 1997 Peru UFO Crash Retrieval - the Story of Jonathan Weygandt.md` | 1997 Peru UFO Crash Retrieval - the Story of Jonathan Weygandt (UAP Gerb) | false |
| `gerb/aztec` | `raw/gerb/UAP Gerb - 2025-07-19 - The 1948 Aztec, New Mexico UFO Crash Retrieval.md` | The 1948 Aztec, New Mexico UFO Crash Retrieval (UAP Gerb) | false |
| `gerb/castle` | `raw/gerb/UAP Gerb - 2025-08-17 - 1997 ALIEN REPRODUCTION VEHICLE ENCOUNTER AT 29 PALMS, CA - THE TESTIMONY OF SGT RODERICK CASTLE.md` | 1997 Alien Reproduction Vehicle Encounter at 29 Palms, CA - the Testimony of Sgt Roderick Castle (UAP Gerb) | false |
| `gerb/timeline` | `raw/gerb/UAP Gerb - 2026-09-18 - 80 Years of UFO Crash Retrieval and Reverse Engineering - A Timeline.md` | 80 Years of UFO Crash Retrieval and Reverse Engineering: A Timeline (UAP Gerb) | true |
| `a52/fox` | `raw/a52/Area52 - 2026-01-09 - The Greatest Case of an Alien Encounter of our Time - James Fox _ DEBRIEFED ep. 70.md` | The Greatest Case of an Alien Encounter of our Time - James Fox \| DEBRIEFED ep. 70 (Area52) | false |
| `a52/coulthart` | `raw/a52/Area52 - 2026-02-20 - The DANGEROUS Truth About UFOs - Ross Coulthart _ DEBRIEFED ep. 76.md` | The DANGEROUS Truth About UFOs - Ross Coulthart \| DEBRIEFED ep. 76 (Area52) | false |
| `a52/lazar-everything` | `raw/a52/Area52 - 2026-04-10 - Bob Lazar Tells me Everything in NEW Interview - DEBRIEFED ep. 83.md` | Bob Lazar Tells me Everything in NEW Interview - DEBRIEFED ep. 83 (Area52) | false |
| `a52/lazar-secret` | `raw/a52/Area52 - 2026-05-08 - Bob Lazar Just Revealed His BIGGEST Secret - DEBRIEFED ep. 87.md` | Bob Lazar Just Revealed His BIGGEST Secret - DEBRIEFED ep. 87 (Area52) | false |
| `a52/icke` | `raw/a52/Area52 - 2026-03-27 - The Alien Plan is in FULL Motion - David Icke  DEBRIEFED ep. 81.md` | The Alien Plan is in FULL Motion - David Icke \| DEBRIEFED ep. 81 (Area52) | false |
| `ewa/oss` | `raw/ewa/Eyes Wide Open - 2023-03-23 - THE HISTORY OF THE CIA - The OSS and the Birth of American Intelligence [Pt. 1].md` | The History of the CIA - The OSS and the Birth of American Intelligence [Pt. 1] (Eyes Wide Open) | true |
| `ewa/sunrise` | `raw/ewa/Eyes Wide Open - 2023-04-05 - THE HISTORY OF THE CIA - Operation Sunrise and the Plan for a New Europe [pt. 2].md` | The History of the CIA - Operation Sunrise and the Plan for a New Europe [pt. 2] (Eyes Wide Open) | true |
| `ewa/mafia-allies` | `raw/ewa/Eyes Wide Open - 2023-04-20 - THE HISTORY OF THE CIA - Mafia Allies and the Beginning of the Global Drug Connection [pt. 3].md` | The History of the CIA - Mafia Allies and the Beginning of the Global Drug Connection [pt. 3] (Eyes Wide Open) | true |
| `ewa/cold-war` | `raw/ewa/Eyes Wide Open - 2023-05-03 - THE HISTORY OF THE CIA - The Real Cold War and the Creation of CIA [pt. 4].md` | The History of the CIA - The Real Cold War and the Creation of CIA [pt. 4] (Eyes Wide Open) | true |
| `ewa/italy-1948` | `raw/ewa/Eyes Wide Open - 2023-05-17 - THE HISTORY OF THE CIA - Italy 1948 - How to Steal an Election [pt. 5.1].md` | The History of the CIA - Italy 1948 - How to Steal an Election [pt. 5.1] (Eyes Wide Open) | true |
| `ewa/red-scare` | `raw/ewa/Eyes Wide Open - 2023-06-28 - THE HISTORY OF THE CIA - Red Scare, Blackmail, and the Blue Suite [pt. 5.2].md` | The History of the CIA - Red Scare, Blackmail, and the Blue Suite [pt. 5.2] (Eyes Wide Open) | true |
| `ewa/pan-europa` | `raw/ewa/Eyes Wide Open - 2023-07-28 - THE HISTORY OF THE CIA - France’s Secret Armies and the Pan-Europa Project [pt. 5.3].md` | The History of the CIA - France's Secret Armies and the Pan-Europa Project [pt. 5.3] (Eyes Wide Open) | true |
| `ewa/detachment-202` | `raw/ewa/Eyes Wide Open - 2023-09-04 - SPY STORIES OSS Detachment 202 - Secret Cold Warriors [pt. 5.4].md` | Spy Stories: OSS Detachment 202 - Secret Cold Warriors [pt. 5.4] (Eyes Wide Open) | true |
| `ewa/operation-paper` | `raw/ewa/Eyes Wide Open - 2023-10-04 - THE HISTORY OF THE CIA - Operation PAPER and Trouble in the Golden Triangle [pt. 6].md` | The History of the CIA - Operation PAPER and Trouble in the Golden Triangle [pt. 6] (Eyes Wide Open) | true |
| `ewa/laos-1` | `raw/ewa/Eyes Wide Open - 2024-11-01 - The Secret War in Laos - South East Asia's Heart of Darkness - LAOS 1.md` | The Secret War in Laos - South East Asia's Heart of Darkness - LAOS 1 (Eyes Wide Open) | true |
| `ewa/laos-2` | `raw/ewa/Eyes Wide Open - 2024-11-08 - Operation X and the French Indochina War - LAOS 2.md` | Operation X and the French Indochina War - LAOS 2 (Eyes Wide Open) | true |
| `ewa/laos-3` | `raw/ewa/Eyes Wide Open - 2024-11-15 - The French Connection in South East Asia - LAOS 3.md` | The French Connection in South East Asia - LAOS 3 (Eyes Wide Open) | true |
| `ewa/laos-4` | `raw/ewa/Eyes Wide Open - 2024-11-22 - The Paramilitary CIA and the Seeds of a Secret War - LAOS 4.md` | The Paramilitary CIA and the Seeds of a Secret War - LAOS 4 (Eyes Wide Open) | true |
| `ewa/war-conspiracy-1` | `raw/ewa/Eyes Wide Open - 2024-11-29 - The Origins of the Military-Industrial Complex - War Conspiracy 1.md` | The Origins of the Military-Industrial Complex - War Conspiracy 1 (Eyes Wide Open) | true |
| `ewa/war-conspiracy-2` | `raw/ewa/Eyes Wide Open - 2024-12-06 - Eisenhower, Bananas, and the CIA Imperium - War Conspiracy 2.md` | Eisenhower, Bananas, and the CIA Imperium - War Conspiracy 2 (Eyes Wide Open) | true |
| `ewa/operation-40` | `raw/ewa/Eyes Wide Open - 2024-12-13 - The CIA's OPERATION 40.md` | The CIA's Operation 40 (Eyes Wide Open) | true |
| `ewa/cia-mafia` | `raw/ewa/Eyes Wide Open - 2024-12-20 - The CIA-Mafia Legend.md` | The CIA-Mafia Legend (Eyes Wide Open) | true |
| `ewa/bush-1` | `raw/ewa/Eyes Wide Open - 2024-12-25 - BUSH THE FATHER - CHAPTER 1.md` | Bush the Father - Chapter 1 (Eyes Wide Open) | true |
| `ewa/bush-2` | `raw/ewa/Eyes Wide Open - 2025-02-16 - BUSH AND THE COWBOYS - CHAPTER 2.md` | Bush and the Cowboys - Chapter 2 (Eyes Wide Open) | true |
| `ewa/bush-3` | `raw/ewa/Eyes Wide Open - 2025-04-04 - BUSH AND THE CIA - CHAPTER 3.md` | Bush and the CIA - Chapter 3 (Eyes Wide Open) | true |
| `ewa/jfk-cia` | `raw/ewa/Eyes Wide Open - 2025-09-05 - JFK and the CIA.md` | JFK and the CIA (Eyes Wide Open) | true |
| `ewa/shackley` | `raw/ewa/Eyes Wide Open - 2025-10-03 - The CIA's Blond Ghost - Ted Shackley.md` | The CIA's Blond Ghost - Ted Shackley (Eyes Wide Open) | true |
| `ewa/jmwave` | `raw/ewa/Eyes Wide Open - 2025-11-07 - The CIA's Miami Station - JMWAVE.md` | The CIA's Miami Station - JMWAVE (Eyes Wide Open) | true |
| `ewa/dallas-0` | `raw/ewa/Eyes Wide Open - 2025-11-13 - The Road to Dallas Chapter 0 - JFK Assassination Thesis.md` | The Road to Dallas Chapter 0 - JFK Assassination Thesis (Eyes Wide Open) | true |
| `ewa/dallas-1` | `raw/ewa/Eyes Wide Open - 2025-11-14 - The Road to Dallas Chapter 1 - Frank Sturgis and the Soldiers of Fortune (JFK ASSASSINATION SERIES).md` | The Road to Dallas Chapter 1 - Frank Sturgis and the Soldiers of Fortune (Eyes Wide Open) | true |
| `ewa/dallas-2` | `raw/ewa/Eyes Wide Open - 2025-11-21 - David Atlee Phillips_ the Spy's Spy - The Road to Dallas Chapter 2.md` | David Atlee Phillips: the Spy's Spy - The Road to Dallas Chapter 2 (Eyes Wide Open) | true |
| `ewa/dallas-3` | `raw/ewa/Eyes Wide Open - 2025-11-28 - Cactus Jack Canon Does Havana - The Road to Dallas Chapter 3.md` | Cactus Jack Canon Does Havana - The Road to Dallas Chapter 3 (Eyes Wide Open) | true |
| `ewa/dallas-4` | `raw/ewa/Eyes Wide Open - 2025-12-05 - Meyer Lansky - Cuban Tabloid - The Road to Dallas Chapter 4.md` | Meyer Lansky - Cuban Tabloid - The Road to Dallas Chapter 4 (Eyes Wide Open) | true |
| `ewa/dallas-5` | `raw/ewa/Eyes Wide Open - 2025-12-12 - The Secret History of the Havana Hilton - The Road to Dallas Chapter 5.md` | The Secret History of the Havana Hilton - The Road to Dallas Chapter 5 (Eyes Wide Open) | true |
| `ewa/willoughby-1` | `raw/ewa/Eyes Wide Open - 2025-12-19 - America’s Fascist Spymaster - WILLOUGHBY 1.md` | America's Fascist Spymaster - Willoughby 1 (Eyes Wide Open) | true |
| `ewa/willoughby-2` | `raw/ewa/Eyes Wide Open - 2025-12-25 - The MacArthur Legacy - 50 Years of Empire Building in the Pacific - WILLOUGHBY 2.md` | The MacArthur Legacy - 50 Years of Empire Building in the Pacific - Willoughby 2 (Eyes Wide Open) | true |
| `jm/townsend-brown` | `raw/jm/Jesse Michels - 2024-02-22 - The CIA Scientist Who Built UFOs Before Bob Lazar (Townsend Brown Documentary) .md` | The CIA Scientist Who Built UFOs Before Bob Lazar (Townsend Brown Documentary) (Jesse Michels) | true |
| `jm/kissinger` | `raw/jm/Jesse Michels - 2025-04-17 - Did Henry Kissinger Oversee A UFO Crash Retrieval Program.md` | Did Henry Kissinger Oversee A UFO Crash Retrieval Program (Jesse Michels) | true |
| `jm/malmgren` | `raw/jm/Jesse Michels - 2025-04-22 - Presidential Advisor - I Directly Handled UFO Material (Ft. Harald Malmgren).md` | Presidential Advisor - I Directly Handled UFO Material (ft. Harald Malmgren) (Jesse Michels) | true |
| `jm/sheehan` | `raw/jm/Jesse Michels - 2025-05-31 - UFOs & JFK - He Knew Too Much! (Ft. Danny Sheehan).md` | UFOs & JFK - He Knew Too Much! (ft. Danny Sheehan) (Jesse Michels) | false |
| `jm/jorjani-religion` | `raw/jm/Jesse Michels - 2025-09-27 - Aliens Invented Religion To Control Humanity! - Top Philosopher Jason Jorjani.md` | Aliens Invented Religion To Control Humanity! - Top Philosopher Jason Jorjani (Jesse Michels) | false |
| `jm/jorjani-hitler` | `raw/jm/Jesse Michels - 2025-11-01 - I Found Hitler’s Secret UFO Program! - Jason Jorjani.md` | I Found Hitler's Secret UFO Program! - Jason Jorjani (Jesse Michels) | false |
| `jm/levenda` | `raw/jm/Jesse Michels - 2025-11-22 - CIA Historian Aliens Are Controlling Human Timelines! (ft. Peter Levenda).md` | CIA Historian: Aliens Are Controlling Human Timelines! (ft. Peter Levenda) (Jesse Michels) | false |
| `jm/nasa-chief` | `raw/jm/Jesse Michels - 2026-03-30 - NASA Chief - We Just Built Antigravity Propulsion!.md` | NASA Chief - We Just Built Antigravity Propulsion! (Jesse Michels) | false |
| `jm/censored-book` | `raw/jm/Jesse Michels - 2026-05-21 - Why The Pentagon Tried To Censor This UFO Book.md` | Why The Pentagon Tried To Censor This UFO Book (Jesse Michels) | false |
| `jm/cover-up` | `raw/jm/Jesse Michels - 2026-07-14 - The UFO Cover-Up Leads to One Secret Society - and One Final Event.md` | The UFO Cover-Up Leads to One Secret Society - and One Final Event (Jesse Michels) | true |
| `jm/borland` | `raw/jm/Jesse Michels - 2026-08-05 - A Top Government Official Told Me Aliens Run Everything! - Dylan Borland UNLEASHED.md` | A Top Government Official Told Me Aliens Run Everything! - Dylan Borland Unleashed (Jesse Michels) | false |
| `jm/matthew-brown` | `raw/jm/Jesse Michels - 2026-08-29 - Pentagon Whistleblower UNLOADS on Alien Hybrid Breeding Programs (ft. Matthew Brown).md` | Pentagon Whistleblower Unloads on Alien Hybrid Breeding Programs (ft. Matthew Brown) (Jesse Michels) | false |
| `jm/cameron` | `raw/jm/Jesse Michels - 2026-09-15 - I Met The Head Of The Entire UFO Program! - Grant Cameron.md` | I Met The Head Of The Entire UFO Program! - Grant Cameron (Jesse Michels) | false |
| `jm/pines` | `raw/jm/Jesse Michels - 2024-11-15 - UFO Physics & Disclosure Under Trump (ft. Matthew Pines).md` | UFO Physics & Disclosure Under Trump (ft. Matthew Pines) (Jesse Michels) | false |
| `jm/nell-pasulka` | `raw/jm/Jesse Michels - 2024-12-19 - The Biblical Truth of UFOs & Angels (Ft. Karl Nell & Diana Pasulka).md` | The Biblical Truth of UFOs & Angels (ft. Karl Nell & Diana Pasulka) (Jesse Michels) | false |
| `jm/greer` | `raw/jm/Jesse Michels - 2025-04-10 - UFO Secrets Are Held By A Global Cabal (Ft. Steven Greer).md` | "UFO Secrets Are Held By A Global Cabal" (ft. Steven Greer) (Jesse Michels) | true |
| `jm/nasa-pagan` | `raw/jm/Jesse Michels - 2025-09-20 - NASA & UFOs - Pagan Rituals, Secret Science & Time Travel.md` | NASA & UFOs: Pagan Rituals, Secret Science & Time Travel (Jesse Michels) | true |
| `rc/grusch` | `raw/rc/NewsNation - 2025-04-02 - UFO whistleblower David Grusch_ We are not alone _ Official Ross Coulthart NewsNation interview.md` | UFO whistleblower David Grusch: 'We are not alone' \| Official Ross Coulthart NewsNation interview (NewsNation) | true |
| `rc/mj12` | `raw/rc/NewsNation - 2026-04-14 - A secret history - Inside shadow intelligence, the MJ-12 documents  Reality Check.md` | A secret history: Inside shadow intelligence, the MJ-12 documents \| Reality Check (NewsNation) | true |
| `gp/secret-society` | `raw/gp/Green & Pleasant - 2026-03-28 - The Secret Society Running Britain for 140 Years.md` | The Secret Society Running Britain for 140 Years (Green & Pleasant) | true |
| `gp/chatham-house` | `raw/gp/Green & Pleasant - 2026-04-10 - Britain's Most Powerful Secret Organisation - Chatham House Exposed.md` | Britain's Most Powerful Secret Organisation - Chatham House Exposed (Green & Pleasant) | true |
| `gp/older-than-parliament` | `raw/gp/Green & Pleasant - 2026-06-03 - The Government Inside Britain That's Older Than Parliament.md` | The Government Inside Britain That's Older Than Parliament (Green & Pleasant) | true |
| `mpu/secret-society` | `raw/mpu/More Perfect Union - 2026-02-24 - We Uncovered The Most Infamous Secret Society_ And The Truth Is Shocking.md` | We Uncovered The Most Infamous Secret Society: And The Truth Is Shocking (More Perfect Union) | true |
| `rjm/city-of-london` | `raw/rjm/Richard J Murphy - 2026-05-17 - The secret power behind the City of London.md` | The Secret Power Behind the City of London (Richard J Murphy) | true |
| `yogsoggeth/schneider` | `raw/yogsoggeth/Yogsoggeth - 2011-04-17 - Phil Schneider - November 1995 (Full Video).md` | Phil Schneider - November 1995 (Full Video) (Yogsoggeth) | true |
| `911mmry/carlyle` | `raw/911mmry/911MmRy - 2008-02-12 - Carlyle Group - Bush connection to Bin Laden.md` | Carlyle Group - Bush connection to Bin Laden (911MmRy) | false |
| `banijay/nazi-elite` | `raw/banijay/Banijay Documentaries - 2023-07-20 - Secrets of the Nazi Elite - Inside Secret Societies - S01 EP1 - Investigative Documentary.md` | Secrets of the Nazi Elite - Inside Secret Societies - S01 EP1 - Investigative Documentary (Banijay Documentaries) | false |
| `brof_stein/nazi-brands` | `raw/brof_stein/Brofessor Stein - 2025-07-23 - Every Major Brand with Nazi Ties Explained By a German.md` | Every Major Brand with Nazi Ties Explained By a German (Brofessor Stein) | false |
| `finaius/rothschild` | `raw/finaius/FINAiUS - 2023-11-18 - Empire of Shadows - True Story of the Richest Family in History.md` | Empire of Shadows: True Story of the Richest Family in History (FINAiUS) | false |
| `lei/epstein-backchannel` | `raw/lei/Lei's Real Talk - 2026-02-23 - Epstein’s Backchannel - The Secret Pipeline Between Wall Street and Beijing.md` | Epstein's Backchannel: The Secret Pipeline Between Wall Street and Beijing (Lei's Real Talk) | false |
| `mm/vanderbilt` | `raw/mm/MagnatesMedia - 2022-05-06 - The Most BRUTAL Businessman In History.md` | The Most BRUTAL Businessman In History (MagnatesMedia) | false |
| `mm/jp-morgan` | `raw/mm/MagnatesMedia - 2023-06-24 - J.P. Morgan - The Man Who Owned America.md` | J.P. Morgan: The Man Who Owned America (MagnatesMedia) | false |
| `mm/rockefeller` | `raw/mm/MagnatesMedia - 2023-11-19 - Rockefeller - The World’s First Billionaire.md` | Rockefeller: The World's First Billionaire (MagnatesMedia) | false |
| `oompa/maxwells` | `raw/oompa/oompaville - 2026-07-08 - The Maxwells Weren't Spies. They Were Something Worse.md` | The Maxwells Weren't Spies. They Were Something Worse. (oompaville) | false |
| `va/1994-system` | `raw/va/Video Advice - 2026-01-25 - In 1994, He Exposed Their Entire System… and Predicted 2026 Perfectly.md` | In 1994, He Exposed Their Entire System… and Predicted 2026 Perfectly. (Video Advice) | false |
| `wm/wef-insider` | `raw/wm/Winston Marshall - 2025-12-13 - I Helped Build It! A WEF-Davos Insider EXPOSES The Great Reset.md` | "I Helped Build It!" A WEF-Davos Insider EXPOSES The Great Reset (Winston Marshall) | false |
