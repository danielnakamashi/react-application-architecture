import { Button as ChakraButton } from "@chakra-ui/react";
import * as React from "react";

const variants = {
  solid: {
    variant: "solid",
    bg: "primary",
    color: "primaryAccent",
    _hover: {
      opacity: "0.9",
    },
  },
  outline: {
    variant: "outline",
    bg: "white",
    color: "primary",
  },
};

export type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  variant?: keyof typeof variants;
  isLoading?: boolean;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: JSX.Element;
};

export function Button({
  variant = "solid",
  type = "button",
  children,
  icon,
  ...props
}: ButtonProps) {
  return (
    <ChakraButton {...props} {...variants[variant]} type={type} leftIcon={icon}>
      {children}
    </ChakraButton>
  );
}
