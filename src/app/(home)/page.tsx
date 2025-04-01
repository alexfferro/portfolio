import { ProjectsCard } from "@/components/project-card";
import { ServicesCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import { SERVICES, WORKS } from "@/lib/constants";
import Image from "next/image";

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
    </div>
  );
}
