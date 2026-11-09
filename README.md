# PolicyDesk AI — 24/7 AI service desk for life insurance

AI PM portfolio **Project 05** by Vikram Seenivasan. Concept for New York Life, built as a Cognizant proof of concept.

- **Case study:** https://vikram-pm.github.io/PolicyDesk-AI/
- **Live prototype:** https://vikram-pm.github.io/PolicyDesk-AI/prototype/
- **PRD:** [PRD.md](PRD.md)
- **Demo video:** [media/PolicyDesk-AI-demo.mp4](media/PolicyDesk-AI-demo.mp4)

## What it does
One assistant across web chat, browser voice calls, service email and agent review booking, plus a staff portal (Needs you queue, inbox, conversations, reviews, contacts, knowledge base, setup). Sensitive topics such as death claims always go to a person with a drafted reply.

## Repo
```
index.html            case study page
prototype/index.html  working prototype (single file, no build step)
PRD.md                product requirements
eval/                 test sets, results and run_eval.js
```

## Run the evaluation
```bash
cd eval
node run_eval.js testset.json   # 25 questions written before the build
node run_eval.js holdout.json   # 10 unseen questions
```

## Notes
- On GitHub Pages the prototype uses its built-in rules engine. The Claude-hosted version answers with live AI grounded in the same knowledge base.
- Voice calls need Chrome or Edge and microphone access.
- Not affiliated with or endorsed by New York Life. All data is illustrative.
