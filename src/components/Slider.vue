<template>
  <div class="services-container">
    <router-link to="/bowen" class="service-slide">
      <img :src="bowenImage">
      <span class="title">BOWEN</span>
      <div class="description">
        <p class="price">Cijena od 35 €</p>
        <p class="time">Vrijeme trajanja tretmana od 30 do 60 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/baby-bowen" class="service-slide">
      <img :src="bowenImage">
      <span class="title">BABY BOWEN</span>
      <div class="description">
        <p class="price">Cijena od 15 €</p>
        <p class="time">Vrijeme trajanja tretmana od 20 do 40 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/tecar" class="service-slide">
      <img :src="tecarImage">
      <span class="title">TECAR TERAPIJA</span>
      <div class="description">
        <p class="price">Cijena od 20 €</p>
        <p class="time">Vrijeme trajanja tretmana od 20 do 40 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/terapijske-vjezbe" class="service-slide">
      <img :src="terapijaImage">
      <span class="title">TERAPIJSKE VJEŽBE</span>
      <div class="description">
        <p class="price">Cijena od 20 €</p>
        <p class="time">Vrijeme trajanja tretmana od 30 do 60 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/medicinska" class="service-slide">
      <img :src="medicinskaImage">
      <span class="title">MEDICINSKA MASAŽA</span>
      <div class="description">
        <p class="price">Cijena od 25 €</p>
        <p class="time">Vrijeme trajanja tretmana od 30 do 60 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/deep-lifting" class="service-slide">
      <img :src="liceImage">
      <span class="title">DEEP LIFTING</span>
      <div class="description">
        <p class="price">Cijena od 40 €</p>
        <p class="time">Vrijeme trajanja tretmana 35 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/bukalna" class="service-slide">
      <img :src="liceImage">
      <span class="title">BUKALNA MASAŽA</span>
      <div class="description">
        <p class="price">Cijena od 25 €</p>
        <p class="time">Vrijeme trajanja tretmana 20 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/radiofrekvencija-lica" class="service-slide">
      <img :src="liceImage">
      <span class="title">RADIOFREKVENCIJA LICA</span>
      <div class="description">
        <p class="price">Cijena od 30 €</p>
        <p class="time">Vrijeme trajanja tretmana 30 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/tretman-oziljaka" class="service-slide">
      <img :src="oziljakImage">
      <span class="title">TRETMAN OŽILJKA</span>
      <div class="description">
        <p class="price">Cijena od 20 €</p>
        <p class="time">Vrijeme trajanja tretmana od 30 do 60 minuta</p>
        <button>Saznaj više</button>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import bowenImage from '@/assets/bowen.jpg';
import liceImage from '@/assets/lice.jpg';
import medicinskaImage from '@/assets/medicinska.jpg';
import oziljakImage from '@/assets/oziljak.jpg';
import tecarImage from '@/assets/tecar.jpg';
import terapijaImage from '@/assets/terapija.jpg';
</script>

<style scoped>

.swiper-slide {
  border-radius: 15px;
  backdrop-filter: blur(10px);
}

.services-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.service-slide {
  flex: 1 1 30%;
  min-width: 30%;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 15px;
  transition: all 200ms ease-in-out;
  -webkit-box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);
  box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);

  .title {
    backdrop-filter: blur(10px);
    font-size: 1.8rem;
    font-weight: 500;
    border-radius: 15px;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: black;
  }

  .description {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    transition: all 250ms ease-in-out;
    visibility: hidden;
    opacity: 0;
    height: 0;
  }
}

img {
  transition: all 250ms ease-in-out;
  width: 100%;
  object-fit: cover;
  border-radius: 15px;
  max-height: 80%;
}

.service-slide:hover {
  transform: scale(1.05);

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
    max-height: 40%;
  }

  .description {
    visibility: visible;
    opacity: 1;
    height: 60%;
  }
}


</style>