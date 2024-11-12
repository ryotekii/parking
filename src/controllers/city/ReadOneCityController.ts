import { createFactory } from 'hono/factory';
import ReadOneCityView from '../../views/city/ReadOneCityView';
import { City } from '../../models/City';
import db from '../../bdd/database';

const factory = createFactory();

const ReadOneCityController = factory.createHandlers(async (c) => {
    const slug = c.req.param('slug');
    try{
        const city = /*cities.find((city) => city.slug === slug);*/ 
        await db.prepare('SELECT * FROM cities WHERE slug=?').get(slug) as City;

    if (!city) {
        return c.notFound();
    }

    const name = city.name;

    return c.html(ReadOneCityView({ city,name }));
} catch (error) {
    return c.text("Erreur interne du serveur", 500);
}
});

export default ReadOneCityController;
