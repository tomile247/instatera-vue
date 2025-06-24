<template>
  <header class="header">
    <router-link to="/">
      <img :src="logo" class="logo" alt="Logo"/>
    </router-link>

    <div id="menu" role="button" @click="isMobileMenuOpen = !isMobileMenuOpen" :active="isMobileMenuOpen ? true : null">
      <span></span>
      <span></span>
    </div>

    <nav :active="isMobileMenuOpen ? true : null">
      <router-link to="/">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
        Početna
      </router-link>
      <div class="nav-dropdown" :active="isDropdownOpen ? true : null">
        <span class="nav-dropdown-trigger" @click="isDropdownOpen = !isDropdownOpen">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M481-276ZM120-160v-160q0-83 58.5-141.5T320-520h429q38 0 64.5 26t26.5 64q0 31-19 55.5T773-342l-93 27v155q0 21-9.5 38T645-94q-16 11-35 13.5T571-86l-189-74H120Zm480-120H375q-7 0-10.5 4t-4.5 9q-1 5 1.5 9.5t8.5 6.5l230 91v-120Zm-400 40h84q-2-6-3-12t-1-13q0-39 28-67t67-28h163l214-59q5-2 7-5t1-7q-1-4-3.5-6.5T749-440H320q-50 0-85 35t-35 85v80Zm200-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T480-720q0-33-23.5-56.5T400-800q-33 0-56.5 23.5T320-720q0 33 23.5 56.5T400-640Zm81 364Zm-81-444Z"/></svg>
          Tretmani
          <svg class="chevron" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
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
            <router-link to="/usluge" class="nav-dropdown-trigger">Svi tretmani</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/o-meni">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg>
        O meni
      </router-link>
      <router-link to="/poklon-bon">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M160-280v80h640v-80H160Zm0-440h88q-5-9-6.5-19t-1.5-21q0-50 35-85t85-35q30 0 55.5 15.5T460-826l20 26 20-26q18-24 44-39t56-15q50 0 85 35t35 85q0 11-1.5 21t-6.5 19h88q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720Zm0 320h640v-240H596l84 114-64 46-136-184-136 184-64-46 82-114H160v240Zm200-320q17 0 28.5-11.5T400-760q0-17-11.5-28.5T360-800q-17 0-28.5 11.5T320-760q0 17 11.5 28.5T360-720Zm240 0q17 0 28.5-11.5T640-760q0-17-11.5-28.5T600-800q-17 0-28.5 11.5T560-760q0 17 11.5 28.5T600-720Z"/></svg>
        Poklon bon
      </router-link>
      <router-link to="/cjenik">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M600-120q-118 0-210-67T260-360H120v-80h122q-3-24-2.5-44.5T242-520H120v-80h140q38-106 130-173t210-67q69 0 130.5 24.5T840-748l-57 56q-37-32-83.5-50T600-760q-85 0-152 44.5T347-600h253v80H323q-4 27-3 47.5t3 32.5h277v80H347q34 71 101 115.5T600-200q53 0 99.5-18t83.5-50l57 56q-48 43-109.5 67.5T600-120Z"/></svg>
        Cjenik
      </router-link>
      <router-link to="/radno-vrijeme">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="m612-292 56-56-148-148v-184h-80v216l172 172ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-400Zm0 320q133 0 226.5-93.5T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 133 93.5 226.5T480-160Z"/></svg>
        Radno vrijeme
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts" setup>
import logo from '@/assets/instatera.svg'
import {ref} from 'vue'

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

</script>

<style scoped>

a, .nav-dropdown-trigger {
  color: black;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 250ms ease-in-out;
}

a:hover,
.nav-dropdown-trigger:hover {
  color: var(--color-green-light);
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

#menu {
  width: 40px;
  height: 25px;
  position: relative;
  cursor: pointer;
  display: flex;
}

#menu span {
  position: absolute;
  height: 4px;
  width: 100%;
  background-color: #C6AE8C;
  border-radius: 15px;
  left: 0;
  transition: 0.25s ease-in-out;
}

#menu span:nth-child(1) {
  top: 5px;
}

#menu span:nth-child(2) {
  top: 15px;
}

#menu[active] span:nth-child(1) {
  top: 10px;
  transform: rotate(-45deg);
}

#menu[active] span:nth-child(2) {
  top: 10px;
  transform: rotate(45deg);
}

header {
  position: fixed;
  border-radius: 15px;
  z-index: 10;
  padding: 5px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  box-sizing: border-box;
  background: #ffffff66;
  max-width: 450px;
  backdrop-filter: blur(50px);
}

.logo {
  width: 200px;
}

nav[active] {
  opacity: 1;
  visibility: visible;
  max-height: calc(95dvh - 80px);
  padding: 20px;
}

nav {
  padding: 0 20px;
  max-height: 0;
  display: flex;
  box-sizing: border-box;
  top: 0;
  left: 0;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  z-index: 9;
  margin: auto;
  width: 100%;

  border-radius: 15px;
  gap: 10px;
  transition: all 250ms ease-in-out;
  overflow: auto;
  ul {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    list-style: none;
  }
}

.nav-dropdown {
  display: flex;
  flex-direction: column;
  position: relative;

  .chevron {
    transition: 250ms ease-in-out;
  }
}

.nav-dropdown[active] {
  .chevron {
    transition: 250ms ease-in-out;
    transform: rotate(-180deg);
  }
}

.nav-dropdown-trigger {
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: 500;
  text-decoration: inherit;
}

.nav-dropdown-list {
  max-height: 0;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
  opacity: 0;
  gap: 10px;
  padding-left: 60px;
  overflow: hidden;
}

.nav-dropdown-list[active] {
  opacity: 1;
  visibility: visible;
  max-height: 400px;
  padding-top: 10px;
}

</style>
