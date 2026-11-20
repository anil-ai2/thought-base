---
title: AI Risk Tiering Model — Intake & Decision Tree
description: "Classify any AI use case as minimal, limited, high or unacceptable risk and get the required control set. Includes an intake form and decision tree."
tags: [governance, risk-tiering, artifact]
sidebar:
  order: 2
---

## TL;DR

Every AI use case is classified at intake into one of four tiers — **minimal, limited, high, unacceptable** — using a short decision tree. The tier determines the mandatory control set, the approval path and the evidence burden. No AI ships to production without a tier and a named owner.

:::caution
Unacceptable-risk use cases are not "governed more heavily" — they are **not built**. Document the decision and move on.
:::

## The four tiers

| Tier | Definition | Examples | Approval path |
|---|---|---|---|
| **Unacceptable** | Prohibited or fundamentally incompatible with rights/safety | Social scoring, subliminal manipulation, real-time biometric ID in public (with narrow exceptions), exploiting vulnerabilities | Reject — do not build |
| **High** | Significant impact on rights, safety, access to services, or regulated decisions | Credit scoring, hiring screening, medical diagnosis support, fraud decisions with customer impact, biometric auth for access | Review board + conformity assessment + HITL |
| **Limited** | User-facing but reversible, low-stakes, human can override easily | Chatbots, content generation, summarization, code assist, internal search | Lightweight review + transparency notice |
| **Minimal** | Internal, low-risk, no personal data, no consequential decisions | Log clustering, internal doc search, synthetic data generation for testing | Self-serve with registration |

## Decision tree (intake)

Answer in order; stop at first "yes."

1. **Does it manipulate behavior subliminally or exploit vulnerabilities?** → Unacceptable.
2. **Does it score/rank people for access to credit, employment, education, healthcare, housing, insurance or public services?** → High.
3. **Does it make or materially influence a decision about a person that is hard to reverse?** → High.
4. **Does it process biometric data or infer sensitive attributes (health, religion, politics, sexuality)?** → High (or Unacceptable if real-time public biometric).
5. **Does it interact with end users who may mistake it for a human, or generate content that could mislead?** → Limited.
6. **Does it process personal data at all?** → at least Limited; escalate to High if the data is sensitive or the volume is large.
7. **Otherwise** → Minimal.

When in doubt, tier **up**, not down. Re-tiering downward requires review-board approval and a documented rationale.

## Required controls by tier

| Control | Minimal | Limited | High | Unacceptable |
|---|---|---|---|---|
| Register & tier assignment | ✅ | ✅ | ✅ | ✅ (rejected) |
| Model card | Recommended | ✅ | ✅ (mandatory) | n/a |
| Eval suite (accuracy, bias, safety) | — | Recommended | ✅ | n/a |
| Human-in-the-loop for decisions | — | — | ✅ | n/a |
| Transparency notice to user | — | ✅ | ✅ | n/a |
| Drift & quality monitoring | — | Recommended | ✅ | n/a |
| Data minimization & PII scan | If PII | ✅ | ✅ | n/a |
| Security review (OWASP LLM Top 10) | — | Recommended | ✅ | n/a |
| Vendor assessment (if third-party model) | — | ✅ | ✅ | n/a |
| Conformity assessment / FRIA | — | — | ✅ (EU AI Act high-risk) | n/a |
| Incident playbook & 24hr reporting | — | Recommended | ✅ | n/a |
| FinOps: cost per outcome tracked | Recommended | ✅ | ✅ | n/a |

## Intake form (copy this)

```
AI USE-CASE INTAKE
------------------
1. Use-case name:
2. Business owner (name + role):
3. Technical owner (name + role):
4. Problem statement (1-2 sentences):
5. AI pattern: [ ] RAG  [ ] Agentic  [ ] Copilot  [ ] Predictive  [ ] Doc processing  [ ] Other
6. Data involved: [ ] None  [ ] Internal non-PII  [ ] Personal data  [ ] Sensitive personal data
7. Who is affected by the output? [ ] No one externally  [ ] Internal users  [ ] Customers  [ ] Regulated decisions
8. Is the decision reversible by a human in < 1 day? [ ] Yes  [ ] No
9. Third-party model/provider? [ ] No  [ ] Yes — name:
10. Estimated cost (order of magnitude): training $___  inference $___/month
11. Proposed tier (from decision tree): [ ] Minimal  [ ] Limited  [ ] High  [ ] Unacceptable
12. Reviewer notes:
```

## Re-tiering

- Tier is assigned at intake and **locked at production promotion**.
- Up-tiering (e.g., minimal → limited) can be done by the technical owner with a short note.
- Down-tiering requires review-board approval and a documented rationale; the burden of proof is on the requestor.
- Any change in data, model, or use case that could change the tier triggers a re-intake.

## What the review board checks (high tier)

1. Risk assessment document (impact on rights, safety, access to services).
2. Model card: purpose, training data, metrics, limitations, intended use, out-of-scope use.
3. Eval suite results: accuracy, bias/fairness metrics with thresholds, safety red-team.
4. Data governance: minimization, purpose tags, retention, erasure path.
5. Human oversight: named approver, override logging, escalation runbook.
6. Transparency: user-facing disclosure and appeal path.
7. Monitoring: drift/quality/cost dashboards and alerting.
8. Security: OWASP LLM Top 10 review, SBOM, dependency scan.
9. Vendor assessment (if applicable).
10. Conformity assessment / FRIA (if EU AI Act high-risk).
11. FinOps: cost per outcome baseline and budget.

## Anti-patterns to reject

- "We'll tier it later" — tier at intake or it never happens.
- "It's just an internal tool" — internal tools with PII or consequential decisions are not minimal.
- "The vendor handles compliance" — the deployer is accountable; vendor assessment is a control, not a transfer.
- "We'll add monitoring after launch" — monitoring is a gate, not a follow-up.
- Tiering down to avoid review — the most common failure mode; audit for it.

## Related

- [AI Control Framework](/governance/control-framework/) — the controls each tier unlocks.
- [Control Library](/reference/control-library/) — regulation → control → evidence detail.
- [Transformation Operating Model](/playbooks/operating-model/) — where intake sits in the lifecycle.
- [Decision Frameworks](/playbooks/decision-frameworks/) — build-vs-buy and vendor evaluation.
