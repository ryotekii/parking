import { createFactory } from 'hono/factory';
import { cities } from "../../data/staticDatabase";
import ReadOneCityView from '../../views/city/ReadOneCityView';
import { City } from '../../models/City';

const factory = createFactory();

const ReadOneCityController = factory.createHandlers(async (c) => {
    const slug = c.req.param('slug');
    const city = cities.find((city) => city.slug === slug);

    if (!city) {
        return c.notFound();
    }

    const name = city.name;

    return c.html(ReadOneCityView({ city,name }));
});

export default ReadOneCityController;
