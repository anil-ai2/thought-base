---
title: Risk Tiering Intake Template
description: "Copy-paste intake form and decision tree for classifying AI use cases as minimal, limited, high or unacceptable risk."
tags: [resources, template, risk-tiering]
---

## TL;DR

Copy the intake form and decision tree below into your review board's tooling. Every AI use case is classified at intake; the tier determines the mandatory control set. Full rationale and control matrix at [Risk Tiering Model](/governance/risk-tiering/).

## Intake form (copy this)

```
AI USE-CASE INTAKE
------------------
1. Use-case name:
2. Business owner (name + role):
3. Technical owner (name + role):
4. Problem statement (1-2 sentences):
5. AI pattern: [ ] RAG  [ ] Agentic  [ ] Copilot  [ ] Predictive  [ ] Doc processing  [ ] Other
6. Data involved: [ ] None  [ ] Internal non-PII  [ ] Personal data  [ ] Sensitive personal data
7. Who is affected by the output? [ ] No one externally  [ ] Internal users  [ ] Customers  [ ] Regulated decisions
8. Is the decision reversible by a human in < 1 day? [ ] Yes  [ ] No
9. Third-party model/provider? [ ] No  [ ] Yes — name:
10. Estimated cost (order of magnitude): training $___  inference $___/month
11. Proposed tier (from decision tree): [ ] Minimal  [ ] Limited  [ ] High  [ ] Unacceptable
12. Reviewer notes:
```

## Decision tree (copy this)

1. Does it manipulate behavior subliminally or exploit vulnerabilities? → **Unacceptable.**
2. Does it score/rank people for access to credit, employment, education, healthcare, housing, insurance or public services? → **High.**
3. Does it make or materially influence a decision about a person that is hard to reverse? → **High.**
4. Does it process biometric data or infer sensitive attributes (health, religion, politics, sexuality)? → **High** (or Unacceptable if real-time public biometric).
5. Does it interact with end users who may mistake it for a human, or generate content that could mislead? → **Limited.**
6. Does it process personal data at all? → at least **Limited**; escalate to High if sensitive or large volume.
7. Otherwise → **Minimal.**

When in doubt, tier up. Down-tiering requires review-board approval and a documented rationale.

## Required controls by tier

See the full control matrix at [Risk Tiering Model](/governance/risk-tiering/) — includes the control set per tier and the review-board checklist.

## Anti-patterns to reject

- "We'll tier it later" — tier at intake or it never happens.
- "It's just an internal tool" — internal tools with PII or consequential decisions are not minimal.
- "The vendor handles compliance" — the deployer is accountable.
- "We'll add monitoring after launch" — monitoring is a gate.
- Tiering down to avoid review — the most common failure mode; audit for it.

## Related

- [Risk Tiering Model](/governance/risk-tiering/) — full rationale.
- [Control Framework](/governance/control-framework/) — the 12 domains.
- [Control Library Template](/resources/control-library-template/) — companion template.
- [Transformation Operating Model](/playbooks/operating-model/) — where intake sits.
- [Decision Frameworks](/playbooks/decision-frameworks/) — use-case prioritization.
