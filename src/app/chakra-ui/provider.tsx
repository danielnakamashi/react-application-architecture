"use client";

import { ChakraProvider, GlobalStyle } from "@chakra-ui/react";
import { theme } from "./theme";

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ChakraProvider>
  );
}
