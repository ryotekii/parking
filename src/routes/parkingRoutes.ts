import {Hono} from "hono";
import {html,raw} from "hono/html";
import { parkings } from "../data/staticDatabase";
import app from "../index";

/*app.get("/parkings",(c)=>{
    return c.json(parkings);
})*/
