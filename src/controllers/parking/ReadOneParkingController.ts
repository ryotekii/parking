import { createFactory } from 'hono/factory';
import ReadOneParkingView from '../../views/parking/ReadOneParkingView';
import { Parking } from '../../models/Parking';
import db from '../../bdd/database';

const factory = createFactory();

const ReadOneParkingController = factory.createHandlers(async (c) => {
    try{
        const id = c.req.param('id');
        const parking = /*parkings.find((parking) => parking.id.toString() === id);*/ db.prepare('SELECT * FROM parkings WHERE id=?').get(id) as Parking;

        if (!parking) {
            return c.notFound();
        }

        const name = parking.name;

        return c.html(ReadOneParkingView({ parking,name }));
    } catch(error){
        return c.text("Erreur interne du serveur", 500);
    }
});

export default ReadOneParkingController;
