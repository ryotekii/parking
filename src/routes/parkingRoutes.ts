import { Hono } from "hono";
import ReadOneParkingController from "../controllers/parking/ReadOneParkingController";
import ReadAllParkingsController from "../controllers/parking/ReadAllParkingsController";

const route=new Hono();

route.get("/",...ReadAllParkingsController);
route.get("/:id",...ReadOneParkingController);

export default route;
