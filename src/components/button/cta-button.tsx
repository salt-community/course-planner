"use client";

import { Button as NextButton } from "@nextui-org/react";

type Props = {
  onClick: () => void;
  children: React.ReactNode;
};

export const CtaButton = ({ onClick, children }: Props) => {
  return (
    <NextButton color="primary" onClick={onClick}>
      {children}
    </NextButton>
  );
};
