/*
  Warnings:

  - The primary key for the `Link` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isItCool" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Link" ("category", "description", "id", "isItCool", "name", "url") SELECT "category", "description", "id", "isItCool", "name", "url" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
CREATE UNIQUE INDEX "Link_id_key" ON "Link"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
