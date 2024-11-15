import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';
import { City } from '../../models/City';
import { Parking } from '../../models/Parking';
import { CityDTO } from '../../DTO/CityDTO';
import { PrismaClient } from '@prisma/client';
import { cityEntity } from '@prisma/client';
import { createFactory } from 'hono/factory';

const factory = createFactory();
const prisma = new PrismaClient();

const ReadAllCitiesController = factory.createHandlers(async (c) => {
  try {
    const cityEntities: cityEntity[] = await prisma.cityEntity.findMany();
    const cities = cityEntities.map((ct) => City.fromEntity(ct));
    const cityDTOs = cities.map((city) => CityDTO.fromDomain(city));
    return c.html(ReadAllCitiesView({ cities: cityDTOs }));
  } catch (error) {
    console.error("Erreur lors de la récupération des villes :", error);
    return c.text("Erreur serveur", 500);
  }
});

export default ReadAllCitiesController;
