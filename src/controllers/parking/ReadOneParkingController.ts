import ReadOneParkingView from '../../views/parking/ReadOneParkingView';
import { PrismaClient } from '@prisma/client';
import { createFactory } from 'hono/factory';
import Parking from '../../models/Parking';

const factory = createFactory();
const prisma = new PrismaClient();

const ReadOneParkingController = factory.createHandlers(async (c) => {
    const id = Number(c.req.param('id'));
    
    try {
        const parkingE = await prisma.parkingEntity.findUnique({
            where: { id: id }
        });

        if (!parkingE){
            return c.notFound();
        }

        const parking = Parking.fromEntity(parkingE);
        return c.html(ReadOneParkingView({parking:parking}));
        
    } catch (error) {
        console.error("Erreur lors de la récupération de la ville :", error);
        return c.text("Erreur interne du serveur", 500);
    }
});

export default ReadOneParkingController;
