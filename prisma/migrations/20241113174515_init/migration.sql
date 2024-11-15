-- CreateTable
CREATE TABLE "City" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Parking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfSpots" INTEGER NOT NULL,
    "hourlyRate" REAL,
    "opened" BOOLEAN,
    CONSTRAINT "Parking_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "City" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Spot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parkingId" INTEGER NOT NULL,
    CONSTRAINT "Spot_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "Parking" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Park" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "spotId" INTEGER NOT NULL,
    "startedAt" DATETIME,
    "endedAt" DATETIME,
    "price" REAL NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Park_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "Spot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
