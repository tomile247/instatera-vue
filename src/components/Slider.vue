<template>
  <div class="services-container">
    <router-link to="/bowen" class="service-slide">
      <img :src="bowenImage">
      <span class="title">Bowen</span>
      <div class="description">
        <p class="price">Cijena od 35 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          od 30 do 60 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/baby-bowen" class="service-slide">
      <img :src="bowenImage">
      <span class="title">Baby bowen</span>
      <div class="description">
        <p class="price">
          Cijena od 15 €
        </p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          od 20 do 40 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/tecar" class="service-slide">
      <img :src="tecarImage">
      <span class="title">Tecar</span>
      <div class="description">
        <p class="price">Cijena od 20 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          od 20 do 40 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/terapijske-vjezbe" class="service-slide">
      <img :src="terapijaImage">
      <span class="title">Terapijske vježbe</span>
      <div class="description">
        <p class="price">Cijena od 20 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          od 30 do 60 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/medicinska" class="service-slide">
      <img :src="medicinskaImage">
      <span class="title">Medicinska masaža</span>
      <div class="description">
        <p class="price">Cijena od 25 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          od 30 do 60 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/deep-lifting" class="service-slide">
      <img :src="liceImage">
      <span class="title">Deep lifting</span>
      <div class="description">
        <p class="price">Cijena od 40 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          35 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/bukalna" class="service-slide">
      <img :src="liceImage">
      <span class="title">Bukalna masaža</span>
      <div class="description">
        <p class="price">Cijena od 25 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          20 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/radiofrekvencija-lica" class="service-slide">
      <img :src="liceImage">
      <span class="title">Radiofrekvencija lica</span>
      <div class="description">
        <p class="price">Cijena od 30 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          30 minuta
        </p>
        <button>Saznaj više</button>
      </div>
    </router-link>

    <router-link to="/tretman-oziljaka" class="service-slide">
      <img :src="oziljakImage">
      <span class="title">Tretman ožiljaka</span>
      <div class="description">
        <p class="price">Cijena od 20 €</p>
        <p class="time">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
          od 30 do 60 minuta
        </p>
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
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  flex-wrap: wrap;
  max-width: 100vw;

  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }
}

.service-slide {
  max-width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
  -webkit-box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);
  box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);
  color: black;
  border-radius: 15px;

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

  .price {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.2rem;
  }

  .time {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  button {
    width: 50%;
  }
}

img {
  transition: all 250ms ease-in-out;
  width: auto;
  object-fit: cover;
  border-radius: 15px;
  max-height: 80%;
}

.service-slide:hover {
  transform: scale(1.05);

  img {
    width: auto;
    border-radius: 15px;
    max-height: 40%;
  }

  .description {
    visibility: visible;
    opacity: 1;
    height: 50%;
  }
}


</style>