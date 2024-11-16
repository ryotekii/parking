import ReadAllParkingsView from '../../views/parking/ReadAllParkingsView';
import { parkingEntity } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { createFactory } from 'hono/factory';
import { Parking } from '../../models/Parking';

const factory = createFactory();
const prisma = new PrismaClient();

const ReadAllParkingsController = factory.createHandlers(async (c) => {

    try {
        const parkingsEntities:parkingEntity[] = await prisma.parkingEntity.findMany();
        const parkings = parkingsEntities.map(parking => Parking.fromEntity(parking));
        return c.html(ReadAllParkingsView({ parkings:parkings }));
    
    } catch (error) {
        console.error("Erreur lors de la récupération des villes :", error);
        return c.text("Erreur serveur", 500);
    }
});

export default ReadAllParkingsController;
