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
    text-align: center;
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