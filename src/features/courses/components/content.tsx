import { Loading } from "@/components";
import { State } from "../use-courses";
import { NoCourses } from "./no-courses";
import { CourseList } from "./course-list";

type Props = { state: State };

export const Content = ({ state }: Props) => {
  if (state.status === "loading") {
    return <Loading />;
  }

  if (state.status === "failed") {
    return <p>Something went wrong</p>;
  }

  return state.courses.length ? (
    <CourseList courses={state.courses} />
  ) : (
    <NoCourses />
  );
};
