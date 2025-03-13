"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~/components/ui/button";

type NavLinkProps = {
  label: string;
  path: string;
  className?: string;
};

const NavLink = ({ label, path, className }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <li
      className={`list-none ${className}`}
    >
      <Button variant={"link"} asChild className="text-foreground w-full px-0 sm:px-2 font-medium">
        <Link
          href={path}
          className={`${isActive ? "decoration-primary font-semibold text-primary" : ""} underline-offset-4 hover:decoration-primary hover:sm:underline text-sm`}
        >
          <span className="block w-full text-left">{label}</span>
        </Link>
      </Button>
    </li>
  );
};

export default NavLink;
