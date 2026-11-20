---
title: Governance & Compliance — From Law to Platform Control
description: "How an Enterprise AI Transformation Architect turns NIST AI RMF, ISO 42001, EU AI Act, GDPR, DPDP and RBI/SEBI rules into enforceable platform controls with automated evidence."
tags: [governance, compliance]
---

## TL;DR

Governance is not a policy document. It is a **control set enforced by the platform**, with automated evidence, named owners, and a cost-of-failure number. The stack here runs NIST AI RMF → ISO 42001 → EU AI Act → GDPR/DPDP → RBI/SEBI/IRDAI, and every requirement is translated into: control, evidence, owner, metric.

:::tip
If you only read one page in this section, read the [AI Control Framework](/thought-base/governance/control-framework/) — the centerpiece artifact.
:::

## Why governance is the differentiator

In regulated enterprises, AI deals stall on three questions: *Is it legal? Is it safe? Can we prove it?* A technology-only architect cannot answer the first and third. A compliance-only advisor cannot build the second. The trifecta (law + tech + FinOps) answers all three in one voice — and that voice is what commands premium compensation and strategic visibility.

The honest risk: being typecast as "the compliance person." Guardrail: **lead every governance conversation with business outcome and transformation**, then governance as the enabler. Governance reduces risk, accelerates time-to-production (by pre-approving patterns) and lowers cost (by preventing rework and incidents). Frame it that way.

## The governance stack

| Layer | Framework | What it gives us |
|---|---|---|
| Foundation | NIST AI RMF (Govern/Map/Measure/Manage) | A common language for AI risk; the backbone of the control library |
| Management system | ISO/IEC 42001 | Auditable AI management system; exec trust and certification path |
| Product regulation | EU AI Act (risk classes, conformity, FRIA) | Hard requirements for high-risk systems; CE marking, notified bodies |
| Data protection | GDPR (minimization, purpose limitation, rights, breach) | Data controls with teeth; automated rights fulfillment |
| India data | DPDP Act 2023 (consent, purpose, rights, SDF) | India-specific data governance; deadline May 2027 |
| Sector (India) | RBI draft AI framework, SEBI May 2026 circular, IRDAI guidelines | Banking/securities/insurance AI governance; regulator-ready evidence |
| Meta | India AI Governance Guidelines (Feb 2026) | Sectoral regulators (RBI, SEBI, TRAI, ICMR, NHA) expected to issue AI-specific rules |

Read top-to-bottom as a ladder: **law → standard → control → evidence → metric.**

## The translation rule

Never cite an article number in an executive meeting. Cite the control, the evidence and the cost of failure.

```
REGULATION → OBLIGATION → CONTROL → EVIDENCE → OWNER → METRIC
```

| Step | Question | Example output |
|---|---|---|
| Regulation | Which law/standard? | "GDPR Art. 5(1)(c)" |
| Obligation | What must be true? | "Personal data adequate, relevant, limited to purpose" |
| Control | What mechanism enforces it? | "Field-level allow-lists + automated PII scan in CI" |
| Evidence | What proves it works? | "Scan report per deploy; quarterly sampling audit" |
| Owner | Who is accountable? | "Data platform lead + DPO sign-off" |
| Metric | How do we know it's healthy? | "% pipelines with policy enforced; 0 PII-in-logs incidents" |

Worked translations for GDPR Art. 5, EU AI Act high-risk, RBI/DPDP and more live in the [Control Library](/thought-base/reference/control-library/) and the [Exec-Line Answer Bank](/thought-base/resources/exec-line-answer-bank/).

## What "governance as code" means here

Policies in PDFs do not scale. Controls in code do. Concretely:

- **Policy engines (OPA/Kyverno)** enforce data-residency, model-approval and cost-guardrails at deploy time.
- **CI gates** run PII scans, SBOM checks, model-card validation and eval suites before any model reaches production.
- **Registries** (model card registry, AI use-case register, control library) are the system of record, not spreadsheets.
- **Evidence is an export**, not a project — audit becomes a query, not a quarter of work.

## Section map

| Page | What it is |
|---|---|
| [Control Framework](/thought-base/governance/control-framework/) | Centerpiece artifact — the full control matrix |
| [Risk Tiering Model](/thought-base/governance/risk-tiering/) | Intake form + decision tree for AI use cases |
| [NIST AI RMF](/thought-base/governance/nist-ai-rmf/) | Govern/Map/Measure/Manage for architects |
| [ISO 42001](/thought-base/governance/iso-42001/) | AI management system; certification path |
| [EU AI Act](/thought-base/governance/eu-ai-act/) | Risk classes, conformity, FRIA |
| [GDPR](/thought-base/governance/gdpr/) | Data minimization, purpose limitation, rights as controls |
| [DPDP Act](/thought-base/governance/dpdp/) | India data protection as controls |
| [RBI/SEBI/IRDAI](/thought-base/governance/india-regulators/) | Sectoral AI governance in India |
| [Governance as Code](/thought-base/governance/governance-as-code/) | OPA/Kyverno, CI gates, registries |

## Open questions to resolve per engagement

- Is the target a **provider** or **deployer** under EU AI Act? (Obligations differ sharply.)
- Which use cases are **high-risk** under the Act's Annex III? (Determines conformity-assessment burden.)
- Is the organization a **Significant Data Fiduciary** under DPDP? (Triggers audits, DPO, DPIA.)
- Does the bank fall under RBI's draft AI framework scope? (Almost certainly yes for regulated entities.)

Answer these first; the control set follows.
