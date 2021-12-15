-- CreateEnum
CREATE TYPE "Stack" AS ENUM ('FULLSTACK', 'FRONTEND', 'BACKEND');

-- CreateEnum
CREATE TYPE "Diet" AS ENUM ('VEGAN', 'VEGETARIAN', 'CARNIVORE', 'PESCETARIAN');

-- CreateEnum
CREATE TYPE "Service" AS ENUM ('APERITIF', 'STARTER', 'MAIN', 'DESSERT', 'COCKTAIL');

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "category" "Stack" NOT NULL,
    "isItCool" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "service" "Service" NOT NULL,
    "diets" "Diet"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_id_key" ON "Link"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Recipe_id_key" ON "Recipe"("id");
