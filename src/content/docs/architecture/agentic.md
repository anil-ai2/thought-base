---
title: Agentic AI — Multi-Agent Systems & Guardrails
description: "Reference architecture for agentic AI: tool use, planning, guardrails, cost control, auditability and human oversight."
tags: [architecture, agentic, reference-architecture]
---

## TL;DR

Agentic AI gives a model **tools and autonomy** to complete multi-step tasks. The risks are disproportionate to the capability: excessive agency, runaway cost, non-determinism and poor auditability. The pattern here is **bounded autonomy** — explicit tool allow-lists, step budgets, human-in-the-loop gates and full trace logging. Agentic is almost always high tier.

## When to use agentic

- Tasks requiring multiple steps, tool calls and decisions (research, triage, workflow automation).
- When a single prompt cannot complete the task within context limits.
- When the cost of human execution is high and the task is well-bounded.

## When NOT to use agentic

- A single, well-defined transformation (use a direct LLM call or RAG).
- Tasks with no clear termination condition (cost explodes).
- High-stakes irreversible decisions without a human gate (use copilot + human approval instead).

## Architecture

```
[User goal] → [Planner] → [Tool router] → [Tools (APIs, search, code, DB)] → [Verifier] → [Answer / action]
                  ↑__________________________↓ (loop until done or budget exhausted)
```

Key components: planner, tool registry (allow-listed), executor with sandboxing, verifier (checks output quality), budget controller (steps, tokens, cost, time), tracer (full audit log), human-approval gate.

## Guardrails (non-negotiable)

1. **Tool allow-list.** Only pre-approved tools; each tool has a declared scope and side-effect class (read vs. write).
2. **Step budget.** Max N steps per task; hard stop with partial result + escalation.
3. **Cost budget.** Max $ per task; hard stop.
4. **Time budget.** Max wall-clock; hard stop.
5. **Human-in-the-loop gate** for any write/irreversible action (send email, modify record, execute transaction).
6. **Sandboxing.** Code execution in isolated containers; no network by default; explicit allow-list.
7. **Verifier.** A second model or rule checks the output before it reaches the user.
8. **Full trace.** Every step, tool call, input, output and decision logged and replayable.

## Cost realities

- Agentic loops multiply cost: one user request → N model calls + M tool calls. A single task can cost 10–100x a single LLM call.
- Budget per **task**, not per request. Surface cost to the user where appropriate.
- Use cheaper models for planning/routing; reserve expensive models for final generation.
- Cache tool results; avoid redundant calls.

## Observability contract

- Steps per task (distribution), tool-call counts, success/failure rate.
- Cost per task (distribution, p50/p95), budget-exhaustion rate.
- Latency per task, time-to-first-action.
- Human-approval rate and override reasons.
- Hallucination / tool-error incidents.

## Security

- Prompt injection via tool outputs is the #1 risk. Treat all tool output as untrusted; never let it override the system prompt.
- Tool arguments must be validated and scoped (e.g., SQL queries constrained to read-only, parameterized).
- No secrets in tool definitions; use short-lived, scoped credentials.
- Audit every tool invocation with inputs and outputs.

## Compliance

- Agentic is **almost always high tier** (autonomous decisions with real-world effects). Run the full control set: model card, eval suite, HITL, monitoring, conformity/FRIA where applicable.
- The trace log is your audit evidence — design it as such from day one.

## Anti-patterns

- **Unbounded loops** with no step/cost/time budget.
- **Auto-executing write actions** without human approval.
- **No verifier** — trusting the agent's own output.
- **Tool sprawl** — giving the agent 50 tools "just in case."
- **No trace** — impossible to debug or audit.
- **Using the most expensive model for every step** — route cheap where possible.

## Related

- [Reference Architectures](/thought-base/architecture/reference-architectures/) — index.
- [Copilot](/thought-base/architecture/copilot/) — lighter-weight alternative.
- [AI Security](/thought-base/architecture/ai-security/) — injection and excessive agency.
- [AI Observability](/thought-base/architecture/ai-observability/) — cost and quality metrics.
- [Control Framework](/thought-base/governance/control-framework/) — high-tier control set.
- [Risk Tiering](/thought-base/governance/risk-tiering/) — agentic is typically high tier.
- [AI FinOps](/thought-base/finops/) — cost model.
