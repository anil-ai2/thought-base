---
title: ADR Template + Worked Examples
description: "Architecture Decision Record template and three worked examples (data, delivery, cost)."
tags: [reference, adr, template]
---

## TL;DR

Architecture Decision Records (ADRs) are the **lightweight, versioned record of why a decision was made**. One page, four sections: context, decision, consequences, alternatives. This page gives the template and three worked examples (data, delivery, cost) to copy.

## Template

```markdown
# ADR-NNN: <Title>

## Status
Proposed | Accepted | Deprecated | Superseded by ADR-XXX

## Context
What is the issue we are facing? What forces are at play (technical, business, regulatory, cost)?

## Decision
What we decided to do, in one or two sentences.

## Consequences
- Positive: ...
- Negative: ...
- Risks: ...

## Alternatives considered
- Option A: ... (rejected because ...)
- Option B: ... (rejected because ...)

## Related
- Links to issues, docs, other ADRs.
```

## Worked example 1 — Data (storage choice)

**ADR-001: Use a lakehouse (Delta) instead of a separate warehouse + lake**

- **Context:** Separate warehouse and lake caused duplicated pipelines, inconsistent data and high storage cost. Teams spent 30% of effort reconciling.
- **Decision:** Adopt a single lakehouse (Delta Lake on ADLS) as the primary analytical store; deprecate the standalone warehouse.
- **Consequences:** Positive — single source of truth, simpler pipelines, lower storage cost. Negative — migration effort (3 months), retraining for warehouse-native teams. Risk — Delta performance for high-concurrency BI may need tuning.
- **Alternatives:** Keep separate (rejected: duplication persists); move to a managed warehouse only (rejected: loses raw data flexibility).

## Worked example 2 — Delivery (deployment strategy)

**ADR-002: Canary deployments with automated rollback**

- **Context:** Big-bang deploys caused two incidents in one quarter; rollback took 45 minutes manually. Need faster, safer releases.
- **Decision:** Adopt canary deployments (5% → 25% → 100%) with automated rollback on error-rate/latency SLO breach.
- **Consequences:** Positive — blast radius limited; rollback under 5 minutes. Negative — requires observability maturity and feature flags. Risk — canary metrics must be representative; bad canary selection masks issues.
- **Alternatives:** Blue-green (rejected: doubles infra cost); big-bang with manual rollback (rejected: too slow).

## Worked example 3 — Cost (model selection)

**ADR-003: Route simple queries to a small model; reserve large model for complex tasks**

- **Context:** All queries went to GPT-4-class model; cost per outcome was $0.80, above the $0.50 target. 60% of queries were simple (classification, extraction) and did not need the large model.
- **Decision:** Add a router that classifies query complexity; simple queries go to a small, cheap model; complex queries go to the large model. Quality gate: small model must pass eval bar on the simple-query subset.
- **Consequences:** Positive — cost per outcome dropped to $0.42; quality held. Negative — router adds latency and a failure mode (mis-routing). Risk — router accuracy must be monitored; drift in query mix changes savings.
- **Alternatives:** Use large model for all (rejected: misses cost target); use small model for all (rejected: quality fails on complex queries).

## ADR hygiene

- **One decision per ADR.** If you are deciding two things, write two ADRs.
- **Status is explicit.** Proposed → Accepted → (Deprecated | Superseded).
- **Never delete.** Supersede with a new ADR and link back.
- **Short.** One page. If it needs more, the decision is not clear yet.
- **Stored in the repo** (e.g., `docs/adr/`) so they are versioned with the code.

## Related

- [Top 10 Failure Modes](/reference/top-failure-modes/) — design-review checklist.
- [Transformation Operating Model](/playbooks/operating-model/) — design review gate.
- [Decision Frameworks](/playbooks/decision-frameworks/) — scorecards.
- [Reference Architectures](/architecture/reference-architectures/) — approved patterns.
- [Control Framework](/governance/control-framework/) — compliance dimension.
- [Writing](/writing/) — articles derived from ADRs.
- [About](/about/) — the 12-week skill plan (ADR practice).
