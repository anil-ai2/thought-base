---
title: AI FinOps — Cost as a Design Constraint
description: "Cost taxonomy, unit economics (cost per inference/token/outcome), chargeback/showback, GPU strategy and FOCUS for enterprise AI platforms."
tags: [finops]
---

## TL;DR

FinOps for AI is not a monthly cost report. It is a **design constraint**: every architecture decision carries a cost-per-outcome number, and cost is visible, attributed and bounded from the first deploy. The FinOps Foundation framework applies, with **engineering elevated to a co-primary persona** (they are the ones who change cost), leadership/finance as sponsors, and AI unit economics as the focus.

:::tip
If you only read one page here, read [Unit Economics](/thought-base/finops/unit-economics/).
:::

## Why FinOps is a differentiator for this seat

Most FinOps practitioners are engineers; the gap is translating cost to executives. Most architects design for capability and bolt on cost later. The architect who can say "this pattern costs $X per outcome at Y scale, and here is the commitment strategy to hold it flat" is rare — and that rarity is what commands premium compensation. AI makes this sharper: GPU costs dominate, training and inference have very different cost curves, and a single agentic loop can burn a month's budget in an afternoon.

## Core principles

1. **Cost is a design constraint, not a report.** Decisions are made with a cost-per-outcome number in hand.
2. **Visibility before optimization.** You cannot optimize what you cannot attribute. Tag everything; charge back early.
3. **Engineering is a primary persona.** Finance sponsors; engineering executes. De-prioritizing engineering weakens credibility with the people who change cost.
4. **AI unit economics first.** Cost per inference, per token, per outcome; GPU utilization; training vs. inference split.
5. **Commitment strategy is a lever.** Reserved/spot/on-demand mix, autoscaling curves, model right-sizing, caching/semantic caching.

## The FinOps stack

| Page | What it is |
|---|---|
| [Cost Taxonomy](/thought-base/finops/cost-taxonomy/) | Training / inference / infra / data breakdown |
| [Unit Economics](/thought-base/finops/unit-economics/) | Cost per inference, token, outcome |
| [Chargeback & Showback](/thought-base/finops/chargeback/) | Attributing cost to teams and products |
| [GPU Strategy](/thought-base/finops/gpu-strategy/) | Reserved / spot / on-demand / commitments |
| [FOCUS Spec & Tooling](/thought-base/finops/focus-spec/) | FOCUS, Kubecost/OpenCost, CloudZero/Vantage |

## AI-specific cost realities

- **Inference dominates at scale.** Training is a one-time (recurring) cost; inference is continuous and usually 5–10x training over the lifecycle.
- **Agentic loops multiply cost.** A single user request can trigger N tool calls and M model calls. Budget per *task*, not per request.
- **GPU utilization is the lever.** Idle GPUs are the single biggest waste; right-size, batch, and use spot where latency allows.
- **Caching pays.** Semantic caching of embeddings/responses can cut inference cost 30–60% for repeated queries.
- **Model right-sizing.** A smaller model that passes the eval bar beats a larger model that doesn't, at a fraction of the cost.

## FinOps dashboard (what leadership sees)

| Metric | Cadence | Owner |
|---|---|---|
| Total AI spend (training + inference + infra + data) | Weekly | FinOps lead |
| Cost per outcome (e.g., per resolved ticket, per document processed) | Weekly | Product + FinOps |
| Cost per inference / per token | Daily | Engineering |
| GPU utilization | Daily | Platform team |
| Spend by team/product (chargeback) | Monthly | Finance |
| Forecast vs. actual | Monthly | Finance |
| Anomaly alerts | Real-time | Platform + FinOps |

## Guardrails

- Budget alert at 80% of monthly cap; hard stop at 100% unless overridden by named approver.
- Every new AI use case ships with a cost-per-outcome estimate and a budget line.
- Model selection includes a cost-aware eval: the cheapest model that passes the quality bar wins by default.
- Commitment strategy reviewed quarterly (reserved vs. spot vs. on-demand mix).

## Related

- [AI Observability](/thought-base/architecture/ai-observability/) — cost telemetry lives in observability.
- [Decision Frameworks](/thought-base/playbooks/decision-frameworks/) — build-vs-buy includes cost.
- [Control Framework](/thought-base/governance/control-framework/) — FinOps is control domain 9.
- [About](/thought-base/about/) — certifications (FinOps CP/Engineer).
