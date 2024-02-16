"use client";

import {
  Main,
  PageTitle,
  Loading,
  Failed,
  FullSection,
  DateInput,
  useDate,
  Button,
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
        <Button />
      </FullSection>

      <FullSection title="DateInput">
        <DateInput dateState={dateState} />
        <p>Selected date: {dateState.date?.toISOString()}</p>
      </FullSection>
    </Main>
  );
}
