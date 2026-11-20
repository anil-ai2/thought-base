---
title: Architecture — Patterns for Enterprise AI
description: "Reference architectures, security, observability and data governance for enterprise AI systems in regulated environments."
tags: [architecture]
---

## TL;DR

Architecture here is **pattern-first**: RAG, agentic, copilot, predictive and document processing, each with an approved stack, security baseline, observability contract and cost model. The goal is not to invent new patterns but to make the common ones **safe, compliant and cost-efficient by default** — so 100 engineers can ship without 100 review cycles.

:::tip
Jump to [Reference Architectures](/thought-base/architecture/reference-architectures/) for the index, or [RAG](/thought-base/architecture/rag/) for the most common pattern.
:::

## What "architect-level" means here

Not implementer depth. Review-level depth: given a 2-page design doc, produce in 30 minutes (a) three risks ranked, (b) the one question that kills the design, (c) an order-of-magnitude cost estimate, (d) a privacy red flag if any. The 12-week data-eng/app-delivery plan in [About](/thought-base/about/) is how that depth is acquired.

## The five patterns

| Pattern | When to use | Key risks |
|---|---|---|
| **RAG** | Grounded Q&A over enterprise knowledge | Hallucination, stale index, PII in corpus, retrieval cost |
| **Agentic** | Multi-step tasks with tool use | Excessive agency, runaway cost, non-determinism, auditability |
| **Copilot** | Embedded assistant in an existing app | Latency, context leakage, over-trust, UX failure modes |
| **Predictive** | Scoring/classification over structured data | Bias, drift, feedback loops, explainability |
| **Document processing** | Extraction, classification, routing of documents | PII exposure, accuracy thresholds, human review queues |

## Cross-cutting concerns (apply to every pattern)

- **Security:** OWASP LLM Top 10 (prompt injection, insecure output handling, training data poisoning, model DoS, supply chain, sensitive info disclosure, insecure plugin design, excessive agency, overreliance, model theft). Red-team cadence per tier.
- **Observability:** token/cost/latency telemetry, quality metrics, drift detection, trace-level debugging. If you cannot see it, you cannot govern it.
- **Data governance:** contracts, lineage, catalog, privacy engineering (anonymization, consent, minimization), synthetic data.
- **FinOps:** cost taxonomy, unit economics, chargeback, GPU commitment strategy. Cost is a design constraint, not a post-launch report.
- **Compliance:** control framework applies per tier; high-risk patterns need model card, eval pass, HITL, conformity assessment where applicable.

## Approved-stack philosophy

One approved stack per capability, not five. Spreading across tools multiplies operational surface and audit burden. Defaults used throughout this site are **Azure-flavored** (Azure OpenAI / AI Foundry, AI Search, Cosmos DB, AKS, Azure DevOps/GitHub Actions) because Azure dominates enterprise India; AWS equivalents are noted inline. Swap the cloud, keep the pattern.

## Section map

| Page | What it is |
|---|---|
| [Reference Architectures](/thought-base/architecture/reference-architectures/) | Index of all patterns with approved stacks |
| [RAG](/thought-base/architecture/rag/) | Retrieval-augmented generation at enterprise scale |
| [Agentic](/thought-base/architecture/agentic/) | Multi-agent systems and guardrails |
| [Copilot](/thought-base/architecture/copilot/) | Embedded AI assistants |
| [Predictive](/thought-base/architecture/predictive/) | Classical + modern ML scoring |
| [Document Processing](/thought-base/architecture/document-processing/) | Extraction, classification, routing |
| [AI Security](/thought-base/architecture/ai-security/) | OWASP LLM Top 10 and red teaming |
| [AI Observability](/thought-base/architecture/ai-observability/) | Tokens, cost, quality, drift |
| [Data for AI](/thought-base/architecture/data-governance/) | Contracts, lineage, privacy engineering |

## Design-review checklist (use on any proposal)

1. What is the risk tier? (See [Risk Tiering](/thought-base/governance/risk-tiering/).)
2. What data enters the prompt/context? Is PII minimized and purpose-tagged?
3. What is the cost per outcome, and what bounds it?
4. What is the failure mode and the fallback? (Human handoff, cached answer, graceful degrade.)
5. What is the monitoring story? (Quality, drift, cost, latency.)
6. What is the rollback plan and its time?
7. Who is the named human accountable?
8. Does it need a model card, eval pass and HITL (high tier)?
9. Does it touch a regulated decision? If yes, conformity/FRIA path.
10. What is the eval baseline and the regression threshold?

If a proposal cannot answer these in 30 minutes, it is not ready to build.
