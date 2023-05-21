      // PODESAVANJE/SETOVANJE VISINA 3 DIVA NA OSNOVU VISINE NAJVISEG

      const divovi = document.querySelectorAll('.visina');

      let maksVisina = 0;
      divovi.forEach(div => {
        const visina = div.scrollHeight;
        if (visina > maksVisina) {
          maksVisina = visina;
        }
      });

      maksVisina+=20;
      
      divovi.forEach(div => {
        div.style.height = maksVisina + 'px';
      });