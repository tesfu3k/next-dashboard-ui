/*
  Warnings:

  - You are about to drop the column `srartTime` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `starTime` on the `Exam` table. All the data in the column will be lost.
  - Added the required column `startTime` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startTime` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "srartTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "starTime",
ADD COLUMN     "startTime" TIMESTAMP(3) NOT NULL;
