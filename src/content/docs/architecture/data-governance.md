---
title: Data for AI — Contracts, Lineage, Privacy Engineering
description: "Data governance for AI: data contracts, lineage, catalog, privacy engineering (anonymization, consent, minimization), synthetic data."
tags: [architecture, data-governance, data]
---

## TL;DR

AI is only as good as its data, and in regulated enterprises the data is the risk. Data governance for AI covers **contracts (what a dataset promises), lineage (where it came from and how it changed), catalog (what exists and who owns it), privacy engineering (anonymization, consent, minimization) and synthetic data**. This is the foundation every other pattern sits on.

## The five pillars

### 1. Data contracts
- A schema + SLA + ownership agreement between producer and consumer.
- Fields, types, freshness, quality thresholds, breaking-change policy.
- Enforced in CI: a contract change that breaks consumers fails the build.
- Without contracts, pipelines break silently and AI systems train on garbage.

### 2. Lineage
- End-to-end: source → ingestion → transformation → feature → model → prediction.
- Answers: "where did this prediction come from?" and "what breaks if I change this table?"
- Tooling: OpenLineage, Marquez, OpenMetadata, or cloud-native (Purview, Glue Data Catalog).

### 3. Catalog
- Inventory of datasets, models, features and their owners.
- Searchable by data consumers and auditors.
- Metadata: owner, classification (public/internal/confidential/restricted), retention, purpose tags.

### 4. Privacy engineering
- **Minimization:** collect and process only what is needed (GDPR Art. 5, DPDP purpose limitation).
- **Anonymization / pseudonymization:** k-anonymity, differential privacy where appropriate; know the limits (re-identification risk).
- **Consent:** capture and propagate consent; purpose tags on every record.
- **Rights fulfillment:** erasure cascade across stores (see GDPR rights pattern).
- **Synthetic data:** generate realistic but non-identifying data for dev/test and model training where real data cannot be used.

### 5. Data quality
- Quality checks at ingestion (nulls, ranges, uniqueness, referential integrity).
- Quality metrics tracked over time; alerts on degradation.
- Great Expectations, dbt tests, or cloud-native quality (DQDL, etc.).

## Why this matters for the architect seat

- **Compliance:** data governance is 30–50% of any AI governance program. Regulators ask "where did the training data come from?" first.
- **Reliability:** most production AI failures trace back to data, not models.
- **Cost:** bad data → retraining → wasted compute; good data → smaller models → cheaper inference.
- **Reusability:** governed features and contracts let 100 teams build on the same foundation.

## Implementation sequence

1. **Week 1:** Classify your top 10 datasets (owner, classification, purpose, retention).
2. **Week 2:** Add data quality checks at ingestion for the top 3 datasets.
3. **Week 3:** Document lineage for one critical pipeline end to end.
4. **Week 4:** Define data contracts for one producer-consumer pair.
5. **Ongoing:** expand catalog; automate lineage; enforce contracts in CI.

## Common pitfalls

- **Catalog without ownership.** A catalog with no owners is a graveyard. Every dataset has a named owner.
- **Lineage after the fact.** Retrofitting lineage is painful; instrument from day one.
- **Anonymization theater.** Removing names is not anonymization. Understand re-identification risk.
- **Synthetic data as a silver bullet.** Synthetic data has its own bias and fidelity problems; validate against real distributions.
- **Contracts as documentation only.** If they are not enforced in CI, they are wishes.

## Related

- [GDPR](/thought-base/governance/gdpr/) — data protection controls.
- [DPDP Act](/thought-base/governance/dpdp/) — India data protection.
- [RAG](/thought-base/architecture/rag/) — corpus governance for retrieval.
- [Predictive ML](/thought-base/architecture/predictive/) — feature governance.
- [AI Security](/thought-base/architecture/ai-security/) — data leakage risks.
- [Control Framework](/thought-base/governance/control-framework/) — domains 2 and 5.
- [Control Library](/thought-base/reference/control-library/) — data rows.
- [AI Observability](/thought-base/architecture/ai-observability/) — data quality metrics.
- [EU AI Act](/thought-base/governance/eu-ai-act/) — Art. 10 data governance obligation.
