import { CourseData } from "../types";

const mockData: CourseData[] = [
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

export const fetchCourses = async (): Promise<CourseData[]> => {
  return mockData;
};
