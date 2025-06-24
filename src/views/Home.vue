<template>
  <section id="intro">

    <div class="first-section">
      <div>
        <h1>Vratite tijelu slobodu pokreta i snagu.</h1>
        <h2>Posebni tretmani prilagođeni vašim potrebama.</h2>
      </div>

      <div class="highlight-cards">
        <span class="highlight">Više od 10 godina iskustva</span>
        <span class="highlight">300+ zadovoljnih klijenata</span>
        <span class="highlight">9 specijaliziranih tretmana</span>
      </div>

      <div>
        <p>Rezerviraj svoj termin brzo i jednostavno!</p>
        <p>Preko aplikacije SrediMe možeš u svega par klikova rezervirati svoj tretman u Instatera centru. Bez čekanja,
          bez
          poziva — samo ti, tvoje potrebe i tvoje vrijeme.</p>
        <p>Tvoje vrijeme je dragocjeno — zato smo ti olakšali put do opuštanja! Odaberi uslugu, termin i… vidimo se!</p>
        <p>Tvoje tijelo će ti biti zahvalno.</p>
      </div>

      <button>Rezervirajte termin</button>
    </div>

    <div class="second-section">
      <img :src="intro">
    </div>
  </section>

  <section id="o-meni">
    <h2>O meni</h2>
    <article>
      <div>
        <p>Moje ime je Danijela, prvostupnica sam fizioterapije kao i certificirana Bowen terapeutkinja.</p>

        <p>Od samog početka školovanja veliki sam zaljubljenik u struku, a s godinama iskustva i daljnjim školovanjem
          ljubav prema fizioterapiji i dalje raste.</p>

        <p>Centar fizioterapije „In Statera“ otvorila sam 2023. godine nakon ukupno više od 8 godina rada u struci kako
          bih se u potpunosti mogla individualno posvetiti svakom klijentu jer je napredak mojih klijenata ono što me
          motivira, ne samo profesionalno već me i moralno ispunjava. Veliko je zadovoljstvo imati mogućnost pomoći
          ljudima u poboljšanju kvalitete njihovog života, a najsretnija sam kada izađete sretni, zadovoljni i bez
          boli.</p>
      </div>
      <img :src="portret" alt="Portret"/>
    </article>
  </section>

  <section id="usluge">
    <h2>Usluge</h2>
    <Slider/>
  </section>

  <section id="recenzije">
    <h2>Recenzije</h2>
    <article>
      <h3>Pročitajte što klijeni misle o meni</h3>
      <div class="slider">
        <ReviewSlider/>
      </div>
    </article>
  </section>

  <section id="poklon-bon">
    <h2>Poklon bon</h2>
    <article>
      <div>
        <p>Tražiš poseban poklon za dragu osobu? Poklon bon za tretman je savršen izbor! Daruj trenutak opuštanja,
          zdravlja
          i njege – bilo da se radi o masaži, terapiji ili tretmanu lica, svaki bon prilagođavamo željama
          primatelja.</p>

        <p>Kako funkcionira?</p>

        <ol>
          <li>Odaberi tretman ili iznos</li>
          <li>Poklon bon možeš preuzeti osobno ili ga šaljemo digitalno</li>
          <li>Vrijedi 3 mjeseca od datuma kupnje</li>
          <li>Može se iskoristiti za bilo koji tretman iz ponude</li>
        </ol>

        <p>Neka tvoj poklon ostavi dojam – jer zdravlje i dobrobit su najljepši dar.</p>

        <p>Za narudžbu poklon bona, javi se telefonom, porukom ili putem e-maila.</p>
      </div>
      <img :src="poklonBon" class="poklon-bon__image" alt="Poklon bon"/>
    </article>
  </section>
</template>

<script lang="ts" setup>
import poklonBon from '@/assets/poklon-bon.jpg';
import Slider from "@/components/Slider.vue";
import ReviewSlider from "@/components/ReviewSlider.vue";
import portret from '@/assets/portret.jpg';
import intro from '@/assets/intro.jpg';
</script>

<style scoped>
section {
  border-radius: 15px;
}

.highlight-cards {
  display: flex;
  gap: 20px;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
      flex-direction: row;
  }
}

span.highlight {
  padding: 20px;
  display: flex;
  background-color:#8F4A3866;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  font-weight: 500;
  max-width: 250px;
}

#intro {
  background-size: cover;
  max-height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  color: #0e0e0e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .first-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 50%;

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  .second-section {
    width: 50%;

    img {
      width: 50vmax;
    }
  }

  button {
    width: 300px;
  }
}

h2 {
  font-size: 3rem
}

#o-meni {
  max-height: 100vh;

  article {
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;


    div {
      width: 30%;
      font-size: 1.5rem;
    }

    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }

  img {
    width: auto;
    height: 30vmax;
  }
}

#poklon-bon {
  article {
    display: flex;
    gap: 50px;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-green-light);
    border-radius: 15px;
    color: var(--color-text);

    @media screen and (min-width: 1024px) {
        flex-direction: row;
    }

    div {
      padding: 20px;
    }
  }

  img {
    border-radius: 15px;
    width: 100%;

    @media screen and (min-width: 1024px) {
      width: 60%;
    }
  }
}

#recenzije {
  height: 60vh;
  article {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
  }
  .slider {
    max-width: 50%;
  }
}
</style>