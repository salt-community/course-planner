import { Loading } from "@/components";
import { Content } from "./components";
import { useCourses } from "./use-courses";

export const Courses = () => {
  let state = useCourses();

  if (state.status === "loading") {
    return <Loading />;
  }

  if (state.status === "failed") {
    return <p>Something went wrong</p>;
  }

  return (
    <section>
      <h2>Course list</h2>

      <Content state={state} />
    </section>
  );
};
