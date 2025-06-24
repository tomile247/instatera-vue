<template>
  <div ref="mapRef" class="map"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mapRef = ref<HTMLDivElement | null>(null)

onMounted(() => {
  if ((window as any).google && mapRef.value) {
    const map = new (window as any).google.maps.Map(mapRef.value, {
      center: {lat: 45.81704002979856, lng: 16.031093702207404},
      zoom: 16,
      disableDefaultUI: true,
    })

    new (window as any).google.maps.Marker({
      position: {lat: 45.81704002979856, lng: 16.031093702207404},
      map,
      title: 'Zagreb Office',
    })
  }
})
</script>

<style scoped>
.map {
  width: 30%;
  height: 400px;
  border-radius: 12px;
}
</style>
