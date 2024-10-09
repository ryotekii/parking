import { Hono } from 'hono';
import {html} from "hono/html";
import { createFactory } from 'hono/factory';
import ReadAllParkingsView from '../../views/parking/ReadAllParkingsView';
import {parkings} from "../../data/staticDatabase"

const factory = createFactory();

const ReadAllParkingsController = factory.createHandlers(async (c)=>{

    return c.html(ReadAllParkingsView({ parkings }));

});

export default ReadAllParkingsController;

