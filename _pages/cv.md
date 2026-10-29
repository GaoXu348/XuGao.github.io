---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
excerpt: "Curriculum vitae of Xu Gao: education, research experience, technical skills, publications and honors."
redirect_from:
  - /resume
---

{% include base_path %}

Education
------

* **Undergraduate**, Xingjian College, Tsinghua University — Sep.2021–Jun.2026
  * Double Major: **Theoretical and Applied Mechanics** & **Energy and Power Engineering**
  * Certificate: **Industrial Engineering and Data Science**, Department of Industrial Engineering
  * Certificate: **Artificial Intelligence Innovation and Entrepreneurship Enhancement Program**, Fundamental Industry Training Center

Research Experience
------

* **Artifact-Grounded Benchmark for Autonomous DFT Agent Frameworks** — Jul.2026–Present
  * Researcher in Yuyu Luo's lab, DSA, HKUST-GZ
  * **Workflow-level benchmarking:** developing a benchmark framework to evaluate autonomous DFT agent frameworks at the scientific workflow level, moving beyond isolated tool-use tasks and final-output correctness to assess end-to-end scientific decision-making.
  * **Artifact-grounded evaluation:** establishing evidence-based criteria for convergence verification, computational provenance, and downstream workflow compatibility, with controlled counterfactual tests to examine whether workflow transitions and computational-reuse decisions are justified by scientific evidence.

* **AgentLab for Perovskite Materials: An Agentic Platform for Scientific Workflows** — Apr.2026–Present
  * Researcher in Yuyu Luo's lab, DSA, HKUST-GZ
  * **Platform architecture:** designed an extensible agent platform with modular MCP-based interfaces for orchestrating scientific software and simulation workflows, with a pathway toward laboratory-instrument integration.
  * **Scientific workflow integration:** built a workflow connecting natural-language task specification, HPC/SLURM job orchestration, VASP-based first-principles calculations, automated result parsing, and SCAPS device simulation, enabling structured data transfer across scientific tools.

* **Photovoltaic Power Generation Ultra-Short-Term Forecasting by ML & CV** — Jan.2025–Jun.2025
  * Researcher in Shuiqing Li's lab, Department of Energy and Power Engineering, Tsinghua University
  * Developed a novel hybrid model integrating cloud motion and shadow generation for PV power prediction.
  * Awarded Outstanding Undergraduate Thesis in Energy and Power Engineering, Tsinghua University.

* **Downscaling of Long-Range Climate Prediction Models** — Nov.2024–Apr.2025
  * Researcher in Da Zhang's lab, School of Environment, Tsinghua University
  * Adapted the NREL Super3 model for high-resolution climate downscaling over China (Anhui case study).
  * Processed 18 years of data, achieving 30 km/24 h resolution (vs. traditional 100 km/72 h).

* **Structural Engineering of Pt-based Intermetallic Catalysts for Fuel Cells** — Feb.2024–Jun.2024
  * Researcher in Liang Zhang's lab, Center for Combustion Energy, Tsinghua University
  * Designed PtCoMn/PtCoTi trimetallic catalysts using DFT calculations and Monte Carlo simulations.
  * Validation through HAADF-STEM characterization and electrochemical tests.

* **Cage-shaped Self-folding Mechanical Metamaterials** — Sep.2022–May.2023
  * Co-authorship; researcher in Changqing Chen's lab, Department of Aerospace Engineering, Tsinghua University
  * Validation through theories, Abaqus and other relevant techniques.
  * Experiments: set up the experimental environment, lab design, and data simulation.
  * Writing part of the paper and editing & reviewing; published in the *International Journal of Solids and Structures*.

Technical Skills
------

* **Programming:** Python, Matlab
* **Scientific Computing:** VASP, SCAPS, HPC/SLURM
* **Modeling:** Machine Learning, Computer Vision, Monte Carlo, Abaqus, COMSOL, SolidWorks

Publications
------

<ul>{% for post in site.publications reversed %}{% if post.category == "manuscripts" %}{% include archive-single-cv.html %}{% endif %}{% endfor %}</ul>

A full list, including theses, research reports and project write-ups, is available on the [Publications]({{ site.baseurl }}/publications/) page.

Honors & Awards
------

* Grand Prize of the 41st Challenge Cup of Tsinghua University, first author
* Outstanding Undergraduate Thesis in Energy and Power Engineering, Tsinghua University, 2025
