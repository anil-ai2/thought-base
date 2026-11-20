---
title: GDPR — Data Minimization, Purpose Limitation, Rights as Controls
description: "GDPR translated into platform controls: minimization, purpose limitation, data subject rights, breach notification, protection by design."
tags: [governance, gdpr, privacy]
---

## TL;DR

GDPR is not a legal document to be read once a year. It is a **control set** that can be enforced by the platform: minimization as column allow-lists and CI PII scans, purpose as metadata on every record, rights as API endpoints with SLA tracking, breach as a 72-hour rehearsed runbook. This page shows how.

## The control translation (summary)

| GDPR article | Obligation | Control | Evidence | Metric |
|---|---|---|---|---|
| Art. 5(1)(c) | Data minimization | Field allow-lists; PII scan in CI; retention TTL; purge jobs | Scanner report per deploy; audit log | % pipelines with policy; 0 PII-in-logs incidents |
| Art. 5(1)(b) | Purpose limitation | Purpose tags as metadata; ingestion rejects untagged data; purpose-aware access | Purpose-tag coverage; access audit | % records tagged (target 100%) |
| Art. 15–22 | Data subject rights | Rights-fulfillment API with SLA; automated erasure cascade | Request log; SLA report; erasure history | % requests within SLA |
| Art. 33–34 | Breach notification (72h) | Breach detection + 72h runbook; quarterly drill | Drill records; incident log; timestamps | Time to detect; time to notify |
| Art. 25 | Protection by design/default | DPIA in intake; privacy review gate; default-minimum collection | DPIA records; gate approvals | % projects with DPIA before prod |
| Art. 32 | Security of processing | Encryption; access reviews; vulnerability scans | Scan reports; access attestations | Open critical findings (target 0) |

## Worked example — Art. 5 (data minimization)

See the full worked translation in [Translating GDPR & EU AI Act into Platform Controls](/thought-base/writing/translate-gdpr-eu-ai-act/). Short version:

- **Legal:** "Personal data shall be adequate, relevant and limited to what is necessary."
- **Control:** "Field-level data minimization: allow-listed columns per use case; automated PII detection in CI/CD; quarterly sampling audit; purge jobs with retention TTL."
- **Evidence:** "PII scanner report per deploy; audit log of column access; retention job run history."
- **Exec line:** "We enforce data minimization as code — every pipeline deploy is scanned, and 0 PII has reached non-prod in 12 months."

## The rights-fulfillment pattern

The single biggest GDPR operational pain is rights requests. Make them an API:

1. **Intake endpoint** receives the request (access / correction / erasure / portability / objection).
2. **Identity verification** step (reuse existing auth).
3. **Orchestration** locates all data for the subject across primary stores, replicas, search indexes, logs.
4. **Erasure cascade** executes deletion with retention-policy exceptions (e.g., legal hold) handled explicitly.
5. **Audit log** records request, actions, timestamps, exceptions.
6. **SLA tracking** reports fulfillment time vs. regulatory deadline.

Result: an audit is an export of the request log, not a quarter of manual work.

## DPIA as a gate, not a document

A Data Protection Impact Assessment should be a **gate in the intake**, not a PDF filed after the fact. Required triggers: processing of special-category data, large-scale monitoring, automated decision-making with legal/significant effects, novel technology. Template: purpose, data, necessity/proportionality, risks, mitigations, residual risk, DPO sign-off.

## Common pitfalls

- Treating GDPR as a one-time compliance project. It is a continuous control set; regulations and data change.
- Minimization as a "policy" without enforcement. If a pipeline can read a column, it will. Enforce at the platform.
- Ignoring purpose limitation. Purpose tags are cheap and make audits trivial.
- Breach playbooks that have never been drilled. Drill quarterly; measure detection-to-notification time.
- Conflating GDPR (data protection) with the EU AI Act (product regulation). They overlap but are distinct; map both.

## Related

- [EU AI Act](/thought-base/governance/eu-ai-act/) — product regulation layer.
- [DPDP Act](/thought-base/governance/dpdp/) — India's data protection law (similar structure).
- [Control Framework](/thought-base/governance/control-framework/) — domains 2, 5, 6, 11.
- [Control Library](/thought-base/reference/control-library/) — GDPR rows.
- [Writing: Translating GDPR & EU AI Act](/thought-base/writing/translate-gdpr-eu-ai-act/) — long-form treatment.
- [Privacy certification (CIPP/E)](/thought-base/about/) — credential recommendation.
