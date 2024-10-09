import { Hono } from 'hono';
import {html} from "hono/html";
import { createFactory } from 'hono/factory';
import ReadAllCitiesView from '../../views/city/ReadAllCitiesView';
import {cities} from "../../data/staticDatabase"

const factory = createFactory();

const ReadAllCitiesController = factory.createHandlers(async (c)=>{

    return c.html(ReadAllCitiesView({ cities }));

});

export default ReadAllCitiesController;

