"use client";

import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  const activeLink = LINKS.find(({ href }) => isActive(href));

  function HandleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="flex flex-col gap-6 items-center sm:flex-row-reverse sm:justify-between">
      {/* Header Mobile */}
      <nav
        className={clsx(
          "w-full p-2 flex flex-col sm:hidden space-y-6 items-center justify-center  bg-neutral-900",
          isMenuOpen ? "relative" : "fixed top-0 z-1 "
        )}
      >
        <Sheet onOpenChange={setIsMenuOpen} open={isMenuOpen}>
          <div className="flex items-center w-full justify-between">
            <SheetTrigger asChild>
              <div
                className="cursor-pointer hover:brightness-90"
                onClick={HandleToggleMenu}
              >
                <Menu size={24} />
              </div>
            </SheetTrigger>
            {activeLink && (
              <Link
                href={activeLink.href}
                className={clsx(
                  "relative inline-flex items-center px-2 py-2 transition-colors text-center after:content-[''] after:pointer-events-none after:absolute after:left-[-2.5rem] after:top-1/2 after:-translate-y-1/12 after:w-10 after:h-10 after:bg-[url('/cursor.svg')] after:bg-contain after:bg-no-repeat after:opacity-100 after:transition-opacity after:duration-300 after:animate-bounce after:z-10"
                )}
              >
                {activeLink.label}
              </Link>
            )}
          </div>

          <SheetContent
            className={clsx(
              Alexandria.className,
              "flex flex-col items-center justify-center"
            )}
            side="top"
          >
            <SheetHeader>
              <SheetTitle>Are you absolutely sure?</SheetTitle>
            </SheetHeader>
            {isMenuOpen &&
              LINKS.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={clsx(
                    "relative inline-flex items-center px-2 py-2 transition-colors text-center",
                    isActive(href)
                      ? ""
                      : "text-gray-400 hover:text-gray-300 after:content-none"
                  )}
                >
                  {label}
                </Link>
              ))}
          </SheetContent>
        </Sheet>
      </nav>
      {/* Header Desktop */}
      <nav
        className={`${Alexandria.className} hidden sm:flex gap-6 text-xs md:gap-10 md:text-sm lg:gap-14 lg:text-[1rem]`}
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
      <Link
        href="/"
        className={clsx("sm:w-32 md:w-48", isMenuOpen ? "" : "mt-16 sm:mt-0")}
      >
        <Image
          src={"/logo_dark.svg"}
          height={300}
          width={300}
          alt="Alex Ferro."
          className="w-full h-auto p-4 sm:p-2 md:p-0"
          priority
        />
      </Link>
    </div>
  );
}
