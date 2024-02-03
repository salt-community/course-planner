"use client";

import { Courses } from "@/features";

export default function Home() {
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

      <Courses />
    </main>
  );
}
