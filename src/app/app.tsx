"use client";

import { NextUIProvider } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

export const App = ({ children }: Props) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
