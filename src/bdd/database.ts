import { Database } from "bun:sqlite";

const db = new Database("parking.sqlite", { create: true });
db.exec(`CREATE TABLE IF NOT EXISTS "cities" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL UNIQUE,
    "slug" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "country" TEXT NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT)
    );

    CREATE TABLE IF NOT EXISTS "parkings" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL UNIQUE,
    "location" TEXT,
    "numberOfPlaces" INTEGER NOT NULL,
    "opened" INTEGER NOT NULL DEFAULT 1,
    "hourlyRate" REAL NOT NULL,
    "city_id" INTEGER NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("city_id") REFERENCES "cities"("id")
    );

    CREATE TABLE IF NOT EXISTS "parks" (
    "id" TEXT NOT NULL UNIQUE,
    "startedAt" TEXT NOT NULL,
    "endedAt" TEXT,
    "vehicleNumberPlate" TEXT,
    "spot_id" INTEGER NOT NULL,
    "price" REAL NOT NULL DEFAULT 0,
    PRIMARY KEY("id"),
    FOREIGN KEY("spot_id") REFERENCES "spots"("id")
    );
    
    CREATE TABLE IF NOT EXISTS "spots" (
    "id" INTEGER NOT NULL,
    "parking_id" INTEGER NOT NULL,
    PRIMARY KEY("id" AUTOINCREMENT),
    FOREIGN KEY("parking_id") REFERENCES "parkings"("id")
    );

    INSERT OR REPLACCE INTO cities (id, name, location, country) VALUES
    (1, "Aix-en-Provence", 'latitude :43.533323, longitude :5.43333', "France"),
    (2, "La Spezia", 'latitude : 44.238366, longitude : 9.6912326', "Italie"),
    (3, "Aix-la-Chapelle", 'latitude : 50.776351, longitude : 6.083862', "Allemagne"),
    (4, "San Cristobal de La Laguna", 'latitude : 28.487180709838867, longitude : -16.313879013061523', "Espagne"),
    (5, "Newcastle upon Tyne", 'latitude : 54.9738474, longitude : -1.6131572', "Angleterre");

    INSERT OR REPLACE INTO parkings (name, numberOfPlaces, hourlyRate, city_id) VALUES
    ("A", 100, 4.5, 1),
    ("B", 50, 3, 2),
    ("C", 80, 2.5, 2),
    ("D", 40, 2.8, 3),
    ("E", 70, 3.1, 4),
    ("F", 60, 2.4, 5),
    ("G", 90, 3.2, 5);

`);
export default db;