"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Hint from "./Hint";
import { Sun, Moon } from "lucide-react";

type ThemeTogglerProps = {
  className?: string;
  hintSide?: "top" | "bottom" | "left" | "right";
  hintAlign?: "start" | "center" | "end";
};

const ThemeToggler = ({
  className,
  hintSide = "bottom",
  hintAlign = "center",
}: ThemeTogglerProps) => {
  // Access the theme and setTheme function from the useTheme hook
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Hint
      delayDuration={100}
      asChild
      side={hintSide}
      align={hintAlign}
      trigger={
        <Button
          onClick={toggleTheme}
          variant={"ghost"}
          size={"icon"}
          className={className}
          aria-label={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
        >
          {theme === "dark" ? (
            <Moon className="h-4 w-4" />
          ) : (
            <Sun className="h-4 w-4" />
          )}
        </Button>
      }
      content={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    />
  );
};

export default ThemeToggler;
