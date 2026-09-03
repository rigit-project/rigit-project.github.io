# RigIt project page

Source for <https://rigit-project.github.io> — the project page for
**RigIt: Precise Interactive Articulation of Objects in Images**
(Kashyap, Agarwal, Ghadiyaram, Gandhi — SIGGRAPH Asia 2026).

## Layout

```
index.html               page markup (hero, teaser, abstract, method, results)
static/css/index.css     Nerfies-derived styles + RigIt additions
static/js/index.js       tab switching for the results gallery
static/images/           figures exported from the paper
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

- **Code / Data links.** Both are placeholders. To activate one, remove the `coming-soon`
  class and the `<span class="cs-tag">` from the button in `index.html`, then add the `href`.

- **New results tab.** Add an `<li>` to `#results-tabs` with `data-panel="panel-x"` and a
  matching `<div class="results-panel" id="panel-x" hidden>`. No JS change needed.

## Local preview

```sh
python3 -m http.server 8000
```

## Credit

Built on the [Nerfies project page](https://github.com/nerfies/nerfies.github.io),
released under CC BY-SA 4.0.
