import {
  pocetakIgre,
  pocetniEkran,
  pocniIgru,
  postaviUcitavanje,
  tijelo,
  pocniIgruEvListener,
  zastaveIgraEvListener,
  pocetakIgreDiv,
  countryGeek,
  nazadPocetniEvListener,
} from "./views/pocetniEkran.js";
import {
  ubacivanjeEvListenera,
  oneTapSliciceEvListener,
  skloniEvListener,
  zastavaSlika,
  imeDrzave,
  trenutnaDrzava,
} from "./views/pogodiGradove.js";
import {
  dugmeDesnoCB,
  dugmeLijevoCB,
  opcije,
  nizDrzava,
  i,
  // j,
  num,
  uzmiDrzave,
  sveDrzave,
  napraviRandomBroj,
  odabirDrzava,
  odredjivanjeGlGrada,
  updateIndex,
  funkcijaVremena,
  produzenFormat,
  pogadjanjeGrada,
  drzaveH,
  callBack,
  zavrsniEkran,
  isprazniDrzave,
  provjera,
  vecOdgovoreno,
  resetPolja,
  modIgre,
  mod,
} from "./model.js";
import {
  pocniZastaveEvListener,
  potvrdiImeEvListener,
  unesenaDrzava,
  unesenaDrzavaEvListener,
  sliciceH,
  zastava,
  oneTapSliciceZastaveEvListener,
  obrisiImeEvListener,
  desnoZastaveEvListener,
  lijevoZastaveEvListener,
  trenutnaDrzavaZastave,
  potvrdiImeEvSklanjanje,
  obrisiImeEvSklanjanje,
  vrijemeZastaveEl,
} from "./views/pogodiDrzave.js";
import { zavrsni } from "./views/zavrsni.js";
import {
  vrijemeEl,
  zavrsiDugmeEv,
  vratiNazadEvListener,
  igrajPonovoEvListener,
  igrajPonovoXListener,
} from "./views/defaultView.js";

const naslov = document.querySelector("h1");
const easterEgg = ["ŽNP", "KREATOR: POK3", "BAĆEVIĆI", "RG16", "ELEKTRO GAS"];
let counter = 0;
pocniIgru.addEventListener("click", function () {
  if (counter > 5) {
    naslov.textContent = easterEgg[napraviRandomBroj(5)];
  }
  counter++;
});

function skloniUcitavanje() {
  tijelo.removeChild(tijelo.childNodes[0]);
}
function prikaziKanvasIgreGradova() {
  document.querySelector(".pogodiGlavniGrad").style.display = "grid";
}

function skloniPocetni() {
  pocetniEkran.style.display = "none";
}
const pocniIgruCB = function () {
  pocetakIgre.textContent = "IZABERI MOD IGRE";
  pocetakIgreDiv.style.height = "13.25rem";
  countryGeek.style.height = "10rem";
};
const nazadCB = function () {
  pocetakIgre.textContent = "ZAPOČNI IGRU";
  pocetakIgreDiv.style.height = "3rem";
  countryGeek.style.height = "3rem";
};
const mainUpdate = function (drzava, trenutno, zastava) {
  drzava.textContent = `${nizDrzava[i].ime}`;
  trenutno.textContent = `${i + 1}/10`;
  zastava.src = `${nizDrzava[i].zastava}`;
};

const zavrsiIgruCB = function () {
  zavrsniEkran();
};

const zavrsiIgru = function () {
  zavrsiDugmeEv(zavrsiIgruCB);
};
export const render = function () {
  if (nizDrzava[i]) mainUpdate(imeDrzave, trenutnaDrzava, zastavaSlika);
  if (nizDrzava[i]) odredjivanjeGlGrada(opcije);
  pogadjanjeGrada();
};
export let j = 0;
const oneTapSliciceCB = function (e) {
  gradoviIgraCB;
  j = Number(e.target.classList[1] - 1);
  updateIndex();
  render();
  if (nizDrzava[j].evList) skloniEvListener(opcije, callBack);
};

const oneTapSlicice = function (item) {
  item.forEach((item, j) => {
    oneTapSliciceEvListener(item, oneTapSliciceCB.bind(Event));
    item.style.backgroundImage = `url(${nizDrzava[j].zastava})`;
  });
};

pocniIgruEvListener(pocniIgruCB);
nazadPocetniEvListener(nazadCB);

const gradoviIgraCB = function () {
  document.querySelector(".pogodiZastavu").style.display = "none";
  uzimanjeDrzava();
  isprazniDrzave();
  pocetniEkran.style.display = "none";
  zavrsni.style.display = "none";
  igrajPonovoXListener(gradoviIgraCB);
};

export const vratiNazadCB = function () {
  zavrsni.style.display = "none";
  document.querySelector(".pogodiGlavniGrad").style.display = "none";
  document.querySelector(".pogodiZastavu").style.display = "none";
  pocetniEkran.style.display = "grid";
};

vratiNazadEvListener(vratiNazadCB, nazadCB);

let vrijemeZastave = false;
let vrijemeGradovi = false;

const updateVremena = function () {
  if (mod === 1) {
    if (vrijemeZastave) return;
    setInterval(() => (vrijemeEl.textContent = produzenFormat), 1000);
    vrijemeZastave = true;
  } else if (mod === 2) {
    if (vrijemeGradovi) return;
    setInterval(() => (vrijemeZastaveEl.textContent = produzenFormat), 1000);
    vrijemeGradovi = true;
  }
};
export async function uzimanjeDrzava() {
  modIgre(1);
  isprazniDrzave();
  skloniPocetni();
  postaviUcitavanje();
  await uzmiDrzave();
  skloniUcitavanje();
  prikaziKanvasIgreGradova();
  odabirDrzava(sveDrzave, num, true);
  oneTapSlicice(drzaveH);
  ubacivanjeEvListenera();
  funkcijaVremena();
  updateVremena();
  render();
  pogadjanjeGrada();
  zavrsiIgru();
}

export const lijevoDugmeView = function () {
  dugmeLijevoCB();
  render();
  if (nizDrzava[i].evList) skloniEvListener(opcije, callBack);
};

export const desnoDugmeView = function () {
  dugmeDesnoCB();
  render();
};

//Zastave

function prikaziKanvasZastave() {
  document.querySelector(".pogodiZastavu").style.display = "grid";
}

const zastaveIgraCB = function () {
  document.querySelector(".pogodiGlavniGrad").style.display = "none";
  uzimanjeZastava();
  isprazniDrzave();
  pocetniEkran.style.display = "none";
  zavrsni.style.display = "none";
  igrajPonovoXListener(zastaveIgraCB);
};

pocniZastaveEvListener(zastaveIgraCB);

//Reset

export const resetIgre = function () {
  console.log();
  if (mod === 1) {
    igrajPonovoEvListener(gradoviIgraCB);
  }
  if (mod === 2) {
    igrajPonovoEvListener(zastaveIgraCB);
  }
};

const potvrdiImeCB = function () {
  provjera(unesenaDrzava);
};

const obrisiImeCB = function () {
  unesenaDrzava.value = "";
  unesenaDrzava.placeholder = "";
};
const unesenaDrzavaCB = function (Event) {
  if (Event.key !== "Enter") return;
  provjera(unesenaDrzava);
};
export const brisanjePolja = function () {
  // unesenaDrzava.disabled = false;
  unesenaDrzava.focus();
  unesenaDrzava.value = "";
  unesenaDrzava.textContent = "";
};

const dodajEv = function () {
  potvrdiImeEvListener(potvrdiImeCB);
  obrisiImeEvListener(obrisiImeCB);
  console.log(unesenaDrzava);
  unesenaDrzava.disabled = false;
};
const ukloniEv = function () {
  potvrdiImeEvSklanjanje(potvrdiImeCB);
  obrisiImeEvSklanjanje(obrisiImeCB);
  console.log(unesenaDrzava);
  unesenaDrzava.disabled = true;
};

export const lijevoZastaveCB = function () {
  dugmeLijevoCB();

  vecOdgovoreno(dodajEv, ukloniEv);
  brisanjePolja();
  renderZastave();
};

export const desnoZastaveCB = function () {
  dugmeDesnoCB();
  vecOdgovoreno(dodajEv, ukloniEv);
  brisanjePolja();
  renderZastave();
};

potvrdiImeEvListener(potvrdiImeCB);
obrisiImeEvListener(obrisiImeCB);
unesenaDrzavaEvListener(unesenaDrzavaCB.bind(Event));
zastaveIgraEvListener(gradoviIgraCB);
lijevoZastaveEvListener(lijevoZastaveCB);
desnoZastaveEvListener(desnoZastaveCB);

export const renderZastave = function () {
  if (nizDrzava[i]) mainUpdate(imeDrzave, trenutnaDrzavaZastave, zastava);
};

const oneTapSliciceZastaveCB = function (e) {
  j = Number(e.target.classList[1] - 1);
  updateIndex();
  vecOdgovoreno(dodajEv, ukloniEv);
  renderZastave();
};

const oneTapSliciceZastave = function (item) {
  item.forEach((item, j) => {
    oneTapSliciceZastaveEvListener(item, oneTapSliciceZastaveCB.bind(Event));
    item.style.backgroundImage = `url(${nizDrzava[j].zastava})`;
  });
};

function resetIgreZastave() {
  resetPolja();
  ukloniEv();
  dodajEv();
  brisanjePolja();
  unesenaDrzava.placeholder = "Unesi ime drzave";
}
export async function uzimanjeZastava() {
  modIgre(2);
  isprazniDrzave();
  skloniPocetni();
  postaviUcitavanje();
  await uzmiDrzave();
  skloniUcitavanje();
  prikaziKanvasZastave();
  resetIgreZastave();
  odabirDrzava(sveDrzave, num, false);
  oneTapSliciceZastave(sliciceH);
  ubacivanjeEvListenera();
  funkcijaVremena();
  updateVremena();
  renderZastave();
  zavrsiIgru();
}
