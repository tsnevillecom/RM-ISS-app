<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import IssIcon from '@/components/IssIcon.vue'

const refresh = 60000
let zoom = ref<number>(5)
let loading = ref(true)
let center = ref<string[]>([])
let issPosition = ref<string[]>([])
let timeout = ref<undefined | ReturnType<typeof setTimeout>>(undefined)
let timer = ref<number>(0)

const fetchISSLocation = async () => {
  try {
    const response = await fetch('http://api.open-notify.org/iss-now.json')
    const data = await response.json()
    const { iss_position } = data
    //center ISS in view on refresh
    center.value = [iss_position.latitude, iss_position.longitude]
    issPosition.value = [iss_position.latitude, iss_position.longitude]
    timer.value = refresh / 1000
    if (loading.value) loading.value = false
    countdown()
  } catch (error) {
    console.error(error)
  }
}

const countdown = () => {
  if (timer.value > 0) {
    timeout.value = setTimeout(() => {
      timer.value = timer.value - 1
      countdown()
    }, 1000)
  } else {
    fetchISSLocation()
  }
}

onMounted(() => {
  fetchISSLocation()
})

onUnmounted(() => {
  clearTimeout(timeout.value)
})
</script>

<template>
  <main v-if="!loading" class="iss-view">
    <div class="next-update">Will refresh in {{ timer }} seconds</div>
    <l-map
      class="map"
      ref="map"
      v-model:zoom="zoom"
      v-model:center="center"
      :useGlobalLeaflet="false"
    >
      <l-marker :lat-lng="issPosition">
        <l-icon class-name="marker-icon" :icon-size="[60, 60]">
          <IssIcon />
        </l-icon>
      </l-marker>

      <l-tile-layer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OSM Mapnik"
      ></l-tile-layer>
    </l-map>
  </main>

  <main class="loading" v-else>Loading</main>
</template>

<style lang="scss">
.loading {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
}

.iss-view {
  min-height: 100vh;
  display: flex;
  align-items: center;

  .next-update {
    position: absolute;
    right: 24px;
    bottom: 24px;
    background-color: #fff;
    border-radius: 8px;
    padding: 24px;
    z-index: 100;
    color: #000;
    width: 300px;
    text-align: center;
    font-weight: 700;
  }

  .map {
    z-index: 1;
  }
}
</style>
