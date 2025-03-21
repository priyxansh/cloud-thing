"use client";

import { ThemeProvider } from "./ThemeProvider";

type RootProviderProps = {
  children: React.ReactNode;
};

const RootProvider = ({ children }: RootProviderProps) => {
  return (
    <>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default RootProvider;
