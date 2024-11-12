import { Hono } from 'hono';
import {html} from "hono/html";
import { createFactory } from 'hono/factory';
import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';
import db from '../../bdd/database';
import { City } from '../../models/City';


interface CityRow {
    id: number;
    name: string;
    location: string;
    country: string;
}

const factory = createFactory();

const ReadAllCitiesController = factory.createHandlers(async (c)=>{

    try {
        const rows = await db.query('SELECT * FROM cities').all() as CityRow[];
        console.log(db.query("SELECT * FROM cities"));
        const cities = rows.map(row => {
            return new City(row.id, row.name, row.country, row.location);
        });
        return c.html(ReadAllCitiesView({ cities }));
    
    } catch (error) {
        console.error("Erreur lors de la récupération des villes :", error);
        return c.text("Erreur serveur", 500);
    }
});

export default ReadAllCitiesController;

