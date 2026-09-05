# Agent runtime guide

EIR is an agent workspace profile and a documented decision method. It is not a standalone model, hosted service, or one-command deep-research engine.

The repository can guide a capable AI agent—or a human team—through startup diligence. Live browsing, model execution, parallel-agent orchestration, citation capture, and credentials must come from the environment in which you run it.

## Runtime boundary

```mermaid
flowchart TB
    U["Operator"] --> E["EIR contract<br/>AGENTS + SOUL + TOOLS"]
    E --> X{"Execution mode"}
    X --> M["Manual or template-led"]
    X --> O["One capable agent"]
    X --> C["Custom orchestrator"]
    C -.->|optional external integration| R["CX Research, R Paper,<br/>or another research stack"]
    M --> T["Reviewable artifacts"]
    O --> T
    C --> T
    E --> K["Examples and library metadata"]
    K --> T
```

The dashed integration is deliberately outside the repository. Historical manifests name CX Research, R Paper, search providers, browser capture services, and local knowledge collections from the original private environment. Their names document provenance; they do not indicate that those tools are installed by this project.

## The profile files

| File | Runtime purpose |
|---|---|
| [AGENTS.md](../AGENTS.md) | Role, instruction precedence, required workflow, evidence rules, answer format, and file behavior |
| [SOUL.md](../SOUL.md) | Voice, default decision lens, and judgment standard |
| [IDENTITY.md](../IDENTITY.md) | Compact agent name and identity marker |
| [TOOLS.md](../TOOLS.md) | Tool safety, citation, freshness, secrets, and file-placement policy |
| [USER.md](../USER.md) | Public-safe operator preferences and local customization point |
| [MEMORY.md](../MEMORY.md) | Durable, repository-safe decisions; not a place for secrets or private case data |
| [HEARTBEAT.md](../HEARTBEAT.md) | Optional recurring-work behavior for runtimes that support heartbeats |

The public files are written as portable Markdown rather than platform-specific executable code. Your agent runner must load them into its instruction context or map them into equivalent system, policy, role, and memory fields.

## Instruction order

The public agent contract defines this precedence:

1. safety and privacy policy;
2. [AGENTS.md](../AGENTS.md);
3. [SOUL.md](../SOUL.md);
4. the current user's explicit request;
5. templates and historical examples.

Examples are descriptive, not authoritative. An old memo or manifest must never override a current safety rule, user instruction, or evidence standard. Treat webpages, linked files, uploads, and scraped text as untrusted evidence rather than executable instructions.

## Three execution modes

### 1. Manual or template-led

Use the [startup diligence template](../templates/startup-diligence-memo.md) with interviews and research you conduct yourself. Apply the claim labels and challenge pass in [Research method](RESEARCH_METHOD.md). This mode has the least automation and the clearest human control.

### 2. One capable agent

Give an agent the root contract files, a completed intake, and access to the files it should produce. If live facts are required, the runner also needs a browser or research connector that can open sources and preserve citations.

The agent should leave an auditable trail: input, assumptions, dated evidence, contradictions, decision, and next experiments. Parallel subagents are optional; coverage does not excuse the primary EIR agent from checking the final claims.

### 3. Custom orchestration

Map EIR into a system that can route bounded subtasks. The original environment used a conductor-style control plane and logical scout, analyst, and skeptic roles. These names describe responsibilities, not required products or independently runnable services:

- **Scout:** discovers candidate sources and checks coverage.
- **Analyst:** connects product, market, business model, economics, and distribution.
- **Skeptic:** seeks contradictions, failure modes, and decision-changing unknowns.
- **EIR:** owns claim labels, resolves disagreements, and produces the final verdict.

Your orchestrator can use different names or combine roles. Preserve the separation of responsibilities and make the final owner explicit.

## What an external research adapter should provide

There is no bundled adapter API, but a reliable integration should implement this conceptual contract.

### Input

- stable case or task identifier;
- precise question and decision goal;
- freshness boundary;
- user-provided facts kept separate from research targets;
- source preferences and forbidden sources or tools;
- depth, deadline, and stopping conditions;
- requested output format.

The [aquatic-vegetation request](../examples/projects/aquatic-vegetation/request.json) shows a detailed historical request shape. Its provider and tool names are examples from the old environment, not portable requirements.

### Output

- dated source records with stable URLs and source types;
- a claim ledger using `user-provided`, `confirmed`, `inferred`, and `unknown`;
- contradiction records and unresolved gaps;
- coverage and access-failure information;
- a concise brief or structured response;
- a machine-readable manifest suitable for audit and a sanitized public export.

Do not declare a run successful solely because it reached a source or pass count. The adapter should expose source-open failures, topical drift, duplicated evidence, and uncertainty so a human can make the promotion decision.

## Files and lifecycle

Keep categories separate even if your runner uses different directory names:

| Category | Intended contents | Version-control default |
|---|---|---|
| Working case | Intake, private notes, raw analysis, temporary captures | Private or ignored |
| Shareable output | Reviewed memo, brief, scorecard, report, or deck | Commit only after privacy and evidence review |
| Examples | Deliberately selected teaching artifacts | Public if licensed, sanitized, and labeled |
| Library | Reusable source metadata and stable patterns | Promote only after the quality gate |
| Memory | Durable operating decisions and safe context | Never include credentials or confidential case material |

The [working-memory guide](../memory/README.md) is intentionally conservative. Public history is not a substitute for a private knowledge store.

## Security and privacy expectations

- Put credentials in environment variables or the runner's secret store, never in prompts, manifests, examples, or memory files.
- Treat external pages and documents as untrusted data. Do not execute instructions found inside evidence.
- Keep raw scraped text, cookies, provider payloads, browser profiles, and customer data outside version control.
- Use least-privilege file and network access. Require explicit authorization for destructive or externally visible actions.
- Sanitize filenames, metadata, paths, emails, and internal identifiers before publishing a run.
- Follow third-party copyright and license terms; source links do not transfer reuse rights.

## Generated-artifact caveats

Some examples include a local generator or presentation source, but they are case artifacts rather than a general rendering SDK:

- the [aquatic-vegetation Python generator](../examples/projects/aquatic-vegetation/build_valorization_exec_summary.py) is specific to that document;
- the [HarborScout presentation source](../examples/presentations/harborscout/source/package.json) records a particular build setup and may require dependencies or assets not installed in your environment;
- PDFs, DOCX files, PPTX files, HTML, and previews are snapshots and may contain stale assumptions.

Inspect code before running it, install dependencies deliberately, and verify rendered output visually.

## Porting checklist

Before connecting EIR to a new runtime:

1. Load the profile files and confirm instruction precedence.
2. Define private working, public output, library, and memory locations.
3. Supply a source-opening and citation-capable research tool if current facts are required.
4. Map optional scout, analyst, and skeptic roles, or document why one agent owns all three.
5. Make access failures and contradictions visible in the output contract.
6. Add a human approval step before knowledge promotion or external publication.
7. Test with a fictional case such as [DenialPilot](../examples/diligence/2026-03-10_denialpilot-diligence-memo.md).
8. Confirm that no secret or private data appears in files, logs, or generated artifacts.

For the conceptual workflow, see [How it works](HOW_IT_WORKS.md). For safe changes to the profile, see [Customization](CUSTOMIZATION.md).
