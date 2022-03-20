import { PropsWithChildren } from "react";

export function List({ children }: PropsWithChildren<unknown>) {
  return <ol className="flex flex-col gap-2">{children}</ol>;
}

export function ListItem({
  children,
}: PropsWithChildren<unknown>) {
  return (
    <li className="bg-white w-full rounded-xl py-2 px-6 flex flex-row justify-between">
      {children}
    </li>
  );
}
