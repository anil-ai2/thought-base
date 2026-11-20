---
title: EU AI Act — Risk Classes & Conformity
description: "The EU AI Act for architects: risk classes (unacceptable/limited/high/minimal), obligations for providers and deployers, conformity assessment, FRIA and GPAI rules."
tags: [governance, eu-ai-act]
---

## TL;DR

The EU AI Act is **product regulation for AI**: it classifies systems by risk and imposes hard obligations — conformity assessment, technical documentation, human oversight, post-market monitoring — on high-risk systems. For an architect, the job is to determine (a) whether your system is high-risk, (b) whether you are a provider or a deployer, and (c) what evidence the conformity assessment needs. Everything else is implementation.

## The four risk classes

| Class | Definition | Examples | Obligation level |
|---|---|---|---|
| **Unacceptable** | Prohibited practices | Social scoring, subliminal manipulation, real-time biometric ID in public (narrow exceptions), exploiting vulnerabilities | **Banned** — do not build |
| **High-risk** | Significant impact on rights/safety/access | Credit scoring, hiring, education, essential services, law enforcement, migration, justice, critical infrastructure, medical devices | **Full conformity assessment + ongoing obligations** |
| **Limited (transparency)** | User-facing but low-stakes | Chatbots, emotion recognition, biometric categorization, deepfakes | Disclosure obligations |
| **Minimal** | Everything else | Spam filters, internal tooling, games | Voluntary codes of conduct |

## Provider vs. deployer — the obligation split

This is the first question to answer for any system. Getting it wrong means either over-engineering (deployer doing provider work) or under-engineering (deployer assuming the vendor handles it).

| Role | Definition | Key obligations |
|---|---|---|
| **Provider** | Develops or has developed an AI system and places it on the market / puts into service under its own name | Conformity assessment, technical documentation, quality management system, post-market monitoring, registration in EU database, CE marking |
| **Deployer** | Uses an AI system under its authority in a professional activity | Use per instructions, human oversight, input data relevance, monitoring, log retention, inform affected persons, FRIA (for certain deployers) |
| **Importer / distributor** | Places a third-party system on the EU market | Verify conformity, documentation, CE marking |

**Architect's takeaway:** if you build on a third-party model (OpenAI, Azure OpenAI, etc.), you are likely a **deployer** for that model but may be a **provider** for the system you wrap around it. The system-level obligations (risk management, data governance, transparency, oversight) usually fall on you as deployer; model-level obligations (training data, capabilities, limitations) fall on the provider.

## High-risk obligations (Art. 9–15) — the architect's checklist

1. **Risk management system** (Art. 9): continuous, iterative, documented.
2. **Data governance** (Art. 10): training/validation/test data quality, relevance, representativeness, bias examination.
3. **Technical documentation** (Art. 11): before market placement; kept up to date.
4. **Record-keeping / logging** (Art. 12): automatic logging of events for traceability.
5. **Transparency & information to deployers** (Art. 13): instructions for use, capabilities, limitations.
6. **Human oversight** (Art. 14): measures enabling effective oversight by natural persons.
7. **Accuracy, robustness, cybersecurity** (Art. 15): appropriate levels, resilient to errors and attacks.

Plus: **conformity assessment** (Art. 43), **CE marking** (Art. 48), **EU database registration** (Art. 49), **post-market monitoring** (Art. 72), **serious incident reporting** (Art. 73).

## FRIA — Fundamental Rights Impact Assessment

Required for certain deployers (public bodies, and private entities providing public services) before deploying a high-risk system. Assesses impact on fundamental rights. Even where not strictly required, running a lightweight FRIA is good practice and a strong interview talking point.

## GPAI models (general-purpose AI)

Separate track for foundation models. Obligations: technical documentation, training-data summary, copyright policy, (for systemic-risk models) model evaluation, adversarial testing, incident reporting, cybersecurity. If you consume GPAI models, your provider's compliance is an input to your own risk assessment — verify and document it.

## Timeline awareness

The Act is phased in over several years (prohibited practices first, then GPAI, then high-risk). Exact dates shift with delegated acts — verify against the current text before making commitments. Do not hard-code dates in contracts or roadmaps without a "subject to delegated acts" clause.

## Architect's decision flow

1. Is the use case in the prohibited list? → Stop.
2. Is it in Annex III (high-risk categories)? → High-risk path.
3. Is it a GPAI model we are building? → GPAI obligations.
4. Otherwise → limited/minimal obligations (disclosure at minimum).
5. Determine provider vs. deployer role for the system *and* for any third-party model consumed.
6. Map obligations to controls (see Control Framework + Control Library).
7. Plan conformity assessment and documentation before build, not after.

## Common pitfalls

- Assuming the model vendor's compliance covers your system. It does not — system-level obligations are yours.
- Treating high-risk as "more governance" rather than "different governance." Conformity assessment is a specific, auditable process with specific evidence.
- Ignoring the GPAI track when you consume foundation models. Document the provider's compliance as an input to your risk assessment.
- Hard-coding regulatory dates into contracts. Use "subject to delegated acts" clauses.

## Related

- [Governance & Compliance overview](/thought-base/governance/) — the stack and translation rule.
- [Risk Tiering Model](/thought-base/governance/risk-tiering/) — maps to EU AI Act classes.
- [GDPR](/thought-base/governance/gdpr/) — data protection layer that sits underneath.
- [Control Framework](/thought-base/governance/control-framework/) — obligations → controls.
- [Control Library](/thought-base/reference/control-library/) — EU AI Act rows.
- [NIST AI RMF](/thought-base/governance/nist-ai-rmf/) — voluntary backbone.
- [ISO 42001](/thought-base/governance/iso-42001/) — certifiable management system.
