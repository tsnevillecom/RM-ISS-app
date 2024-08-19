<script setup lang="ts">
import { defineProps } from 'vue'
import type { FleetVehicle } from '@/types/vehicles'

defineProps<{
  fleetVehicle: FleetVehicle
}>()
</script>

<template>
  <div class="vehicle-description">
    <div class="vehicle-id">{{ fleetVehicle.id }}</div>
    <div class="vehicle-year">{{ fleetVehicle.vehicle.year }}</div>
    <div class="vehicle-make-model">
      {{ fleetVehicle.vehicle.make }} {{ fleetVehicle.vehicle.model }}
    </div>
  </div>
  <div class="vehicle-operator">Operator: {{ fleetVehicle.operator.name }}</div>
  <div class="vehicle-status">
    Status: <span>{{ fleetVehicle.status }}</span>
  </div>
</template>

<style lang="scss">
.vehicle-description {
  display: flex;
  font-weight: 700;

  .vehicle-id {
    width: 60px;
    flex-shrink: 0;
  }

  .vehicle-year {
    width: 50px;
    flex-shrink: 0;
  }

  .vehicle-make-model {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.vehicle-status {
  span {
    text-transform: capitalize;
  }
}
</style>
