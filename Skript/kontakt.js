      // PODESAVANJE/SETOVANJE VISINA 3 DIVA NA OSNOVU VISINE NAJVISEG

const divovi = document.querySelectorAll('.kontakt');

let maksVisina = 0;
divovi.forEach(div => {
  const visina = div.scrollHeight;
  if (visina > maksVisina) {
    maksVisina = visina;
  }
});

divovi.forEach(div => {
  div.style.height = maksVisina + 'px';
});