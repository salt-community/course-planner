"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Button as NextButton } from "@nextui-org/react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const Button = ({ onClick, children }: Props) => {
  return (
    <NextUIProvider>
      <NextButton onClick={onClick}>{children}</NextButton>
    </NextUIProvider>
  );
};
