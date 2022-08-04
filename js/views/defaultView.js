export const vrijemeEl = document.querySelector(".vrijeme");
export const zavrsiDugme = document.querySelectorAll(".zavrsiSve");
export const vratiSeNazadZavrsni =
  document.querySelectorAll(".nazad-na-pocetni");
export const vratiSeNazadIgra = document.querySelectorAll(".vracanje-nazad");
export const igrajPonovo = document.querySelectorAll(".ponovi-igru");
export const igrajPonovoEvListener = function (callBack) {
  igrajPonovo.forEach((item) => item.addEventListener("click", callBack));
};
export const vratiNazadEvListener = function (callBack, callBack2) {
  vratiSeNazadZavrsni.forEach((item) => {
    item.addEventListener("click", callBack);
    item.addEventListener("click", callBack2);
  });
  vratiSeNazadIgra.forEach((item) => {
    item.addEventListener("click", callBack);
    item.addEventListener("click", callBack2);
  });
};

export const zavrsiDugmeEv = function (callBack) {
  zavrsiDugme.forEach((item) => item.addEventListener("click", callBack));
};
