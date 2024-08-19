<script setup lang="ts">
import { ref, defineProps } from 'vue'
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LMarker, LIcon } from '@vue-leaflet/vue-leaflet'
import type { FleetVehicle } from '@/types/vehicles'

const props = defineProps<{
  activeVehicle: FleetVehicle | null
  fleetVehicles: FleetVehicle[]
  setActiveVehicle: (fleetVehicle: FleetVehicle | null) => void
}>()

const zoom = ref(12)
const center = ref([39.7691, -86.158])

const toggleVehicle = (vehicle: FleetVehicle) => {
  const { activeVehicle, setActiveVehicle } = props
  setActiveVehicle(vehicle.id === activeVehicle?.id ? null : vehicle)
}

const iconColor = (id: string) => {
  return props.activeVehicle?.id === id ? '#FF6B1A' : '#103778'
}
</script>

<template>
  <div class="fleet-map">
    <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
      <l-marker
        v-for="vehicle in fleetVehicles"
        :key="vehicle.id"
        :lat-lng="[vehicle.location.latitude, vehicle.location.longitude]"
        @click="() => toggleVehicle(vehicle)"
      >
        <l-icon class-name="marker-icon" :icon-size="[40, 40]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="marker">
            <path
              fill-opacity=".25"
              d="M16 32s1.427-9.585 3.761-12.025c4.595-4.805 8.685-.99 8.685-.99s4.044 3.964-.526 8.743C25.514 30.245 16 32 16 32z"
            />
            <path
              v-bind:fill="iconColor(vehicle.id)"
              d="M15.938 32S6 17.938 6 11.938C6 .125 15.938 0 15.938 0S26 .125 26 11.875C26 18.062 15.938 32 15.938 32zM16 6a4 4 0 100 8 4 4 0 000-8z"
            />
          </svg>
        </l-icon>
      </l-marker>

      <l-tile-layer
        url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OSM Mapnik"
      ></l-tile-layer>
    </l-map>
  </div>
</template>

<style>
.fleet-map {
  flex: 1;
  z-index: 1;

  .map {
    height: 100%;
    width: 100%;
  }

  .marker-icon {
  }
}
</style>
