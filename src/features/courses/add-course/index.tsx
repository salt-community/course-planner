import { CtaButton, DateInput, FullSection, useDate } from "@/components";

export const AddCourse = () => {
  const dateState = useDate();

  const createCourse = () => {
    fetch("http://localhost:3000/api/courses/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate: dateState.date, program: "jsfs" }),
    });
  };

  return (
    <FullSection title="Add Course">
      <fieldset>
        <label htmlFor="course-start">Start</label>
        <DateInput dateState={dateState} />
      </fieldset>

      <fieldset>
        <div className="flex flex-col">
          <legend>Program</legend>

          <span>
            <input value="jsfs" id="jsfs" type="radio" name="program" />
            <label htmlFor="jsfs">JS</label>
          </span>
          <span>
            <input value="dnfs" id="dnfs" type="radio" name="program" />
            <label htmlFor="dnfs">.NET</label>
          </span>
          <span>
            <input value="jfs" id="jfs" type="radio" name="program" />
            <label htmlFor="jfs">Java</label>
          </span>
        </div>
      </fieldset>

      <CtaButton onClick={createCourse}>Create</CtaButton>
    </FullSection>
  );
};
