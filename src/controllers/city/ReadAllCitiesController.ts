import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';
import { City, Parking } from '@prisma/client';
import { CityDTO } from '../../DTO/CityDTO';
import prisma from '../../../prisma/client';
import factory from '../factory';

const ReadAllCitiesController = factory.createHandlers(async (c) => {
    try {
        type CityWithParkings = City & { parkings: Parking[] };

        const cities = await prisma.city.findMany({
            include: { parkings: true }
        });
        
        const citiesDTO = cities.map((city: CityWithParkings) => {
            const parkingsIds = city.parkings.map(parking => parking.id);
            return new CityDTO(city, parkingsIds)
        });
        return c.html(ReadAllCitiesView({ cities:citiesDTO }));
    } catch (error) {
        console.error("Erreur lors de la récupération des villes :", error);
        return c.text("Erreur serveur", 500);
    }
});

export default ReadAllCitiesController;
