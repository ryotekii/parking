/*
  Warnings:

  - Made the column `hourlyRate` on table `parkings` required. This step will fail if there are existing NULL values in that column.
  - Made the column `opened` on table `parkings` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_parkings" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cityId" INTEGER NOT NULL,
    "location" TEXT NOT NULL,
    "numberOfSpots" INTEGER NOT NULL,
    "hourlyRate" REAL NOT NULL,
    "opened" BOOLEAN NOT NULL,
    CONSTRAINT "parkings_cityId_fkey" FOREIGN KEY ("cityId") REFERENCES "cities" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_parkings" ("cityId", "hourlyRate", "id", "location", "name", "numberOfSpots", "opened") SELECT "cityId", "hourlyRate", "id", "location", "name", "numberOfSpots", "opened" FROM "parkings";
DROP TABLE "parkings";
ALTER TABLE "new_parkings" RENAME TO "parkings";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
