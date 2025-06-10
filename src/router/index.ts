import {createRouter, createWebHistory} from "vue-router";
import type { RouteRecordRaw } from 'vue-router'
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/baby-bowen',
        name: 'BabyBowen',
        component: () => import('../views/tretmani/BabyBowen.vue'),
    },
    {
        path: '/bowen',
        name: 'Bowen',
        component: () => import('../views/tretmani/Bowen.vue'),
    },
    {
        path: '/bukalna',
        name: 'Bukalna',
        component: () => import('../views/tretmani/Bukalna.vue'),
    },
    {
        path: '/deep-lifting',
        name: 'DeepLifting',
        component: () => import('../views/tretmani/DeepLifting.vue'),
    },
    {
        path: '/medicinska',
        name: 'Medicinska',
        component: () => import('../views/tretmani/Medicinska.vue'),
    },
    {
        path: '/radiofrekvencija-lica',
        name: 'RadiofrekvencijaLica',
        component: () => import('../views/tretmani/RadiofrekvencijaLica.vue'),
    },
    {
        path: '/tecar',
        name: 'Tecar',
        component: () => import('../views/tretmani/Tecar.vue'),
    },
    {
        path: '/terapijske-vjezbe',
        name: 'TerapijskeVjezbe',
        component: () => import('../views/tretmani/TerapijskeVjezbe.vue'),
    },
    {
        path: '/tretman-oziljaka',
        name: 'TretmanOziljaka',
        component: () => import('../views/tretmani/TretmanOziljaka.vue'),
    },
    {
        path: '/usluge',
        name: 'Usluge',
        component: () => import('../views/Usluge.vue'),
    },
    {
        path: '/o-meni',
        name: 'OMeni',
        component: () => import('../views/OMeni.vue'),
    },
    {
        path: '/cjenik',
        name: 'Cjenik',
        component: () => import('../views/Cjenik.vue'),
    },
    {
        path: '/informacije-o-tvrtki',
        name: 'InformacijeOTvrtki',
        component: () => import('../views/legal/InformacijeOTvrtki.vue'),
    },
    {
        path: '/opci-uvjeti-koristenja',
        name: 'OpciUvjetiKoristenja',
        component: () => import('../views/legal/OpciUvjetiKoristenja.vue'),
    },
    {
        path: '/politika-kolacica',
        name: 'PolitikaKolacica',
        component: () => import('../views/legal/PolitikaKolacica.vue'),
    },
    {
        path: '/politika-privatnosti',
        name: 'PolitikaPrivatnosti',
        component: () => import('../views/legal/PolitikaPrivatnosti.vue'),
    },
    {
        path: '/radno-vrijeme',
        name: 'RadnoVrijeme',
        component: () => import('../views/RadnoVrijeme.vue'),
    },
    {
        path: '/cesto-postavljana-pitanja',
        name: 'CestoPostavljanaPitanja',
        component: () => import('../views/CestoPostavljanaPitanja.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router