import { Hono } from "hono";
import ReadOneParkingController from "../controllers/parking/ReadOneParkingController";
import ReadAllParkingsController from "../controllers/parking/ReadAllParkingsController";

const route=new Hono();

route.get("/parkings",...ReadAllParkingsController);
route.get("/parkings/:id",...ReadOneParkingController);

export default route;
