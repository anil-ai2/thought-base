---
title: NIST AI RMF — Govern, Map, Measure, Manage
description: "The NIST AI Risk Management Framework translated into an architect's control backbone — functions, categories and concrete controls."
tags: [governance, nist-ai-rmf]
---

## TL;DR

NIST AI RMF is the **backbone** of the control library: a common language for AI risk organized into four functions — Govern, Map, Measure, Manage. It is voluntary, framework-agnostic and maps cleanly onto ISO 42001, the EU AI Act and sectoral rules. Use it as the skeleton; hang jurisdiction-specific requirements off it.

## The four functions

| Function | Question | Architect's deliverable |
|---|---|---|
| **Govern** | Who is accountable and how do we decide? | CoE charter, RACI, standards lifecycle, exception process, regulatory watch |
| **Map** | What is the context and who is affected? | Use-case intake with affected-stakeholder analysis, data lineage, impact assessment |
| **Measure** | How do we know it works and stays safe? | Eval suites, monitoring dashboards, cost metrics, bias/fairness metrics |
| **Manage** | What do we do about risk? | Mitigation plans, incident playbooks, documentation, continuous improvement |

## Mapping to control domains

| NIST function | Primary control domains |
|---|---|
| Govern | 1 (register), 10 (vendor), 12 (continuous improvement) |
| Map | 1 (register), 2 (data), 6 (transparency) |
| Measure | 3 (model lifecycle), 8 (monitoring), 9 (FinOps) |
| Manage | 4 (security), 5 (privacy), 7 (oversight), 11 (records) |

## Why NIST first (then ISO/EU)

- **Voluntary and free** — no licensing, no audit fee to start.
- **Jurisdiction-neutral** — works as the base layer; EU AI Act, GDPR, DPDP, RBI rules layer on top as additional rows in the control library.
- **Widely referenced** — regulators (including RBI's draft framework) and enterprises already cite it; speaking NIST fluently signals credibility.
- **Actionable** — the four functions map to concrete artifacts (charter, intake, dashboards, playbooks) an architect can ship.

## Practical adoption path

1. **Week 1:** Read the NIST AI RMF core document (the "Playbook" companion is the practical one). Skim, do not memorize.
2. **Week 2:** Map each function to your control library rows. Identify gaps.
3. **Week 3:** Pick one high-risk use case and run it through all four functions end to end. Document the evidence.
4. **Ongoing:** Use NIST as the agenda for the review board (Govern/Map/Measure/Manage as standing agenda items).

## Common pitfalls

- Treating NIST as a compliance checkbox rather than an operating model. It is a risk-management *process*, not a certificate.
- Mapping every category before shipping anything. Start with one use case end to end.
- Confusing NIST AI RMF with NIST cybersecurity frameworks (CSF, 800-53). They complement each other; AI RMF is the AI-specific layer.
- Ignoring the "Govern" function because it feels soft. Govern is where accountability and culture live — it is the hardest and most valuable.

## Related

- [Control Framework](/governance/control-framework/) — the 12 domains and dashboard.
- [ISO 42001](/governance/iso-42001/) — the certifiable management system built on similar foundations.
- [EU AI Act](/governance/eu-ai-act/) — the product-regulation layer.
- [Control Library](/reference/control-library/) — NIST rows in detail.
- [Governance & Compliance overview](/governance/) — the stack and translation rule.
