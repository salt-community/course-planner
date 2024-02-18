import { DateState } from ".";

type Props = {
  dateState: DateState;
};

export const DateInput = ({ dateState }: Props) => {
  const { date, setDate, hydrated } = dateState;
  return (
    hydrated && (
      <input
        type="date"
        value={date?.toString()}
        onChange={(e) => setDate(new Date(e.target.value))}
      />
    )
  );
};
