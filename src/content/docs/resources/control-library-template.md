---
title: Control Library Template
description: "Downloadable starter template for the control library — regulation → obligation → control → evidence → owner → metric."
tags: [resources, template, control-library]
---

## TL;DR

Copy this table into a spreadsheet and add one row per (regulation, obligation). Target 30–50 rows for a v1. The full worked example lives at [Control Library](/reference/control-library/).

## Template (copy into spreadsheet)

| Reg | Obligation | Domain | Control | Evidence | Owner | Metric | Exec line | Last reviewed | Reviewer |
|---|---|---|---|---|---|---|---|---|---|
| (regulation + article) | (what must be true) | (1–12) | (mechanism) | (artifact per deploy/run) | (role) | (health measure) | (one sentence) | (date) | (name) |

## Column guidance

- **Reg:** source regulation/standard + article or section. Keep the article number here (internal); never cite it externally without translation.
- **Obligation:** plain-language statement of what must be true.
- **Domain:** control domain number (1–12) from the [Control Framework](/governance/control-framework/).
- **Control:** concrete mechanism that enforces the obligation. Must be buildable.
- **Evidence:** artifact produced on every deploy/run. Must be exportable.
- **Owner:** named role accountable for the control.
- **Metric:** health measure with a target.
- **Exec line:** one sentence for stakeholders (control + evidence + metric, no article numbers).
- **Last reviewed / Reviewer:** governance hygiene.

## Starter rows (seed)

Seed with the rows from the [Control Library](/reference/control-library/) (18 rows across GDPR, EU AI Act, NIST, ISO 42001, DPDP, RBI/SEBI/IRDAI) and expand.

## Maintenance

- Version the file (v1, v1.1, …).
- Quarterly review aligned to regulatory watch.
- New regulation or delegated act → add rows; do not delete (mark superseded).
- Each row has a named reviewer and last-reviewed date.

## Related

- [Control Library](/reference/control-library/) — full worked example.
- [Control Framework](/governance/control-framework/) — the 12 domains and dashboard.
- [Risk Tiering Model](/governance/risk-tiering/) — determines which controls apply.
- [Exec-Line Answer Bank](/resources/exec-line-answer-bank/) — stakeholder translations.
- [Governance as Code](/governance/governance-as-code/) — implementation patterns.
- [Writing: Translating GDPR & EU AI Act](/writing/translate-gdpr-eu-ai-act/) — long-form treatment.
