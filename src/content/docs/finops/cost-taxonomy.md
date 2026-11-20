---
title: AI Cost Taxonomy — Training, Inference, Infra, Data
description: "A four-bucket cost taxonomy for enterprise AI (training, inference, infrastructure, data) with allocation rules and examples."
tags: [finops, cost-taxonomy]
---

## TL;DR

Every AI cost rolls up into four buckets: **training, inference, infrastructure, data**. If you cannot allocate a cost to a bucket and a use case, you cannot optimize or charge back. This page defines the buckets, the allocation rules and the common misclassifications.

## The four buckets

| Bucket | What it includes | Typical drivers |
|---|---|---|
| **Training** | Compute for model training/fine-tuning, hyperparameter search, evaluation runs | GPU hours, experiment count, dataset size |
| **Inference** | Compute for serving predictions (LLM calls, model endpoints, batch scoring) | Request volume, token count, model size, latency SLO |
| **Infrastructure** | Platform overhead: orchestration, storage, networking, observability, CI/CD | Cluster size, storage GB, egress, tooling licenses |
| **Data** | Data acquisition, labeling, storage, pipelines, quality tooling | Source licenses, labeling hours, pipeline compute, storage |

## Allocation rules

1. **Direct costs** (a specific GPU job, a specific API call) → allocate to the use case directly.
2. **Shared infrastructure** → allocate by a documented driver (e.g., request count, token count, or a fixed split). Document the driver; review quarterly.
3. **Platform overhead** (observability, CI/CD, base cluster) → allocate as a percentage of direct cost, or as a fixed platform charge per use case.
4. **Training** → amortize over the model's expected useful life (e.g., 12 months) rather than expensing in one month.
5. **Data** → allocate to the use cases that consume the dataset; shared datasets split by consumption.

## Common misclassifications

- **Embedding costs counted as training.** Embeddings for RAG are inference-adjacent (per-query) or data (per-corpus rebuild). Classify by trigger: rebuild = data, query = inference.
- **Observability counted as infrastructure only.** It is infrastructure, but attribute the *incremental* observability cost to the use case that drove it.
- **Labeling counted as data only.** Labeling is data, but if it is a one-time project, amortize it like training.
- **Idle GPU counted as inference.** Idle GPU is infrastructure waste; track separately as an optimization target.

## Worked example — a RAG copilot

| Cost | Bucket | Allocation |
|---|---|---|
| Azure OpenAI GPT-4 calls (per query) | Inference | Direct per use case |
| Azure AI Search queries | Inference | Direct per use case |
| Embedding rebuild (weekly) | Data | Per corpus / use case |
| AKS cluster (shared) | Infrastructure | By request count |
| Azure Monitor + App Insights | Infrastructure | Platform charge |
| Data labeling for eval set | Data | Amortized over model life |
| Fine-tuning (one-time) | Training | Amortized over 12 months |

## Cost-per-outcome (the number that matters)

For each use case, compute: **cost per outcome** = (training amortized + inference + infra share + data) / outcomes delivered. Outcomes are business units (resolved tickets, documents processed, decisions made). This is the number you take to the steering committee.

## Related

- [Unit Economics](/thought-base/finops/unit-economics/) — cost per inference/token/outcome.
- [Chargeback & Showback](/thought-base/finops/chargeback/) — attributing to teams.
- [GPU Strategy](/thought-base/finops/gpu-strategy/) — commitment strategy.
- [FOCUS Spec & Tooling](/thought-base/finops/focus-spec/) — normalization and tooling.
- [AI Observability](/thought-base/architecture/ai-observability/) — cost telemetry.
- [Control Framework](/thought-base/governance/control-framework/) — domain 9 (FinOps).
- [RAG](/thought-base/architecture/rag/) — cost model example.
- [Agentic](/thought-base/architecture/agentic/) — cost multiplication.
- [About](/thought-base/about/) — FinOps certification.
