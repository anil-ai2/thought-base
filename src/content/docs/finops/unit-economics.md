---
title: Unit Economics — Cost per Inference, Token, Outcome
description: "AI unit economics: cost per inference, per token, per outcome; how to compute, benchmark and improve them."
tags: [finops, unit-economics]
---

## TL;DR

Unit economics is the **single most important FinOps concept for AI**: cost per inference, per token, per outcome. It converts "we spend $X on AI" into "each resolved ticket costs $Y." This is the number that wins budget, justifies scale and prevents zombie projects. Compute it from day one; track it weekly.

## The three units

| Unit | Definition | When to use |
|---|---|---|
| **Cost per inference** | Total cost of one model call (input + output tokens + overhead) | Comparing models, sizing capacity |
| **Cost per token** | Cost per 1K input/output tokens | Model selection, prompt optimization |
| **Cost per outcome** | Total cost of delivering one business outcome | Steering committee, ROI, kill/scale decisions |

Cost per outcome is the one that matters. The others are diagnostic.

## How to compute

### Cost per inference
```
cost_per_inference = (input_tokens * input_rate + output_tokens * output_rate) + (infra_share / request_count)
```
Include: model API cost, infra share (cluster, gateway), observability share.

### Cost per token
```
cost_per_1k_tokens = (total_cost / total_tokens) * 1000
```
Track input and output separately — output tokens are usually 3–5x more expensive.

### Cost per outcome
```
cost_per_outcome = (training_amortized + inference + infra_share + data) / outcomes_delivered
```
Outcomes must be **business units** (resolved tickets, documents processed, decisions made), not technical units (requests, tokens).

## Worked example — RAG copilot

- Monthly inference cost: $4,000 (2M queries × avg 1.5k tokens).
- Monthly infra share: $1,200.
- Monthly data (embedding rebuild): $300.
- Training amortized: $500.
- Total: $6,000.
- Outcomes delivered: 12,000 resolved questions (queries that led to a completed task).
- **Cost per outcome: $0.50.**

Compare to the human alternative (e.g., $5 per agent-handled question) → 10x improvement. That is the business case.

## Improvement levers (in priority order)

1. **Model right-sizing.** Use the cheapest model that passes the eval bar. Route simple queries to small models.
2. **Prompt optimization.** Shorter prompts = fewer input tokens. Remove redundant context.
3. **Caching.** Semantic cache for repeated/near-duplicate queries (30–60% savings typical).
4. **Retrieval efficiency.** Top-k tuning; avoid over-retrieval.
5. **Batching.** Batch where latency allows (offline processing, eval runs).
6. **Commitment strategy.** Reserved capacity for predictable load; spot for batch.
7. **Output length control.** Cap output tokens; ask for concise answers.

## Benchmarking

- Track cost per outcome over time; the trend matters more than the absolute number.
- Compare across models (A/B) on the same eval set: quality vs. cost.
- Compare across use cases: which deliver value at the lowest cost per outcome?
- Industry benchmarks are scarce and often misleading; build your own baseline.

## Common pitfalls

- **Optimizing tokens instead of outcomes.** A cheaper per-token model that requires 3x the calls is not cheaper.
- **Ignoring infra share.** Inference API cost is often only 40–60% of total; infra and data matter.
- **No outcome definition.** "Requests" are not outcomes. Define the business unit before measuring.
- **Amortizing training incorrectly.** Spread training over useful life, not one month.
- **Tracking monthly only.** Weekly (or daily for high-volume) catches regressions early.

## Related

- [Cost Taxonomy](/thought-base/finops/cost-taxonomy/) — the four buckets.
- [Chargeback & Showback](/thought-base/finops/chargeback/) — attributing to teams.
- [GPU Strategy](/thought-base/finops/gpu-strategy/) — commitment strategy.
- [FOCUS Spec & Tooling](/thought-base/finops/focus-spec/) — normalization and tooling.
- [AI Observability](/thought-base/architecture/ai-observability/) — cost telemetry.
- [Control Framework](/thought-base/governance/control-framework/) — domain 9 (FinOps).
- [RAG](/thought-base/architecture/rag/) — cost model example.
- [Agentic](/thought-base/architecture/agentic/) — cost multiplication.
- [About](/thought-base/about/) — FinOps certification.
- [Writing: AI FinOps article](/thought-base/writing/ai-finops-unit-economics/) (planned).
