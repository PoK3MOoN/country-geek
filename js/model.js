export const opcije = document.querySelectorAll(".opcija");
export let nizDrzava = [];
export let i = 0;
export let sveDrzave;
export let num;
export let izvor;
export let skracenFormat = `0min`;
export let produzenFormat = `00:00`;
export let sec = 0;
export let min = 0;
export const drzaveH = document.querySelectorAll(".slicica-h");
export const callBack = cb.bind(Event);
export let zavrseno = false;
import {
  brisanjePolja,
  j,
  render,
  renderZastave,
  resetIgre,
} from "./controler.js";
import { zastaveIgra } from "./views/pocetniEkran.js";
import {
  obrisiIme,
  potvrdiIme,
  potvrdiImeEvListener,
  potvrdiImeEvSklanjanje,
  unesenaDrzava,
} from "./views/pogodiDrzave.js";
import {
  skloniEvListener,
  pogadjanjeEvListener,
  gradoviIgraCanvas,
} from "./views/pogodiGradove.js";
import { zavrsni } from "./views/zavrsni.js";

export let mod = 0;

export const modIgre = function (vrijednost) {
  mod = vrijednost;
};

export const updateIndex = function () {
  i = j;
};
export const odredjivanjeGlGrada = function (opcije) {
  opcije.forEach((item, j) => {
    item.classList.remove("glavniGrad");
    item.textContent = nizDrzava[i].opcije[j];
  });
  const glGradIndex = nizDrzava[i].opcije[3];
  opcije[glGradIndex].classList.add("glavniGrad");
};

export const dugmeLijevoCB = function () {
  if (i === 0) {
    i = 9;
    return;
  }
  i--;
  if (i === 9) return;
};

export const dugmeDesnoCB = function () {
  if (i === 9) {
    i = 0;
    return;
  }
  // skloniEvListener(opcije, callBack);
  i++;
};

export const tajmer = function (vrijeme) {
  return setTimeout(() => {
    if (i === 9) i = 0;
    while (nizDrzava[i].opcije.length > 4) {
      i++;
    }
    render();
  }, vrijeme);
};

export const napraviRandomBroj = function (max) {
  return Math.trunc(Math.random() * max);
};

export const skloniLazneDrzave = function (drzave) {
  sveDrzave = drzave.filter(
    (item) =>
      item.name.common != "Isle of Man" &&
      item.name.common != "Kosovo" &&
      item.name.common != "Guernsey" &&
      item.name.common != "Faroe Islands" &&
      item.name.common != "Svalbard and Jan Mayen" &&
      item.name.common != "Jersey" &&
      item.name.common != "Åland Islands"
  );
};
export const odabirDrzava = function (sveDrzave, num, zastava) {
  for (let i = 0; i < sveDrzave.length; i++) {
    console.log(sveDrzave[i].name);
  }
  for (let j = 0; j < 10; j++) {
    const random = napraviRandomBroj(num);
    izvor = sveDrzave[random].flags.png;

    nizDrzava.push({});
    nizDrzava[j].ime = sveDrzave[random].name.common;
    nizDrzava[j].zastava = sveDrzave[random].flags.png;
    if (zastava) {
      nizDrzava[j].glGrad = sveDrzave[random].capital[0];
      nizDrzava[j].ispunjen = false;
      nizDrzava[j].opcije = [];
      nizDrzava[j].evList = false;
    }

    const iskoristeneDrzave = [];
    while (iskoristeneDrzave.length < 3) {
      const random2 = napraviRandomBroj(num);
      if (
        !iskoristeneDrzave.some((item) => item === random2) &&
        random2 !== random
      ) {
        iskoristeneDrzave.push(random2);
        nizDrzava[j].opcije?.push(sveDrzave[random2].capital[0]);
      }
    }
    sveDrzave.splice(random, 1);

    const randomBroj = napraviRandomBroj(3);
    nizDrzava[j].opcije?.push(randomBroj);
    if (nizDrzava[j].opcije)
      nizDrzava[j].opcije[randomBroj] = nizDrzava[j].glGrad;

    num--;
  }
};

// export const odabirZastave = function (sveDrzave, num, zastavaSlika, render) {
//   for (let j = 0; j < 10; j++) {
//     const random = napraviRandomBroj(num);
//     izvor = sveDrzave[random].flags.png;

//     nizDrzava.push({});
//     nizDrzava[j].ime = sveDrzave[random].name.common;
//     nizDrzava[j].zastava = sveDrzave[random].flags.png;
//     nizDrzava[j].glGrad = sveDrzave[random].capital[0];
//     nizDrzava[j].ispunjen = false;
//     nizDrzava[j].opcije = [];
//     nizDrzava[j].evList = false;

//     const iskoristeneDrzave = [];
//     while (iskoristeneDrzave.length < 3) {
//       const random2 = napraviRandomBroj(num);
//       if (
//         !iskoristeneDrzave.some((item) => item === random2) &&
//         random2 !== random
//       ) {
//         iskoristeneDrzave.push(random2);
//         nizDrzava[j].opcije.push(sveDrzave[random2].capital[0]);
//       }
//     }
//     sveDrzave.splice(random, 1);
//     zastavaSlika.src = izvor;

//     const randomBroj = napraviRandomBroj(3);
//     nizDrzava[j].opcije.push(randomBroj);
//     nizDrzava[j].opcije[randomBroj] = nizDrzava[j].glGrad;

//     num--;
//   }
// };

export async function uzmiDrzave() {
  //Asinhrono uzimanje podataka...
  const api = await fetch("https://restcountries.com/v3.1/region/europe");
  sveDrzave = await api.json();
  skloniLazneDrzave(sveDrzave);

  num = sveDrzave.length;
}

let interval;
export const funkcijaVremena = function () {
  interval = setInterval(() => {
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
    skracenFormat = `${min}min`;
    produzenFormat = `${min.toString().padStart(2, "0")}:${sec
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
};
export const resetVremena = function () {
  produzenFormat = "00:00";
  clearInterval(interval);
  sec = 0;
  min = 0;
};
export const isprazniDrzave = function () {
  nizDrzava = [];
  i = 0;
  sveDrzave;
  num;
  izvor;
  resetVremena();
};

const tacnaSlicica = function (odgovor, slika) {
  odgovor.style.backgroundColor = "green";
  drzaveH[i].style.backgroundImage = `linear-gradient(
    rgba(0, 255, 0, 0.5),
    rgba(0, 255, 0, 0.5)
    ), url(${slika})`;
};

const netacnaSlicica = function (odgovor, slika) {
  odgovor.style.backgroundColor = "red";
  drzaveH[i].style.backgroundImage = `linear-gradient(
      rgba(255, 0, 0, 0.5),
      rgba(255, 0, 0, 0.5)
      ), url(${slika})`;
};

const brojTacnih = function () {
  let counter = 0;
  if (nizDrzava[0]?.opcije)
    nizDrzava.forEach((item) => {
      if (item.opcije[3] === item.opcije[4]) counter++;
    });
  else
    nizDrzava.forEach((item) => {
      if (item.ime === "tacno") counter++;
    });
  return counter;
};

const provjeraOdgovorenihDrzava = function () {
  return nizDrzava.every((item) => item.opcije.length === 5);
};

export const zavrsniEkran = function () {
  gradoviIgraCanvas.style.display = "none";
  document.querySelector(".pogodiZastavu").style.display = "none";
  zavrsni.style.display = "grid";
  const tacniiSat = document.querySelectorAll("h4");
  tacniiSat[0].textContent = `${brojTacnih()}/10`;

  tacniiSat[1].textContent = produzenFormat.split("").splice(1, 4).join("");
  resetIgre();
  return;
};

function cb(e) {
  if (!nizDrzava[0]) return;
  nizDrzava[i].evList = true;

  if (e.target.classList[1] === "glavniGrad")
    tacnaSlicica(e.target, nizDrzava[i].zastava);
  else netacnaSlicica(e.target, nizDrzava[i].zastava);
  pronadjiOdgovor(e.target.textContent);
  if (provjeraOdgovorenihDrzava()) {
    zavrsniEkran();
  }
  skloniEvListener(opcije, callBack);
  tajmer(500);
}

const pronadjiOdgovor = function (input) {
  nizDrzava[i].opcije.find((item, j) => {
    if (item === input) nizDrzava[i].opcije.push(j);
  });
};

export const pogadjanjeGrada = function () {
  if (!nizDrzava[0]) return;

  opcije.forEach((item) => {
    item.style.backgroundColor = "#FA5252";
  });

  pogadjanjeEvListener(opcije, callBack);

  const tacanOdgovor = nizDrzava[i].opcije[3];
  const unijetOdgovor = nizDrzava[i].opcije[4];

  if (nizDrzava[i].opcije.length > 4) {
    if (tacanOdgovor === unijetOdgovor)
      tacnaSlicica(opcije[unijetOdgovor], nizDrzava[i].zastava);
    else netacnaSlicica(opcije[unijetOdgovor], nizDrzava[i].zastava);
  }
};

//Zastave

const bojaOdgovoraZastave = function (input, boja) {
  input.blur();
  input.parentNode.childNodes[1].childNodes[1].style.backgroundColor = boja;
  input.parentNode.childNodes[5].childNodes[1].style.backgroundColor = boja;
  document.querySelectorAll(".zavjesa").forEach((item) => {
    item.style.backgroundColor = boja;
  });
  input.parentNode.childNodes[3].style.backgroundColor = boja;
};

let poljeUnesi = document.querySelector("input");
export const tajmerZastave = function (vrijeme) {
  return setTimeout(() => {
    if (
      nizDrzava.every((item) => item.ime === "tacno" || item.ime === "netacno")
    ) {
      zavrsniEkran();
    } else {
      if (i === 9) i = 0;
      while (nizDrzava[i].ime === "tacno" || nizDrzava[i].ime === "netacno") {
        i++;
      }
      bojaOdgovoraZastave(poljeUnesi, "#fa5252");
      brisanjePolja();
      poljeUnesi.focus();
      renderZastave();
    }
  }, vrijeme);
};

export const resetPolja = function () {
  bojaOdgovoraZastave(poljeUnesi, "#fa5252");
  brisanjePolja();
  poljeUnesi.focus();
  manipulacijaIkonama(1);
};

export const provjera = function (input) {
  poljeUnesi ??= input;
  const odgovor = poljeUnesi.value.toString().toLowerCase().replaceAll(" ", "");
  const trenutna = nizDrzava[i].ime
    .toString()
    .toLowerCase()
    .replaceAll(" ", "");
  if (odgovor === trenutna) {
    nizDrzava[i].ime = "tacno";
    bojaOdgovoraZastave(poljeUnesi, "green");
  } else {
    nizDrzava[i].ime = "netacno";
    bojaOdgovoraZastave(poljeUnesi, "red");
  }
  nizDrzava[i].odgovor = poljeUnesi.value;
  tajmerZastave(500);
};
export const manipulacijaIkonama = function (vrijednost) {
  document.querySelector(".potvrdi-tekst").style.opacity = vrijednost;
  document.querySelector(".obrisi-tekst").style.opacity = vrijednost;
  document.querySelector(".zavjesa").style.opacity = vrijednost;
  document.querySelector(".x-ikona").style.opacity = vrijednost;
  document.querySelector(".strihir-ikona").style.opacity = vrijednost;
};

export const vecOdgovoreno = function (dodaj, ukloni) {
  ukloni();
  if (nizDrzava[i].ime !== "tacno" && nizDrzava[i].ime !== "netacno") {
    dodaj();
  }

  poljeUnesi.placeholder = "Unesi ime drzave";
  poljeUnesi.disabled = false;

  manipulacijaIkonama(1);
  bojaOdgovoraZastave(poljeUnesi, "#fa5252");

  if (nizDrzava[i].ime !== "tacno" && nizDrzava[i].ime !== "netacno") return;

  manipulacijaIkonama(0);
  if (nizDrzava[i].ime === "tacno") bojaOdgovoraZastave(poljeUnesi, "green");
  if (nizDrzava[i].ime === "netacno") bojaOdgovoraZastave(poljeUnesi, "red");
  poljeUnesi.placeholder = nizDrzava[i].odgovor;
  poljeUnesi.disabled = true;
  document.querySelector(".potvrdi").disabled = true;
  document.querySelector(".obrisi").disabled = true;
};
