import { useEffect, useState } from "react";
import { Course } from "./types";

const mockData: Course[] = [
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

export const useCourses = (): Course[] => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    setCourses(mockData);
  }, []);

  return courses;
};
