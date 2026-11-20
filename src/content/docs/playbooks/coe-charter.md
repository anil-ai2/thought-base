---
title: AI Center of Excellence Charter
description: "Charter template for an AI CoE: mission, scope, RACI, review board, enablement plan and community of practice."
tags: [playbooks, coe, charter]
---

## TL;DR

An AI CoE is the **operating body** that makes governance and standards real: it runs the review board, owns the standards lifecycle, drives enablement and hosts the community of practice. This page is a charter template you can adapt. Without a CoE, standards are documents; with one, they are a practice.

## Charter template

### 1. Mission
Enable the organization to adopt AI safely, compliantly and cost-efficiently at scale, by providing standards, review, enablement and shared infrastructure.

### 2. Scope
- In scope: AI use cases across all business units; standards for architecture, data, security, governance, FinOps; review board; enablement; shared platforms and templates.
- Out of scope: operational ownership of any AI system (owned by product/platform teams); procurement decisions (advisory only).

### 3. Structure
- **Sponsor:** CIO/CTO/CDO (executive sponsor, budget authority).
- **Lead:** Enterprise AI Architect (you) — accountable for standards and review.
- **Core team:** platform lead, security lead, data lead, FinOps lead, legal/DPO (part-time).
- **Extended:** representatives from each business unit (rotating).
- **Community of practice:** open to all engineers and data scientists.

### 4. Review board
- **Cadence:** bi-weekly.
- **Agenda:** new use-case intakes (tiering), design reviews, exceptions, standards changes, incidents.
- **Decision rights:** approve/reject use cases, approve exceptions (time-boxed), approve standards changes, escalate to sponsor.
- **SLA:** decision within 5 business days of complete submission.

### 5. Standards lifecycle
- **Propose:** any team proposes a standard (ADR format).
- **Review:** CoE reviews; 2-week comment period.
- **Approve:** review board approves; version published.
- **Adopt:** teams adopt within agreed timeline; CoE supports.
- **Retire:** standards reviewed annually; retired with migration path.

### 6. Enablement plan
- Onboarding path for new AI engineers (2 weeks).
- Quarterly training: governance, security, FinOps, approved patterns.
- Office hours (weekly, open).
- Documentation and templates (this site).

### 7. Community of practice
- Monthly meetup (show-and-tell, 30 min).
- Shared channel for questions and patterns.
- Annual AI day / hackathon.

### 8. Metrics
- Use cases registered and tiered (% of known AI).
- Design reviews completed within SLA.
- Standards adoption rate.
- Training attendance and satisfaction.
- Incidents and exceptions trend.
- Cost per outcome trend.

### 9. Budget & resources
- Defined by sponsor; typically 10–20% of AI engineering capacity for CoE activities.

## Anti-patterns

- **CoE as a gatekeeper bottleneck.** The CoE enables and reviews; it does not own delivery. SLAs keep it fast.
- **CoE without authority.** If the board cannot reject a use case, it is advisory, not governance.
- **Standards without adoption support.** Publishing a standard without enablement guarantees non-adoption.
- **CoE as a full-time team of 1.** Start small (you + part-time leads); grow with demand.
- **No community.** Without a community of practice, standards feel imposed, not shared.

## Related

- [Transformation Operating Model](/playbooks/operating-model/) — where the CoE sits in the lifecycle.
- [Decision Frameworks](/playbooks/decision-frameworks/) — build-vs-buy, model selection.
- [Control Framework](/governance/control-framework/) — the control set the CoE enforces.
- [Risk Tiering](/governance/risk-tiering/) — intake the CoE runs.
- [About](/about/) — the seat and the trifecta.
