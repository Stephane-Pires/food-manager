-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Link" (
    "id" TEXT NOT NULL DEFAULT 'test',
    "name" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "isItCool" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Link" ("category", "description", "isItCool", "name", "url") SELECT "category", "description", "isItCool", "name", "url" FROM "Link";
DROP TABLE "Link";
ALTER TABLE "new_Link" RENAME TO "Link";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
