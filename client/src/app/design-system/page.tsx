"use client";

import { Main, PageTitle, Loading, Failed, SectionTitle } from "@/components";

export default function Home() {
  return (
    <Main>
      <div className="col-span-full">
        <SectionTitle>PageTitle</SectionTitle>
        <PageTitle>Page Title</PageTitle>
      </div>

      <div className="col-span-full">
        <SectionTitle>SectionTitle</SectionTitle>
        <SectionTitle>Section Title</SectionTitle>
      </div>

      <div className="col-span-full">
        <SectionTitle>Loading</SectionTitle>
        <Loading />
      </div>

      <div className="col-span-full">
        <SectionTitle>Failed</SectionTitle>
        <Failed />
      </div>
    </Main>
  );
}
