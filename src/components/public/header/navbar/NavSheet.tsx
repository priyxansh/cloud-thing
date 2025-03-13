import { Menu, X } from "lucide-react";
import { Button } from "~/components/ui/button";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";
import { NAV_ROUTES } from "~/constants/nav-routes";
import NavLink from "./NavLink";
import SiteLogo from "~/components/global/SiteLogo";
import ButtonContainer from "~/components/global/ButtonContainer";
import ThemeToggler from "~/components/global/ThemeToggler";
import AnimatedTagline from "./AnimatedTagline";
const NavSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="ml-auto sm:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-0 p-0 sm:hidden">
        <VisuallyHidden>
          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </VisuallyHidden>
        <div className="flex w-full items-center justify-between gap-2 border-b px-4 py-3">
          <SiteLogo />
          <SheetClose>
            <X size={16} />
          </SheetClose>
        </div>
        <div className="flex w-full flex-grow flex-col gap-4 px-4 pb-3 pt-8">
          <ul className="flex w-full flex-col">
            {NAV_ROUTES.map((route) => {
              return (
                <NavLink
                  key={route.label}
                  label={route.label}
                  path={route.path}
                  className="w-full"
                />
              );
            })}
          </ul>
          <div className="h-[1px] w-full bg-muted"></div>
          <div className="cta-container mt-2 w-full">
            <AnimatedTagline />
            <ButtonContainer className="mt-4 flex-col gap-2">
              <Button variant="default" className="w-4/5" size={"sm"}>
                Get Started
              </Button>
              <span className="my-0.5 text-[0.625rem] font-light text-foreground/30">
                OR
              </span>
              <Button variant="secondary" className="w-4/5" size={"sm"}>
                Login
              </Button>
            </ButtonContainer>
          </div>
          <div className="ml-auto mt-auto">
            <ThemeToggler />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default NavSheet;
