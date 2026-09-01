/**
 * "Our Goal" section — mounts into `<section data-goals></section>`.
 * Content lives in js/data/site-content.js; add/remove an entry in
 * `goalsContent.items` and the three-column grid follows automatically.
 */
import { goalsContent } from "../data/site-content.js";

function renderGoal(item, index) {
  return `
    <div class="goal">
      <span class="goal__index">0${index + 1}</span>
      <h3 class="goal__title">${item.title}</h3>
      <p class="goal__body">${item.body}</p>
    </div>
  `;
}

function render(data) {
  return `
    <div class="section-inner goals__intro">
      <p class="eyebrow">${data.eyebrow}</p>
      <h2 class="goals__statement">${data.statement}</h2>
    </div>
    <div class="section-inner goals__grid">
      ${data.items.map(renderGoal).join("")}
    </div>
  `;
}

function mount() {
  const el = document.querySelector("[data-goals]");
  if (!el) return;
  el.classList.add("goals-section");
  el.innerHTML = render(goalsContent);
}

document.addEventListener("DOMContentLoaded", mount);
