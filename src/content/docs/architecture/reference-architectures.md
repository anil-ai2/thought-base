---
title: Reference Architectures — Index
description: "Index of approved enterprise AI patterns (RAG, agentic, copilot, predictive, document processing) with stacks, security baselines and cost models."
tags: [architecture, reference-architectures]
---

## TL;DR

A small catalog of **approved patterns** with approved stacks, security baselines, observability contracts and cost models. Teams pick a pattern; they do not invent a new architecture per use case. This is how a single architect governs dozens of systems without becoming the bottleneck.

## How to use this catalog

1. Map your use case to a pattern (see table below).
2. Check the risk tier ([Risk Tiering](/thought-base/governance/risk-tiering/)) — pattern + tier determines the control set.
3. Adopt the approved stack; deviations require an ADR and review-board approval.
4. Run the design-review checklist ([Architecture overview](/thought-base/architecture/)).
5. Ship through the [Operating Model](/thought-base/playbooks/operating-model/) gates.

## Pattern index

| Pattern | Use when | Primary risks | Page |
|---|---|---|---|
| **RAG** | Grounded Q&A / search over enterprise knowledge | Hallucination, stale index, PII in corpus, retrieval cost | [RAG](/thought-base/architecture/rag/) |
| **Agentic** | Multi-step tasks with tool use and autonomy | Excessive agency, runaway cost, non-determinism, auditability | [Agentic](/thought-base/architecture/agentic/) |
| **Copilot** | Embedded assistant inside an existing app | Latency, context leakage, over-trust, UX failure modes | [Copilot](/thought-base/architecture/copilot/) |
| **Predictive** | Scoring / classification over structured data | Bias, drift, feedback loops, explainability | [Predictive](/thought-base/architecture/predictive/) |
| **Document processing** | Extraction, classification, routing of documents | PII exposure, accuracy thresholds, human review queues | [Document processing](/thought-base/architecture/document-processing/) |

## Cross-cutting baselines (apply to every pattern)

- **Security:** [AI Security](/thought-base/architecture/ai-security/) — OWASP LLM Top 10, red teaming.
- **Observability:** [AI Observability](/thought-base/architecture/ai-observability/) — tokens, cost, quality, drift.
- **Data:** [Data for AI](/thought-base/architecture/data-governance/) — contracts, lineage, privacy engineering.
- **Cost:** [AI FinOps](/thought-base/finops/) — cost taxonomy, unit economics, chargeback.
- **Compliance:** [Control Framework](/thought-base/governance/control-framework/) — per tier.

## Approved-stack defaults (Azure-flavored)

| Capability | Default | AWS equivalent |
|---|---|---|
| Model serving | Azure OpenAI / AI Foundry | Bedrock / SageMaker |
| Retrieval | Azure AI Search (hybrid + semantic) | OpenSearch / Kendra |
| Vector store | Azure AI Search / Cosmos DB | OpenSearch / Aurora pgvector |
| Orchestration | Semantic Kernel / LangChain | LangChain / Bedrock Agents |
| App runtime | AKS / Container Apps | EKS / Fargate |
| CI/CD | GitHub Actions / Azure DevOps | CodePipeline / GitHub Actions |
| Observability | Azure Monitor + App Insights | CloudWatch + X-Ray |
| Cost | Azure Cost Management + Kubecost | AWS Cost Explorer + Kubecost |

Swap the cloud, keep the pattern. Deviations require an ADR.

## When NOT to use a reference architecture

- Novel capability with no precedent in the catalog → write an ADR proposing a new pattern; review board approves; add to catalog.
- One-off experiment / proof-of-concept → exempt from approved stack, but must still tier and register.
- Vendor-mandated stack (e.g., a SaaS AI feature) → document as "vendor-managed pattern" with a vendor assessment.

## Related

- [Architecture overview](/thought-base/architecture/) — patterns, cross-cutting concerns, design-review checklist.
- [Transformation Operating Model](/thought-base/playbooks/operating-model/) — where architecture sits in the lifecycle.
- [Decision Frameworks](/thought-base/playbooks/decision-frameworks/) — build-vs-buy and model selection.
- [Control Framework](/thought-base/governance/control-framework/) — compliance per tier.
