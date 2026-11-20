---
title: Vendor & Model Provider Evaluation Scorecard
description: "Template scorecard for evaluating AI vendors and model providers across capability, cost, compliance, security, reliability and lock-in."
tags: [playbooks, vendor-scorecards, template]
---

## TL;DR

A reusable scorecard for evaluating AI vendors and model providers. Score 1–5 per category, weight by use-case importance, require a minimum (e.g., 3.5/5) to proceed. Pair with [Build vs. Buy](/playbooks/build-vs-buy/) and [Decision Frameworks](/playbooks/decision-frameworks/).

## Scorecard template

| Category | Weight | Score (1–5) | Weighted | Notes / evidence |
|---|---|---|---|---|
| Capability (eval on our data) | 25% | | | |
| Cost (TCO at projected volume) | 20% | | | |
| Compliance (certs, residency, DPA) | 15% | | | |
| Security (encryption, access, audit, incident SLA) | 15% | | | |
| Reliability (SLA, uptime, rate limits, support) | 10% | | | |
| Lock-in / portability (data, models, exit plan) | 10% | | | |
| Roadmap alignment | 5% | | | |
| **Total** | 100% | | | |

**Decision rule:** proceed only if weighted total ≥ 3.5/5 AND no category scores 1 (hard fail) in Compliance or Security.

## Category detail

### Capability
- Does it solve the use case on our data (not benchmarks)?
- Eval results: accuracy, latency, safety on our golden set.
- Edge cases and failure modes observed.

### Cost
- Pricing model: per-token, per-request, per-seat, committed use.
- Projected TCO at 1x, 5x, 10x volume.
- Hidden costs: egress, storage, support tier, overage.
- Comparison to build alternative.

### Compliance
- Certifications: SOC 2 Type II, ISO 27001, ISO 42001 (AI).
- Data residency options and restrictions.
- DPA terms: training on our data? Model improvement? IP ownership of outputs?
- Cross-border transfer compliance (DPDP notified countries, GDPR adequacy).
- Audit rights and regulator access.

### Security
- Encryption at rest and in transit.
- Access control and SSO/SAML.
- Audit logs (immutable, exportable).
- Incident response SLA and notification timeline.
- Vulnerability disclosure and patching cadence.

### Reliability
- Uptime SLA and historical performance.
- Rate limits and throttling behavior.
- Support tier and response times.
- Deprecation and migration policy.

### Lock-in / portability
- Data export format and frequency.
- Model/portability (weights, prompts, config).
- Notice period and auto-renewal terms.
- Migration cost estimate.

### Roadmap
- Alignment with our 12–24 month needs.
- Deprecation history.
- Innovation pace vs. stability.

## Process

1. **Shortlist** 2–3 vendors per capability.
2. **Run eval** on our data (not benchmarks) for capability.
3. **Collect** compliance/security evidence (questionnaire + docs).
4. **Score** with the team (architect + security + FinOps + legal).
5. **Decide** with the scorecard + ADR.
6. **Negotiate** using the scorecard as leverage (weak categories become contract terms).
7. **Re-score** annually or on material change.

## Anti-patterns

- **Scoring on demos.** Demos are theater; eval on your data.
- **Single-evaluator scoring.** One person's bias becomes the decision. Score as a team.
- **Ignoring lock-in until exit.** Score it upfront; it is the most underestimated cost.
- **Skipping the exit plan.** Every buy needs a documented exit before signature.
- **Not re-scoring.** Vendors change; re-score annually.

## Related

- [Build vs. Buy](/playbooks/build-vs-buy/) — when to buy.
- [Decision Frameworks](/playbooks/decision-frameworks/) — model selection and prioritization.
- [AI FinOps](/finops/) — cost dimension.
- [Control Framework](/governance/control-framework/) — compliance dimension.
- [Risk Tiering](/governance/risk-tiering/) — risk dimension.
- [GDPR](/governance/gdpr/) / [DPDP](/governance/dpdp/) — data protection terms.
- [EU AI Act](/governance/eu-ai-act/) — provider/deployer obligations.
- [About](/about/) — target verticals and employers.
