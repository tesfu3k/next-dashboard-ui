/*
  Warnings:

  - You are about to drop the column `discription` on the `Announcement` table. All the data in the column will be lost.
  - You are about to drop the column `discription` on the `Event` table. All the data in the column will be lost.
  - Added the required column `description` to the `Announcement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Announcement" DROP COLUMN "discription",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Event" DROP COLUMN "discription",
ADD COLUMN     "description" TEXT NOT NULL;
