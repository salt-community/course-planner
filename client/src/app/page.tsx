"use client";

import { AddCourse, CourseList } from "@/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Course Planner</h1>
      <AddCourse />
      <CourseList />
    </main>
  );
}
