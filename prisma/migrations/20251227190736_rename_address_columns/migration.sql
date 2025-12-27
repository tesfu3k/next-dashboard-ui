/*
  Warnings:

  - You are about to drop the column `adress` on the `Parent` table. All the data in the column will be lost.
  - You are about to drop the column `adress` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `adress` on the `Teacher` table. All the data in the column will be lost.
  - Added the required column `address` to the `Parent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Teacher` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "class" DROP CONSTRAINT "class_supervisorId_fkey";

-- AlterTable
ALTER TABLE "Parent" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Student" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "adress",
ADD COLUMN     "address" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "class" ALTER COLUMN "supervisorId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_supervisorId_fkey" FOREIGN KEY ("supervisorId") REFERENCES "Teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
