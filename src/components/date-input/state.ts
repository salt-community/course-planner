import { useEffect, useState } from "react";

export const useDate = () => {
  const [date, setDate] = useState<Date>(new Date(0));
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return { date, setDate, hydrated };
};

export type DateState = ReturnType<typeof useDate>;
