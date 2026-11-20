---
title: Top 10 Data & Delivery Failure Modes
description: "A review-board checklist of the top 10 failure modes in data pipelines and application delivery — the architect's design-review tool."
tags: [reference, failure-modes, checklist]
---

## TL;DR

A design-review checklist of the most common failure modes in data pipelines and application delivery. Use it as a 30-minute review tool: given a 2-page design doc, produce ranked risks, the kill question, a cost order-of-magnitude and a privacy flag. This is the artifact that proves review-level credibility.

## The 10 failure modes

### Data

1. **Schema drift.** Upstream changes break downstream without notice. Mitigation: data contracts, schema registry, CI checks.
2. **PII leakage in logs.** Debug logging captures personal data. Mitigation: PII scan in CI, log redaction, retention policy.
3. **Late-arriving / out-of-order data.** Pipelines assume timely arrival; reality disagrees. Mitigation: watermarking, idempotent processing, late-data handling.
4. **Backfill storms.** Re-processing historical data overwhelms the system. Mitigation: throttled backfills, separate compute, idempotency.
5. **Small-file problem.** Too many tiny files kill query performance. Mitigation: compaction, partitioning strategy, file-size targets.
6. **Cost explosion from full-table scans.** Missing partition pruning or filters. Mitigation: partition design, query review, cost alerts.
7. **Skew.** Hot partitions or keys cause stragglers. Mitigation: salting, repartitioning, skew detection.

### Delivery

8. **Secret sprawl.** Secrets in code, config or env files. Mitigation: vault, secret scanning in CI, short-lived credentials.
9. **Environment drift.** "Works on my cluster" — dev/prod divergence. Mitigation: IaC, GitOps, environment parity checks.
10. **Rollout blast radius.** Big-bang deploys with no rollback. Mitigation: canary/blue-green, feature flags, rollback runbook, rollback time SLO.

## How to use in a review (30 minutes)

1. Read the design doc.
2. Walk the 10 failure modes; mark applicable ones.
3. Rank the top 3 by impact × likelihood.
4. Identify the **one question that kills the design** (the assumption that, if wrong, invalidates the approach).
5. Estimate cost order-of-magnitude (use [Unit Economics](/finops/unit-economics/)).
6. Flag any privacy/redaction gap.
7. Write the review: 3 risks, kill question, cost estimate, privacy flag.

## Related

- [ADR Template + Examples](/reference/adr-template/) — record the decision.
- [Data for AI](/architecture/data-governance/) — data governance foundation.
- [AI Observability](/architecture/ai-observability/) — monitoring for these failure modes.
- [Governance as Code](/governance/governance-as-code/) — CI enforcement.
- [Control Framework](/governance/control-framework/) — domains 2, 4, 8, 11.
- [About](/about/) — the 12-week skill acquisition plan.
- [AI FinOps](/finops/) — cost dimension.
- [Transformation Operating Model](/playbooks/operating-model/) — design review gate.
