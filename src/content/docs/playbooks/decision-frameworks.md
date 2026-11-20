---
title: Decision Frameworks — Build vs. Buy, Model Selection, Vendor Scorecards
description: "Decision frameworks for enterprise AI: build-vs-buy, model selection and vendor evaluation scorecards."
tags: [playbooks, decision-frameworks]
---

## TL;DR

Decision frameworks are the **reusable decision logic** that lets teams self-serve within guardrails: when to build vs. buy, how to select a model, and how to score vendors. Each framework is a one-page template with criteria, weights and a decision rule. They are the highest-leverage artifact an architect can produce.

## Framework 1 — Build vs. buy

| Factor | Build | Buy |
|---|---|---|
| Strategic differentiation | Core to competitive advantage | Commodity capability |
| Data sensitivity | Highly sensitive / regulated; must stay in-house | Standard data; vendor can handle |
| Capability gap | Team has or can acquire the skill | No realistic path to skill in time |
| Time to value | Can afford 3–6 months | Need it in weeks |
| Cost at scale | Build cheaper at projected volume | Buy cheaper given volume |
| Vendor risk | Acceptable to depend on vendor | Vendor lock-in unacceptable |
| Compliance | Can meet obligations in-house | Vendor has certifications we need |

**Decision rule:** build if ≥ 4 of the first 4 factors favor build AND vendor risk is acceptable; otherwise buy. Document the decision as an ADR with the scorecard.

## Framework 2 — Model selection

Score each candidate model on:

| Criterion | Weight | Notes |
|---|---|---|
| Quality (eval pass rate on your golden set) | 30% | The dominant factor |
| Cost (per 1K tokens, per outcome) | 20% | Include infra for self-hosted |
| Latency (p95) | 15% | Must meet SLO |
| Safety (toxicity, PII, injection resistance) | 15% | Eval on adversarial set |
| Compliance (data residency, terms, certifications) | 10% | Hard gate for regulated |
| Operability (monitoring, versioning, rollback) | 10% | Day-2 cost |

**Decision rule:** the model with the highest weighted score that passes all hard gates (compliance, safety threshold, latency SLO) wins. Default to the cheapest passing model when scores are within 5%.

## Framework 3 — Vendor / model provider scorecard

| Category | Questions |
|---|---|
| **Capability** | Does it solve the use case? Eval results on our data? |
| **Cost** | Pricing model, volume discounts, egress, hidden costs? |
| **Compliance** | Certifications (SOC 2, ISO 27001, ISO 42001)? Data residency? DPA terms? |
| **Security** | Encryption, access control, audit logs, incident response SLA? |
| **Reliability** | SLA, uptime history, rate limits, support tier? |
| **Lock-in** | Portability of data, models, prompts? Exit plan? |
| **Roadmap** | Aligned with our needs? Deprecation policy? |

Score 1–5 per category; weight by use-case importance. Require a minimum score (e.g., 3.5/5) to proceed.

## Framework 4 — Use-case prioritization

Score each candidate use case on:

| Factor | Weight |
|---|---|
| Business value (revenue, cost saved, risk reduced) | 30% |
| Feasibility (data available, tech ready, skill available) | 25% |
| Risk (regulatory, safety, reputational) | 20% |
| Cost (build + run, order of magnitude) | 15% |
| Strategic alignment | 10% |

**Decision rule:** top 3–5 by score enter assessment; rest are parked with a reason.

## How to use these frameworks

1. **Copy the template** into your decision doc.
2. **Fill with real data** (eval results, cost estimates, vendor quotes).
3. **Score and decide** — document the scorecard, not just the conclusion.
4. **Record as ADR** — context, decision, consequences, alternatives.
5. **Review at gates** — design review and governance gate both check the framework was applied.

## Anti-patterns

- **Decisions without scorecards.** "We went with X" is not a decision; it is a preference.
- **Weights set after seeing results.** Set weights before scoring; otherwise you are rationalizing.
- **Skipping build-vs-buy for "obvious" cases.** The framework takes 30 minutes and prevents expensive mistakes.
- **Model selection on benchmarks alone.** Benchmarks lie; eval on your data.
- **Vendor scorecards without an exit plan.** Lock-in is a decision, not an accident.

## Related

- [Transformation Operating Model](/playbooks/operating-model/) — where decisions sit in the lifecycle.
- [CoE Charter](/playbooks/coe-charter/) — who runs the review board.
- [Build vs. Buy](/playbooks/build-vs-buy/) — deeper treatment.
- [Vendor Scorecards](/playbooks/vendor-scorecards/) — template.
- [Reference Architectures](/architecture/reference-architectures/) — pattern catalog.
- [AI FinOps](/finops/) — cost dimension.
- [Risk Tiering](/governance/risk-tiering/) — risk dimension.
- [Control Framework](/governance/control-framework/) — compliance dimension.
