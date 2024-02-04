import { CourseData } from "../types";

type Props = {
  courses: CourseData[];
};

export const CourseList = ({ courses }: Props) => {
  return (
    <ul>
      {courses.map((course) => (
        <li key={course.id}>
          <span>{course.program}</span>
          <span>-{course.start}</span>
        </li>
      ))}
    </ul>
  );
};
