/*
  Warnings:

  - Added the required column `reservationId` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "reservationId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Room" ADD CONSTRAINT "Room_reservationId_fkey" FOREIGN KEY ("reservationId") REFERENCES "reservation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
