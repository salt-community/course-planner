"use client";

import { AddCourse, Courses } from "@/features";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Course Planner</h1>
      <AddCourse />
      <Courses />
    </main>
  );
}
