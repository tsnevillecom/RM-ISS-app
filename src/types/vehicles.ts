export type Vehicle = { make: string; model: string; year: number }
export type Location = { latitude: number; longitude: number }
export type Operator = { name: string }

export type FleetVehicle = {
  id: string
  status: 'moving' | 'stopped'
  operator: Operator
  license_plate: string
  vehicle: Vehicle
  location: Location
}
