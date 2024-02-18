"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Button as NextButton } from "@nextui-org/react";

type Props = {
  children: React.ReactNode;
};

export const Button = ({ children }: Props) => {
  return (
    <NextUIProvider>
      <NextButton>{children}</NextButton>
    </NextUIProvider>
  );
};
