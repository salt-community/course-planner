import { Course } from "./types";
import { useCourses } from "./use-courses";

type Props = {
  course: Course;
};

let NoCourses = () => <p>No courses found.</p>;

const Course = ({ course }: Props) => {
  return (
    <>
      <span>{course.program}</span>
      <span>-{course.start}</span>
    </>
  );
};

export const Courses = () => {
  let courses: Course[] = useCourses();

  return (
    <section>
      <h2>Course list</h2>

      {courses.length ? (
        <ul>
          {courses.map((course) => (
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
