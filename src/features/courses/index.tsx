import { Loading } from "@/components";
import { Content } from "./components";
import { useApi } from "./state";

export const Courses = () => {
  let state = useApi();

  if (state.status === "loading") {
    return <Loading />;
  }

  if (state.status === "failed") {
    return <p>Something went wrong</p>;
  }

  return (
    <section>
      <h2>Courses</h2>

      <Content state={state} />
    </section>
  );
};
