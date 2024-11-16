import { Hono } from "hono";
import ReadAllCitiesController from "../controllers/city/ReadAllCitiesController";
import ReadOneCityController from "../controllers/city/ReadOneCityController";

const route=new Hono();

route.get("/cities",...ReadAllCitiesController);
route.get("/cities/:slug",...ReadOneCityController);

export default route;