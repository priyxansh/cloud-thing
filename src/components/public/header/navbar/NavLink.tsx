"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  label: string;
  path: string;
  className?: string;
};

const NavLink = ({ label, path, className }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`${className} ${isActive ? "font-medium underline" : ""} text-sm underline-offset-4 hover:underline hover:decoration-primary`}
    >
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;
