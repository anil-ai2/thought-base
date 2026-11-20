---
title: "Governance as Code for AI"
description: "Long-form: implementing AI governance as enforceable platform controls — policy engines, CI gates, registries and automated evidence."
tags: [writing, governance-as-code]
sidebar:
  order: 4
---

## TL;DR

Policies in PDFs do not scale; controls in code do. This article makes the case for governance as code for AI — policy engines, CI gates, registries and evidence-as-export — and gives a 4-week implementation sequence you can start Monday. Base draft — to be expanded.

## The problem

Governance programs fail in two predictable ways: (1) they are written as policy documents that nobody reads, and (2) they rely on manual evidence collection that takes a quarter. The result: engineering teams either over-restrict and slow delivery, or ignore the policy and ship anyway. Both are failures of the same root cause — regulation was never translated into something a platform can enforce.

## The frame

Governance as code: every control is an automated check, every check emits evidence, every evidence artifact is queryable. Policy documents describe *intent*; code enforces *behavior*. See [Governance as Code](/governance/governance-as-code/) for the implementation companion.

## The mechanism

### The four mechanisms
1. **Policy engine (OPA/Kyverno)** — enforce rules at admission time.
2. **CI gates** — block non-compliant changes before deploy.
3. **Registries** — system of record for model cards, use cases, controls, vendors.
4. **Evidence as export** — audit becomes a query, not a project.

### 4-week implementation sequence
- Week 1: one CI gate (PII scan) on the data pipeline repo.
- Week 2: model-card validation gate on the ML repo.
- Week 3: model card registry (Git-backed YAML is fine for v1).
- Week 4: OPA/Kyverno policy for data residency on the cluster.
- Ongoing: one new gate or policy per sprint.

### Anti-patterns to avoid
Big-bang rollout, gates without fast feedback, policies without owners, evidence without retention, shadow enforcement.

## What to do Monday

1. Pick one repo and add a PII scan gate (fail = no merge).
2. Stand up a model card template (YAML/JSON) in the same repo.
3. Document the control-to-gate mapping for one regulation (e.g., GDPR Art. 5).
4. Schedule a 30-minute review-board slot to demo the gate.
5. Write a one-page "governance as code" note for your sponsor.

## Further reading

- [Governance as Code](/governance/governance-as-code/) — implementation patterns and tooling.
- [Control Framework](/governance/control-framework/) — the 12 domains.
- [Risk Tiering Model](/governance/risk-tiering/) — intake gate.
- [Control Library](/reference/control-library/) — evidence standard.
- [AI Observability](/architecture/ai-observability/) — monitoring feeds evidence.
- [Transformation Operating Model](/playbooks/operating-model/) — where gates sit.
- [Writing: Translating GDPR & EU AI Act](/writing/translate-gdpr-eu-ai-act/) — the translation method.

---

*Part of the Thought Base writing series. Base draft — to be expanded with a full worked example and tooling comparison.*
