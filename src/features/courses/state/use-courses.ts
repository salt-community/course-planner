import { useEffect, useState } from "react";
import { CourseData } from "../types";
import { fetchCourses } from "./fetch-courses";

export type SuccessState = { status: "succeeded"; courses: CourseData[] };

export type InitialState = { status: "loading" };

export type ErrorState = { status: "failed"; code: string };

export type State = InitialState | SuccessState | ErrorState;

const initialState: InitialState = { status: "loading" };

export const useApi = (): State => {
  const [state, setState] = useState<State>(initialState);

  useEffect(() => {
    fetchCourses().then((courses) =>
      setState({ status: "succeeded", courses })
    );
  }, []);

  return state;
};
