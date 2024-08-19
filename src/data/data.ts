import type { FleetVehicle } from '@/types/vehicles'

const fleetVehicles: FleetVehicle[] = [
  {
    id: 'V0000',
    status: 'stopped',
    vehicle: { make: 'Kia', model: 'Sportage', year: 2022 },
    operator: { name: 'Orville Hubball' },
    license_plate: 'RVL377',
    location: { latitude: 39.89079173580681, longitude: -86.20014145004653 }
  },
  {
    id: 'V0001',
    status: 'stopped',
    vehicle: { make: 'Mitsubishi', model: 'Montero', year: 2023 },
    operator: { name: 'Carley Gigg' },
    license_plate: 'NFK851',
    location: { latitude: 39.64767017689459, longitude: -86.14438138735974 }
  },
  {
    id: 'V0002',
    status: 'stopped',
    vehicle: { make: 'Audi', model: '80', year: 2021 },
    operator: { name: 'Trent Lebourn' },
    license_plate: 'LCR264',
    location: { latitude: 39.68182556318935, longitude: -86.15919248166264 }
  },
  {
    id: 'V0003',
    status: 'stopped',
    vehicle: { make: 'Toyota', model: 'Matrix', year: 2021 },
    operator: { name: 'Deina Spitaro' },
    license_plate: 'JQW511',
    location: { latitude: 39.82325540151209, longitude: -86.16259387310153 }
  },
  {
    id: 'V0004',
    status: 'stopped',
    vehicle: { make: 'Ford', model: 'Expedition', year: 2023 },
    operator: { name: 'Benedicto Lonnon' },
    license_plate: 'MZT896',
    location: { latitude: 39.740610842914386, longitude: -86.231069069356 }
  },
  {
    id: 'V0005',
    status: 'moving',
    vehicle: { make: 'Hyundai', model: 'Tiburon', year: 2024 },
    operator: { name: 'Jennie Blake' },
    license_plate: 'SBK280',
    location: { latitude: 39.661230358332745, longitude: -86.24650456780584 }
  },
  {
    id: 'V0006',
    status: 'stopped',
    vehicle: { make: 'GMC', model: 'Savana 2500', year: 2021 },
    operator: { name: 'Rod Jerome' },
    license_plate: 'JKZ104',
    location: { latitude: 39.82179967180156, longitude: -86.17326226561552 }
  },
  {
    id: 'V0007',
    status: 'moving',
    vehicle: { make: 'Land Rover', model: 'Range Rover Sport', year: 2023 },
    operator: { name: 'Brande Rattenbury' },
    license_plate: 'LTK127',
    location: { latitude: 39.83603058277924, longitude: -86.07634052289305 }
  },
  {
    id: 'V0008',
    status: 'moving',
    vehicle: { make: 'Nissan', model: '350Z', year: 2022 },
    operator: { name: 'Giulio Kurtis' },
    license_plate: 'FJP834',
    location: { latitude: 39.75606214665505, longitude: -86.15442165500271 }
  },
  {
    id: 'V0009',
    status: 'moving',
    vehicle: { make: 'Chrysler', model: 'Sebring', year: 2024 },
    operator: { name: 'Sallyanne Torregiani' },
    license_plate: 'XKT242',
    location: { latitude: 39.82004583087747, longitude: -86.25292974821977 }
  },
  {
    id: 'V0010',
    status: 'stopped',
    vehicle: { make: 'Saturn', model: 'L-Series', year: 2021 },
    operator: { name: 'Daffy Skyme' },
    license_plate: 'LWT127',
    location: { latitude: 39.70173941257901, longitude: -86.1307578730172 }
  },
  {
    id: 'V0011',
    status: 'moving',
    vehicle: { make: 'GMC', model: '2500', year: 2023 },
    operator: { name: 'Doralynn Kirsopp' },
    license_plate: 'BPF001',
    location: { latitude: 39.65649890750843, longitude: -86.18335905408377 }
  },
  {
    id: 'V0012',
    status: 'moving',
    vehicle: { make: 'Honda', model: 'Accord', year: 2022 },
    operator: { name: 'Devin Males' },
    license_plate: 'RYD094',
    location: { latitude: 39.748280995717295, longitude: -86.19535156155135 }
  },
  {
    id: 'V0013',
    status: 'moving',
    vehicle: { make: 'Subaru', model: 'Forester', year: 2023 },
    operator: { name: 'Daryle Latek' },
    license_plate: 'GPF489',
    location: { latitude: 39.779736532369974, longitude: -86.22180635822586 }
  },
  {
    id: 'V0014',
    status: 'moving',
    vehicle: { make: 'Lexus', model: 'RX', year: 2021 },
    operator: { name: 'Aluin de Nore' },
    license_plate: 'RKT280',
    location: { latitude: 39.644343215738246, longitude: -86.156539181835 }
  },
  {
    id: 'V0015',
    status: 'moving',
    vehicle: { make: 'Mazda', model: 'B-Series', year: 2023 },
    operator: { name: 'Cherey Hackworthy' },
    license_plate: 'GFG829',
    location: { latitude: 39.72425143632029, longitude: -86.10047993530448 }
  },
  {
    id: 'V0016',
    status: 'stopped',
    vehicle: { make: 'Lotus', model: 'Esprit', year: 2023 },
    operator: { name: 'Lucretia Nulty' },
    license_plate: 'GGV580',
    location: { latitude: 39.52261421601742, longitude: -86.2518370700882 }
  },
  {
    id: 'V0017',
    status: 'moving',
    vehicle: { make: 'Mercury', model: 'Sable', year: 2022 },
    operator: { name: 'Timothy Miles' },
    license_plate: 'DYR035',
    location: { latitude: 39.67683549667969, longitude: -86.19569763843182 }
  },
  {
    id: 'V0018',
    status: 'moving',
    vehicle: { make: 'Pontiac', model: 'G8', year: 2021 },
    operator: { name: 'Ralina Kitto' },
    license_plate: 'SGK919',
    location: { latitude: 39.816527993292006, longitude: -86.03580146786953 }
  },
  {
    id: 'V0019',
    status: 'moving',
    vehicle: { make: 'BMW', model: 'Z4', year: 2021 },
    operator: { name: 'Gifford Rotherforth' },
    license_plate: 'GFM073',
    location: { latitude: 39.69081154570644, longitude: -86.14582026483176 }
  },
  {
    id: 'V0020',
    status: 'stopped',
    vehicle: { make: 'Buick', model: 'Regal', year: 2023 },
    operator: { name: 'Bale Woolrich' },
    license_plate: 'QZH345',
    location: { latitude: 39.89777674961007, longitude: -86.12864943055013 }
  },
  {
    id: 'V0021',
    status: 'stopped',
    vehicle: { make: 'BMW', model: '7 Series', year: 2022 },
    operator: { name: 'Chase Robathon' },
    license_plate: 'BMQ644',
    location: { latitude: 39.739922989906, longitude: -86.09987252780579 }
  },
  {
    id: 'V0022',
    status: 'stopped',
    vehicle: { make: 'Audi', model: 'Allroad', year: 2022 },
    operator: { name: 'Seumas Quinlan' },
    license_plate: 'PXK135',
    location: { latitude: 39.78106298260766, longitude: -86.25421374219485 }
  },
  {
    id: 'V0023',
    status: 'moving',
    vehicle: { make: 'Hyundai', model: 'Excel', year: 2021 },
    operator: { name: 'Murielle Hitchens' },
    license_plate: 'VSW691',
    location: { latitude: 39.76344955341215, longitude: -86.017061442251 }
  },
  {
    id: 'V0024',
    status: 'stopped',
    vehicle: { make: 'Chevrolet', model: 'Camaro', year: 2021 },
    operator: { name: 'Doralin Attoe' },
    license_plate: 'RQC195',
    location: { latitude: 39.84802446631054, longitude: -86.19467181660872 }
  }
]

export { fleetVehicles }
