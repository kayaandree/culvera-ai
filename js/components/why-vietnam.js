/**
 * "Why Vietnam" section — mounts into `<section data-why-vietnam></section>`.
 * Content lives in js/data/site-content.js.
 */
import { whyVietnamContent } from "../data/site-content.js";

function render(data) {
  return `
    <div class="section-inner why-vietnam__grid">
      <h2 class="why-vietnam__heading">${data.heading}</h2>
      <div class="why-vietnam__body">
        ${data.paragraphs.map((p) => `<p>${p}</p>`).join("")}
      </div>
    </div>
  `;
}

function mount() {
  const el = document.querySelector("[data-why-vietnam]");
  if (!el) return;
  el.classList.add("why-vietnam-section");
  el.innerHTML = render(whyVietnamContent);
}

document.addEventListener("DOMContentLoaded", mount);
