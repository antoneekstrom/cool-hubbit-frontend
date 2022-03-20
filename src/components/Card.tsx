import { PropsWithChildren } from "react";

export function Card({ children }: PropsWithChildren<unknown>) {
  return (
    <div className="bg-white w-full min-h-[3rem] rounded-xl">{children}</div>
  );
}

export function CardInnerPadding({ children }: PropsWithChildren<unknown>) {
  return <div className="p-6">{children}</div>;
}

export type CardHeaderProps = {
  title: string;
  subtitle: string | JSX.Element;
};

export function CardHeader({ title, subtitle }: CardHeaderProps) {
  return (
    <div className="mb-4">
      <h1 className="text-xl font-bold leading-snug">{title}</h1>
      <p className="text-md leading-none">{subtitle}</p>
    </div>
  );
}
