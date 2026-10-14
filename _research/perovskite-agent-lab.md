---
title: "Perovskite Agent Lab"
subtitle: "Multi-Agent Orchestration and Scientific Tool Integration for Perovskite Materials Research"
excerpt: |-
  Perovskite Agent Lab explores how specialized AI agents can coordinate literature analysis, materials design, property prediction, and scientific simulations within a unified research workflow.

  My work focuses on the materials-domain tool integration layer, including MCP-based scientific tool interfaces and computational workflow integration. The platform includes a 30-tool FastMCP foundation, while workflow demonstrations have connected agent-driven tasks to VASP calculations and SCAPS device simulations.

  The research emphasizes reliable tool execution, scientific data provenance, and the distinction between successful computation and scientifically justified results.
collection: research
permalink: /research/perovskite-agent-lab/
display_order: 2
role: "Collaborative Research"
period: "2026–Present"
status: "Ongoing Research & Development"
research_areas: "AI for Science; Scientific Agents; Multi-Agent Systems; Computational Materials Science; Perovskite Photovoltaics"
keywords: "Scientific Tool Integration, Model Context Protocol, FastMCP, Materials Informatics, VASP, Scientific Workflow Orchestration, Simulation-Driven Research"
card_keywords: "AI for Science, Multi-Agent Systems, MCP, Perovskite Photovoltaics, Scientific Computing"
---

*Multi-Agent Orchestration and Scientific Tool Integration for Perovskite Materials Research*

**Collaborative Research · 2026–Present · Ongoing**

**Research Areas:** AI for Science, Scientific Agents, Computational Materials Science, Perovskite Photovoltaics

## Overview

Developing autonomous scientific agents requires connecting language-based reasoning with the actual tools and evidence used in scientific research. This is particularly challenging in materials science, where discovery involves literature analysis, materials design, computational characterization, and experimental validation, often across heterogeneous software and hardware environments.

**Perovskite Agent Lab** is a collaborative research initiative exploring a multi-agent environment for perovskite materials research. The platform organizes specialized agents, scientific tools, and computational workflows around shared research objectives, with the long-term goal of integrating simulation-driven optimization and experimental feedback.

My work focuses on the scientific tooling layer and the integration of materials-domain capabilities into agent-accessible workflows, particularly through the Model Context Protocol (MCP).

A central motivation is to move beyond agents that simply generate plausible research plans toward systems that can execute scientific operations, inspect intermediate results, and recognize when computational evidence is insufficient for a valid scientific conclusion.

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

**Research objective → scientific information retrieval → structure and parameter preparation → DFT execution → result inspection → device simulation → feedback and reporting.**

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
