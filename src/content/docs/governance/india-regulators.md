---
title: RBI, SEBI & IRDAI — AI Governance for Regulated Entities
description: "India's sectoral regulators and their AI governance expectations for banks, securities firms and insurers — and how an architect maps them to controls."
tags: [governance, india, rbi, sebi, irdai]
---

## TL;DR

India's sectoral regulators are defining AI governance *now*: RBI has a draft AI framework + FREE-AI (7 principles, 26 recommendations), SEBI issued a May 2026 circular mandating AI adoption and threat modeling for 10,000+ financial entities, IRDAI has cyber/AI guidelines for insurers. For an architect targeting BFSI GCCs, fluency in these frameworks is a direct comp lever — few candidates can map them to platform controls.

## RBI — banking

- **Draft AI governance framework** for regulated entities: board-approved AI policy, model risk management, vendor oversight, fairness audits, incident reporting.
- **FREE-AI framework:** 7 principles and 26 recommendations covering fairness, reliability, explainability, accountability, transparency, inclusivity, privacy.
- **What the architect builds:** AI use-case register with risk tier; model lifecycle gates (dev → val → prod); vendor AI assessment checklist; fairness metric thresholds; incident runbook with 24-hour reporting.

## SEBI — securities

- **May 2026 circular:** mandates AI adoption and threat modeling for 10,000+ financial entities.
- **Expectations:** documented AI use, risk assessment, human oversight for investor-facing decisions, audit trail.
- **What the architect builds:** threat model per AI system; security review; monitoring; incident reporting; documentation pack for the compliance team.

## IRDAI — insurance

- **Cyber and AI guidelines** for insurers: governance, risk management, monitoring, third-party oversight.
- **What the architect builds:** AI register; cyber controls; monitoring dashboards; vendor assessment.

## The common thread

All three converge on the same control set the Control Framework already defines:

| Regulator expectation | Control domain |
|---|---|
| Board-approved AI policy | 1 (register), 12 (continuous improvement) |
| Model risk management | 3 (model lifecycle), 8 (monitoring) |
| Vendor oversight | 10 (vendor & third-party) |
| Fairness audits | 3, 8 (eval + monitoring) |
| Incident reporting | 11 (records), 7 (oversight) |
| Threat modeling | 4 (security) |
| Audit trail / evidence | 11 (records) |

**Practical implication:** one control framework, multiple regulator mappings. Add a column per regulator in the control library; do not build separate programs.

## India AI Governance Guidelines (Feb 2026)

- Sectoral regulators (RBI, SEBI, TRAI, ICMR, NHA) are expected to issue AI-specific rules.
- Positions India as a "pro-innovation" jurisdiction with light-touch horizontal rules and sectoral depth.
- For an architect: watch the sectoral regulators, not just the horizontal guidelines. The horizontal document sets tone; the sectoral rules set obligations.

## Demand tailwinds (why this matters now)

- **DPDP Act compliance deadline: May 2027.** Creates a wave of data-governance and AI-architecture demand.
- **RBI draft framework + FREE-AI:** banking AI governance is being defined now; early movers shape the standard.
- **SEBI May 2026 circular:** immediate, well-funded demand across 10,000+ entities.
- **GCCs of global banks/insurers** in India are the primary employers for these roles.

## Common pitfalls

- Treating India regulation as "GDPR with Indian names." The mechanics differ (consent managers, SDF, notified countries, sectoral regulators).
- Waiting for final rules before building. The draft frameworks already define the control set; build to the draft and adjust.
- Ignoring sectoral regulators in favor of horizontal guidelines. The sectoral rules carry the obligations.
- Underestimating the DPDP deadline. May 2027 is close for large enterprises with legacy data.

## Related

- [DPDP Act](/thought-base/governance/dpdp/) — India's data protection law.
- [India Regulatory Landscape](/thought-base/india/) — overview and GCC landscape.
- [Control Framework](/thought-base/governance/control-framework/) — the 12 domains.
- [Control Library](/thought-base/reference/control-library/) — RBI/SEBI/IRDAI rows.
- [About](/thought-base/about/) — target verticals and employers.
- [Writing: India's regulatory wave](/thought-base/writing/india-ai-regulatory-wave/) — long-form (planned).
