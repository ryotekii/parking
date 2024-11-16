import ReadOneCityView from '../../views/city/ReadOneCityView';
import { Parking } from '../../models/Parking';
import { City } from '../../models/City';
import { PrismaClient } from '@prisma/client';
import { createFactory } from 'hono/factory';

const factory = createFactory();
const prisma = new PrismaClient();

const ReadOneCityController = factory.createHandlers(async (c) => {
    const slug = c.req.param('slug');

    type CityWithParkings = City & { parkings: Parking[] };
    
    try {
        const cityE = await prisma.cityEntity.findUnique({
            where: { slug: slug },
            include: { parkings: true }
        });

        if (!cityE) {
            return c.notFound();
        }


        const city = City.fromEntity(cityE);
        cityE.parkings.map(parking => city.add(Parking.fromEntity(parking)));
        const parkings = cityE.parkings.map(parking=>Parking.fromEntity(parking));
        console.log(parkings);
        return c.html(ReadOneCityView({ city:city,parkings }));
        
    } catch (error) {
        console.error("Erreur lors de la récupération de la ville :", error);
        return c.text("Erreur interne du serveur", 500);
    }
});

export default ReadOneCityController;
