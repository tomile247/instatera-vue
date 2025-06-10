<template>
  <div class="services-container">
    <router-link to="/bowen" class="service-slide" :style="{ backgroundImage: `url(${bowenImage})`}">
      <span class="title">BOWEN</span>
      <span>Saznaj više</span>
    </router-link>

    <router-link to="/baby-bowen" class="service-slide" :style="{ backgroundImage: `url(${bowenImage})`}">
      <span class="title">BABY BOWEN</span>
      <span>Saznaj više</span>
    </router-link>

    <router-link to="/tecar" class="service-slide" :style="{ backgroundImage: `url(${tecarImage})`}">
      <span class="title">TECAR TERAPIJA</span>
      <span>Saznaj više</span>
    </router-link>

    <router-link to="/terapijske-vjezbe" class="service-slide" :style="{ backgroundImage: `url(${terapijaImage})`}">
        <span class="title">TERAPIJSKE VJEŽBE</span>
        <span>Saznaj više</span>
    </router-link>

    <router-link to="/medicinska" class="service-slide" :style="{ backgroundImage: `url(${medicinskaImage})`}">
      <span class="title">MEDICINSKA MASAŽA</span>
      <span>Saznaj više</span>
    </router-link>

    <router-link to="/deep-lifting" class="service-slide" :style="{ backgroundImage: `url(${liceImage})`}">
      <span class="title">DEEP LIFTING</span>
      <span>Saznaj više</span>
    </router-link>

    <router-link to="/bukalna" class="service-slide" :style="{ backgroundImage: `url(${liceImage})`}">
      <span class="title">BUKALNA MASAŽA</span>
      <span>Saznaj više</span>
    </router-link>

    <router-link to="/radiofrekvencija-lica" class="service-slide" :style="{ backgroundImage: `url(${liceImage})`}">
      <span class="title">RADIOFREKVENCIJA LICA</span>
      <span>Saznaj više</span>
    </router-link>

    <router-link to="/tretman-oziljaka" class="service-slide" :style="{ backgroundImage: `url(${oziljakImage})`}">
      <div>
        <span>Primjenjuje se kod:


          <ul>
            <li></li>
          </ul>
        </span>
        <span class="title">TRETMAN OŽILJKA</span>
        <span>Saznaj više</span>
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
  align-items: flex-start;
  justify-content: flex-end;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 15px;
  transition: all 200ms ease-in-out;
  -webkit-box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);
  box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);

  .title {
    backdrop-filter: blur(10px);
    font-size: 1.8rem;
    color: white;
    font-weight: 500;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
}

.service-slide:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
}
</style>