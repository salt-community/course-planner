type Props = {
  children: React.ReactNode;
};

export const SectionTitle = ({ children }: Props) => {
  return <h2 className="text-xl">{children}</h2>;
};
