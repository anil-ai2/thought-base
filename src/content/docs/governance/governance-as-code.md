---
title: Governance as Code — OPA, Kyverno & CI Gates
description: "Implementing AI governance as enforceable platform controls: policy engines, CI gates, registries and automated evidence."
tags: [governance, governance-as-code]
---

## TL;DR

Policies in PDFs do not scale; controls in code do. Governance as code means: policy engines (OPA/Kyverno) enforce rules at deploy time, CI gates block non-compliant changes, registries are the system of record, and evidence is an export rather than a project. This page is the implementation companion to the [Control Framework](/governance/control-framework/).

## The four mechanisms

### 1. Policy engine (OPA / Kyverno)
Enforces rules at admission time (Kubernetes) or decision time (application).
- **Data residency:** reject workloads that would process data in non-approved regions.
- **Approved model list:** only models from the approved registry may be deployed.
- **Cost guardrails:** reject deployments whose declared cost exceeds the budget line.
- **Security baseline:** reject containers without SBOM, without scan pass, without non-root user.

### 2. CI gates
Run on every pull request / deploy; failure blocks promotion.
- PII scan (fail on PII in code, config or test data).
- SBOM + dependency vulnerability scan.
- Model-card validation (required fields present, eval results attached).
- Eval-suite pass (accuracy, bias, safety thresholds).
- Cost-budget check (declared cost ≤ budget line).

### 3. Registries (system of record)
- **Model card registry:** one record per model, versioned, with eval results and approvals.
- **AI use-case register:** tier, owner, status, controls applied.
- **Control library:** the regulation → control → evidence table.
- **Vendor scorecards:** model provider / platform assessments.

### 4. Evidence as export
- Every control emits an artifact on deploy/run.
- Artifacts are stored in a queryable store (object storage + index).
- Audit = a query/export, not a quarter of manual work.
- Retention policy defined per artifact type; immutable where required.

## Implementation sequence (start small)

1. **Week 1:** Add one CI gate — PII scan on the data pipeline repo. Prove the pattern.
2. **Week 2:** Add model-card validation gate on the ML repo.
3. **Week 3:** Stand up a model card registry (even a simple Git-backed YAML store).
4. **Week 4:** Add OPA/Kyverno policy for data residency on the cluster.
5. **Ongoing:** one new gate or policy per sprint; never a big-bang.

## Anti-patterns

- **Big-bang rollout.** Governance as code introduced as a single massive PR breaks trust. Incremental, per-repo, per-gate.
- **Gates without fast feedback.** A gate that takes 40 minutes kills adoption. Keep gates under 5–10 minutes; move heavy checks to nightly.
- **Policies without owners.** Every policy has a named owner and a change process.
- **Evidence without retention.** Define retention per artifact type; auditors will ask.
- **Shadow enforcement.** Gates that run but don't block teach teams to ignore them. Block from day one.

## Tooling notes

- **OPA / Gatekeeper** (Kubernetes admission) — mature, Rego-based, steep learning curve.
- **Kyverno** — Kubernetes-native, YAML-based, easier for platform teams.
- **Conftest** — policy testing for config files in CI.
- **Checkov / tfsec** — IaC scanning.
- **Custom CI scripts** — fine for v1; migrate to a policy engine when duplication hurts.

## Related

- [Control Framework](/governance/control-framework/) — the 12 domains and dashboard.
- [Risk Tiering Model](/governance/risk-tiering/) — intake gate.
- [Control Library](/reference/control-library/) — the evidence standard.
- [AI Observability](/architecture/ai-observability/) — monitoring feeds evidence.
- [Transformation Operating Model](/playbooks/operating-model/) — where gates sit in the lifecycle.
