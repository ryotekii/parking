import { Hono } from 'hono';
import {html} from "hono/html";
import { createFactory } from 'hono/factory';
import ReadAllParkingsView from '../../views/parking/ReadAllParkingsView';
import db from '../../bdd/database';
import { Parking } from '../../models/Parking';

const factory = createFactory();

const ReadAllParkingsController = factory.createHandlers(async (c)=>{
    try{
        const parkings = await db.prepare('SELECT * FROM parkings').all() as Parking[];

        return c.html(ReadAllParkingsView({ parkings }));
    } catch (error){
        return c.text("Erreur interne du serveur", 500);
    }
});

export default ReadAllParkingsController;

