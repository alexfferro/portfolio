"use client";

import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useRef } from "react";

const Alexandria = localFont({
  src: "../fonts/alexandria.ttf",
  display: "swap",
  style: "regular",
  variable: "--alexandria",
});
const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contacts", label: "CONTACTS" },
  { href: "/about", label: "ABOUT" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="flex flex-col gap-6 items-center">
      <nav
        className={`${Alexandria.className} flex gap-6 text-xs md:gap-10 md:text-sm lg:gap-14 lg:text-[1rem]`}
      >
        {LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={clsx(
              "relative inline-flex items-center px-2 py-2 transition-colors text-center",
              isActive(href)
                ? "after:content-[''] after:pointer-events-none after:absolute after:left-[-2.5rem] after:top-1/2 after:-translate-y-1/12 after:w-10 after:h-10 after:bg-[url('/cursor.svg')] after:bg-contain after:bg-no-repeat after:opacity-100 after:transition-opacity after:duration-300 after:animate-bounce after:z-10"
                : "text-gray-400 hover:text-gray-300 after:content-none"
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Image
        src={"/logo_dark.svg"}
        height={300}
        width={300}
        alt="Alex Ferro."
        priority
      />
    </div>
  );
}
