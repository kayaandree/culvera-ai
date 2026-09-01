/**
 * "Why Culvera" section — mounts into any page with a
 * `<section data-why-culvera></section>` placeholder. Content comes from
 * js/data/site-content.js so the homepage and About page never drift out
 * of sync with each other.
 */
import { whyCulveraContent } from "../data/site-content.js";

function render(data) {
  return `
    <div class="section-inner why-culvera__inner">
      <p class="eyebrow">${data.eyebrow}</p>
      <h2 class="why-culvera__heading">${data.heading}</h2>
      <div class="why-culvera__body">
        ${data.paragraphs.map((p) => `<p>${p}</p>`).join("")}
      </div>
    </div>
  `;
}

function mount() {
  const el = document.querySelector("[data-why-culvera]");
  if (!el) return;
  el.classList.add("why-culvera-section");
  el.innerHTML = render(whyCulveraContent);
}

document.addEventListener("DOMContentLoaded", mount);
