<template>
  <header class="header">
    <router-link to="/">
      <img :src="logo" class="logo" alt="Logo"/>
    </router-link>
    <nav :active="isMobileMenuOpen ? true : null">
      <router-link to="/">Početna</router-link>
      <div class="nav-dropdown" :active="isDropdownOpen ? true : null">
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
            <router-link to="/usluge" class="nav-dropdown-trigger">Svi tretmani</router-link>
          </li>
        </ul>
      </div>
      <router-link to="/o-meni">O meni</router-link>
      <router-link to="/cjenik">Cjenik</router-link>
      <router-link to="/radno-vrijeme">Radno vrijeme</router-link>
    </nav>

    <div id="menu" role="button" @click="isMobileMenuOpen = !isMobileMenuOpen" :active="isMobileMenuOpen ? true : null">
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script lang="ts" setup>
import logo from '@/assets/instatera.svg'
import {ref} from 'vue'

const isDropdownOpen = ref(false)
const isMobileMenuOpen = ref(false)

</script>

<style scoped>

#menu {
  width: 30px;
  height: 30px;
  position: relative;
  cursor: pointer;
  display: flex;
}

#menu span {
  position: absolute;
  height: 4px;
  width: 100%;
  background: black;
  border-radius: 9px;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  position: relative;
}

.logo {
  width: 250px;
}

nav[active] {
  display: flex;
  opacity: 1;
  visibility: visible;
}

nav {
  position: absolute;
  box-sizing: border-box;
  top: 90px;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  z-index: 9;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  background: white;
  padding: 20px;
  border: 1px solid rgba(231, 231, 233, 0.5);
  border-radius: 15px;
  display: none;
  gap: 10px;

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
}

.nav-dropdown-trigger {
  display: flex;
  cursor: pointer;
  align-items: center;
  font-weight: 500;
  color: var(--color-green-light);
  text-decoration: inherit;
}

.nav-dropdown-trigger:hover {
  color: var(--color-green-dark);
}

.nav-dropdown-list {
  max-height: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  visibility: hidden;
  box-sizing: border-box;
  transition: all 200ms ease-in-out;
  opacity: 0;
  gap: 10px;
  padding-left: 20px;
}

.nav-dropdown-list[active] {
  opacity: 1;
  visibility: visible;
  max-height: 1000px;
  padding-top: 10px;
}

</style>
