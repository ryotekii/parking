import { Hono } from 'hono';
import { html } from 'hono/html';
import { serveStatic } from "hono/bun";
import HomeController from "./controllers/HomeController";
import { cities, parkings } from "./data/staticDatabase";
import { createFactory } from 'hono/factory';
import { HTTPException } from 'hono/http-exception';
import {trimTrailingSlash} from "hono/trailing-slash";
import db from './bdd/database';

const app = new Hono();
app.use(trimTrailingSlash());

app.get("/",...HomeController);
app.use("/static/*",serveStatic({root:"./"}));

app.notFound((c) => {
    return c.html(html`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Page Non trouvée</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
        </head>
        <body>
            <h1>404 - Page not found</h1>
            <p>La page que vous recherchez n'a pas été trouvée</p>
            <a href="/">Retourner à la page d'accueil</a>
        </body>
        </html>
    `);
});

app.onError((err, c) => {
    console.error(err);

    return c.html(html`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Erreur interne du serveur</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/milligram/1.4.1/milligram.css" />
        </head>
        <body>
            <h1>500 - Internal Server Error</h1>
            <p>Un problème interne est survenu dans le serveur.</p>
            <a href="/">Retourner à la page d'accueil</a>
        </body>
        </html>
    `);
});


export default app;
