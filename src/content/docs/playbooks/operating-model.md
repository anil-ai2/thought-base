---
title: AI Transformation Operating Model
description: "Discover → Assess → Design → Govern → Scale → Optimize, with entry/exit criteria and decision gates. The transformation lifecycle playbook."
tags: [playbooks, operating-model, artifact]
sidebar:
  order: 1
---

## TL;DR

Six phases, each with entry criteria, exit criteria and a decision gate. Nothing moves to the next phase without passing the gate. This is how a single architect governs transformation across dozens of teams without becoming the bottleneck.

:::tip
Print the phase/gate table and pin it. It is the single most useful artifact for aligning stakeholders.
:::

## The six phases

| # | Phase | Question answered | Key outputs | Gate |
|---|---|---|---|---|
| 1 | **Discover** | What AI is worth doing? | Use-case backlog, value hypotheses, risk screen | Backlog prioritized by value × risk × feasibility × cost |
| 2 | **Assess** | Are we ready to do it? | Readiness assessment, data availability, control gaps | Go / no-go per use case |
| 3 | **Design** | How do we build it safely & cheaply? | Reference arch selection, control set, cost estimate, ADR | Design review pass |
| 4 | **Govern** | Is it approved to ship? | Tier assignment, model card, eval pass, HITL, exceptions | Governance gate |
| 5 | **Scale** | How do we roll it out? | Rollout plan, monitoring, chargeback, runbook | Production promotion |
| 6 | **Optimize** | Is it delivering value at the right cost? | Value measurement, cost review, re-tier/re-design triggers | Quarterly review |

## Phase details

### Phase 1 — Discover
- **Inputs:** business strategy, pain points, regulatory drivers, data availability.
- **Activities:** AI opportunity canvas; value × risk × feasibility × cost scoring; risk screen (tier hint); portfolio view.
- **Outputs:** prioritized use-case backlog; top 3–5 candidates for assessment.
- **Gate:** steering committee selects candidates; rejected ones are parked with a reason, not deleted.

### Phase 2 — Assess
- **Inputs:** candidate use cases.
- **Activities:** data availability check; control-gap analysis (against Control Framework); cost order-of-magnitude; vendor landscape scan.
- **Outputs:** readiness scorecard per use case; go/no-go recommendation.
- **Gate:** go/no-go per use case; no-gos get a documented reason and a "what would change the answer" note.

### Phase 3 — Design
- **Inputs:** approved use cases.
- **Activities:** select reference architecture; define control set per tier; write ADR; cost estimate; eval plan; monitoring plan.
- **Outputs:** design doc + ADR + cost estimate + eval plan.
- **Gate:** design review (architecture + security + FinOps + data). The "one question that kills the design" must be answered.

### Phase 4 — Govern
- **Inputs:** design doc.
- **Activities:** formal risk tiering; model card; eval suite run; HITL setup; security review; vendor assessment; conformity/FRIA if high-risk.
- **Outputs:** governance pack (tier, model card, eval results, approvals).
- **Gate:** governance gate — all mandatory controls evidenced. Exceptions time-boxed and tracked.

### Phase 5 — Scale
- **Inputs:** governance pack.
- **Activities:** rollout plan (canary/blue-green); monitoring wired (quality, drift, cost, latency); chargeback configured; runbook and incident playbook; user training/disclosure.
- **Outputs:** production system + runbook + monitoring + chargeback.
- **Gate:** production promotion checklist signed by named owners.

### Phase 6 — Optimize
- **Inputs:** production telemetry.
- **Activities:** value measurement vs. hypothesis; cost review; re-tiering check; model refresh; kill zombie projects.
- **Outputs:** value report; optimization backlog; kill list.
- **Gate:** quarterly steering review; kill or scale decisions recorded.

## Portfolio management rules

- **Kill zombies.** A project with no measurable value after two quarters is killed or re-scoped. Document the kill.
- **Re-tier on change.** Data, model or use-case change that could affect tier triggers re-intake.
- **Pre-approved patterns.** Use cases that fit an approved reference architecture + tier skip design review and go straight to govern.
- **Exception expiry.** All exceptions auto-expire; expired = re-enforce or re-approve.

## Roles & RACI (summary)

| Activity | Architect | Platform team | Security/DPO | FinOps | Business owner |
|---|---|---|---|---|---|
| Discover / prioritize | A | C | C | C | R |
| Assess readiness | A | R | C | C | C |
| Design | A/R | C | C | C | C |
| Govern (gate) | A | C | R | C | C |
| Scale / run | C | R | C | C | C |
| Optimize / value | A | C | C | R | R |

R = responsible, A = accountable, C = consulted.

## Anti-patterns

- **Phase skipping.** "We'll govern after launch" → never governs.
- **Discovery without killing.** Backlog grows forever; portfolio rots.
- **Design without cost.** Cost discovered in production is 10x cost discovered in design.
- **Governance as a separate project.** Governance is a gate in the lifecycle, not a parallel workstream.
- **No owner for optimize.** Value measurement is everyone's job and therefore no one's.

## Related

- [Risk Tiering Model](/thought-base/governance/risk-tiering/) — the govern gate's core input.
- [Control Framework](/thought-base/governance/control-framework/) — the control set enforced at govern.
- [Decision Frameworks](/thought-base/playbooks/decision-frameworks/) — build-vs-buy, model selection.
- [CoE Charter](/thought-base/playbooks/coe-charter/) — who runs the gates.
- [Reference Architectures](/thought-base/architecture/reference-architectures/) — the design phase's pattern catalog.
