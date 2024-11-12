import {Hono} from "hono";
import {html,raw} from "hono/html";
import { cities, parkings } from "../data/staticDatabase";
import app from "../index";
import ReadAllCitiesController from "../controllers/city/ReadAllCitiesController";
import ReadOneCityController from "../controllers/city/ReadOneCityController";

app.get("/cities",...ReadAllCitiesController);
app.get("/cities/:slug",...ReadOneCityController);