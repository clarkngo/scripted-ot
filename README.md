# ScriptedOT

A static site of ten short training modules that each open with a recognizable film or TV scene, then ground it in a real, documented industrial control system (ICS/OT) incident — Purdue Model breakdown, cinematic-vs-reality matrix, root-cause classification, and an engineering runbook citing ISA/IEC 62443, NIST SP 800-82, ISA-18.2, and related standards.

Live at: **https://github.com/clarkngo/scripted-ot**

## What's in it

- [`index.html`](index.html) — homepage: explains the four-part module structure and links all ten modules.
- [`modules/`](modules/) — one HTML page per module (Chernobyl, The China Syndrome, Jurassic Park, Live Free or Die Hard, Mr. Robot, Battlestar Galactica, The Italian Job, Apollo 13, Deepwater Horizon, The Pitt).
- [`assets/style.css`](assets/style.css) — shared stylesheet with a light/dark theme (toggle in the header, persisted per-browser).
- [`assets/theme.js`](assets/theme.js) — drives the theme toggle.
- [`assets/comics/`](assets/comics/) — original four-panel comic strips illustrating each module's scene and its real-world counterpart (not frames from the source film/show).

No build step, no dependencies, no backend — it's plain HTML/CSS/JS.

## Deploying it

### GitHub Pages

1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and the folder to `/ (root)`.
4. Save. The site will publish at `https://<your-username>.github.io/scripted-ot/`.

That's the whole setup — every path in the site is relative, so it works unmodified from a repo subpath.

### Running it locally

Any static file server works:

```bash
python3 -m http.server 8123
```

Then open `http://localhost:8123`. A `.claude/launch.json` is included for previewing inside Claude Code's browser pane.

## Using a module in a course

Each module page is self-contained and built to be projected, printed, or assigned as reading on its own — no need to route students through the homepage first.

**As a lecture opener:** show the comic strip and dialogue extract (Section 1) cold, before naming the real incident. Ask students to guess the failure mode from the scene alone, then reveal Section 3's real-world precedent.

**As a case-study assignment:** assign one module's Section 3 ("The Plant") as the case study, and have students independently research the cited primary source (e.g. INSAG-7 for Chernobyl, the CSB report for Deepwater Horizon) to verify or challenge the cinematic-vs-reality matrix.

**As a design exercise:** give students Section 2 (Purdue Model breakdown) and Section 3's root-cause classification, but withhold Section 4, and have them draft their own mitigation runbook and standards citations before comparing against the page's version.

**Picking a module for your syllabus** — each is tagged with a domain and focus at the top of the page:

| # | Module | Domain | Focus |
|---|--------|--------|-------|
| 01 | Chernobyl | Nuclear Power Generation | SIS override & interlock failure |
| 02 | The China Syndrome | Nuclear Power Generation | Telemetry divergence & alarm interpretation |
| 03 | Jurassic Park | Building & Perimeter Automation | Insider threat & network segmentation |
| 04 | Live Free or Die Hard | Smart Grid & Pipeline | Remote command injection & cascading failure |
| 05 | Mr. Robot | Data Center / Critical Power | BAS exploitation & physical process damage |
| 06 | Battlestar Galactica | Maritime / Defense Systems | Air-gap bypass & supply-chain compromise |
| 07 | The Italian Job | Traffic Management | Master-station compromise & access control |
| 08 | Apollo 13 | Aerospace / Microgrid Power | Black-start sequencing & constrained operations |
| 09 | Deepwater Horizon | Oil & Gas / Offshore Drilling | SIS/ESD failure & alarm normalization |
| 10 | The Pitt | Hospital Building Automation | Alarm fatigue & facility failover |

All dialogue extracts are paraphrased rather than quoted verbatim from the source films/shows, and the comic strips are original illustrations, not reproductions of any frames — both modules and comics are safe to project or distribute in a classroom setting.

## License

Dual-licensed:

- **Code** (`assets/style.css`, `assets/theme.js`, `.claude/launch.json`, and the HTML/CSS markup structure) — [MIT](LICENSE).
- **Course content** (module text and the comic strip illustrations in `assets/comics/`) — [CC BY 4.0](LICENSE-CONTENT). Use, adapt, and redistribute freely in course materials, with attribution.
