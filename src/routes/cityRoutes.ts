import {Hono} from "hono";
import {html,raw} from "hono/html";
import { cities, parkings } from "../data/staticDatabase";
import app from "../index";

/*app.get("/cities",(c)=>{
    return c.text("test")
})*/