---
title: "AI FinOps: Unit Economics for Regulated Enterprises"
description: "Long-form: how to compute and improve cost per inference, token and outcome for AI in regulated enterprises, with worked examples."
tags: [writing, finops, unit-economics]
sidebar:
  order: 2
---

## TL;DR

Unit economics converts "we spend $X on AI" into "each resolved ticket costs $Y." This article walks through computing cost per inference, per token and per outcome for a regulated-enterprise AI platform, with worked examples, improvement levers and a steering-committee narrative. Base draft — to be expanded.

## The problem

Most AI programs report total spend monthly. Steering committees cannot act on a total. They need a unit cost and a trend. Without unit economics, AI is a cost center that grows; with it, AI is an investment with a measurable return.

## The frame

Three units: cost per inference, cost per token, cost per outcome. Cost per outcome is the one that matters; the others are diagnostic. See [Unit Economics](/thought-base/finops/unit-economics/) for the formulas.

## The mechanism

### Computing cost per inference
Include model API cost, infra share and observability share. Track input and output tokens separately (output is 3–5x more expensive).

### Computing cost per outcome
Total cost (training amortized + inference + infra share + data) divided by outcomes delivered. Outcomes are business units, not technical units.

### Worked example — RAG copilot
See [Unit Economics](/thought-base/finops/unit-economics/) for the full worked example ($0.50 per resolved question vs. $5 human alternative).

### Improvement levers
Model right-sizing, prompt optimization, semantic caching, retrieval efficiency, batching, commitment strategy, output length control. In priority order, with expected savings ranges.

### Steering-committee narrative
How to present unit economics to leadership: baseline, trend, lever, target, ask.

## A worked example (outline)

- Scenario: a BFSI GCC running a RAG copilot for customer-service agents.
- Baseline: $0.80 per resolved question.
- Levers applied: model routing, semantic cache, prompt trim.
- Result: $0.42 per resolved question, quality held.
- Narrative: "We reduced cost per resolved question by 47% while holding quality; scaling to 10x volume keeps us under $0.50."

## What to do Monday

1. Define the outcome unit for your top AI use case.
2. Instrument token + cost telemetry per request (see [AI Observability](/thought-base/architecture/ai-observability/)).
3. Compute cost per outcome for the last 30 days.
4. Identify the top 2 levers and estimate savings.
5. Present a one-page unit-economics summary to your sponsor.

## Further reading

- [AI FinOps overview](/thought-base/finops/)
- [Cost Taxonomy](/thought-base/finops/cost-taxonomy/)
- [Chargeback & Showback](/thought-base/finops/chargeback/)
- [GPU Strategy](/thought-base/finops/gpu-strategy/)
- [FOCUS Spec & Tooling](/thought-base/finops/focus-spec/)
- [RAG](/thought-base/architecture/rag/) — cost model example
- [Agentic](/thought-base/architecture/agentic/) — cost multiplication
- [Control Framework](/thought-base/governance/control-framework/) — FinOps as control domain 9

---

*Part of the Thought Base writing series. Base draft — to be expanded with a full worked example and steering-committee template.*
