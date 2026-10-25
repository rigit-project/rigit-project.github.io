# RigIt project page

Source for <https://rigit-project.github.io> — the project page for
**RigIt: Precise Interactive Articulation of Objects in Images**
(Kashyap, Agarwal, Ghadiyaram, Gandhi — SIGGRAPH Asia 2026).

## Layout

```
index.html               page markup (hero, teaser, abstract, examples, method, results)
static/css/index.css     Nerfies-derived styles + RigIt additions
static/js/index.js       tab switching for the results gallery
static/js/rigit.js       animated Examples tiles + the Method walkthrough (canvas, no dependencies)
static/js/rigit_data.js  scene data for rigit.js (generated, see below)
static/images/           figures exported from the paper
static/pdfs/RigIt.pdf    camera-ready paper (saconferencepapers26-216.pdf), linked by the Paper button
static/images/examples/  input photos + RigIt edits for the Examples strip (generated)
static/images/walk/      photo, edit and part masks for the walkthrough (generated)
static/videos/           (empty for now — drop result videos here)
```

## Editing

- **Figures.** `static/images/*.png` are Ghostscript exports of the paper PDFs:

  ```sh
  gs -q -dNOPAUSE -dBATCH -dSAFER -sDEVICE=png16m -r200 \
     -dTextAlphaBits=4 -dGraphicsAlphaBits=4 \
     -sOutputFile=static/images/pipeline.png new_figures/pipeline_2.pdf
  ```

  Source PDFs: `Teaser.pdf` → `teaser.png`, `pipeline_2.pdf` → `pipeline.png`,
  `text_baseline_qual.pdf` → `results_text.png`, `drag_baseline_qual.pdf` → `results_drag.png`,
  `real_world_dataset.pdf` → `results_cao.png`, `misc_qual_resized.pdf` → `results_wild.png`.

- **Links.** The buttons under the authors in `index.html` point to the paper PDF, the code
  (github.com/rigit-project/RigIT), the checkpoint (huggingface.co/ayankashyap/RigIT-FLUX1-dev-LoRA) and the
  two datasets (huggingface.co/datasets/ayankashyap/RigIT-Synth, .../RigIT-CAO); the 🤗 buttons use the emoji as
  their icon, since Font Awesome 5 has no Hugging Face icon.

- **Examples + walkthrough.** Both are drawn by `static/js/rigit.js`, ported from the SIGGRAPH
  fast-forward deck. Their data and images are exported from the RigIt repo:

  ```sh
  python fastforward/build_web_assets.py   # run from the RigIt repo root
  ```

  The example scenes (`EXAMPLES`) and the walkthrough scene (`WALK_SCENE`) are listed at the top
  of that script; use Pexels/Unsplash photos only. The walkthrough's point-cloud grid is inlined in
  `rigit_data.js` as data URIs, so the page also works when `index.html` is opened from disk.

- **New results tab.** Add an `<li>` to `#results-tabs` with `data-panel="panel-x"` and a
  matching `<div class="results-panel" id="panel-x" hidden>`. No JS change needed.

## Local preview

```sh
python3 -m http.server 8000
```

## Credit

Built on the [Nerfies project page](https://github.com/nerfies/nerfies.github.io),
released under CC BY-SA 4.0.
