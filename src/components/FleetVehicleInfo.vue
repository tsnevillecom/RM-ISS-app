<script setup lang="ts">
import { defineProps } from 'vue'
import type { FleetVehicle } from '@/types/vehicles'

defineProps<{
  activeVehicle: FleetVehicle | null
}>()
</script>

<template>
  <div class="fleet-vehicle-info" v-show="activeVehicle">
    <div class="vehicle-id">{{ activeVehicle?.id }}</div>
    <div class="vehicle-data">
      <div>
        <div class="vehicle-description">
          <div class="vehicle-year-make-model">
            {{ activeVehicle?.vehicle.year }} {{ activeVehicle?.vehicle.make }}
            {{ activeVehicle?.vehicle.model }}
          </div>
        </div>
        <div class="vehicle-operator">
          <span>Operator:</span> {{ activeVehicle?.operator.name }}
        </div>
      </div>
      <div>
        <div class="vehicle-status"><span>Status:</span> {{ activeVehicle?.status }}</div>
        <div><span>License Plate:</span> {{ activeVehicle?.license_plate }}</div>
        <div>
          <span>Location:</span> {{ activeVehicle?.location.latitude }},
          {{ activeVehicle?.location.longitude }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.fleet-vehicle-info {
  position: absolute;
  border-radius: 16px;
  padding: 24px;
  height: auto;
  width: calc(60vw - 48px);
  background-image: linear-gradient(to right top, #182026, #172739, #232b4c, #3d2b58, #5c255c);
  z-index: 100;
  bottom: 24px;
  right: 5vw;
  display: flex;
  flex-wrap: wrap;

  .vehicle-data {
    flex: 1 0;
    display: flex;
    max-width: 100%;
    min-width: 300px;
    flex-wrap: wrap;

    > div {
      flex: 1;
      min-width: 300px;
    }

    span {
      font-weight: 700;
    }
  }

  .vehicle-id {
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    width: 60px;
    flex-shrink: 0;
    max-width: 100px;
    min-width: 100px;
    flex-shrink: 0;
  }

  .vehicle-description {
    display: flex;
    font-weight: 700;

    .vehicle-year {
      width: 50px;
      flex-shrink: 0;
    }

    .vehicle-year-make-model {
      flex: 1;
      color: #fff;
      font-size: 18px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  .vehicle-status {
    text-transform: capitalize;
  }
}
</style>
