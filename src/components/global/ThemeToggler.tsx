"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import Hint from "./Hint";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

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

  // State to check if the component is mounted to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);

  // After mounting, set the mounted state to true
  useEffect(() => setMounted(true), []);

  // If the component is not mounted, return null
  if (!mounted) return null;

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
