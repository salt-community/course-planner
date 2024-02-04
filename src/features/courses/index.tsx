import { Loading } from "@/components";
import { Course, NoCourses } from "./components";
import { useCourses } from "./use-courses";

export const Courses = () => {
  let state = useCourses();

  if (state.status === "loading") {
    return <Loading />;
  }

  return (
    <section>
      <h2>Course list</h2>

      {state.courses.length ? (
        <ul>
          {state.courses.map((course) => (
            <li key={course.id}>
              <Course course={course} />
            </li>
          ))}
        </ul>
      ) : (
        <NoCourses />
      )}
    </section>
  );
};
