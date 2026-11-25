# ScriptedOT Instructor Guide

*For instructors who are new to operational technology (OT) and industrial control system (ICS) security. Version 1.1.*

ScriptedOT is ten short training modules. Each one starts from a scene students already know, then moves to a documented industrial incident, the engineering behind it, and the countermeasures a plant would use. You do not need an OT background to teach from it, and you do not need to show any film or TV clips.

**Open it:** https://clarkngo.github.io/scripted-ot/ (or download the repo and open `index.html`; there is no build step, account, or server).

## What each module contains

Every module has the same four parts, so students learn the routine once.

| Part | What students get |
|---|---|
| **01 The Script** | An original four-panel comic of the scene, a short dialogue extract, a mapping from characters to real control-room and plant-floor roles, and the failure mode shown on screen. |
| **02 Theory** | The scenario broken down by Purdue Model level, with the protocols and control logic involved. |
| **03 The Plant** | A comic of the real incident, a documented case, a cinematic-versus-reality matrix, and a root-cause classification. |
| **04 Runbook** | A telemetry envelope (normal values and trip thresholds), a step-by-step mitigation and recovery protocol, and the standards clauses that apply. |

## Learning objectives

After one module, a student can:

1. Place the components of a system at the right Purdue Model levels.
2. Explain how OT priorities (safety, availability, process integrity) differ from typical IT priorities.
3. Separate what a film depicts from what the documented incident shows, using the matrix.
4. Name the root-cause category of an incident, including when it was not a cyber failure.
5. Read a runbook: a telemetry envelope, a mitigation sequence, and the standards behind it.

## Choosing a module

Start with a module that does not require cyber vocabulary, then add ones that do.

| Module | Domain | Concept it teaches best |
|---|---|---|
| 08 Apollo 13 | Aerospace, microgrid power | Constrained power budgets, manual sequencing, black-start recovery. The root cause is mechanical, not cyber, so it is a good first session. |
| 09 Deepwater Horizon | Oil and gas | Alarm normalization, sensor misinterpretation, and failure of the last protection layer. |
| 02 The China Syndrome | Nuclear power | Sensor feedback diverging from the true physical state. |
| 01 Chernobyl | Nuclear power | Safety-envelope violation and overriding safety systems. |
| 10 The Pitt | Hospital building automation | Alarm fatigue and failover logic. |
| 03 Jurassic Park | Building and perimeter automation | Insider threat and undocumented access. |
| 06 Battlestar Galactica | Maritime and defense | IT/OT convergence versus deliberate air-gapping. |
| 07 The Italian Job | Traffic management | Spoofed detector feeds and unauthenticated legacy controllers. |
| 04 Live Free or Die Hard | Smart grid and pipeline | Cascading dependencies between infrastructures. |
| 05 Mr. Robot | Data center and critical power | Tampering with controller logic and thermal runaway. |

**Suggested sequences** (adjust to your course):

- **One session:** Apollo 13.
- **A four-week unit for an intro security course:** Apollo 13, Deepwater Horizon, Battlestar Galactica, Mr. Robot.
- **An IT-to-OT bridge course:** start with Battlestar Galactica, then The Italian Job and Jurassic Park, then Deepwater Horizon.

## A 50-minute lesson plan (one module)

**Before class (suggest about 15 minutes for students):** read Part 01 only. Do not read Parts 03 and 04 yet; the prediction in the middle of class depends on it.

| Time | Activity |
|---|---|
| 0 to 5 | **Hook.** Project the scene comic. Ask: "If you were in the control room, what would you check first?" Collect three answers without commenting. |
| 5 to 15 | **Roles.** In small groups, map the characters to real control-room and plant-floor roles. Compare with the module's mapping. |
| 15 to 25 | **Purdue Model.** Groups place the scenario's components at the Purdue levels on a whiteboard or worksheet. Reveal Part 02 and discuss any differences. |
| 25 to 35 | **Cinematic versus reality.** Pairs predict where the film departs from the documented incident, then read Part 03 and mark where they were right. |
| 35 to 45 | **Runbook.** Each pair picks the three most important mitigation steps from Part 04 and defends the order. Compare with the module's protocol and find the standards clause that supports one step. |
| 45 to 50 | **Exit ticket.** One sentence: "A control-room display could mislead me when ___." |

**Shorter or longer:** for 25 minutes, run the hook, Purdue Model, and runbook only. For 90 minutes, add a second module and a comparison of the two root causes.

## Discussion questions

- What did the people in the scene know, and what could they not see?
- Which Purdue level fails first, and which level notices?
- Was this a cyber failure, a mechanical failure, or a process failure? Does the answer change what you would do next?
- Which countermeasure is a technical control, and which is a procedure? Which one would you test first?
- What would have to be true in your own organization for this to happen?

## A starter rubric

Adjust the weights and wording to your course.

| Criterion | Developing | Proficient |
|---|---|---|
| Purdue placement | Some components misplaced | All components placed with a reason for each |
| Film versus reality | Restates the film | Identifies specific departures from the documented case |
| Root cause | Names a cause | Classifies the cause and says why it is or is not a cyber failure |
| Countermeasures | Lists steps | Orders steps, justifies the order, and cites a standard |

## Before you teach it

- Read one module end to end before you assign it.
- Several of the source films and shows have mature themes. Preview a module before assigning it. The dialogue extracts are short and the comics are original illustrations, so no clips are needed. If you do show clips, follow your institution's policy.
- **These modules are for education.** The runbooks illustrate engineering reasoning and are not a substitute for site-specific safety procedures. Do not test any of these scenarios on a live system.
- Common student mistakes: treating the film as accurate, assuming IT priorities (confidentiality first) apply in OT, and assuming every incident was an attack.

## Tell us how you use it

This guide has not yet been validated across institutions, and your experience will shape the next version. If you use a module in a course, please open an issue titled "Adoption: your institution" with the course, the term, and the module, and add anything that did or did not work. A short note about outcomes is the most useful thing you can send. Suggestions for lesson-plan changes and mappings to your program's learning outcomes are also welcome as pull requests.

## Credit and license

Code is MIT (`LICENSE`). Course content and comics are CC BY 4.0 (`LICENSE-CONTENT`). To credit: "ScriptedOT" by Clark Ngo, CC BY 4.0, https://clarkngo.github.io/scripted-ot/.
