import { ProjectsCard } from "@/components/project-card";
import { ServicesCard } from "@/components/service-card";
import { TestimonialsCards } from "@/components/testimonials-card";
import { Button } from "@/components/ui/button";
import { SERVICES, TESTIMONIALS, WORKS } from "@/lib/constants";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Landing */}
      <div className="flex flex-col items-center justify-center gap-5 lg:flex-row-reverse">
        <Image
          alt="a man with a joystick, selecting a game character"
          priority
          height={500}
          width={500}
          src={"/home.svg"}
        />
        <div className="space-y-5">
          <h1 className="text-3xl font-extrabold md:text-6xl">
            Hey there! I’m Omar. A UX{" "}
            <span className="text-gray-400">Researcher</span> &{" "}
            <span className="text-gray-400">Product Designer</span>
          </h1>
          <p className="text-[18px] font-normal sm:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
            sed interdum vitae est arcu fringilla posuere. Suspendisse diam
            sagittis quam elementum ac.
          </p>
          <Button
            size="lg"
            className="w-full rounded-full cursor-pointer mt-7 hover:brightness-75 sm:mt-20 sm:w-xs"
          >
            Discover my work
          </Button>
        </div>
      </div>
      {/* Services */}
      <div className="flex flex-col gap-9">
        <h2 className="text-center text-2xl font-medium">Services</h2>
        <div className="flex flex-col gap-9 justify-center items-center sm:flex-row sm:flex-wrap">
          {SERVICES.map((services) => (
            <ServicesCard
              key={services.title}
              title={services.title}
              description={services.description}
            />
          ))}
        </div>
      </div>
      {/* Works & Projects */}
      <div className="flex flex-col gap-9">
        <h2 className="text-center text-2xl font-medium">Works & Projects</h2>
        <div className="flex flex-col gap-9 justify-center items-center sm:flex-row sm:flex-wrap">
          {WORKS.map((work) => (
            <ProjectsCard
              key={work.id}
              title={work.title}
              description={work.description}
              url={work.url}
              thumb_url={work.thumb_url}
            />
          ))}
        </div>
        <Button
          size="lg"
          variant="secondary"
          className="rounded-full sm:max-w-xs mx-auto cursor-pointer"
        >
          See all projects
        </Button>
      </div>
      {/* Testimonials */}
      <div className="flex flex-col gap-9">
        <h2 className="text-center text-2xl font-medium">Testimonials</h2>
        <div className="flex flex-col gap-9 justify-center items-center sm:flex-row sm:flex-wrap">
          {TESTIMONIALS.map(({ id, avatar_url, name, origin, post }) => (
            <TestimonialsCards
              key={id}
              avatar_url={avatar_url}
              name={name}
              origin={origin}
              post={post}
            />
          ))}
        </div>
      </div>
      {/* CV */}
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-12 mt-20 p-4">
        <div className="space-y-5">
          <h2 className="font-bold text-3xl md:text-6xl max-w-2xl">
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
        <div className="flex flex-col gap-3 items-center justify-center space-y-6 w-full">
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
      </div>
    </div>
  );
}
