/**
 * Single-line technology statement — mounts into
 * `<section data-tech-statement></section>`. Deliberately not a full
 * technology section yet (see brief) — just a restrained divider line
 * between "Our Goal" and the founders.
 */
import { techStatementContent } from "../data/site-content.js";

function render(data) {
  return `
    <p class="tech-statement__text">${data.text}</p>
  `;
}

function mount() {
  const el = document.querySelector("[data-tech-statement]");
  if (!el) return;
  el.classList.add("tech-statement");
  el.innerHTML = render(techStatementContent);
}

document.addEventListener("DOMContentLoaded", mount);
