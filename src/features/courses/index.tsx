type Course = {
  id: string;
  start: string;
  program: "jsfs" | "dnfs" | "jfs";
};

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
  let courses: Course[] = [
    {
      id: "1",
      start: "2021-01-01",
      program: "jsfs",
    },
    {
      id: "2",
      start: "2021-01-01",
      program: "dnfs",
    },
    {
      id: "3",
      start: "2021-01-01",
      program: "jfs",
    },
  ];

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
