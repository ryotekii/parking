import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.city.createMany({
    data: [
      { id:1, name: 'Aix-en-Provence', slug: 'aix-en-provence', country: 'France', location: "{ latitude: 43.533329, longitude: 5.43333 }" },
      { id:2, name: 'La Spezia', slug: 'la-spezia', country: 'Italie', location: "{ latitude: 44.238366, longitude: 9.6912326 }" },
      { id:3, name: 'Aix-en-Chapelle', slug: 'aix-la-chapelle', country: 'Allemagne', location: "{ latitude: 50.776351, longitude: 6.083862 }" },
      { id:4, name: 'San Cristóbal de La Laguna', slug: 'san-cristobal-de-la-laguna', country: 'Espagne', location: "{ latitude: 28.487180709838867, longitude: -16.313879013061523 }" },
      { id:5, name: 'Newcastle upon Tyne', slug: 'newcastle-upon-tyne', country: 'Angleterre', location: "{ latitude: 54.9738474, longitude: -1.6131572 }" },
    ],
  });


  await prisma.parking.createMany({
    data: [
      { name: 'Parking A', cityId: 1, location: "{ latitude: 43.533329, longitude: 5.43333 }", numberOfSpots: 100, opened: true, hourlyRate: 4.5 },
      { name: 'Parking B', cityId: 2, location: "{ latitude: 44.238366, longitude: 9.6912326 }", numberOfSpots: 50, opened: true, hourlyRate: 3.0 },
      { name: 'Parking C', cityId: 2, location: "{ latitude: 44.238366, longitude: 9.6912326 }", numberOfSpots: 80, opened: true, hourlyRate: 2.5 },
      { name: 'Parking D', cityId: 3, location: "{ latitude: 50.776351, longitude: 6.083862 }", numberOfSpots: 40, opened: true, hourlyRate: 2.8 },
      { name: 'Parking E', cityId: 4, location: "{ latitude: 28.4871807, longitude: -16.313879013061523}", numberOfSpots: 70, opened: true, hourlyRate: 3.1 },
      { name: 'Parking F', cityId: 5, location: "{ latitude: 54.9738474, longitude: -1.6131572 }", numberOfSpots: 60, opened: true, hourlyRate: 2.4 },
      { name: 'Parking G', cityId: 5, location: "{ latitude: 54.9738474, longitude: -1.6131572 }", numberOfSpots: 90, opened: true, hourlyRate: 3.2 },
    ],
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });