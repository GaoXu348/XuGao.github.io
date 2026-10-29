---
title: "Perovskite Agent Lab"
subtitle: "Multi-Agent Orchestration and Scientific Tool Integration for Perovskite Materials Research"
excerpt: >-
  A collaborative AI4Science platform for perovskite materials research,
  integrating scientific computing tools, simulation software, and
  agent-assisted research workflows.
collection: research
permalink: /research/perovskite-agent-lab/
display_order: 2
role: "Collaborative Research"
period: "2026–Present"
status: "Ongoing Research & Development"
research_areas: "AI for Science; Scientific Agents; Multi-Agent Systems; Computational Materials Science; Perovskite Photovoltaics"
keywords: "Scientific Tool Integration, Model Context Protocol, FastMCP, Materials Informatics, VASP, Scientific Workflow Orchestration, Simulation-Driven Research"
card_keywords: "AI for Science, Multi-Agent Systems, MCP, Perovskite Photovoltaics, Scientific Computing"
card_summary: "An extensible AI4Science platform integrating scientific computing tools, simulation software and agent-assisted research processes. My contributions focus on materials-domain tool integration."
card_facts: "30 registered FastMCP tools · VASP and SCAPS demonstrations"
researcher: "Collaborative research effort — materials-domain MCP/Skills track"
---

{% include record-head.html %}

## Overview

Developing autonomous scientific agents requires connecting language-based reasoning with the actual tools and evidence used in scientific research. This is particularly challenging in materials science, where discovery involves literature analysis, materials design, computational characterization, and experimental validation, often across heterogeneous software and hardware environments.

**Perovskite Agent Lab** is a collaborative research initiative exploring a multi-agent environment for perovskite materials research. The platform organizes specialized agents, scientific tools, and computational workflows around shared research objectives, with the long-term goal of integrating simulation-driven optimization and experimental feedback.

My work focuses on the scientific tooling layer and the integration of materials-domain capabilities into agent-accessible workflows, particularly through the Model Context Protocol (MCP).

A central motivation is to move beyond agents that simply generate plausible research plans toward systems that can execute scientific operations, inspect intermediate results, and recognize when computational evidence is insufficient for a valid scientific conclusion.

## Implementation Status

<div class="status-grid">
  <section class="status-col status-col--implemented">
    <p class="status-col__head"><span class="status-col__mark" aria-hidden="true"></span><span class="status-col__label">Implemented</span></p>
    <ul class="status-col__list">
      <li class="status-col__item">A <strong>30 registered FastMCP tool</strong> foundation (<code>agent_town_materials_mcp</code>), organized across capability discovery, workflow utilities, mock calculations, perovskite composition analysis, crystal structure operations, and defect engineering.</li>
      <li class="status-col__item">A full service interface, plus specialized <strong>mechanism, characterization, and design</strong> service interfaces.</li>
      <li class="status-col__item">Three integration principles in force: <strong>capability-aware tool discovery</strong>, <strong>structured execution contracts</strong>, and <strong>controlled execution boundaries</strong> with input validation and workspace restrictions.</li>
    </ul>
  </section>

  <section class="status-col status-col--demonstrated">
    <p class="status-col__head"><span class="status-col__mark" aria-hidden="true"></span><span class="status-col__label">Demonstrated</span></p>
    <ul class="status-col__list">
      <li class="status-col__item">Agent-driven workflow demonstrations connecting agents to <strong>VASP-based DFT calculations</strong> and <strong>SCAPS device simulations</strong>.</li>
      <li class="status-col__item">A <strong>CsPbI₃</strong> demonstration: literature-informed task preparation, VASP execution, output parsing, and SCAPS simulation — the VASP computation completed successfully, while the device simulator returned partial results and a structured convergence failure.</li>
      <li class="status-col__item">A <strong>MAPbI₃</strong> demonstration extended to remote HPC execution: a completed VASP calculation was retrieved and passed to a SCAPS simulation service, which generated device-level output and a partial current–voltage dataset.</li>
    </ul>
  </section>

  <section class="status-col status-col--planned">
    <p class="status-col__head"><span class="status-col__mark" aria-hidden="true"></span><span class="status-col__label">Planned</span></p>
    <ul class="status-col__list">
      <li class="status-col__item">Integration of <strong>additional scientific software, external databases, and experimental instruments</strong>. The 30-tool foundation is distinct from that roadmap; not every planned adapter is implemented.</li>
      <li class="status-col__item"><strong>Persistent agent experience, cross-agent knowledge sharing, adaptive task allocation, and collective self-evolution</strong> require further implementation and empirical validation.</li>
      <li class="status-col__item">Deeper integration with <strong>physical laboratory equipment and autonomous wet-lab feedback</strong> is a future objective rather than a completed capability.</li>
    </ul>
  </section>
</div>

## Research Challenges

The project addresses three closely related challenges.

**Heterogeneous Scientific Tool Integration.** Materials research depends on specialized packages, databases, simulation engines, and experimental equipment. An agent platform requires structured interfaces that expose the capabilities and constraints of these tools without granting unrestricted execution access.

**Multi-Agent Scientific Workflow Coordination.** Perovskite discovery involves interdependent research stages. Literature-derived parameters must inform candidate design, computational results must be validated before downstream use, and simulation feedback must remain traceable to its originating evidence.

**Scientific Reliability and Feedback.** A successfully completed software job is not necessarily a scientifically meaningful calculation. Reliable agent workflows must distinguish execution status from physical validity, retain parameter provenance, identify incomplete results, and support appropriate intervention or recovery.

## Multi-Agent Laboratory Architecture

The proposed architecture organizes perovskite research into four functional areas.

**Literature and Knowledge.** Literature retrieval, scientific information extraction, experimental parameter collection, and the organization of reusable domain knowledge.

**Materials Design.** Candidate composition selection, crystal structure generation, structural modification, and defect or doping engineering.

**Prediction and Characterization.** Materials-property analysis, DFT calculations, device simulation, and interpretation of computational or experimental results.

**Mechanism Analysis.** Investigation of stability, structural mechanisms, defects, degradation pathways, and potential explanations for observed material behavior.

A coordinating Meta Agent and specialized regional planners are designed to connect these functions through structured task decomposition and inter-agent handoffs.

The long-term platform concept also includes a visual laboratory environment in which scientific tasks, agent states, tool interactions, and intermediate results can be inspected.

## Scientific Tool Integration

A major development component is the construction of agent-accessible scientific tool services.

The implemented `agent_town_materials_mcp` foundation provides **30 registered FastMCP tools**, organized across capability discovery, workflow utilities, mock calculations, perovskite composition analysis, crystal structure operations, and defect engineering.

The tools are exposed through a full service and specialized mechanism, characterization, and design service interfaces.

The integration approach emphasizes three design principles.

**Capability-Aware Tool Discovery.** Agents can inspect tool metadata and available capabilities rather than assuming that every possible scientific operation is installed or executable.

**Structured Execution Contracts.** Tools use defined input parameters and machine-readable responses, allowing workflow controllers to inspect successful outputs, failures, and missing dependencies.

**Controlled Execution Boundaries.** Scientific tool calls are subject to input validation, workspace restrictions, and explicit distinctions between mock computation, local execution, and external scientific backends.

The current material-tool foundation is distinct from the broader roadmap for integrating additional scientific software, external databases, and experimental instruments. Not every planned adapter or research capability is implemented in the 30-tool service.

## Agent-Driven Computational Workflows

Beyond tool-interface development, the broader platform has been exercised through computational workflow demonstrations connecting AI agents to VASP-based DFT calculations and SCAPS solar-cell device simulations.

A representative workflow follows the sequence:

<ol class="flow">
  <li class="flow__step"><span class="flow__step__index">01</span><span class="flow__step__label">Research objective</span></li>
  <li class="flow__step"><span class="flow__step__index">02</span><span class="flow__step__label">Scientific information retrieval</span></li>
  <li class="flow__step"><span class="flow__step__index">03</span><span class="flow__step__label">Structure and parameter preparation</span></li>
  <li class="flow__step"><span class="flow__step__index">04</span><span class="flow__step__label">DFT execution</span></li>
  <li class="flow__step"><span class="flow__step__index">05</span><span class="flow__step__label">Result inspection</span></li>
  <li class="flow__step"><span class="flow__step__index">06</span><span class="flow__step__label">Device simulation</span></li>
  <li class="flow__step"><span class="flow__step__index">07</span><span class="flow__step__label">Feedback and reporting</span></li>
</ol>

An initial CsPbI₃ demonstration connected literature-informed task preparation, VASP execution, output parsing, and SCAPS simulation. The VASP computation completed successfully, while the device simulator returned partial results and a structured convergence failure.

A subsequent MAPbI₃ demonstration extended the workflow to remote HPC execution. The platform submitted and retrieved a completed VASP calculation and passed information to a SCAPS simulation service, which generated device-level output and a partial current–voltage dataset.

These demonstrations establish that selected scientific computation and simulation operations can be connected through agent-driven workflows. They do not establish that every requested high-fidelity calculation was completed or that the resulting photovoltaic metrics were scientifically validated.

## Scientific Validity and Data Provenance

A particularly important lesson from the computational demonstrations is that **successful execution does not guarantee scientific validity**.

For example, a reported band-edge difference from a simplified DFT calculation cannot automatically be interpreted as a validated material band gap when critical computational conditions, such as spin–orbit coupling, structural relaxation, or reciprocal-space sampling, are insufficient.

Likewise, a device simulation that terminates with partial numerical output should not be presented as a completed and validated performance assessment.

The project therefore emphasizes explicit separation between computed quantities, literature-derived parameters, modeling assumptions, and unavailable results.

This motivates a scientific quality-control layer in which agents should inspect calculation settings, assess result completeness, preserve parameter provenance, and determine whether outputs are suitable for downstream scientific decisions.

Rather than treating all tool outputs as equally trustworthy, the intended workflow makes scientific consistency and evidence quality part of the transition between computational stages.

## My Contributions

My documented project responsibilities center on the materials-domain MCP/Skills tooling track and its connection to scientific research workflows.

The work includes defining tool requirements and integration priorities, developing interfaces for materials-related capabilities, and supporting structured access to scientific software and computational resources.

These contributions involve the broader challenge of converting specialized research operations into discoverable, composable, and auditable tools that AI agents can use within larger scientific workflows.

The laboratory environment, agent orchestration, and other platform components are part of a collaborative research effort.

## Current Status and Research Outlook

The project has established an implemented materials-domain MCP tool foundation and documented computational workflow demonstrations involving real DFT execution and partial device-simulation feedback.

At the same time, significant research challenges remain.

The proposed mechanisms for persistent agent experience, cross-agent knowledge sharing, adaptive task allocation, and collective self-evolution require further implementation and empirical validation.

Deeper integration with physical laboratory equipment and autonomous wet-lab feedback is also a future objective rather than a completed capability.

Ongoing work aims to strengthen scientific execution quality, extend reliable tool integration, improve the interpretation of intermediate computational evidence, and progressively connect digital research workflows with experimental validation.

Ultimately, Perovskite Agent Lab explores how scientific agents can become more than conversational assistants by participating in traceable, tool-grounded, and increasingly autonomous materials research.
