---
title: FOCUS Spec & Tooling — Kubecost, OpenCost, CloudZero, Vantage
description: "The FOCUS specification for cloud cost normalization, plus tooling landscape (Kubecost/OpenCost, CloudZero, Vantage) for AI FinOps."
tags: [finops, focus, tooling]
---

## TL;DR

**FOCUS** (FinOps Open Cost and Usage Specification) is the open standard for normalizing cloud cost and usage data across providers. Combined with a tool (Kubecost/OpenCost for Kubernetes, CloudZero or Vantage for SaaS/cloud), it gives you a single, comparable cost view across clouds — essential for chargeback and unit economics in multi-cloud or Kubernetes-heavy AI platforms.

## What FOCUS is

- An open specification (Linux Foundation) defining a common schema for cost and usage data.
- Normalizes columns like `BilledCost`, `EffectiveCost`, `ConsumedQuantity`, `ResourceId`, `ServiceName`, `Tags` across AWS, Azure, GCP and others.
- Enables: cross-cloud comparison, consistent chargeback, automated allocation, and vendor-neutral reporting.
- Adopted by major cloud providers; export FOCUS-formatted data from billing consoles or via tools.

## Why it matters for AI FinOps

- AI platforms are typically multi-cloud or Kubernetes-based (AKS/EKS/GKE).
- Without normalization, comparing Azure OpenAI cost to a self-hosted GPU cluster is apples-to-oranges.
- FOCUS + tagging = consistent allocation drivers across providers.
- Enables a single cost-per-outcome metric regardless of where the workload runs.

## Tooling landscape

### Kubernetes-native (container cost)
| Tool | Type | Strength | Use when |
|---|---|---|---|
| **OpenCost** | Open source | Free, CNCF, Prometheus-based | Budget-conscious; K8s-only cost visibility |
| **Kubecost** | Open source + commercial | Richer features, enterprise support | Need allocation, forecasting, alerting |
| **CloudZero / Vantage** | Commercial SaaS | Multi-cloud, SaaS-friendly, anomaly detection | Multi-cloud or non-K8s-heavy environments |

### Cloud billing
- **Azure Cost Management**, **AWS Cost Explorer**, **GCP Billing** — native, free, provider-specific.
- Export to FOCUS format for normalization.

### LLM-specific
- **Helicone, LangSmith, Langfuse** — token and cost telemetry at the LLM-call level.
- Complement cloud billing; do not replace it (cloud billing is the source of truth for infra).

## Recommended stack (v1)

1. **Cloud billing export** (native) → FOCUS format.
2. **Kubecost or OpenCost** for Kubernetes cost allocation (if K8s-heavy).
3. **LLM telemetry tool** (Langfuse/LangSmith) for per-request token/cost.
4. **FOCUS-normalized dataset** in a warehouse (BigQuery/Snowflake/Synapse) for chargeback and unit economics.

## Implementation sequence

1. **Week 1:** Enable billing export; verify tag coverage.
2. **Week 2:** Stand up Kubecost/OpenCost (if K8s) or connect CloudZero/Vantage.
3. **Week 3:** Add LLM telemetry (Langfuse/LangSmith) for token/cost per request.
4. **Week 4:** Build FOCUS-normalized dataset + first chargeback report.
5. **Ongoing:** refine allocation drivers; monthly cost review.

## Common pitfalls

- **Tooling before tagging.** No tool fixes bad tags. Fix tagging first.
- **Multiple sources of truth.** Cloud billing is authoritative; LLM telemetry is diagnostic. Reconcile regularly.
- **Over-engineering v1.** Start with native billing + one tool; add complexity when the gap is real.
- **Ignoring egress and storage.** Inference API cost is visible; egress and storage are the hidden 20%.
- **No FOCUS adoption.** Provider-specific formats lock you into one cloud's view; FOCUS keeps you portable.

## Related

- [Cost Taxonomy](/thought-base/finops/cost-taxonomy/) — the four buckets.
- [Unit Economics](/thought-base/finops/unit-economics/) — cost per inference/outcome.
- [Chargeback & Showback](/thought-base/finops/chargeback/) — attributing to teams.
- [GPU Strategy](/thought-base/finops/gpu-strategy/) — commitment strategy.
- [AI Observability](/thought-base/architecture/ai-observability/) — cost telemetry.
- [Control Framework](/thought-base/governance/control-framework/) — domain 9 (FinOps).
- [Governance as Code](/thought-base/governance/governance-as-code/) — tagging enforcement.
- [About](/thought-base/about/) — FinOps certification (FinOps CP/Engineer).
