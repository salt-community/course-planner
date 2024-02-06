type Props = {
  children: React.ReactNode;
};

export const Main = ({ children }: Props) => {
  return (
    <main className="min-h-screen container m-auto grid gap-1 grid-cols-4 md:grid-cols-12">
      {children}
    </main>
  );
};
