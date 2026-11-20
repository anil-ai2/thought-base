---
title: GPU Strategy — Reserved, Spot, On-Demand & Commitments
description: "GPU commitment strategy for AI: reserved vs. spot vs. on-demand, autoscaling, right-sizing and cost optimization."
tags: [finops, gpu, gpu-strategy]
---

## TL;DR

GPUs are the dominant cost in AI. The strategy is **right-size first, then commit**: use on-demand to discover real demand, spot for batch and fault-tolerant workloads, reserved/committed for predictable baseline, and autoscaling to absorb peaks. Never commit before you have 4–6 weeks of real utilization data.

## The three tiers

| Tier | Use for | Cost | Risk |
|---|---|---|---|
| **On-demand** | Discovery, variable load, new workloads | Highest | None (flexible) |
| **Spot / preemptible** | Batch training, eval runs, non-latency-sensitive inference | Lowest (60–90% discount) | Interruption; needs checkpointing |
| **Reserved / committed** | Predictable baseline inference load | Medium (30–60% discount) | Lock-in; waste if over-committed |

## Decision framework

1. **New workload (weeks 1–4):** on-demand. Measure real utilization, peak/baseline ratio, latency sensitivity.
2. **Batch / offline (training, evals):** spot with checkpointing. Accept interruption; design for resume.
3. **Predictable baseline (after 4–6 weeks of data):** reserved/committed for the baseline; on-demand or spot for the peak.
4. **Autoscaling:** scale out on demand; scale in aggressively; min replicas sized to baseline.

## Key levers

- **Right-sizing:** most GPUs are over-provisioned. Measure actual memory and compute utilization; downsize.
- **Batching:** group inference requests to maximize GPU utilization (dynamic batching).
- **Model optimization:** quantization (INT8/INT4), distillation, speculative decoding — smaller model, same quality.
- **Caching:** semantic cache reduces GPU calls 30–60% for repeated queries.
- **Multi-tenancy:** share GPUs across use cases with fair scheduling rather than one GPU per use case.
- **Region selection:** GPU availability and price vary by region; balance latency vs. cost.

## Commitment strategy (governance)

- **No commitments without 4–6 weeks of real utilization data.**
- **Commit to the baseline, not the peak.** Peaks are absorbed by on-demand/spot.
- **Review quarterly:** utilization vs. commitment; adjust (upscale/downscale/convert).
- **Document the rationale** for every commitment (expected utilization, savings, risk).
- **Approval gate:** commitments above a threshold require FinOps + engineering lead sign-off.

## Observability (GPU-specific)

- GPU utilization (compute + memory) per workload.
- Queue depth and wait time.
- Preemption rate (spot).
- Cost per GPU-hour, cost per outcome.
- Idle GPU time (target < 10%).

## Common pitfalls

- **Committing on day one.** Demand is unknown; you will over-commit.
- **Over-provisioning "for safety."** Measure first; right-size.
- **Ignoring spot for batch.** 60–90% savings for workloads that tolerate interruption.
- **No checkpointing on spot.** Interruption = lost work = no savings.
- **Treating all inference as latency-sensitive.** Many are not; batch them.
- **One GPU per use case.** Multi-tenancy dramatically improves utilization.

## Related

- [Unit Economics](/thought-base/finops/unit-economics/) — cost per inference/outcome.
- [Cost Taxonomy](/thought-base/finops/cost-taxonomy/) — training vs. inference split.
- [Chargeback & Showback](/thought-base/finops/chargeback/) — attributing GPU cost.
- [FOCUS Spec & Tooling](/thought-base/finops/focus-spec/) — tooling.
- [AI Observability](/thought-base/architecture/ai-observability/) — GPU metrics.
- [Agentic](/thought-base/architecture/agentic/) — cost multiplication from loops.
- [RAG](/thought-base/architecture/rag/) — embedding and retrieval GPU usage.
- [Control Framework](/thought-base/governance/control-framework/) — domain 9 (FinOps).
- [Transformation Operating Model](/thought-base/playbooks/operating-model/) — optimize phase.
