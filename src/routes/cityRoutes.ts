import { Hono } from "hono";
import ReadAllCitiesController from "../controllers/city/ReadAllCitiesController";
import ReadOneCityController from "../controllers/city/ReadOneCityController";

const route=new Hono();

route.get("/",...ReadAllCitiesController);
route.get("/:slug",...ReadOneCityController);

export default route;