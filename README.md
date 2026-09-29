# PhyLatent

Project website for **PhyLatent: Learning Dynamics-Relevant Representations for JEPA World Models**.

[Project website](https://laplacetan.github.io/PhyLatent/) · [Read the paper](https://arxiv.org/abs/2608.05720) · [Download BibTeX](phylatent.bib) · [Download the source snapshot](PhyLatent-source.zip)

This repository contains the static paper website. It uses HTML, CSS, and JavaScript, with all figures, video demonstrations, and downloadable resources stored locally. No build step, package installation, or backend is required.

## Website content

- A prominent four-task planning demonstration for Cube, TwoRooms, Reacher, and PushT.
- The method overview and scatter plots illustrating three forms of representation collapse.
- Separate video demonstrations of physical invariance, physical distinguishability, and counterfactual dynamics collapse.
- Nine consistently formatted experimental tables, with explanatory captions below each table.
- Appearance robustness and goal separation results, individual task videos, and citation resources.

Tables are reformatted for readability while preserving the reported values and their corresponding methods, tasks, and conditions. Figures and demonstrations retain the scientific meaning of the source material.

## Source code and model availability

[`PhyLatent-source.zip`](PhyLatent-source.zip) contains the supplied research source snapshot, including training configurations, planning and evaluation code, collapse diagnostics, documentation, and license notices. It is separate from the website source in this repository.

**Full pretrained model weights are not included.** The four `weights.pt` files in that snapshot are Git LFS pointers, not checkpoint payloads. Downloading the archive alone does not provide runnable pretrained checkpoints. The website's model availability section reflects this limitation.

The research source archive includes its original `LICENSE`, `THIRD_PARTY_NOTICES.md`, and `licenses/` directory. Consult those files for the applicable source code and third-party terms.

## Deploy with GitHub Pages

1. Keep `index.html`, `.nojekyll`, and all accompanying image, video, and archive files at the repository root.
2. Push the website files to the `main` branch.
3. In **Settings → Pages**, select **Deploy from a branch**.
4. Select **main** and **/(root)**, then save.

For the `Laplacetan/PhyLatent` repository, GitHub Pages serves the website at `https://laplacetan.github.io/PhyLatent/` after deployment completes. Confirm the deployment status and published address in the repository's Pages settings.

Local assets use relative URLs, so the site supports GitHub Pages project paths. The `.nojekyll` file allows the files to be served directly without Jekyll processing.

## Preview and maintenance

Serve this directory with any static HTTP server and open its local address in a browser.

| File or directory | Purpose |
| --- | --- |
| `index.html` | Paper information, scientific content, tables, and resource links |
| `styles.css` | General styles and the opening sections |
| `sections.css` | Diagnostics, results, resources, and responsive layouts |
| `app.js` | Video behavior, section navigation, and citation copying |
| `*.png`, `*.svg`, `*.jpg` | Figures and video preview images |
| `*.mp4` | Task demonstrations and collapse diagnostics |
| `PhyLatent-source.zip` | Downloadable research source snapshot |
| `phylatent.bib` | Downloadable paper citation |

When updating experimental results, preserve the mapping between each value and its method, task, metric, and evaluation condition. Keep captions with their associated tables and figures. If public source or checkpoint links become available, update the resource buttons and model availability section together.
