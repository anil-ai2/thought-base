---
title: Control Library — Regulation → Obligation → Control → Evidence → Owner → Metric
description: "The 30–50 row control library mapping GDPR, EU AI Act, NIST AI RMF, ISO 42001, DPDP and RBI/SEBI requirements to enforceable controls, evidence, owners and metrics."
tags: [reference, control-library, artifact]
---

## TL;DR

The control library is the **working spreadsheet** behind the Control Framework: one row per (regulation, obligation), run through the six-step translation. It is the single most valuable artifact in this site — copy it, adapt it, and it becomes your audit evidence, your review-board checklist and your interview centerpiece.

:::tip
Start with the 18 rows below, then expand to 30–50 by adding one row per obligation you care about. Full template at [Resources](/resources/control-library-template/).
:::

## How to read a row

| Column | Meaning |
|---|---|
| Reg | Source regulation/standard + article |
| Obligation | What must be true (in plain language) |
| Domain | Control domain (see Control Framework §2) |
| Control | Concrete mechanism that enforces it |
| Evidence | Artifact produced per deploy/run |
| Owner | Accountable role |
| Metric | Health measure |
| Exec line | One sentence for stakeholders |

## The library (v1)

### GDPR

| Reg | Obligation | Domain | Control | Evidence | Owner | Metric | Exec line |
|---|---|---|---|---|---|---|---|
| GDPR Art. 5(1)(c) | Data minimization — adequate, relevant, limited to purpose | 2 | Field-level allow-lists per use case; automated PII scan in CI; quarterly sampling audit; purge jobs with retention TTL | PII scanner report per deploy; column-access audit log; retention job history | Data platform lead + DPO | % pipelines with policy enforced; 0 PII-in-logs incidents | "Data minimization enforced as code — every deploy scanned." |
| GDPR Art. 5(1)(b) | Purpose limitation — collected for specified, explicit, legitimate purposes | 2, 5 | Purpose tags as metadata on every record; ingestion rejects untagged data; purpose-aware access policies | Purpose-tag coverage report; access-policy audit | Data platform lead + DPO | % records with purpose tag (target 100%) | "Purpose is metadata on every record." |
| GDPR Art. 15–22 | Data subject rights (access, erasure, portability, objection) | 5, 11 | Rights-fulfillment API with SLA tracking; automated erasure cascade across stores; audit log | Rights request log; SLA compliance report; erasure job history | DPO + data platform lead | % requests within SLA; mean time to fulfill | "Rights are an API call, not a project." |
| GDPR Art. 33–34 | Breach notification (72 hours to regulator; without undue delay to subjects) | 11 | Breach detection + 72hr notification runbook; quarterly drill; pre-drafted regulator template | Drill records; incident log; notification timestamps | CISO + DPO | Time to detect; time to notify; drill pass rate | "Breach response is a rehearsed runbook, not a scramble." |
| GDPR Art. 25 | Data protection by design and by default | 2, 5 | DPIA template in intake; privacy review gate; default-minimum data collection | DPIA records; gate approvals | DPO + architect | % projects with DPIA before prod | "Privacy reviewed before build, not after." |
| GDPR Art. 32 | Security of processing | 4 | Encryption at rest/transit; access reviews; vulnerability scan; incident response | Scan reports; access review attestations | CISO | Open critical findings (target 0) | "Security controls evidenced, not asserted." |

### EU AI Act (high-risk, Art. 9–15)

| Reg | Obligation | Domain | Control | Evidence | Owner | Metric | Exec line |
|---|---|---|---|---|---|---|---|
| EU AI Act Art. 9 | Risk management system | 1, 12 | Risk tiering at intake; continuous risk review; re-tier on change | Tier assignments; review records | Architect + risk owner | % use cases tiered; re-tier events | "Every AI use case is risk-tiered at intake." |
| EU AI Act Art. 10 | Data governance | 2, 5 | Data quality checks; bias examination; provenance documentation | Data quality reports; bias metrics | Data lead | Data quality score; bias metric thresholds | "Training data is governed, not just collected." |
| EU AI Act Art. 11 | Technical documentation | 3, 11 | Mandatory model card + eval suite before prod; versioned docs | Model card registry; doc version history | ML lead + architect | % models with current card | "No high-risk AI ships without a model card." |
| EU AI Act Art. 12 | Record-keeping (logging) | 8, 11 | Decision logs; input/output logging; retention policy | Log samples; retention attestation | Platform lead | Log coverage %; retention compliance | "Decisions are traceable end to end." |
| EU AI Act Art. 13 | Transparency to users | 6 | User-facing disclosure; instructions for use; capability/limitation statements | Disclosure screenshots; review sign-off | Product + legal | Disclosure coverage (target 100%) | "Users know they are interacting with AI." |
| EU AI Act Art. 14 | Human oversight | 7 | Named human approver for high-risk decisions; override logging; escalation runbook | Approval records; override log | Business owner + DPO | Override rate; escalation time | "A named human is accountable for every high-risk decision." |
| EU AI Act Art. 15 | Accuracy, robustness, cybersecurity | 3, 4, 8 | Eval thresholds; adversarial testing; drift monitoring; security review | Eval results; red-team report; drift dashboard | ML lead + security | Eval pass rate; drift incidents | "Accuracy and robustness are measured, not assumed." |

### NIST AI RMF

| Reg | Obligation | Domain | Control | Evidence | Owner | Metric | Exec line |
|---|---|---|---|---|---|---|---|
| NIST AI RMF — Govern | Accountability & culture | 1, 10, 12 | RACI for AI; CoE charter; standards lifecycle; exception process | Charter doc; standards register | Architect + CoE lead | Standards adoption % | "Governance is an operating model, not a policy." |
| NIST AI RMF — Map | Context & impact | 1, 2, 6 | Use-case intake with affected-stakeholder analysis; data lineage | Intake records; lineage diagrams | Architect + data lead | % use cases with impact analysis | "We map impact before we build." |
| NIST AI RMF — Measure | Metrics & evaluation | 3, 8, 9 | Eval suites; monitoring dashboards; cost metrics | Eval reports; dashboards | ML lead + FinOps | Eval pass rate; monitoring coverage | "What gets measured gets governed." |
| NIST AI RMF — Manage | Risk response | 4, 5, 7, 11 | Incident playbook; mitigation tracking; documentation | Incident log; mitigation status | Risk owner | Open risks; MTTR | "Risks are tracked to closure." |

### ISO/IEC 42001

| Reg | Obligation | Domain | Control | Evidence | Owner | Metric | Exec line |
|---|---|---|---|---|---|---|---|
| ISO 42001 (A.2–A.10) | AI management system controls | 1, 3, 10, 11, 12 | Documented AI policy; roles; risk assessment; supplier management; improvement | Policy doc; role matrix; supplier assessments | Architect + compliance | Audit findings (target 0 major) | "An auditable AI management system, not a binder." |

### DPDP Act (India)

| Reg | Obligation | Domain | Control | Evidence | Owner | Metric | Exec line |
|---|---|---|---|---|---|---|---|
| DPDP — Consent | Valid consent for processing | 5 | Consent capture at collection; consent ledger; withdrawal flow | Consent records; withdrawal log | Product + DPO | Consent coverage % | "Consent is captured and withdrawable." |
| DPDP — Purpose limitation | Process only for specified purpose | 2, 5 | Purpose tags; purpose-aware access; rejection of off-purpose use | Purpose-tag coverage; access audit | Data platform lead | Off-purpose access incidents (target 0) | "Purpose is enforced, not stated." |
| DPDP — Data principal rights | Access, correction, erasure, grievance | 5, 11 | Rights API with SLA; erasure cascade; grievance workflow | Request log; SLA report | DPO | % within SLA | "Rights fulfillment is automated." |
| DPDP — Breach notification | Notify board and principals | 11 | 72hr notification runbook; detection; pre-drafted comms | Drill records; incident log | CISO + DPO | Time to notify | "Breach response rehearsed." |
| DPDP — SDF obligations | Significant Data Fiduciary duties | 1, 10, 12 | DPO appointment; DPIA; independent audit; periodic review | DPO record; audit report | DPO + architect | Audit findings | "SDF duties operationalized." |

### RBI / SEBI / IRDAI (India)

| Reg | Obligation | Domain | Control | Evidence | Owner | Metric | Exec line |
|---|---|---|---|---|---|---|---|
| RBI draft AI framework | Board-approved AI policy; model risk management | 1, 3, 10, 11 | AI use-case register; model lifecycle gates; vendor checklist | Register export; gate approvals | Architect + risk | Registered use cases % | "Every AI use case is registered and gated." |
| RBI — Fairness | Fairness audit for credit/decisioning models | 3, 8 | Fairness metrics with thresholds; periodic re-eval | Fairness dashboards; eval reports | ML lead + risk | Fairness threshold breaches (target 0) | "Fairness is measured, not asserted." |
| SEBI May 2026 circular | AI adoption & threat modeling for financial entities | 4, 8, 11 | Threat model per AI system; security review; incident reporting | Threat model docs; review records | Security lead | Systems threat-modeled % | "AI systems are threat-modeled." |
| IRDAI guidelines | Insurer AI/cyber controls | 1, 4, 8, 11 | AI register; cyber controls; monitoring | Register; monitoring dashboards | Architect + security | Coverage % | "Insurer AI is registered and monitored." |

## Maintenance

- Each row has a "last reviewed" field and a named reviewer (add columns in your spreadsheet).
- Quarterly review aligned to regulatory watch.
- New regulation or delegated act → add rows; do not delete old ones (mark superseded with a note).
- The library is a living artifact; version it (v1, v1.1, …).

## Related

- [Control Framework](/governance/control-framework/) — the 12 domains and dashboard.
- [Risk Tiering Model](/governance/risk-tiering/) — determines which controls apply.
- [Exec-Line Answer Bank](/resources/exec-line-answer-bank/) — stakeholder-ready translations.
- [Control Library Template](/resources/control-library-template/) — downloadable starter.
