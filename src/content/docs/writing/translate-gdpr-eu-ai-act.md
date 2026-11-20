---
title: "Translating GDPR & EU AI Act into Platform Controls"
description: "How to turn GDPR articles and EU AI Act high-risk requirements into enforceable platform controls with automated evidence — the \"translate, don't cite\" method."
tags: [writing, governance-as-code, gdpr, eu-ai-act]
sidebar:
  order: 1
---

## The problem

Most enterprises "handle GDPR and the EU AI Act" by writing a policy, training people and hoping. When an auditor or a regulator asks for evidence, the answer is a quarter-long manual exercise. Meanwhile, engineering teams either (a) over-restrict and slow down delivery, or (b) ignore the policy and ship anyway. Both are failures of the same root cause: **regulation was never translated into something a platform can enforce.**

The fix is not more policy. It is a translation pipeline: regulation → obligation → control → evidence → owner → metric. This article walks through that pipeline for GDPR and the EU AI Act, with concrete controls you can build this quarter.

## The frame: translate, don't cite

The single most damaging habit in governance is citing article numbers in executive meetings. "We comply with GDPR Art. 5" means nothing to a CIO. "Every pipeline deploy is scanned for PII and no PII has reached non-prod in 12 months" means everything.

Rule: **never cite an article number in an executive setting; cite the control, the evidence and the cost of failure.** The article number is for the lawyers and the audit trail; the control is for the engineers and the executives.

The six-step translation:

```
REGULATION → OBLIGATION → CONTROL → EVIDENCE → OWNER → METRIC
```

## Worked example 1 — GDPR Art. 5 (data minimization)

**Regulation:** GDPR Art. 5(1)(c) — personal data must be adequate, relevant and limited to what is necessary.

**Obligation (plain language):** We collect and process only the personal data fields each use case actually needs, and we delete them when no longer needed.

**Control (Domain 2 — Data Governance):**
- Field-level allow-lists per use case: a pipeline may only read columns on its allow-list.
- Automated PII detection in CI/CD: every deploy is scanned; a PII hit fails the build.
- Retention TTL on every dataset; automated purge jobs.
- Quarterly sampling audit of production data for unexpected PII.

**Evidence:**
- PII scanner report per deploy (stored, queryable).
- Column-access audit log.
- Retention job run history.

**Owner:** data platform lead + DPO sign-off.

**Metric:** % pipelines with minimization policy enforced (target 100%); PII-in-logs incidents (target 0).

**Exec line:** *"We enforce data minimization as code — every pipeline deploy is scanned, and no PII has reached non-prod in 12 months."*

## Worked example 2 — EU AI Act high-risk (Art. 9–15)

**Regulation:** EU AI Act, high-risk system obligations (risk management, data governance, technical documentation, record-keeping, transparency, human oversight, accuracy/robustness/cybersecurity).

**Obligation:** A high-risk AI system must be managed, documented, monitored and overseen throughout its lifecycle.

**Controls (Domains 1–8):**
- **Risk tiering gate** in the AI use-case intake (no high-risk system ships without classification).
- **Mandatory model card** + eval suite before production promotion.
- **Human-in-the-loop** for consequential decisions, with override logging.
- **Drift monitoring** + quality dashboards with alerting.
- **Incident playbook** with 24hr reporting to the regulator where applicable.
- **Conformity assessment / FRIA** (fundamental rights impact assessment) before deployment.

**Evidence:** model card registry; eval results per release; HITL audit trail; drift dashboard; incident log.

**Exec line:** *"No high-risk AI ships without a model card, an eval pass and a named human approver — enforced by the platform, not by policy documents."*

## Worked example 3 — GDPR Art. 15–22 (data subject rights)

**Obligation:** Individuals can access, correct, erase and port their data; organizations must fulfill within time limits.

**Control:** Rights-fulfillment API with SLA tracking; automated erasure cascade across all stores (primary, replicas, backups policy, search index); audit log of every request.

**Evidence:** rights request log; SLA compliance report; erasure job history.

**Exec line:** *"Rights are an API call, not a project — erasure cascades automatically and we report fulfillment SLA monthly."*

## What to build this quarter (in priority order)

1. **AI use-case register with risk tiering** — if you do nothing else, do this. You cannot govern what you cannot see.
2. **CI gates** — PII scan, SBOM, model-card validation, eval-suite pass. Fail = no deploy. This is where governance becomes real.
3. **Model card registry** — one record per model, versioned, with eval results attached.
4. **Rights-fulfillment API** (if you process EU personal data) — erasure as an API call.
5. **Drift + cost monitoring** — quality and cost dashboards with alerting.

## The enforcement principle

Controls live in the platform, not in documents. Concretely:

- **Intake gate:** no AI use case ships without a tier and a named owner.
- **CI gates:** fail = no deploy. No exceptions without a time-boxed, tracked exception.
- **Policy engine (OPA/Kyverno):** data residency, approved model list, cost guardrails at admission time.
- **Registries:** single source of truth for model cards, control library, vendor scorecards.
- **Evidence is an export:** audit becomes a query, not a quarter of work.

## Common objections (and answers)

- *"This is too heavy for a startup."* — Scale the control set to the tier. Minimal-tier use cases get registration only. High-tier gets the full set. The framework is tiered by design.
- *"Engineering will resist gates."* — Gates are fast (< 5 min CI run) and replace manual review. Frame as acceleration, not friction.
- *"We don't have a DPO / legal team."* — Assign the DPO role to an existing leader; the control library documents what they must do. Legal review of the library itself is a one-time cost.
- *"Regulations keep changing."* — That is why the library is versioned and reviewed quarterly. Change is the reason for a system, not an excuse to avoid one.

## Further reading

- [Control Framework](/thought-base/governance/control-framework/) — the 12 domains and governance dashboard.
- [Risk Tiering Model](/thought-base/governance/risk-tiering/) — the intake decision tree.
- [Control Library](/thought-base/reference/control-library/) — the full regulation → control → evidence table.
- [Governance & Compliance overview](/thought-base/governance/) — the stack and translation rule.
- NIST AI RMF, ISO/IEC 42001, EU AI Act (Art. 9–15), GDPR (Art. 5, 15–22, 25, 32, 33–34).

---

*Part of the Thought Base writing series. Next: AI FinOps — Unit Economics for Regulated Enterprises.*
