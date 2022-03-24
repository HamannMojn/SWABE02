/*
  Warnings:

  - You are about to drop the `Room` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `roomId` to the `reservation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Room" DROP CONSTRAINT "Room_reservationId_fkey";

-- AlterTable
ALTER TABLE "reservation" ADD COLUMN     "roomId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Room";

-- CreateTable
CREATE TABLE "room" (
    "id" SERIAL NOT NULL,
    "roomNumber" INTEGER NOT NULL,
    "roomType" "RoomType" NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "room_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "room_roomNumber_key" ON "room"("roomNumber");

-- AddForeignKey
ALTER TABLE "reservation" ADD CONSTRAINT "reservation_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "room"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
