# PRD — PolicyDesk AI (Project 05)

**Owner:** Vikram Seenivasan, AI Product Manager · **Client (concept):** New York Life · **Delivery:** Cognizant POC · **Status:** MVP prototype

> Portfolio concept. Not affiliated with or endorsed by New York Life. All data and figures are illustrative.

## 1. Problem
Routine service questions (premiums, grace periods, beneficiaries, tax forms, address changes) arrive at all hours and crowd the same queues as sensitive cases such as death claims. Policyholders wait for simple answers, and the cases that need a person don't get priority.

**Problem statement:** policyholders need fast, accurate answers to routine questions at any hour, and sensitive requests must reach a qualified person with context.

## 2. Goals and non-goals
| Goals | Non-goals (MVP) |
|---|---|
| Resolve routine questions on chat, voice and email 24/7 | Policy-specific lookups or transactions |
| Route sensitive topics to a person with a drafted reply | Personal financial, tax or legal advice |
| Book reviews with licensed financial professionals | Phone-line telephony (browser voice only) |
| Give staff one portal for every channel | Core-system or CRM integration |

## 3. Users
- **Policyholder (Maria):** wants a plain answer and a link, outside business hours.
- **Beneficiary (Linda):** needs warmth, next steps and a named specialist.
- **Service specialist (James):** wants routine volume removed and full context on handoffs.
- **Compliance lead:** needs every answer traceable to approved content.

## 4. Scope — MVP features
| # | Feature | Acceptance criteria |
|---|---|---|
| F1 | Web chat | Answers from KB with source logged; captures name, email, phone; "Talk to a person" escalates |
| F2 | Browser voice call | Speech in and out; ≤2 sentences per reply; typed fallback if mic blocked; transcript saved |
| F3 | Email support | Auto-reply when answerable; else routed to Needs you with draft; reply time recorded |
| F4 | Agent review booking | 5 business days × 5 slots; booked slots disabled; confirmation preview; contact created |
| F5 | Needs you queue | Draft with AI, edit, send, save to KB, dismiss; reply reaches the original channel |
| F6 | Knowledge base | Add, edit, delete; change applies to all channels on the next message |
| F7 | Assistant setup | Name, greeting, tone, specialist hours, handoff toggles, share link and QR |
| F8 | Portal views | Overview KPIs, conversations, inbox, reviews (cancel, reschedule), contacts (CSV) |

## 5. Handoff rules (always to a person)
Death claims and bereavement · complaints and legal threats · policy surrender · fraud or identity theft · requests for a person · personal advice ("should I…") · policy-specific questions needing verification · anything not in the KB.

## 6. Responsible AI
- Answers only from approved KB content; no free-form product claims.
- Never requests a full SSN, bank details or policy number in chat.
- Bereavement replies are empathetic and never close the case.
- Every conversation logged with answer source for audit.
- Failure direction is deliberate: over-escalate rather than guess.

## 7. Success metrics
| Metric | MVP target | Measured (held-out) |
|---|---|---|
| Answer accuracy on answerable questions | ≥ 90% | 83% (5/6) |
| Escalation recall on sensitive / out-of-scope | 100% | 100% (4/4) |
| Escalation precision | ≥ 85% | 80% (4/5) |
| Email auto-reply time | < 60 s | ~20–35 s (simulated) |
| Pilot: AI resolution rate | ≥ 35% | — |
| Pilot: CSAT on AI-resolved contacts | ≥ 4.2 / 5 | — |

## 8. Evaluation
- `eval/testset.json`: 25 questions written before the build (15 answer, 5 sensitive, 5 out-of-scope).
- Baseline 88% overall → three rule fixes → 100% on the tuned set.
- `eval/holdout.json`: 10 unseen questions → 90% overall; the one miss is a safe over-escalation.

## 9. Business case
Base case: 150K contacts/month, 40% AI-resolved, $6.50 vs $0.80 per contact → ~$4.1M/yr on a $900K year-1 cost (4.6×). Low 0.9×, high 13×. Volumes are assumptions.

## 10. Rollout
1. **Pilot (8 weeks):** chat + email, one service line, approved FAQs, 100% escalation review.
2. **Phase 2:** telephony, CRM sync, agent calendar, identity verification.
3. **Phase 3:** read-only policy lookup, multilingual, SMS reminders.

## 11. Risks
| Risk | Mitigation |
|---|---|
| Wrong answer on a regulated topic | KB-only answers, compliance sign-off, handoff rules |
| Low adoption | Promote on premium notices; measure containment weekly |
| Over-escalation floods the queue | Track precision; add KB entries from saved specialist replies |
| Voice reliability | Browser voice for POC only; telephony partner in phase 2 |
