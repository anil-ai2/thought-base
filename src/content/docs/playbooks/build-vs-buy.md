---
title: Build vs. Buy for AI Capabilities
description: "When to build, buy or partner for AI capabilities — decision criteria, cost curves and exit planning."
tags: [playbooks, build-vs-buy]
---

## TL;DR

Build when the capability is **strategic, data-sensitive and you can realistically deliver it**. Buy when it is commodity, time-critical or requires certifications you lack. Partner when you need capability now and can transition later. Always plan the exit before signing.

## The decision (summary)

See the full scorecard in [Decision Frameworks](/playbooks/decision-frameworks/). Short version:

- **Build** if: core to competitive advantage, highly sensitive/regulated data, team can deliver in 3–6 months, cheaper at projected volume, vendor lock-in unacceptable.
- **Buy** if: commodity capability, need it in weeks, no realistic skill path, vendor has required certifications, cheaper at projected volume.
- **Partner** if: need capability now, can transition to build/buy later, vendor brings expertise you lack.

## Cost curves

- **Build:** high upfront (people, infra, time), low marginal cost at scale. Pays off above a volume threshold.
- **Buy:** low upfront, high marginal cost (per-seat, per-call). Pays off below the volume threshold.
- **Crossover point:** the volume at which build becomes cheaper. Estimate it; revisit annually.

## Hidden costs

| | Build | Buy |
|---|---|---|
| Upfront | People, infra, time | Procurement, integration |
| Ongoing | Maintenance, on-call, model refresh, drift fixes | License, per-call fees, overage |
| Hidden | Opportunity cost, skill attrition, tech debt | Lock-in, roadmap mismatch, data egress |
| Exit | Sunk cost | Migration cost, data export, retraining |

## Exit planning (before you sign)

- **Data portability:** can you export all data in a standard format?
- **Model portability:** can you take the model (weights or at least prompts/config)?
- **Notice period:** how much notice to terminate? Auto-renewal?
- **Migration cost:** estimate and include in TCO.
- **Fallback:** what do you do if the vendor shuts down or changes terms?

## Compliance considerations

- **Data residency:** does the vendor process data in approved regions?
- **Certifications:** SOC 2, ISO 27001, ISO 42001, GDPR DPA, DPDP compliance.
- **Audit rights:** can you audit the vendor? Can regulators?
- **Sub-processors:** who else touches your data?
- **AI-specific terms:** training on your data? Model improvement? IP ownership of outputs?

## Common pitfalls

- **Building because "we can."** Capability does not imply it is strategic. Build only what differentiates.
- **Buying because "it is faster."** Speed today can mean lock-in tomorrow. Plan the exit.
- **Ignoring total cost of ownership.** License fees are visible; integration, migration and on-call are not.
- **No exit plan.** Every buy decision needs a documented exit before signature.
- **Underestimating build maintenance.** Building is 20% of the cost; maintaining is 80%.

## Related

- [Decision Frameworks](/playbooks/decision-frameworks/) — build-vs-buy scorecard.
- [Vendor Scorecards](/playbooks/vendor-scorecards/) — evaluation template.
- [AI FinOps](/finops/) — cost dimension.
- [Control Framework](/governance/control-framework/) — compliance dimension.
- [Risk Tiering](/governance/risk-tiering/) — risk dimension.
- [Transformation Operating Model](/playbooks/operating-model/) — where decisions sit.
- [Reference Architectures](/architecture/reference-architectures/) — what you build when you build.
- [About](/about/) — founder experience as differentiator.
