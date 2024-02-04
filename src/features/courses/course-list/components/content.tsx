import { Failed, Loading } from "@/components";
import { State } from "../state/use-courses";
import { NoCourses } from "./no-courses";
import { CourseList } from "./course-list";

type Props = { state: State };

export const Content = ({ state }: Props) => {
  if (state.status === "loading") {
    return <Loading />;
  }

  if (state.status === "failed") {
    return <Failed />;
  }

  return state.courses.length ? (
    <CourseList courses={state.courses} />
  ) : (
    <NoCourses />
  );
};
