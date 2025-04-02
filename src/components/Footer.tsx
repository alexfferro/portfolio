"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Alexandria } from "@/lib/constants";

const LINKS = [
  { href: "/", label: "HOME" },
  { href: "/projects", label: "PROJECTS" },
  { href: "/contacts", label: "CONTACTS" },
  { href: "/about", label: "ABOUT" },
];

export function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <div className="text-xl mb-10 md:mb-0">
      <div className="flex flex-col gap-12 px-4">
        <div className="space-y-12 md:grid md:grid-cols-2 md:items-start md:justify-between">
          <div className="flex flex-col gap-12">
            <div className="max-w-3xs">
              <Image
                src={"/logo_dark.svg"}
                height={300}
                width={300}
                alt="Alex Ferro."
                className="w-full h-auto sm:p-2 md:p-0"
                priority
              />
              <h3 className="font-bold text-2xl">Omar Checo</h3>
              <p>UX Researcher</p>
            </div>
            <div>
              <p>Email me at</p>
              <a
                className="font-bold text-xl"
                href="mailto:contact@website.com"
              >
                contact@website.com
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div className="space-y-5">
              <h3 className="text-3xl font-extrabold">Lets Talk!</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pulvinar sed interdum vitae est arcu fringilla posuere.
                Suspendisse diam sagittis quam elementum ac.
              </p>
            </div>
            <div className="flex items-center gap-12 justify-center md:justify-normal">
              <Link href="#">
                <Twitter />
              </Link>
              <Link href="#">
                <Instagram />
              </Link>
              <Link href="#">
                <Facebook />
              </Link>
            </div>
          </div>
        </div>
        <hr className="hidden md:block" />
        <div className="flex items-center justify-between">
          {/* nav */}
          <nav className="hidden md:flex">
            {LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  Alexandria.className,
                  "relative inline-flex items-center px-2 py-2 transition-colors text-center",
                  isActive(href)
                    ? "after:content-[''] after:pointer-events-none after:absolute after:left-[-2.5rem] after:top-1/2 after:-translate-y-1/12 after:w-10 after:h-10 after:bg-[url('/cursor.svg')] after:bg-contain after:bg-no-repeat after:opacity-100 after:transition-opacity after:duration-300 after:animate-bounce after:z-10"
                    : "text-gray-400 hover:text-gray-300 after:content-none"
                )}
              >
                {label.toUpperCase()}
              </Link>
            ))}
          </nav>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
}
