"use client";

import { Main, PageTitle } from "@/components";
import { AddCourse, CourseList } from "@/features";

export default function Home() {
  return (
    <Main>
      <PageTitle>Course Planner</PageTitle>
      <AddCourse />
      <CourseList />
    </Main>
  );
}
