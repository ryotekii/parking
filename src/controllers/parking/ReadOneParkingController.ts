import { createFactory } from 'hono/factory';
import { parkings } from "../../data/staticDatabase";
import ReadOneParkingView from '../../views/parking/ReadOneParkingView';

const factory = createFactory();

const ReadOneParkingController = factory.createHandlers(async (c) => {
    const id = c.req.param('id');
    const parking = parkings.find((parking) => parking.id.toString() === id);

    if (!parking) {
        return c.notFound();
    }

    const name = parking.name;

    return c.html(ReadOneParkingView({ parking,name }));
});

export default ReadOneParkingController;
