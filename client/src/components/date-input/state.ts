import { useEffect, useState } from "react";

export const useDate = () => {
  const [date, setDate] = useState<Date | undefined>();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return { date, setDate, hydrated };
};
