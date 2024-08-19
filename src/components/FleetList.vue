<script setup lang="ts">
import { defineProps, onUpdated, ref } from 'vue'
import type { FleetVehicle } from '@/types/vehicles'
import FleetVehicleItem from './FleetVehicleItem.vue'

const props = defineProps<{
  activeVehicle: FleetVehicle | null
  fleetVehicles: FleetVehicle[]
  setActiveVehicle: (fleetVehicle: FleetVehicle | null) => void
}>()

const active = ref<null | HTMLDivElement[]>(null)

const toggleVehicle = (fleetVehicle: FleetVehicle) => {
  const { activeVehicle, setActiveVehicle } = props
  setActiveVehicle(fleetVehicle.id === activeVehicle?.id ? null : fleetVehicle)
}

onUpdated(() => {
  if (props.activeVehicle && active.value) {
    active.value[0].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
  }
})
</script>

<template>
  <div class="fleet-list">
    <h2 class="fleet-heading">Fleet</h2>
    <div class="fleet-vehicles">
      <div
        v-for="fleetVehicle in fleetVehicles"
        :key="fleetVehicle.id"
        class="fleet-vehicle"
        :class="{ active: fleetVehicle.id === activeVehicle?.id }"
        @click="() => toggleVehicle(fleetVehicle)"
        :ref="fleetVehicle.id === activeVehicle?.id ? 'active' : ''"
      >
        <FleetVehicleItem :fleetVehicle="fleetVehicle" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fleet-list {
  display: flex;
  flex-direction: column;
  width: 30%;

  .fleet-heading {
    padding: 16px;
    margin: 0;
    border-bottom: 1px solid rgba(#000, 0.2);
  }

  .fleet-vehicles {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    overflow-y: auto;
    overflow-x: hidden;
    height: 100%;

    .fleet-vehicle {
      font-size: 13px;
      padding: 16px;
      cursor: pointer;

      &.active {
        border-left: 4px solid #fff;
        background-color: rgba(#fff, 0.1);
        color: #fff;
      }

      &:not(.active):hover {
        background-color: rgba(#000, 0.2);
      }

      &:not(:last-child) {
        border-bottom: 1px solid rgba(#000, 0.2);
      }
    }
  }
}
</style>
