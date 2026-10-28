---
title: "Evaluating Agents for Autonomous DFT Workflows"
subtitle: "An Artifact-Grounded Testbed for Scientific Competence Diagnosis"
excerpt: >-
  I independently developed an artifact-grounded benchmark and evaluation
  environment to investigate whether AI agents can interpret scientific
  computation outputs, examine supporting evidence, and make reliable
  judgments in DFT workflows.
collection: research
permalink: /research/dft-agent-benchmark/
display_order: 1
role: "Independent Research"
period: "2026–Present"
status: "Ongoing Research"
research_areas: "AI for Science; Scientific Agents; Agent Evaluation; Computational Materials Science"
keywords: "DFT, VASP, Scientific Reasoning, Artifact-Grounded Evaluation, Autonomous Scientific Workflows, Benchmark Validity"
card_summary: "An artifact-grounded testbed for investigating the scientific competence of AI agents in DFT workflows. The research focuses on computational evidence inspection, case-specific scientific judgments, reproducible evaluation, and measurement validity."
card_facts: "17 benchmark cases · 11 scientific challenges"
researcher: "Xu Gao — sole researcher"
---

{% include record-head.html %}

## Overview

As large language model agents become increasingly capable of interacting with scientific tools, an important question remains: how can we determine whether they actually possess the scientific competence required for autonomous research?

Successfully invoking a computational tool or generating a plausible scientific explanation does not necessarily demonstrate an ability to inspect scientific evidence, recognize computational limitations, or reach defensible conclusions.

To investigate this problem, I independently designed and developed an **artifact-grounded benchmark and evaluation environment for AI agents operating in density functional theory (DFT) workflows**.

The research focuses on assessing scientific judgment through computational artifacts rather than relying exclusively on tool-execution success or the plausibility of generated responses.

## Research Questions

The project investigates three connected problems:

<div class="dimension-grid">
  <section class="dimension">
    <p class="dimension__index">01</p>
    <h3 class="dimension__title">Scientific Competence</h3>
    <p class="dimension__text">Can AI agents correctly interpret raw computational outputs, recognize relevant evidence, and distinguish scientifically supported conclusions from plausible but incorrect interpretations?</p>
  </section>
  <section class="dimension">
    <p class="dimension__index">02</p>
    <h3 class="dimension__title">Evaluation Validity</h3>
    <p class="dimension__text">How can scientific benchmark tasks and scoring mechanisms be designed to measure the competencies they claim to evaluate? In particular, does producing a correct scientific answer imply that the agent used scientifically valid evidence and reasoning?</p>
  </section>
  <section class="dimension">
    <p class="dimension__index">03</p>
    <h3 class="dimension__title">Reliable Scientific Workflows</h3>
    <p class="dimension__text">How can scientific-agent evaluation be made reproducible and auditable while accounting for tool constraints, intermediate artifacts, execution failures, and uncertainty?</p>
  </section>
</div>

## Methodology

The evaluation framework connects scientific task construction, controlled artifact inspection, structured scientific responses, and reproducible scoring.

<ol class="flow">
  <li class="flow__step"><span class="flow__step__index">01</span><span class="flow__step__label">Scientific Challenges</span></li>
  <li class="flow__step"><span class="flow__step__index">02</span><span class="flow__step__label">Artifact Sandbox</span></li>
  <li class="flow__step"><span class="flow__step__index">03</span><span class="flow__step__label">Agent&ndash;Tool Interaction</span></li>
  <li class="flow__step"><span class="flow__step__index">04</span><span class="flow__step__label">Structured Scientific Response</span></li>
  <li class="flow__step"><span class="flow__step__index">05</span><span class="flow__step__label">Evaluation &amp; Validity Analysis</span></li>
</ol>

**Artifact-Grounded Benchmark Construction**

Starting from an exploratory development pool of 92 cases, I developed a curated frozen benchmark core consisting of 17 cases across 11 scientific challenges.

The tasks are grounded in computational artifacts associated with VASP-based DFT workflows.

They examine scientific competencies such as interpreting computational outputs, selecting relevant evidence, assessing calculation states, attributing physical quantities to the correct calculation stages, and reasoning about scientific workflow dependencies.

**Sandboxed Scientific Tool Interaction**

The framework provides a controlled environment in which agents inspect calculation artifacts through constrained tool interfaces.

Agents must use the accessible scientific evidence to construct structured responses, rather than relying solely on parametric scientific knowledge or accepting high-level tool summaries without inspection.

**Reproducible Evaluation Infrastructure**

I developed supporting infrastructure for benchmark packaging, tool interaction, response validation, scoring, execution records, and experimental reproducibility.

The evaluation design uses versioned task definitions, case-specific scoring contracts, numerical tolerances, frozen benchmark releases, and hash-verifiable experimental artifacts.

The formal protocol also distinguishes failures arising from scientific responses from failures caused by external execution infrastructure.

## Evaluation and Measurement Validity

A central part of this research concerns the distinction between **answer correctness** and **scientifically justified judgment**.

The current frozen evaluation uses an outcome-based scoring construct, which determines whether an agent's response satisfies the critical requirements of a case-specific scoring contract.

However, a correct reported value or conclusion can coexist with an incorrect scientific premise, inconsistent interpretation, or unsupported explanatory claim.

To examine this limitation, I conducted scoring-contract audits, construct-coverage analyses, mutation-based checks, and counterfactual validity investigations.

These analyses identified structured response fields that were not assessed by the existing scoring mechanism, distinguishing intentionally diagnostic fields from potential construct-coverage gaps requiring further scientific adjudication.

The work also motivated a proposed complementary construct, **Evidence-Justified Success**, intended to evaluate whether a correct scientific outcome is supported by appropriate evidence, internally consistent scientific premises, and the absence of consequential unsupported claims.

Evidence-Justified Success remains a research-stage specification. It has not been implemented as an approved replacement for the frozen scoring mechanism.

## Implementation and Validation

The current research infrastructure includes:

- A frozen benchmark core covering **11 scientific challenges and 17 cases**.
- A controlled scientific-artifact inspection and evaluation environment.
- Structured response contracts and case-specific scoring rules.
- Version-controlled benchmark, runtime, and experimental-protocol records.
- Scoring regression tests and scientific validity audits.
- Preregistered designs for further evaluation and counterfactual validity analysis.

Internal validation has confirmed that all **17 gold-derived reference responses** pass the frozen scoring criteria and that all **54 authored negative controls** are rejected as intended.

These results validate specific properties of the benchmark and scoring implementation. They are **not measurements of agent scientific performance** and do not constitute independent expert validation of the scientific reference answers.

## Current Status

As of October 2026, the benchmark core and formal evaluation protocol are frozen, and internal scoring and contract-consistency validation has been completed.

The formal multi-model evaluation has not yet produced reportable scientific performance results because execution has been affected by external infrastructure reliability issues.

Independent expert review of scientific reference materials also remains pending.

Accordingly, the project's present contributions concern **benchmark methodology, scientific evaluation infrastructure, and measurement validity**, rather than empirical claims about the comparative scientific competence of particular AI models.

## My Contributions

This is an independent research project. I am responsible for the research formulation, benchmark design, system development, experimental methodology, and validation analysis.

My work includes:

- Formulating the scientific competence evaluation problem and designing artifact-grounded DFT research tasks.
- Developing the sandboxed research-agent environment and supporting evaluation infrastructure.
- Constructing the benchmark cases, structured response contracts, and reproducible experimental protocols.
- Designing and implementing scoring validation, negative controls, and scientific construct-coverage analyses.
- Investigating limitations of outcome-based evaluation and developing the proposed evidence-justified evaluation framework.

## Research Outlook

The long-term objective is to develop more reliable methods for assessing AI agents operating in complex scientific workflows.

Future work will focus on completing independently validated scientific reference materials, conducting formal controlled agent evaluations, and investigating the relationship between outcome correctness and evidence-grounded scientific reasoning.

More broadly, this research aims to contribute to the development of scientific agents capable of making reliable, traceable, and evidence-supported decisions across computational science and autonomous scientific discovery.

## Scope and Limitations

<div class="scope">
  <p class="scope__title">Scope and Limitations</p>
  <ul class="scope__list">
    <li class="scope__item">The frozen evaluation uses an <strong>outcome-based scoring construct</strong>. A correct reported value or conclusion can coexist with an incorrect scientific premise, an inconsistent interpretation, or an unsupported explanatory claim.</li>
    <li class="scope__item"><strong>Evidence-Justified Success</strong> remains a research-stage specification. It has not been implemented as an approved replacement for the frozen scoring mechanism.</li>
    <li class="scope__item">Internal validation covers the benchmark and scoring implementation. It is <strong>not a measurement of agent scientific performance</strong> and does not constitute independent expert validation of the scientific reference answers.</li>
    <li class="scope__item">The formal multi-model evaluation has <strong>not yet produced reportable scientific performance results</strong>, because execution has been affected by external infrastructure reliability issues.</li>
    <li class="scope__item"><strong>Independent expert review</strong> of the scientific reference materials remains pending.</li>
  </ul>
</div>
