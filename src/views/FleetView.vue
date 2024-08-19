<script setup lang="ts">
import { ref } from 'vue'
import FleetList from '@/components/FleetList.vue'
import FleetMap from '@/components/FleetMap.vue'
import FleetVehicleInfo from '@/components/FleetVehicleInfo.vue'
import { fleetVehicles } from '@/data/data'
import type { FleetVehicle } from '@/types/vehicles'

const activeVehicle = ref<FleetVehicle | null>(null)

const setActiveVehicle = (fleetVehicle: FleetVehicle | null) => {
  activeVehicle.value = fleetVehicle
}
</script>

<template>
  <main class="fleet-view">
    <FleetVehicleInfo :activeVehicle="activeVehicle" />
    <FleetList
      :activeVehicle="activeVehicle"
      :fleetVehicles="fleetVehicles"
      :setActiveVehicle="setActiveVehicle"
    />
    <FleetMap
      :activeVehicle="activeVehicle"
      :fleetVehicles="fleetVehicles"
      :setActiveVehicle="setActiveVehicle"
    />
  </main>
</template>

<style lang="scss">
.fleet-view {
  display: flex;
}
</style>
