"use client";

import {
  Main,
  PageTitle,
  Loading,
  Failed,
  FullSection,
  DateInput,
  useDate,
  CtaButton,
  RadioGroup,
} from "@/components";

export default function Home() {
  const dateState = useDate();

  return (
    <Main>
      <FullSection title="PageTitle">
        <PageTitle>Page Title</PageTitle>
      </FullSection>

      <FullSection title="Loading">
        <Loading />
      </FullSection>

      <FullSection title="Failed">
        <Failed />
      </FullSection>

      <FullSection title="Button">
        <CtaButton onClick={() => {}}>Press</CtaButton>
      </FullSection>

      <FullSection title="DateInput">
        <DateInput dateState={dateState} />
        <p>Selected date: {dateState.date?.toISOString()}</p>
      </FullSection>

      <FullSection title="Radio Group">
        <RadioGroup
          label="Radio Group"
          choices={{ "First choice": "C1", "Second choice": "C2" }}
        />
      </FullSection>
    </Main>
  );
}
