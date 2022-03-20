import { PropsWithChildren } from "react";
import { appendClassName, BaseProps } from ".";

export function Card({
  children,
  style,
  ...props
}: BaseProps & { style?: Record<string, unknown> }) {
  return (
    <div
      className={appendClassName(props, "bg-white w-full rounded-xl")}
      style={style}>
      {children}
    </div>
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
    <div className="mb-6">
      <h1 className="text-xl font-bold leading-snug text-turqoise-70">
        {title}
      </h1>
      <p className="text-md leading-none">{subtitle}</p>
    </div>
  );
}
