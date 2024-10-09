import { Hono } from 'hono';
import {createFactory, Factory} from "hono/factory";
import {html} from "hono/html";

const factory = createFactory();

const HomeController = factory.createHandlers(async (c)=>{

    return c.html(html`<!DOCTYPE html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>EuroPark</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
    </head>
    <body>
        <h1>Welcome to EuroPark</h1>
        <img src="../static/parking.png" alt="parking"/>
        <p>Save time and money with EuroPark! Enjoy a 100% contactless parking experience for a short or long duration in our car parks in Europe!</p>
        <a href="/cities">Our Cities</a>
        <br>
        <a href="/parkings">Our Car Parks</a>
    </body>
    </html>`);
});

export default HomeController;


