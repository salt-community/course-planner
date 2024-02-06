import { Calendar } from "../ui";

type Props = {
  dateState: {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
    hydrated: boolean;
  };
};

export const DateInput = ({ dateState }: Props) => {
  const { date, setDate, hydrated } = dateState;
  return (
    hydrated && (
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border w-[280px]"
      />
    )
  );
};
