---
title: RAG — Retrieval-Augmented Generation at Enterprise Scale
description: "Reference architecture for enterprise RAG: ingestion, chunking, embedding, retrieval, generation, evaluation, security and cost."
tags: [architecture, rag, reference-architecture]
---

## TL;DR

RAG grounds a model's answers in enterprise knowledge. The hard parts are not the model call — they are **corpus governance (PII, freshness, access control), retrieval quality (chunking, hybrid search, reranking) and cost (embedding + retrieval + generation)**. This page is the approved pattern.

## When to use RAG

- Answering questions over a large, changing corpus of internal documents.
- Need for citations / traceability.
- Need to keep data in-house (vs. fine-tuning a model on it).
- Frequent corpus updates (RAG updates in minutes; fine-tuning takes days).

## When NOT to use RAG

- The answer requires reasoning over the *entire* corpus, not retrieval (consider long-context or agentic).
- The corpus is tiny and stable (a system prompt or few-shot may suffice).
- You need the model to *learn* a style/format (fine-tuning fits better).

## Architecture

```
[Sources] → [Ingestion] → [Chunking] → [Embedding] → [Vector + keyword index]
                                                              ↓
[User query] → [Query transform] → [Hybrid retrieval] → [Rerank] → [Context assembly] → [LLM] → [Answer + citations]
```

## Component decisions

| Component | Default choice | Notes |
|---|---|---|
| Sources | SharePoint, Confluence, S3/ADLS, DBs | Connectors with incremental sync; respect source permissions |
| Chunking | Semantic chunking (400–800 tokens, 10–20% overlap) | Tune per corpus; measure retrieval recall |
| Embedding | text-embedding-3-large (or Azure equivalent) | Version-pin; re-embed on model change |
| Index | Hybrid (BM25 + vector) with semantic reranking | Pure vector misses exact terms; hybrid wins |
| Retrieval | Top-k (20) → rerank to top-5 | Reranking is the quality lever |
| Generation | GPT-4-class with strict grounding prompt + citations | "Answer only from context; cite sources" |
| Guardrails | PII redaction in corpus; output filtering; hallucination check | Required for high tier |
| Eval | Golden Q&A set; retrieval recall@k; answer faithfulness; citation accuracy | Run on every corpus/model change |

## Security & compliance

- **PII in corpus:** scan and redact at ingestion; never embed raw PII. Minimize fields.
- **Access control:** enforce source permissions at retrieval time (filter by user's entitlements), not just at ingestion.
- **Prompt injection:** treat retrieved content as untrusted; isolate in the prompt; never let retrieved text override instructions.
- **Data residency:** embeddings and index must live in approved regions.
- **Audit:** log queries, retrieved chunks, model inputs/outputs, citations.

## Observability contract

- Retrieval: recall@k, MRR, latency (p50/p95), empty-result rate.
- Generation: faithfulness (groundedness), answer relevance, citation accuracy, refusal rate.
- Cost: embedding cost per doc, retrieval cost per query, generation cost per query, cost per resolved question.
- Quality: user feedback (thumbs up/down), escalation rate, hallucination incidents.

## Cost model (order of magnitude)

- **Ingestion (one-time + incremental):** embedding cost ≈ tokens × rate. For 1M docs × 500 tokens ≈ 500M tokens.
- **Query:** retrieval (cheap) + generation (dominant). A typical query: ~2k input tokens + 500 output tokens.
- **Lever:** cache frequent queries (semantic cache), right-size top-k, use smaller model for simple queries (routing).

## Anti-patterns

- **Chunking by fixed character count** without semantic boundaries → poor retrieval.
- **Pure vector search** → misses exact terms, acronyms, IDs.
- **No reranking** → top-k is noisy; quality suffers.
- **Embedding raw PII** → compliance incident waiting to happen.
- **No eval set** → you cannot tell if a change helped or hurt.
- **Ignoring freshness** → stale index = wrong answers = trust loss.
- **No access control at retrieval** → data leakage across users.

## Related

- [Reference Architectures](/thought-base/architecture/reference-architectures/) — index.
- [AI Security](/thought-base/architecture/ai-security/) — prompt injection, output handling.
- [AI Observability](/thought-base/architecture/ai-observability/) — quality and cost metrics.
- [Data for AI](/thought-base/architecture/data-governance/) — corpus governance.
- [AI FinOps](/thought-base/finops/) — cost model and chargeback.
- [Control Framework](/thought-base/governance/control-framework/) — compliance per tier.
- [Risk Tiering](/thought-base/governance/risk-tiering/) — RAG is usually limited or high tier depending on data.
