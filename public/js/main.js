const E_LOW  = "e_low",
      E_HIGH = "e_high",
      A      = "a",
      D      = "d",
      G      = "g",
      B      = "b";

const C1 = "c1",
      C2 = "c2",
      C3 = "c3",
      C4 = "c4";

const STRINGS = [
  E_LOW,
  E_HIGH,
  A,
  D,
  G,
  B
];

const C_OCTAVES = [
  C1,
  C2,
  C3,
  C4
];

const C_OCTAVES_AND_STRINGS = {
  [C1]: [
    E_LOW,
    A
  ],
  [C2]: [
    G,
    B,
    D,
    A,
    E_LOW
  ],
  [C3]: [
    E_HIGH,
    B,
    G
  ],
  [C4]: [
    E_HIGH
  ] 
}

function selectRandomCNoteAndString() {
  const octaveIndex = Math.floor(Math.random() * C_OCTAVES.length),
        octave      = C_OCTAVES[octaveIndex],
        strings     = C_OCTAVES_AND_STRINGS[octave],
        stringIndex = Math.floor(Math.random() * C_OCTAVES.length),
        string      = strings[stringIndex];
  return [octave, string];
}

function flashCard() {
  let [octave, string] = selectRandomCNoteAndString();
  const app = document.getElementById("flashCardApp"),
        td1 = app.querySelector("td:first-of-type"),
        td2 = app.querySelector("td:last-of-type");
  td1.innerText = octave;
  td2.innerText = string;
}

const beginBtn = document.getElementById("beginBtn");
beginBtn.addEventListener("click", (e) => {
  flashCard();
  e.target.innerText = "Next"
})




