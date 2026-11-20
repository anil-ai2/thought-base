---
title: AI Security — OWASP LLM Top 10 & Red Teaming
description: "AI security for architects: OWASP LLM Top 10, prompt injection, data leakage, supply chain, excessive agency, red-teaming cadence."
tags: [architecture, security, ai-security]
---

## TL;DR

AI security is not traditional app security with a model bolted on. The new attack surface is the **prompt, the retrieved context, the tool outputs and the model itself**. The baseline here is the OWASP LLM Top 10, plus a red-teaming cadence scaled to risk tier. Security is a gate, not a review at the end.

## OWASP LLM Top 10 (architect's view)

| # | Risk | What it means | Control |
|---|---|---|---|
| LLM01 | Prompt injection | Attacker overrides instructions via user input or retrieved content | Input validation, instruction isolation, output validation, least privilege for tools |
| LLM02 | Insecure output handling | LLM output used unsafely downstream (XSS, SQLi, command exec) | Treat LLM output as untrusted; validate/sanitize before use; parameterized queries |
| LLM03 | Training data poisoning | Malicious data in training/fine-tuning corrupts behavior | Data provenance, validation, anomaly detection, trusted sources only |
| LLM04 | Model denial of service | Inputs that consume excessive resources | Rate limiting, input length caps, timeout, cost budgets |
| LLM05 | Supply chain vulnerabilities | Vulnerable components, compromised models, tampered weights | SBOM, dependency scanning, model provenance, signed artifacts |
| LLM06 | Sensitive information disclosure | Model leaks PII, secrets or training data | PII redaction, output filtering, DLP, minimization |
| LLM07 | Insecure plugin design | Tools/plugins with excessive permissions or no validation | Least privilege, input validation, allow-lists, sandboxing |
| LLM08 | Excessive agency | Agent takes harmful actions autonomously | Tool allow-lists, step/cost budgets, human approval for writes, scope limits |
| LLM09 | Overreliance | Users trust incorrect outputs for consequential decisions | Confidence display, citations, human-in-the-loop, training |
| LLM10 | Model theft | Extraction of model weights or behavior via queries | Access control, rate limiting, watermarking, monitoring |

## Architect-level controls

- **Threat model per AI system** (SEBI now mandates this for financial entities; good practice everywhere).
- **Red-team cadence scaled to tier:** minimal (annual), limited (quarterly), high (monthly + pre-release).
- **Prompt injection defenses:** instruction isolation, input validation, output validation, tool-output treated as untrusted.
- **Secrets hygiene:** no secrets in prompts, tools or logs; short-lived scoped credentials; vault integration.
- **Supply chain:** SBOM for the AI stack; signed model artifacts; dependency scanning in CI.
- **Access control:** least privilege on data, tools and model endpoints; per-user entitlements enforced at retrieval.
- **DLP on outputs:** scan for PII, secrets and policy violations before returning to user.
- **Monitoring:** anomaly detection on usage patterns; alert on injection attempts, exfiltration signals.

## Red-teaming playbook (lightweight)

1. **Scope:** system, model, tools, data, users.
2. **Attack categories:** injection (direct + indirect via retrieved content), jailbreak, data exfiltration, excessive agency, denial of service.
3. **Execute:** manual + automated (promptfoo, garak, or custom).
4. **Triage:** severity, exploitability, impact.
5. **Mitigate:** control + regression test.
6. **Re-test:** confirm fix; add to regression suite.

## Compliance

- Security review is a gate in the [Operating Model](/thought-base/playbooks/operating-model/) (govern phase).
- High-tier systems require documented threat model and red-team report as evidence.
- Incident reporting obligations vary by regulator (RBI/SEBI 24hr, GDPR 72hr, etc.) — build the runbook to the strictest applicable.

## Anti-patterns

- **Security as a final review.** By then, architecture is fixed; findings become exceptions.
- **Trusting retrieved content.** Indirect prompt injection via RAG corpus is the most common real-world attack.
- **Over-permissioned tools.** An agent with write access to production is an incident waiting to happen.
- **No red teaming.** If you haven't tried to break it, someone else will.
- **Ignoring model supply chain.** A compromised base model compromises everything downstream.

## Related

- [Architecture overview](/thought-base/architecture/) — design-review checklist.
- [Agentic](/thought-base/architecture/agentic/) — excessive agency deep dive.
- [RAG](/thought-base/architecture/rag/) — indirect injection via corpus.
- [AI Observability](/thought-base/architecture/ai-observability/) — security monitoring.
- [Control Framework](/thought-base/governance/control-framework/) — domain 4 (security).
- [Risk Tiering](/thought-base/governance/risk-tiering/) — security review by tier.
- [GDPR](/thought-base/governance/gdpr/) / [DPDP](/thought-base/governance/dpdp/) — data protection.
- [EU AI Act](/thought-base/governance/eu-ai-act/) — cybersecurity obligation (Art. 15).
- [RBI/SEBI/IRDAI](/thought-base/governance/india-regulators/) — SEBI threat-modeling mandate.
