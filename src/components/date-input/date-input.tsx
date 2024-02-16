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
      <input type="date" value={date?.toString()} onChange={e => setDate(new Date(e.target.value))} />
    )
  );
};
