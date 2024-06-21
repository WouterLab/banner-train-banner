import { Wrapper } from "./styled";
import { ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
};

export function ListItem({ children }: ListItemProps) {
  return <Wrapper>{children}</Wrapper>;
}
