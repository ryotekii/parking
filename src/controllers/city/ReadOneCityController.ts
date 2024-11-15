import ReadOneCityView from '../../views/city/ReadOneCityView';
import { Parking,City } from '@prisma/client';
import { CityDTO } from '../../DTO/CityDTO';
import prisma from '../../../prisma/client';

import factory from '../factory';

const ReadOneCityController = factory.createHandlers(async (c) => {
    const slug = c.req.param('slug');

    type CityWithParkings = City & { parkings: Parking[] };
    
    try {
        const city = await prisma.city.findUnique({
            where: { slug: slug },
            include: { parkings: true }
        });

        if (!city) {
            return c.notFound();
        }

        const parkingsIds = city.parkings.map(parking => parking.id);
        const parkings = city.parkings;
        const cityDTO = new CityDTO(city, parkingsIds);

        return c.html(ReadOneCityView({ city:cityDTO,parkings }));
        
    } catch (error) {
        console.error("Erreur lors de la récupération de la ville :", error);
        return c.text("Erreur interne du serveur", 500);
    }
});

export default ReadOneCityController;
