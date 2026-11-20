---
title: DPDP Act (India) — Consent, Purpose, Rights, Breach
description: "India's Digital Personal Data Protection Act 2023 translated into platform controls: consent, purpose limitation, data principal rights, breach notification, SDF obligations."
tags: [governance, dpdp, india, privacy]
---

## TL;DR

The DPDP Act 2023 is India's data protection law, with a compliance deadline of **May 2027**. It mirrors GDPR's structure (consent, purpose limitation, rights, breach) but with India-specific mechanics (Significant Data Fiduciary, data principal rights, consent managers). For an architect, the job is the same: translate each obligation into an enforceable control with automated evidence.

## The control translation

| DPDP obligation | Control | Evidence | Metric |
|---|---|---|---|
| Consent | Consent capture at collection; consent ledger; withdrawal flow | Consent records; withdrawal log | Consent coverage % |
| Purpose limitation | Purpose tags as metadata; purpose-aware access; rejection of off-purpose use | Purpose-tag coverage; access audit | Off-purpose access incidents (target 0) |
| Data principal rights (access, correction, erasure, grievance) | Rights API with SLA; erasure cascade; grievance workflow | Request log; SLA report | % requests within SLA |
| Breach notification | 72-hour notification runbook; detection; pre-drafted comms | Drill records; incident log | Time to notify |
| Significant Data Fiduciary (SDF) | DPO appointment; DPIA; independent audit; periodic review | DPO record; audit report | Audit findings |

## Key India-specific concepts

- **Data principal** = the individual whose data is processed (analogous to data subject).
- **Data fiduciary** = the entity that determines purpose and means (analogous to controller).
- **Data processor** = processes on behalf of the fiduciary.
- **Significant Data Fiduciary (SDF):** designated by the government based on volume/sensitivity; triggers DPO, DPIA, independent audit and periodic review.
- **Consent manager:** a registered intermediary through which principals can manage consent across fiduciaries — a uniquely Indian mechanism worth designing for.
- **Cross-border transfer:** permitted to notified countries; restricted to others. Verify the notified list before designing data flows.

## Worked example — consent + purpose

**Legal:** "Personal data may be processed only for a lawful purpose for which the data principal has given consent, or for certain legitimate uses."

**Control:**
- Consent capture at collection with granular purpose checkboxes.
- Consent ledger (immutable, versioned) recording what was consented, when, for which purpose.
- Withdrawal flow that propagates revocation to all downstream processing within SLA.
- Purpose tags on every record; ingestion rejects records without a valid consent reference.
- Consent-manager integration for principals managing consent centrally.

**Evidence:** consent records; withdrawal log; purpose-tag coverage report.

**Exec line:** "Consent and purpose are metadata on every record — withdrawal is an API call, not a project."

## The SDF question

Determine early whether your organization will be designated an SDF. If yes, budget for: a DPO (named, contactable), DPIAs for high-risk processing, an independent data audit, and periodic (annual) review. Design these as platform capabilities, not as a compliance team's spreadsheet.

## Common pitfalls

- Treating DPDP as "GDPR lite." It is structurally similar but has India-specific mechanics (consent managers, SDF, notified countries) that need explicit design.
- Ignoring the May 2027 deadline. The runway is short for large enterprises; start the register and consent ledger now.
- Assuming cross-border transfers are free. Verify the notified-country list and design data residency accordingly.
- Conflating DPDP with sectoral regulators (RBI/SEBI/IRDAI). DPDP is the horizontal layer; sectoral rules add vertical obligations.

## Related

- [GDPR](/thought-base/governance/gdpr/) — structural parallel.
- [RBI/SEBI/IRDAI](/thought-base/governance/india-regulators/) — sectoral layer.
- [India Regulatory Landscape](/thought-base/india/) — overview.
- [Control Framework](/thought-base/governance/control-framework/) — domains 2, 5, 6, 11.
- [Control Library](/thought-base/reference/control-library/) — DPDP rows.
- [Writing: India's regulatory wave](/thought-base/writing/india-ai-regulatory-wave/) — long-form (planned).
- [About](/thought-base/about/) — certification recommendation (CIPP/E).
