---
title: AI Observability — Tokens, Cost, Quality, Drift
description: "Observability for AI systems: token/cost/latency telemetry, quality metrics, drift detection and trace-level debugging."
tags: [architecture, observability, ai-observability]
---

## TL;DR

If you cannot see it, you cannot govern it. AI observability covers **token and cost telemetry, latency, quality (faithfulness, relevance, safety), drift (data, concept, performance) and trace-level debugging**. It is the feedback loop that makes every other artifact (governance, FinOps, evaluation) operable. Observability is a gate, not an afterthought.

## The four pillars

### 1. Cost & token telemetry
- Tokens in/out per request, per user, per feature, per model.
- Cost per request, per outcome, per team (chargeback).
- GPU utilization, queue depth, autoscaling events.
- Alerts on budget thresholds (80% / 100%).

### 2. Latency
- Time to first token (TTFT), total response time (p50/p95/p99).
- Retrieval latency, tool-call latency, generation latency (breakdown).
- Queue wait time, cold-start time.

### 3. Quality
- Faithfulness / groundedness (is the answer supported by context?).
- Answer relevance, completeness.
- Safety: toxicity, PII leakage, policy violations, refusal rate.
- User feedback: thumbs up/down, edit rate, acceptance rate, escalation rate.

### 4. Drift
- Data drift: input feature / query distribution shifts.
- Concept drift: relationship between input and desired output shifts.
- Performance drift: accuracy/quality degrades over time.
- Cost drift: cost per outcome trends up.

## Trace-level debugging

Every request produces a **trace** capturing:
- Input (user query, context, system prompt version).
- Retrieval (chunks retrieved, scores, reranking).
- Tool calls (name, args, result, latency).
- Model calls (model, tokens, latency, cost).
- Output (raw + filtered).
- Guardrail decisions (what fired and why).
- Final response + citations.

Traces are the debugging and audit unit. Store with retention policy; make queryable by request ID, user, model version, time range.

## Dashboards by audience

| Audience | Dashboard | Cadence |
|---|---|---|
| Engineering | Latency, errors, token/cost per request, trace search | Real-time |
| Product | Quality metrics, user feedback, acceptance rate, escalation | Daily |
| FinOps | Cost per outcome, cost by team/model, budget burn, GPU util | Daily/weekly |
| Governance | Safety violations, PII incidents, drift alerts, eval pass rate | Weekly |
| Exec | Cost per outcome trend, quality trend, incident count | Monthly |

## Alerting

- **Real-time:** PII in output, safety violation, cost spike (> 2x baseline), error rate spike.
- **Daily:** drift alert, quality drop below threshold, budget burn > 80%.
- **Weekly:** eval regression, fairness metric breach, incident summary.

## Tooling

- **LLM observability platforms:** LangSmith, Langfuse, Arize Phoenix, Helicone, Braintrust — pick one; integrate early.
- **Infra:** OpenTelemetry for traces; Prometheus/Grafana or cloud-native (Azure Monitor, CloudWatch) for metrics.
- **Eval:** golden sets + LLM-as-judge; run on every prompt/model/corpus change.
- **Cost:** cloud billing exports + Kubecost/OpenCost for K8s; FOCUS spec for normalization.

## Implementation sequence

1. **Week 1:** Token + cost logging per request (the minimum viable observability).
2. **Week 2:** Tracing (inputs, retrieval, model calls, outputs).
3. **Week 3:** Quality metrics + user feedback capture.
4. **Week 4:** Drift monitoring + dashboards + alerts.
5. **Ongoing:** eval suite on every change; red-team cadence.

## Anti-patterns

- **Logging without structure.** Unstructured logs are unsearchable. Use structured traces.
- **Observability after launch.** Retrofitting is 10x harder; instrument from day one.
- **Aggregate-only metrics.** Per-user, per-feature, per-model breakdowns are where the insights live.
- **No eval set.** Without a golden set, you cannot detect regressions.
- **Ignoring cost.** Cost is a quality dimension; track it with the same rigor.
- **No retention policy.** Traces contain PII; define retention and access control.

## Related

- [AI FinOps](/thought-base/finops/) — cost telemetry and chargeback.
- [RAG](/thought-base/architecture/rag/) — retrieval and generation metrics.
- [Agentic](/thought-base/architecture/agentic/) — step and cost metrics.
- [Copilot](/thought-base/architecture/copilot/) — UX and quality metrics.
- [AI Security](/thought-base/architecture/ai-security/) — security monitoring.
- [Control Framework](/thought-base/governance/control-framework/) — domain 8 (monitoring).
- [Risk Tiering](/thought-base/governance/risk-tiering/) — monitoring by tier.
- [Data for AI](/thought-base/architecture/data-governance/) — data quality and lineage.
