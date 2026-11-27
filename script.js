// global variables
const trailerForm = document.querySelector("#trailer-form");
const trailerSelected = document.querySelector("#truck-size");
const trailerSlots = document.querySelector(".trailer-slots");
const palletForm = document.querySelector("#pallet-form");
const palletArea = document.querySelector(".pallet-area");
let counter = 0;

const trailers = {
  "53ft": { rows: 2, columns: 13, maxWeight: 19958 },
  "48ft": { rows: 2, columns: 12, maxWeight: 19958 },
  "28ft": { rows: 2, columns: 7, maxWeight: 9979 },
};

// functions
function makeTrailer(e) {
  e.preventDefault();

  const trailerSpecs = trailers[trailerSelected.value];
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

function makePallet(e) {
  e.preventDefault();

  counter++;

  const palletSpecs = Object.fromEntries(new FormData(e.target));

  const div = document.createElement("div");
  div.textContent = `PLT: ${counter}\n#${palletSpecs.id}\n${palletSpecs.weight} kg\nStop ${palletSpecs.stop}`;
  div.classList.add("pallet");
  palletArea.appendChild(div);

  palletForm.reset();
}

// event listeners
trailerForm.addEventListener("submit", makeTrailer);
palletForm.addEventListener("submit", makePallet);
