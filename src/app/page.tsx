"use client";

import { useState } from "react";

type Course = {
  id: string;
  start: string;
  program: "jsfs" | "dnfs" | "jfs";
};

type Props = {
  courses: Course[];
};

let NoCourses = () => <p>No courses found.</p>;

const Courses = ({ courses }: Props) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <span>{course.start}</span>
          <span>{course.program}</span>
        </li>
      ))}
    </ul>
  );
};

const CoursesSection = ({ courses }: Props) => {
  return (
    <section>
      <h2>Course list</h2>

      {courses.length ? <Courses courses={courses} /> : <NoCourses />}
    </section>
  );
};

export default function Home() {
  const [courses, setCourses] = useState<Course[]>([]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Courses</h1>

      <section>
        <h2>Add Course</h2>

        <fieldset>
          <label htmlFor="course-start">Start</label>
          <input type="date" name="course-start" id="course-start" />
        </fieldset>

        <fieldset>
          <div className="flex flex-col">
            <legend>Program</legend>

            <span>
              <input value="jsfs" id="jsfs" type="radio" name="program" />
              <label htmlFor="jsfs">JS</label>
            </span>
            <span>
              <input value="dnfs" id="dnfs" type="radio" name="program" />
              <label htmlFor="dnfs">.NET</label>
            </span>
            <span>
              <input value="jfs" id="jfs" type="radio" name="program" />
              <label htmlFor="jfs">Java</label>
            </span>
          </div>
        </fieldset>
      </section>

      <CoursesSection courses={courses} />
    </main>
  );
}
