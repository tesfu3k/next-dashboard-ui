import { auth } from "@clerk/nextjs/server";

const { userId, sessionClaims } = auth();
export const role = (sessionClaims?.metadata as { role?: string })?.role;
export const CurrentUserId = userId;

export const adjustScheduleToCurrentWeek = (lessons: { title: string; start: Date; end: Date }[]) => {
  const now = new Date();
  const currentDayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const daysSinceMonday = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
  const currentMonday = new Date(now);
  currentMonday.setDate(now.getDate() - daysSinceMonday);
  currentMonday.setHours(0, 0, 0, 0);

  return lessons.map((lesson) => {
    const lessonDayOfWeek = lesson.start.getDay();
    const adjustedDate = new Date(currentMonday);
    adjustedDate.setDate(currentMonday.getDate() + (lessonDayOfWeek === 0 ? 6 : lessonDayOfWeek - 1));

    const adjustedStart = new Date(adjustedDate);
    adjustedStart.setHours(lesson.start.getHours(), lesson.start.getMinutes(), lesson.start.getSeconds());

    const adjustedEnd = new Date(adjustedDate);
    adjustedEnd.setHours(lesson.end.getHours(), lesson.end.getMinutes(), lesson.end.getSeconds());

    return {
      title: lesson.title,
      start: adjustedStart,
      end: adjustedEnd,
    };
  });
};
