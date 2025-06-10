<template>
  <header class="header">
    <router-link to="/">
      <img :src="logo" class="logo" alt="Logo"/>
    </router-link>
    <nav>
      <router-link to="/">Početna</router-link>
      <div class="nav-dropdown" :active="isDropdownOpen ? true : null" @mouseleave="isDropdownOpen = false" @mouseenter="isDropdownOpen = true">
        <span class="nav-dropdown-trigger" @click="isDropdownOpen = !isDropdownOpen">
          Tretmani
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
            <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"/>
          </svg>
        </span>

        <ul class="nav-dropdown-list" :active="isDropdownOpen ? true : null">
          <li>
            <router-link to="/bowen">Bowen</router-link>
          </li>
          <li>
            <router-link to="/baby-bowen">Baby Bowen</router-link>
          </li>
          <li>
            <router-link to="/medicinska">Medicinska masaža</router-link>
          </li>

          <li>
            <router-link to="/tecar">Tecar</router-link>
          </li>
          <li>
            <router-link to="/terapijske-vjezbe">Terapijske vježbe</router-link>
          </li>
          <li>
            <router-link to="/tretman-oziljaka">Tretman ožiljaka</router-link>
          </li>
          <li>
            <router-link to="/deep-lifting">Deep Lifting</router-link>
          </li>
          <li>
            <router-link to="/radiofrekvencija-lica">Radiofrekvencija lica</router-link>
          </li>
          <li>
            <router-link to="/bukalna">Bukalna</router-link>
          </li>

          <li>
            <router-link to="/usluge" class="nav-dropdown-trigger">
              <button>Svi tretmani</button>
            </router-link>
          </li>
        </ul>
      </div>
      <router-link to="/o-meni">O meni</router-link>
      <router-link to="/cjenik">Cjenik</router-link>
      <router-link to="/radno-vrijeme">Radno vrijeme</router-link>
    </nav>
    <button>Rezerviraj</button>
  </header>
</template>

<script lang="ts" setup>
import logo from '@/assets/instatera.svg'
import {ref} from 'vue'

const isDropdownOpen = ref(false)

</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  width: 250px;
}

nav {
  display: flex;
  gap: 20px;

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.nav-dropdown {
  display: flex;
  flex-direction: column;
  position: relative;
}

.nav-dropdown[active] {

}

.nav-dropdown-trigger {
  display: flex;
  align-items: center;
}

.nav-dropdown-list {
  position: absolute;
  top: 30px;
  left: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: white;
  visibility: hidden;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  min-width: 230px;
  padding: 24px;
  -webkit-transform: translateX(0) translateY(-10px);
  -ms-transform: translateX(0) translateY(-10px);
  transform: translateX(0) translateY(-10px);
  -webkit-transition: opacity 0.2s ease-in-out 0.05s, visibility 0.2s ease-in-out 0.05s, -webkit-transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s;
  transition: opacity 0.2s ease-in-out 0.05s, visibility 0.2s ease-in-out 0.05s, -webkit-transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s;
  transition: opacity 0.2s ease-in-out 0.05s, visibility 0.2s ease-in-out 0.05s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s;
  transition: opacity 0.2s ease-in-out 0.05s, visibility 0.2s ease-in-out 0.05s, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s, -webkit-transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) 0.45s;
  border: 1px solid rgba(231, 231, 233, 0.5);
  border-radius: 8px;
  opacity: 0;
  -webkit-box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);
  box-shadow: 0px 15px 50px 0px rgba(27, 32, 50, 0.1);
}

.nav-dropdown-list[active] {
  opacity: 1;
  visibility: visible;
}

</style>
