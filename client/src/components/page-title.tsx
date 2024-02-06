// page title component
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageTitle = ({ children }: Props) => {
  return <h1 className="col-span-full text-2xl">{children}</h1>;
};
