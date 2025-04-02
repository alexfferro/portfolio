import { Facebook, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="space-y-36 text-xl">
      <div className="flex flex-col items-center justify-center space-y-12 mt-20 p-4">
        <div className="space-y-5">
          <h2 className="font-bold text-3xl">
            Just to remind you, I’m Omar. A{" "}
            <span className="text-muted-foreground">UX Researcher</span> &{" "}
            <span className="text-muted-foreground">Product Designer</span> from
            Manhattan, New York.
          </h2>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            sed interdum vitae est arcu fringilla posuere. Suspendisse diam
            sagittis quam elementum ac.
          </p>
          <p className="text-lg text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            sed interdum vitae est arcu fringilla posuere. Suspendisse diam
            sagittis quam elementum ac.
          </p>
        </div>
        <Image
          alt="a man with a joystick, selecting a game character"
          priority
          height={500}
          width={500}
          src={"/home.svg"}
        />
        <div className="flex items-center gap-12">
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
        <Button
          variant="outline"
          size="lg"
          className="rounded-full font-semibold text-lg"
        >
          Download CV
        </Button>
      </div>
      {/* ---------- */}
      <div className="flex flex-col gap-12 px-4 py-10">
        <div>
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
          <a className="font-bold text-xl" href="mailto:contact@website.com">
            contact@website.com
          </a>
        </div>
        <div className="space-y-5 ">
          <h3 className="text-3xl font-extrabold">Lets Talk!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            sed interdum vitae est arcu fringilla posuere. Suspendisse diam
            sagittis quam elementum ac.
          </p>
        </div>
        <div className="flex items-center gap-12 justify-center">
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
        <p className="text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
}
