// NAVIGATION
function goToGame() {
  screen0.classList.add("hidden");
  screen1.classList.remove("hidden");
}

function goToReasons() {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
}

function goToLove() {
  screen2.classList.add("hidden");
  screen3.classList.remove("hidden");
  typeLoveText();
}

// MEMORY GAME
const symbols = ["❤️","❤️","✦","✦","✧","✧","✿","✿","❀","❀","✺","✺","✹","✹","✱","✱"];
const grid = document.getElementById("grid");
const movesEl = document.getElementById("moves");
let shuffled = symbols.sort(() => 0.5 - Math.random());
let selected = [];
let moves = 0;

shuffled.forEach(sym => {
  const tile = document.createElement("div");
  tile.className = "tile";
  tile.textContent = "?";
  tile.onclick = () => flip(tile, sym);
  grid.appendChild(tile);
});

function flip(tile, sym) {
  if (selected.length === 2 || tile.textContent !== "?") return;
  tile.textContent = sym;
  selected.push({tile, sym});

  if (selected.length === 2) {
    moves++;
    movesEl.textContent = moves;

    if (selected[0].sym === "❤️" && selected[1].sym === "❤️") {
      setTimeout(goToReasons, 600);
    } else {
      setTimeout(() => {
        selected.forEach(c => c.tile.textContent = "?");
        selected = [];
      }, 800);
    }
  }
}

// REVEAL REASONS
function reveal(el) {
  el.classList.toggle("revealed");
}

// TEXTE D’AMOUR MOT PAR MOT
const loveMessage = `
pour boulou bouulou d'amourouu🥺💗💗💗
.jee t'aimme boulouu🥺💗💗💗 na de be longolongo sy milavanina fona isan'andro izao .shhh.sady mangetotra fonaa 😖.
`;

function typeLoveText() {
  const container = document.getElementById("loveText");
  const words = loveMessage.split(" ");
  let i = 0;

  const interval = setInterval(() => {
    container.innerHTML += words[i] + " ";
    i++;
    if (i >= words.length) clearInterval(interval);
  }, 180);
}
