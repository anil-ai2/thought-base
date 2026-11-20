---
title: Copilot Pattern — Embedded AI Assistants
description: "Reference architecture for embedded AI assistants (copilots): UX, latency, context management, safety and evaluation."
tags: [architecture, copilot, reference-architecture]
---

## TL;DR

A copilot embeds an AI assistant into an existing application. The hard parts are **UX (trust calibration, when to show vs. hide), latency (streaming, caching), context management (what to include, what to exclude) and safety (preventing over-trust and harmful actions)**. Copilots are usually limited tier, escalating to high when they influence consequential decisions.

## When to use a copilot

- Assisting a user inside an existing workflow (drafting, summarizing, searching, suggesting).
- The user remains the decision-maker; the AI accelerates, not decides.
- Latency budget allows streaming (sub-second first token).

## When NOT to use a copilot

- The task is fully automatable with no human value-add (use agentic or batch).
- The user cannot verify the output (high risk of over-trust).
- Latency budget is too tight for streaming.

## Architecture

```
[App] → [Context builder (user, entity, history)] → [Prompt assembler] → [LLM (streaming)] → [Output filter] → [UI (streamed)]
                                                          ↑
                                                  [Safety / policy layer]
```

## Component decisions

| Component | Default | Notes |
|---|---|---|
| Context builder | Pull relevant entity + recent history; cap tokens | Relevance > volume; exclude PII not needed |
| Prompt assembler | System prompt (role, constraints, format) + context + user input | Version-pin prompts; A/B test |
| Model | Mid-tier model with streaming; route complex to stronger | Cost/latency trade-off |
| Output filter | PII redaction, toxicity, format validation | Required for high tier |
| Streaming | SSE / WebSocket to UI | First-token < 1s target |
| Caching | Semantic cache for repeated queries | Big cost/latency win |
| Feedback | Thumbs up/down + "was this helpful" | Feeds eval and improvement |

## UX principles

- **Calibrate trust.** Show confidence where meaningful; never imply certainty the model doesn't have.
- **Make verification easy.** Citations, "view source", edit-before-send.
- **Fail gracefully.** When unsure, say so and offer a human path.
- **Don't over-automate.** Suggest, don't submit. The user clicks send.
- **Disclose.** Users must know they are interacting with AI (EU AI Act transparency, good practice everywhere).

## Safety

- Output filtering for PII, toxicity, and policy violations.
- Action gating: any side-effect (send, delete, approve) requires explicit user confirmation.
- Rate limiting per user to prevent abuse and cost runaway.
- Logging of prompts and outputs for audit (with retention policy and PII handling).

## Observability contract

- Latency: first-token, total response time (p50/p95).
- Quality: user feedback rate, edit rate (how often users modify the suggestion), acceptance rate.
- Safety: filter trigger rate, policy violations.
- Cost: tokens per interaction, cost per active user.
- Reliability: error rate, timeout rate.

## Evaluation

- Offline: golden prompt set with expected outputs; LLM-as-judge for quality; regression on every prompt/model change.
- Online: A/B testing of prompts/models; user feedback; task completion rate.
- Red-team: prompt injection, jailbreak, data exfiltration attempts.

## Anti-patterns

- **Hiding the AI.** Users must know they are interacting with AI.
- **No streaming.** Perceived latency kills adoption.
- **Context stuffing.** More context ≠ better answers; noise degrades quality and cost.
- **Auto-executing actions.** Copilots suggest; users decide.
- **No feedback loop.** Without feedback, you cannot improve or detect regressions.
- **One model for everything.** Route by complexity.

## Compliance

- Usually **limited tier** (transparency obligations). Escalate to high tier if the copilot influences consequential decisions (credit, hiring, medical).
- Transparency notice to users is mandatory for limited-risk systems under EU AI Act.
- Data minimization applies to context building: include only what is needed.

## Related

- [Reference Architectures](/thought-base/architecture/reference-architectures/) — index.
- [Agentic](/thought-base/architecture/agentic/) — when autonomy is needed.
- [RAG](/thought-base/architecture/rag/) — when grounding in a corpus.
- [AI Security](/thought-base/architecture/ai-security/) — injection and output handling.
- [AI Observability](/thought-base/architecture/ai-observability/) — UX and cost metrics.
- [Control Framework](/thought-base/governance/control-framework/) — compliance per tier.
- [Risk Tiering](/thought-base/governance/risk-tiering/) — copilots are usually limited tier.
