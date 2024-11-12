import {Hono} from "hono";
import {html,raw} from "hono/html";
import { parkings } from "../data/staticDatabase";
import app from "../index";
import ReadOneParkingController from "../controllers/parking/ReadOneParkingController";
import ReadAllParkingsController from "../controllers/parking/ReadAllParkingsController";

app.get("/parkings",...ReadAllParkingsController);
app.get("/parkings/:id",...ReadOneParkingController);
