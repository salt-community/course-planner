import { RadioGroup as NextUIRadioGroup, Radio } from "@nextui-org/react";

type Props = {
  label: string;
  choices: { [key: string]: string };
};

export const RadioGroup = ({ label, choices }: Props) => {
  return (
    <NextUIRadioGroup label={label}>
      {Object.entries(choices).map(([label, value]) => (
        <Radio key={value} value={value}>
          {label}
        </Radio>
      ))}
    </NextUIRadioGroup>
  );
};
