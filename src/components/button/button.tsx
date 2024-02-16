"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Button as NextButton } from "@nextui-org/react";

export const Button = () => {
  return (
    <NextUIProvider>
      <NextButton>Button</NextButton>
    </NextUIProvider>
  );
};
