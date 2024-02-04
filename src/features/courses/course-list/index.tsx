import { Content } from "./components";
import { useApi } from "./state";

export const CourseList = () => {
  let state = useApi();

  return (
    <section>
      <h2>Courses</h2>

      <Content state={state} />
    </section>
  );
};
