---
title: Predictive ML — Scoring & Classification
description: "Reference architecture for predictive ML (scoring/classification): data, training, evaluation, bias, drift and explainability."
tags: [architecture, predictive, reference-architecture]
---

## TL;DR

Predictive ML (scoring/classification over structured data) is the workhorse of enterprise AI — fraud, churn, risk, demand. The risks are **bias, drift, feedback loops and lack of explainability**. The pattern here emphasizes **feature governance, bias evaluation, drift monitoring and human-in-the-loop for consequential decisions**. Often high tier when decisions affect people.

## When to use predictive ML

- Scoring or classifying structured data (tabular features).
- A clear, measurable target with historical labels.
- Need for explainability (regulatory or business).
- Latency requirements rule out LLM-based approaches.

## When NOT to use predictive ML

- The problem is generative or open-ended (use LLM patterns).
- Labels are scarce or noisy (consider unsupervised or LLM-based).
- The decision is high-stakes and unexplainable models are unacceptable (need interpretable models).

## Architecture

```
[Data sources] → [Feature engineering (governed)] → [Training pipeline] → [Model registry] → [Serving (batch/online)] → [Decision + explanation]
                                                                                  ↓
                                                                          [Monitoring (drift, bias, performance)]
```

## Component decisions

| Component | Default | Notes |
|---|---|---|
| Features | Governed feature store (Feast / Databricks) | Lineage, versioning, reuse; avoid training-serving skew |
| Training | Reproducible pipeline (MLflow / Kubeflow) | Seed, version, data hash; experiment tracking |
| Model | Start simple (logistic regression / gradient boosting) | Complexity only if justified by eval |
| Evaluation | Holdout + cross-validation; business metrics, not just AUC | Cost of false positive vs. false negative |
| Explainability | SHAP / feature importance; decision rationale | Required for consequential decisions |
| Serving | Batch for non-real-time; online (REST) for real-time | Latency SLO; fallback |
| Monitoring | Data drift, prediction drift, performance, bias | Alert thresholds; retrain triggers |

## Bias & fairness

- Define protected attributes and fairness metrics (demographic parity, equalized odds, calibration) at design time.
- Evaluate on subgroups, not just aggregate.
- Document fairness thresholds in the model card; track over time.
- Bias is not a one-time check — it drifts with data and policy changes.

## Drift & monitoring

- **Data drift:** feature distributions shift → retrain or investigate.
- **Concept drift:** relationship between features and target changes → model degrades.
- **Performance drift:** accuracy drops → alert and retrain.
- **Feedback loops:** model decisions affect future training data (e.g., credit decisions affect repayment). Detect and break loops.

## Compliance

- Predictive models affecting people (credit, hiring, insurance, healthcare) are **high risk** under EU AI Act and sectoral rules.
- Required: model card, eval suite (incl. bias), human oversight for consequential decisions, explainability, monitoring, documentation, conformity assessment where applicable.
- RBI fairness expectations for credit models; SEBI for investor-facing decisions; IRDAI for insurance.

## Anti-patterns

- **Training-serving skew** — features computed differently in training vs. serving → silent degradation.
- **Optimizing AUC, ignoring business cost** — a high-AUC model can be useless if false positives are expensive.
- **No subgroup evaluation** — aggregate metrics hide bias.
- **No drift monitoring** — model degrades silently.
- **Black-box for consequential decisions** — regulators and users demand explanations.
- **Feedback loops unchecked** — model creates the data it trains on.

## Related

- [Reference Architectures](/architecture/reference-architectures/) — index.
- [AI Observability](/architecture/ai-observability/) — drift and performance metrics.
- [AI Security](/architecture/ai-security/) — model theft, poisoning.
- [AI FinOps](/finops/) — training and serving cost.
- [Control Framework](/governance/control-framework/) — high-tier control set.
- [Risk Tiering](/governance/risk-tiering/) — predictive on people is high tier.
- [Data for AI](/architecture/data-governance/) — feature governance.
- [GDPR](/governance/gdpr/) / [EU AI Act](/governance/eu-ai-act/) — regulatory context.
