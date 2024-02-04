import { useEffect, useState } from "react";
import { CourseData } from "./types";

export type SuccessState = { status: "succeeded"; courses: CourseData[] };

export type InitialState = { status: "loading" };

export type ErrorState = { status: "failed"; code: string };

export type State = InitialState | SuccessState | ErrorState;

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

const fetchCourses = async (): Promise<CourseData[]> => {
  return mockData;
};

const initialState: InitialState = { status: "loading" };

export const useCourses = (): State => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    fetchCourses().then((courses) =>
      setState({ status: "succeeded", courses })
    );
  }, []);

  return state;
};
