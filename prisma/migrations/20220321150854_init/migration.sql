-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Guest', 'Clerk', 'Manager');

-- CreateEnum
CREATE TYPE "RoomType" AS ENUM ('Single', 'Double', 'Exclusive', 'Presidential');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reservation" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "dateFrom" TIMESTAMP(3) NOT NULL,
    "dateTo" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Room" (
    "id" SERIAL NOT NULL,
    "roomNumber" INTEGER NOT NULL,
    "roomType" "RoomType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Room_roomNumber_key" ON "Room"("roomNumber");

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
