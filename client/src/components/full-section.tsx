import { SectionTitle } from ".";

type Props = {
  title: string;
  children: React.ReactNode;
};

export const FullSection = ({ title, children }: Props) => {
  return (
    <section className="col-span-full">
      <SectionTitle>{title}</SectionTitle>
      {children}
    </section>
  );
};
