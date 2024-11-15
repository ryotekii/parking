import ReadAllParkingsView from '../../views/parking/ReadAllParkingsView';
import { Parking } from '@prisma/client';
import { ParkingDTO } from '../../DTO/ParkingDTO';
import prisma from '../../../prisma/client';

import factory from '../factory';

const ReadAllParkingsController = factory.createHandlers(async (c) => {

    try {
        const parkings:Parking[] = await prisma.parking.findMany();
        const parkingsDTO = parkings.map(parking => new ParkingDTO(parking));
        return c.html(ReadAllParkingsView({ parkings:parkingsDTO }));
    
    } catch (error) {
        console.error("Erreur lors de la récupération des villes :", error);
        return c.text("Erreur serveur", 500);
    }
});

export default ReadAllParkingsController;
