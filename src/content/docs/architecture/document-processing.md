---
title: Document Processing — Extraction, Classification, Routing
description: "Reference architecture for document processing: OCR, extraction, classification, routing, human review queues and accuracy thresholds."
tags: [architecture, document-processing, reference-architecture]
---

## TL;DR

Document processing (OCR → extraction → classification → routing) is the highest-ROI, lowest-risk entry point for enterprise AI. The risks are **PII exposure, accuracy thresholds and unmanaged human review queues**. The pattern here is **extract with confidence scores, route by confidence, and keep a human in the loop for low-confidence and high-stakes cases**.

## When to use

- High volumes of semi-structured documents (invoices, claims, contracts, forms, KYC).
- Clear extraction targets with measurable accuracy.
- Human review capacity exists for exceptions.

## When NOT to use

- Documents are fully unstructured with no consistent fields (use RAG or agentic).
- Accuracy requirements exceed current capability and human review is not feasible.
- Volume is too low to justify the pipeline.

## Architecture

```
[Ingest (email, portal, scan)] → [OCR / layout] → [Extraction (LLM or template)] → [Validation (rules + schema)] → [Confidence scoring] → [Routing: auto-approve / review queue / reject]
                                                                                                                                          ↓
                                                                                                                                  [Human review UI]
```

## Component decisions

| Component | Default | Notes |
|---|---|---|
| Ingestion | Email, portal upload, scanner integration | Track source; validate file type/size |
| OCR / layout | Azure Document Intelligence / AWS Textract | Layout-aware; handles tables and handwriting |
| Extraction | LLM with structured output (JSON schema) + template fallback | Schema validation is the guardrail |
| Validation | Business rules + schema (required fields, formats, ranges) | Fail fast; route failures to review |
| Confidence | Per-field confidence from model + rule checks | Thresholds per field and per document type |
| Routing | Auto-approve (≥ threshold), review queue (< threshold), reject (invalid) | Thresholds tuned on eval set |
| Human review | Queue with SLA, reviewer UI, feedback capture | Feedback feeds retraining/eval |
| Storage | Extracted data in governed store with lineage to source doc | PII handling per tier |

## Accuracy thresholds (example)

| Field type | Auto-approve threshold | Review threshold |
|---|---|---|
| Critical (amount, account number, ID) | ≥ 99% | < 99% |
| Standard (name, date, address) | ≥ 95% | < 95% |
| Optional (notes, comments) | ≥ 90% | < 90% |

Tune thresholds on a labeled eval set; measure per document type, not in aggregate.

## PII & compliance

- Redact PII in logs and non-prod environments.
- Minimize stored fields to what the downstream process needs.
- Retention policy per document type; erasure path for data subject requests.
- Access control on extracted data and source documents.
- High-stakes documents (contracts, medical) often high tier — full control set.

## Observability contract

- Throughput: documents per hour, queue depth, SLA compliance.
- Accuracy: per-field accuracy, auto-approve rate, review rate, rejection rate.
- Cost: per-document cost (OCR + extraction + review).
- Quality: reviewer override rate (signals threshold or model issues).
- Drift: accuracy trend over time; new document types.

## Anti-patterns

- **Auto-approving without thresholds** — silent errors at scale.
- **No human review queue** — failures disappear.
- **Aggregate accuracy only** — hides per-field and per-type failures.
- **No feedback loop from reviewers** — model never improves.
- **Storing full documents when only fields are needed** — PII over-retention.
- **No drift monitoring** — new document templates break extraction silently.

## Related

- [Reference Architectures](/architecture/reference-architectures/) — index.
- [RAG](/architecture/rag/) — when documents are queried, not extracted.
- [AI Observability](/architecture/ai-observability/) — accuracy and cost metrics.
- [AI Security](/architecture/ai-security/) — PII and injection risks.
- [AI FinOps](/finops/) — per-document cost.
- [Control Framework](/governance/control-framework/) — compliance per tier.
- [GDPR](/governance/gdpr/) / [DPDP](/governance/dpdp/) — data protection.
- [Risk Tiering](/governance/risk-tiering/) — often high tier for consequential docs.
