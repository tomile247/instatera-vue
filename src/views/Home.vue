<template>
  <section id="intro" :style="{ backgroundImage: `url(${intro})` }">

    <div class="intro-text-container">
<!--        <h1>Instatera</h1>-->
<!--        <h2>CENTAR FIZIOTERAPIJE</h2>-->
    </div>

    <div class="highlight-cards">
      <span class="highlight">Više od 10 godina iskustva</span>
      <span class="highlight">300+ zadovoljnih klijenata</span>
      <span class="highlight">9 specijaliziranih tretmana</span>
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
      <img :src="portret" class="portret__image" alt="Portret"/>
    </article>
  </section>

  <section id="usluge">
    <h2>Usluge</h2>
    <Slider/>
  </section>

  <section id="recenzije">
    <h2>Recenzije</h2>
    <article>
      <ReviewSlider/>
    </article>
  </section>

  <section id="rezervacije">
    <h2>Rezerviraj termin</h2>
    <article>
      <div>
        <p>Rezerviraj svoj termin brzo i jednostavno!</p>
        <p>Preko aplikacije SrediMe možeš u svega par klikova rezervirati svoj tretman u Instatera centru. Bez čekanja,
          bez
          poziva — samo ti, tvoje potrebe i tvoje vrijeme.</p>
        <p>Tvoje vrijeme je dragocjeno — zato smo ti olakšali put do opuštanja! Odaberi uslugu, termin i… vidimo se!</p>
        <p>Tvoje tijelo će ti biti zahvalno.</p>
      </div>
      <img src="https://static.sredime.hr/image/logo.png">
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

  <section id="kako-do-mene">
    <h2>Kako do mene?</h2>
    <GoogleMap/>
  </section>

</template>

<script lang="ts" setup>
import poklonBon from '@/assets/poklon-bon.jpg';
import GoogleMap from '@/components/GoogleMap.vue';
import Slider from "@/components/Slider.vue";
import ReviewSlider from "@/components/ReviewSlider.vue";
import portret from '@/assets/portret.jpg';
import intro from '@/assets/intro.jpg';
</script>

<style scoped>

.portret__image {
  animation: morph 5s infinite alternate ease-in-out;
}

@keyframes morph {
  0% {
    clip-path: shape(from 94.06% 44.72%,curve to 94.03% 55.27% with 93.54% 50.00%,curve to 90.35% 64.36% with 94.51% 60.55%,curve to 82.46% 71.14% with 86.19% 68.18%,curve to 77.79% 80.09% with 78.73% 74.11%,curve to 71.17% 85.99% with 76.85% 86.07%,curve to 60.97% 86.23% with 65.49% 85.91%,curve to 51.99% 89.33% with 56.44% 86.54%,curve to 42.56% 91.82% with 47.55% 92.13%,curve to 33.04% 89.37% with 37.57% 91.50%,curve to 24.01% 84.77% with 28.51% 87.23%,curve to 16.79% 77.97% with 19.51% 82.31%,curve to 9.00% 70.20% with 14.07% 73.63%,curve to 4.08% 61.06% with 3.93% 66.77%,curve to 7.25% 50.35% with 4.23% 55.35%,curve to 7.56% 39.46% with 10.26% 45.36%,curve to 10.03% 30.34% with 4.85% 33.57%,curve to 17.12% 22.15% with 15.22% 27.12%,curve to 22.47% 12.72% with 19.02% 17.17%,curve to 32.08% 9.52% with 25.91% 8.27%,curve to 43.06% 11.97% with 38.26% 10.78%,curve to 52.82% 9.51% with 47.86% 13.17%,curve to 62.28% 8.49% with 57.78% 5.85%,curve to 73.21% 10.64% with 66.77% 11.12%,curve to 83.70% 14.25% with 79.66% 10.16%,curve to 87.76% 24.68% with 87.74% 18.33%,curve to 91.18% 35.23% with 87.78% 31.03%,curve to 94.06% 44.72% with 94.57% 39.44%);
  }
  to {
    clip-path: shape(from 94.30% 44.61%,curve to 91.00% 54.60% with 93.15% 50.00%,curve to 91.75% 65.82% with 88.85% 59.21%,curve to 87.48% 73.92% with 94.66% 72.43%,curve to 78.37% 80.47% with 80.30% 75.42%,curve to 72.77% 89.90% with 76.45% 85.53%,curve to 63.41% 94.02% with 69.10% 94.28%,curve to 52.79% 90.26% with 57.72% 93.77%,curve to 42.27% 90.61% with 47.86% 86.76%,curve to 33.77% 88.81% with 36.69% 94.46%,curve to 26.18% 81.68% with 30.86% 83.16%,curve to 18.20% 76.64% with 21.51% 80.20%,curve to 13.91% 68.29% with 14.89% 73.09%,curve to 6.76% 59.64% with 12.92% 63.50%,curve to 8.15% 50.88% with 0.59% 55.77%,curve to 11.11% 40.08% with 15.71% 45.99%,curve to 9.98% 30.07% with 6.51% 34.17%,curve to 17.14% 22.52% with 13.45% 25.96%,curve to 26.53% 19.16% with 20.84% 19.09%,curve to 36.15% 18.03% with 32.23% 19.22%,curve to 43.59% 8.57% with 40.07% 16.84%,curve to 52.14% 4.80% with 47.11% 0.30%,curve to 63.04% 7.74% with 57.18% 9.30%,curve to 70.80% 12.85% with 68.90% 6.18%,curve to 77.99% 20.79% with 72.70% 19.51%,curve to 88.88% 24.87% with 83.29% 22.07%,curve to 94.96% 33.45% with 94.47% 27.67%,curve to 94.30% 44.61% with 95.45% 39.23%);
  }
}

section {
  border-radius: 15px;
}

.intro-text-container {
  display: flex;
  flex-direction: column;
  padding: 20px;

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 2rem;
  }
}

.highlight-cards {
  display: flex;
  gap: 20px;
  padding: 20px;
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
  height: 40vh;
  min-height: 650px;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#o-meni {
  article {
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    font-size: 1.2rem;

    @media screen and (min-width: 1024px) {
      flex-direction: row;
    }
  }

  img {
    width: 100%;

    @media screen and (min-width: 1024px) {
      width: 50%;
    }
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

}

#rezervacije {
  article {
    animation: morph 3s infinite alternate ease-in-out;
    height: 90vh;
    background-color: var(--color-green-dark);
    text-align: center;
    font-size: 1.2rem;
    color: var(--color-text);
    font-weight: 600;
    padding: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    border-radius: 15px;
  }

  div {
    width: 70%;
  }

  img {
    width: auto;
    height: 60px;
  }
}
</style>