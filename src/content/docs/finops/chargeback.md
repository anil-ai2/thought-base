---
title: Chargeback & Showback for AI Platforms
description: "Attributing AI cost to teams and products: showback vs. chargeback, tagging, allocation drivers and governance."
tags: [finops, chargeback]
---

## TL;DR

If you cannot attribute AI cost to a team or product, you cannot manage it. **Showback** (visibility without billing) comes first; **chargeback** (actual internal billing) follows once the allocation model is trusted. Start with tagging and showback in month one; introduce chargeback in month three.

## Showback vs. chargeback

| Mechanism | What it does | When to use |
|---|---|---|
| **Showback** | Reports cost to teams without billing them | Early stage; building trust in the numbers |
| **Chargeback** | Actually bills teams' budgets | Once allocation model is trusted and stable |

Skip showback and teams will distrust chargeback. Skip chargeback and teams will not optimize.

## Tagging strategy

Every resource and every request carries tags:

- `team` — owning team.
- `product` — product/feature.
- `use_case` — AI use case ID (from the register).
- `environment` — prod / staging / dev.
- `cost_center` — finance dimension.

Enforce tagging via policy (OPA/Kyverno, cloud policy) — untagged resources are rejected or quarantined.

## Allocation drivers

| Cost type | Driver | Notes |
|---|---|---|
| Inference (API) | Request count or token count per use case | Token count is more accurate |
| Inference (self-hosted) | GPU-seconds per use case | Requires per-request attribution |
| Shared infra (cluster) | Request count or pod-seconds | Document and review quarterly |
| Platform overhead | Fixed charge per use case or % of direct cost | Keep simple |
| Training | Direct to the model/use case | Amortize over useful life |
| Data | Direct to consuming use cases | Split shared datasets by consumption |

## Governance

- **Allocation model documented** and reviewed quarterly.
- **Disputes process:** team can challenge allocation within 30 days; FinOps lead arbitrates.
- **Monthly cost review** with each team lead: spend, trend, optimization actions.
- **Optimization targets** agreed per team (e.g., reduce cost per outcome by 10% next quarter).

## Common pitfalls

- **Charging back before the numbers are trusted.** Teams will fight every bill; trust erodes.
- **Over-complex allocation.** A 15-factor allocation model nobody understands. Start with 2–3 drivers.
- **Untagged resources.** If it is not tagged, it is unmanaged. Enforce tagging at creation.
- **Ignoring shared costs.** Shared infra is real; allocate it, don't hide it.
- **No optimization conversation.** Chargeback without optimization support is just a tax.

## Related

- [Cost Taxonomy](/thought-base/finops/cost-taxonomy/) — the four buckets.
- [Unit Economics](/thought-base/finops/unit-economics/) — cost per outcome.
- [GPU Strategy](/thought-base/finops/gpu-strategy/) — commitment strategy.
- [FOCUS Spec & Tooling](/thought-base/finops/focus-spec/) — normalization and tooling.
- [AI Observability](/thought-base/architecture/ai-observability/) — cost telemetry.
- [Control Framework](/thought-base/governance/control-framework/) — domain 9 (FinOps).
- [Governance as Code](/thought-base/governance/governance-as-code/) — tagging enforcement.
- [Transformation Operating Model](/thought-base/playbooks/operating-model/) — optimize phase.
