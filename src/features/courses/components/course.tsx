import { CourseData } from "../types";

type Props = {
  course: CourseData;
};

export const Course = ({ course }: Props) => {
  return (
    <>
      <span>{course.program}</span>
      <span>-{course.start}</span>
    </>
  );
};
