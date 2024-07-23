"use client";

import "@/styles/navbar.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils/tailwind";

const links = [
  { href: "/", label: "play" },
  { href: "/settings", label: "settings" },
];

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => path === pathname;

  return (
    <nav>
      <ul className="links">
        {links.map(({ href, label }) => {
          return (
            <li key={href} className="links__items">
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
