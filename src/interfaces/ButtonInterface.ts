import { ComponentPropsWithoutRef } from "react";

export default interface ButtonI extends ComponentPropsWithoutRef<"button"> {
  children: string | JSX.Element | JSX.Element[]
}