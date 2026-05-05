// data.js — all subordonnants from the PDF
// cats: cause | consequence | but | temps | condition | comparaison | concession | opposition

const SUBORDONNANTS_DEFAULT = [
  // Page 1
  { word: "comme",                     cats: ["cause","temps","comparaison"] },
  { word: "d'autant plus que",         cats: ["cause","comparaison"] },
  { word: "du fait que",               cats: ["cause"] },
  { word: "du moment que",             cats: ["cause","consequence"] },
  { word: "étant donné que",           cats: ["cause"] },
  { word: "parce que",                 cats: ["cause"] },
  { word: "puisque",                   cats: ["cause"] },
  { word: "vu que",                    cats: ["cause"] },
  { word: "sous prétexte que",         cats: ["cause"] },
  { word: "si",                        cats: ["cause","condition"] },
  { word: "dès lors que",              cats: ["cause","temps"] },
  { word: "dès l'instant que",         cats: ["cause","temps"] },
  { word: "pourvu que",                cats: ["condition"] },
  { word: "d'autant plus que / d'autant moins que", cats: ["cause","comparaison"] },
  { word: "aussi que / plus…que",      cats: ["comparaison"] },
  { word: "moins que / plus que",      cats: ["comparaison"] },

  // Page 2
  { word: "autrement que / plutôt que", cats: ["comparaison"] },
  { word: "dès que / depuis que / aussitôt que / sitôt que / une fois que / après que / à peine…que (postériorité)", cats: ["temps"] },
  { word: "jusqu'à ce que / avant que / attendant le moment où / jusqu'au moment où / avant le moment où (antériorité)", cats: ["temps"] },
  { word: "lorsque / quand / au moment où / à l'instant où / pendant que / comme / aussi longtemps que / tant que / chaque fois que / toutes les fois que / alors que / tandis que / du temps que (simultanéité)", cats: ["temps"] },
  { word: "ainsi que",                 cats: ["comparaison"] },
  { word: "tandis que",                cats: ["temps","opposition"] },
  { word: "quand",                     cats: ["temps","opposition"] },
  { word: "de même que",               cats: ["comparaison"] },
  { word: "alors que",                 cats: ["temps","opposition"] },
  { word: "sans que",                  cats: ["consequence","opposition"] },
  { word: "quand bien même",           cats: ["concession"] },
  { word: "quoique",                   cats: ["concession"] },
  { word: "bien que",                  cats: ["concession"] },
  { word: "si…que",                    cats: ["consequence","concession"] },
  { word: "même si",                   cats: ["condition","opposition"] },

  // Page 3
  { word: "c'est parce que…que / c'est que…que", cats: ["cause"] },
  { word: ", si bien que",             cats: ["consequence"] },
  { word: "tant et si bien que",       cats: ["consequence"] },
  { word: "tant (tellement) + que",    cats: ["consequence"] },
  { word: "si (tellement) + que",      cats: ["consequence"] },
  { word: "afin que",                  cats: ["but"] },
  { word: "pour que",                  cats: ["consequence","but"] },
  { word: "dans l'espoir que",         cats: ["but"] },
  { word: "pour que …ne…pas / afin que …ne…pas", cats: ["but"] },
  { word: "de crainte que / de peur que", cats: ["but"] },
  { word: "de manière que / de sorte que / de façon que", cats: ["consequence","but"] },
  { word: "à seule fin que",           cats: ["but"] },
  { word: "au lieu que",               cats: ["opposition"] },
  { word: "bien loin que / loin que",  cats: ["opposition"] },
  { word: "excepté que",               cats: ["opposition"] },
  { word: "sauf que",                  cats: ["opposition"] },
  { word: "bien que / quoique / encore que / sans que / quelque / quelque…que", cats: ["concession"] },
  { word: "sauf si",                   cats: ["condition"] },
  { word: "excepté si",                cats: ["condition"] },
  { word: "dans la mesure où",         cats: ["condition"] },
  { word: "selon que …ou / suivant que …ou", cats: ["condition"] },

  // Page 4
  { word: "a supposer que / à condition que / soit que…soit que", cats: ["condition"] },
  { word: "à moins que …(ne)",         cats: ["condition"] },
  { word: "pour peu que",              cats: ["condition"] },
  { word: "que…ou que…",              cats: ["condition"] },
  { word: "tel que",                   cats: ["comparaison"] },
  { word: "davantage que",             cats: ["comparaison"] },
  { word: "d'ici à ce que",            cats: ["temps"] },
  { word: "moyennant que",             cats: ["condition"] },
  { word: "si tant est que",           cats: ["condition"] },
  { word: "attendu que",               cats: ["cause"] },
  { word: "hormis que",                cats: ["condition"] },
];

// Load from localStorage (admin additions)
function loadData() {
  try {
    const saved = localStorage.getItem("subordonnants_extra");
    if (saved) {
      const extra = JSON.parse(saved);
      return [...SUBORDONNANTS_DEFAULT, ...extra];
    }
  } catch(e) {}
  return [...SUBORDONNANTS_DEFAULT];
}

function saveExtra(item) {
  try {
    const saved = localStorage.getItem("subordonnants_extra");
    const extra = saved ? JSON.parse(saved) : [];
    extra.push(item);
    localStorage.setItem("subordonnants_extra", JSON.stringify(extra));
  } catch(e) {}
}
