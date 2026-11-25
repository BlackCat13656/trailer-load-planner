// global variables
const trailerForm = document.querySelector(".truck-size");
const trailerSelect = document.querySelector("#truck-size");
const trailerSlots = document.querySelector(".trailer-slots");

const trailers = {
  "53ft": { rows: 2, columns: 13, maxWeight: 19958 },
  "48ft": { rows: 2, columns: 12, maxWeight: 19958 },
  "28ft": { rows: 2, columns: 7, maxWeight: 9979 },
};

// functions
function makeTrailer(e) {
  e.preventDefault();

  const trailerSpecs = trailers[trailerSelect.value];
  if (!trailerSpecs) return;

  // clears trailer area
  trailerSlots.innerHTML = "";

  // generates trailer slots
  for (let i = 0; i < trailerSpecs.rows * trailerSpecs.columns; i++) {
    const slot = document.createElement("div");
    slot.classList.add("slot");
    slot.dataset.index = i;
    trailerSlots.appendChild(slot);
  }
  trailerSlots.style.gridTemplateColumns = `repeat(${trailerSpecs.columns}, 1fr)`;
}

// event listeners
trailerForm.addEventListener("submit", makeTrailer);
