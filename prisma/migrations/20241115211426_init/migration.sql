/*
  Warnings:

  - You are about to drop the `City` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Park` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Spot` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "City";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Park";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Parking";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Spot";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cities" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "country" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "parkings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfSpots" INTEGER NOT NULL,
    "hourlyRate" REAL,
    "opened" BOOLEAN,
    CONSTRAINT "parkings_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "spotEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parkingId" INTEGER NOT NULL,
    CONSTRAINT "spotEntity_parkingId_fkey" FOREIGN KEY ("parkingId") REFERENCES "parkings" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "parkEntity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "spotId" INTEGER NOT NULL,
    "startedAt" DATETIME,
    "endedAt" DATETIME,
    "price" REAL NOT NULL,
    "paid" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "parkEntity_spotId_fkey" FOREIGN KEY ("spotId") REFERENCES "spotEntity" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_slug_key" ON "cities"("slug");
