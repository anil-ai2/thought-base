---
title: AI Control Framework (Centerpiece)
description: "Maps NIST AI RMF, ISO 42001, EU AI Act, GDPR, DPDP and RBI/SEBI requirements to enterprise controls, evidence artifacts, owners and metrics. The centerpiece artifact."
tags: [governance, control-framework, artifact]
sidebar:
  order: 1
---

## TL;DR

A single matrix that turns six regulatory frameworks into **enforceable platform controls** with automated evidence, named owners and health metrics. This is the artifact that wins the seat: it is the "legal → control → evidence → cost" pipeline in one document. Start with the 12 control domains below, then expand rows per regulation.

:::tip
Copy the table into a spreadsheet and add one row per (regulation, obligation). Target 30–50 rows for a v1. The full control library lives at [Control Library](/thought-base/reference/control-library/).
:::

## How to use this framework

1. **Intake:** every AI use case enters through the [Risk Tiering Model](/thought-base/governance/risk-tiering/). Tier determines which controls apply.
2. **Map:** for each applicable (regulation, obligation), select the control domain(s) below and the concrete control.
3. **Enforce:** controls are implemented as platform capabilities (CI gates, policy engines, registries), not as PDFs.
4. **Evidence:** each control emits an artifact on every deploy/run. Evidence is an export.
5. **Review:** review board checks evidence, not promises. Exceptions are time-boxed and tracked.
6. **Measure:** health metrics feed a governance dashboard reported to the CIO/CTO/CDO and (for regulated entities) to the regulator on demand.

## The 12 control domains

| # | Domain | Core question | Typical mechanisms |
|---|---|---|---|
| 1 | AI Use-Case Register & Risk Tiering | Do we know what AI we run and its risk class? | Intake form, risk tier (minimal/limited/high/unacceptable), approval gate |
| 2 | Data Governance & Minimization | Is data adequate, relevant, limited, lawful? | Field allow-lists, PII scan in CI, purpose tags, retention TTL, erasure API |
| 3 | Model Lifecycle & Approval | Does every model have a card, evals and an approver? | Model card registry, eval suite gate, human-in-the-loop sign-off |
| 4 | Security & Supply Chain | Are models, prompts and pipelines hardened? | OWASP LLM Top 10 checks, SBOM, dependency scan, red-team cadence |
| 5 | Privacy Engineering | Is PII handled by design? | Anonymization, consent capture, purpose tagging, rights-fulfillment API |
| 6 | Transparency & Explainability | Can users and auditors understand outputs? | Model cards, decision logs, user-facing disclosures, appeal path |
| 7 | Human Oversight | Is there a named human accountable for high-risk decisions? | HITL gate, escalation runbook, override logging |
| 8 | Monitoring & Drift | Do we detect degradation and incidents? | Drift/quality dashboards, alerting, incident playbook, 24hr reporting |
| 9 | FinOps & Cost Guardrails | Is cost visible, attributed and bounded? | Cost taxonomy, per-inference metrics, budget alerts, commitment strategy |
| 10 | Vendor & Third-Party | Are model providers and platforms assessed? | Vendor AI assessment checklist, contract clauses, exit plan |
| 11 | Records & Audit Trail | Can we produce evidence on demand? | Immutable logs, retention policy, export API, audit packs |
| 12 | Continuous Improvement | Do controls evolve with regulation? | Quarterly review, regulatory watch, control library versioning |

## Framework → control domain mapping

| Framework | Primary domains | Notes |
|---|---|---|
| NIST AI RMF — Govern | 1, 10, 12 | Accountability, culture, third-party |
| NIST AI RMF — Map | 1, 2, 6 | Context, impact, affected stakeholders |
| NIST AI RMF — Measure | 3, 8, 9 | Metrics, monitoring, evaluation |
| NIST AI RMF — Manage | 4, 5, 7, 11 | Risk response, incidents, documentation |
| ISO 42001 | 1, 3, 10, 11, 12 | Management system, Annex A controls |
| EU AI Act (high-risk, Art. 9–15) | 2, 3, 4, 6, 7, 8, 11 | Risk mgmt, data governance, docs, record-keeping, transparency, oversight, accuracy/robustness/cyber |
| GDPR | 2, 5, 6, 11 | Minimization, purpose, rights, breach notification |
| DPDP Act | 2, 5, 6, 11 | Consent, purpose limitation, rights, breach (72hr), SDF obligations |
| RBI draft AI framework / FREE-AI | 1, 3, 7, 8, 10, 11 | Board-approved AI policy, model risk, vendor oversight, fairness, incident reporting |
| SEBI May 2026 circular | 4, 8, 11 | AI adoption & threat modeling for financial entities |
| IRDAI guidelines | 1, 4, 8, 11 | Insurer AI/cyber controls |

## Worked example — one row end to end

**Regulation:** GDPR Art. 5(1)(c) — data minimization.
**Obligation:** personal data must be adequate, relevant and limited to what is necessary for the purpose.
**Control (Domain 2):** field-level data minimization — column allow-lists per use case; automated PII detection in CI/CD; quarterly sampling audit; purge jobs with retention TTL.
**Evidence:** PII scanner report per deploy; audit log of column access; retention job run history.
**Owner:** data platform lead + DPO sign-off.
**Metric:** % pipelines with minimization policy enforced; number of PII-in-logs incidents (target 0).
**Exec line:** "We enforce data minimization as code — every pipeline deploy is scanned, and no PII has reached non-prod in 12 months."

## Control enforcement patterns

Controls are implemented as platform capabilities, not documents:

- **Intake gate:** no AI use case ships without a tier assignment and a named owner. Enforced by the AI use-case register; blocks prod deploy if missing.
- **CI gates:** PII scan, SBOM, model-card validation, eval-suite pass, cost-budget check. Fail = no deploy.
- **Policy engine (OPA/Kyverno):** data residency, approved model list, cost guardrails enforced at admission time.
- **Registries:** model card registry, control library, vendor scorecards. Single source of truth.
- **Monitoring:** drift/quality/cost dashboards with alerting; incident playbook with 24hr reporting for regulated entities.

## Governance dashboard (what the exec sees)

| Metric | Target | Cadence |
|---|---|---|
| % AI use cases registered & tiered | 100% | Weekly |
| % high-risk systems with model card + eval pass + HITL approver | 100% | Per release |
| PII-in-logs incidents | 0 | Weekly |
| Mean time to produce audit evidence (export) | < 1 day | Monthly |
| Cost per inference / token trend | Flat or down | Weekly |
| Open exceptions (time-boxed) | Declining | Monthly |
| Controls with automated evidence | Increasing | Quarterly |

## Exceptions process

1. Requestor documents: control, business justification, risk assessment, compensating control, expiry date.
2. Review board (architecture + security + DPO + FinOps) approves or rejects within 5 business days.
3. Exception logged in the register with expiry; auto-alert 30 days before expiry.
4. No permanent exceptions. Expired = control re-enforced or re-approved.

## Versioning & maintenance

- Control library is versioned (v1, v1.1, …). Material changes are noted inline with a short "changed because" note.
- Quarterly review aligned to regulatory watch (RBI/SEBI draft rules, DPDP rules, EU AI Act delegated acts).
- Each control row has a "last reviewed" field and a named reviewer.

## Related

- [Risk Tiering Model](/thought-base/governance/risk-tiering/) — determines which controls apply.
- [Control Library](/thought-base/reference/control-library/) — the 30–50 row detail.
- [Governance as Code](/thought-base/governance/governance-as-code/) — implementation patterns.
- [Transformation Operating Model](/thought-base/playbooks/operating-model/) — where governance sits in the lifecycle.
