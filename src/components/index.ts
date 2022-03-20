import { PropsWithChildren } from "react";

export type BaseProps = PropsWithChildren<{ className?: string }>;

export function appendClassName(props: BaseProps, className: string): string {
  return `${props.className || ""} ${className}`;
}
