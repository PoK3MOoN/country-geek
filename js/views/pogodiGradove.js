"use strict";
export const zastaveCanvas = document.querySelector(".pogodiZastavu");
zastaveCanvas.style.display = "none";

export const gradoviIgraCanvas = document.querySelector(".pogodiGlavniGrad");
gradoviIgraCanvas.style.display = "none";

export const trenutnaDrzava = document.querySelector(".trenutnaDrzavaPoRedu");
export const ponudjeniOdgovori = document.querySelector(".ponudjeniOdgovori");
export const imeDrzave = document.querySelector(".nazivTrenutneDrzave");
export const zastavaSlika = document.querySelector(".zastava");

import { lijevoDugmeView, desnoDugmeView } from "../controler.js";
import { opcije } from "../model.js";

const lijevoDugme = document.querySelector(".lijevo");
const desnoDugme = document.querySelector(".desno");

export const ubacivanjeEvListenera = function () {
  lijevoDugme.addEventListener("click", lijevoDugmeView);
  desnoDugme.addEventListener("click", desnoDugmeView);
};

export const sklanjanjeEvListenera = function (callBack) {
  opcije.forEach((item, j) => {
    if (j < 3) item.removeEventListener("click", callBack, false);
  });
};

export const oneTapSliciceEvListener = function (item, callBack) {
  item.addEventListener("click", callBack);
};

export const pogadjanjeEvListener = function (opcije, callBack) {
  opcije.forEach((item) => item.addEventListener("click", callBack));
};

export const skloniEvListener = function (opcije, callBack) {
  let count = 0;
  opcije.forEach((item) => {
    if (count < 3) item.removeEventListener("click", callBack);
    count++;
  });
};
