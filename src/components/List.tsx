import { PropsWithChildren } from "react";
import { Card } from "./Card";

export function List({ children }: PropsWithChildren<unknown>) {
  return <ol className="flex flex-col gap-2">{children}</ol>;
}

export type ListItemProps = PropsWithChildren<{
  subtext?: string | JSX.Element;
  selected?: boolean;
}>;

export function ListItem({ children, subtext, selected }: ListItemProps) {
  return (
    <div>
      <Card className={`${selected ? "bg-turqoise-10" : "bg-white"}`}>
        <div className="h-full py-2 px-6 flex flex-row justify-between place-items-center">
          <span
            className={`text-lg font-semibold flex flex-row place-items-center gap-2 ${
              selected ? "text-turqoise-70" : ""
            }`}>
            {children}
          </span>
          <span>{subtext}</span>
        </div>
      </Card>
    </div>
  );
}
