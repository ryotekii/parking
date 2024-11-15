import { Parking } from '@prisma/client';
import ReadOneParkingView from '../../views/parking/ReadOneParkingView';
import { ParkingDTO } from '../../DTO/ParkingDTO';
import prisma from '../../../prisma/client';

import factory from '../factory';

const ReadOneParkingController = factory.createHandlers(async (c) => {
    const id = Number(c.req.param('id'));
    
    try {
        const parking = await prisma.parking.findUnique({
            where: { id: id }
        });

        if (!parking){
            return c.notFound();
        }

        const parkingDTO = new ParkingDTO(parking);
        return c.html(ReadOneParkingView({parking:parkingDTO}));
        
    } catch (error) {
        console.error("Erreur lors de la récupération de la ville :", error);
        return c.text("Erreur interne du serveur", 500);
    }
});

export default ReadOneParkingController;
